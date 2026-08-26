import fs from 'node:fs/promises'

const SOURCE = 'https://www.reefaquarios.com.br/produtos/'
const OUT = new URL('../src/data/marineCatalog.generated.js', import.meta.url)
const DISCOUNT = 0.10

function clean(value = '') {
  return String(value).replace(/\\\//g, '/').replace(/\\\./g, '.').replace(/&amp;/g, '&').replace(/&#039;/g, "'").replace(/&quot;/g, '"').trim()
}
function numberFromBRL(value) {
  if (!value) return null
  const parsed = Number(String(value).replace(/\./g, '').replace(',', '.').replace(/[^0-9.]/g, ''))
  return Number.isFinite(parsed) ? parsed : null
}
function money10Below(value) { return Math.round(value * (1 - DISCOUNT) * 100) / 100 }
function classify(name = '') {
  const n = name.toLowerCase()
  if (/zoanth|palyth/.test(n)) return 'Zoanthus & Palythoa'
  if (/hammer|trumpet|torch|frogspawn|candy|acan|euphyl/.test(n)) return 'LPS'
  if (/pocill|montip|acrop|styloph|seriatop/.test(n)) return 'SPS'
  if (/cloves|kenia|mush|mursh|carpet|organ pipe|xenia|leather/.test(n)) return 'Soft'
  if (/anem/.test(n)) return 'Anêmonas'
  if (/shrimp|camar|carang|snail|estrela|starfish|urchin|ouriço|lobster|cucumber|inverte/.test(n)) return 'Invertebrados'
  if (/fish|peixe|tang|goby|wrasse|clown|palhaço|angel|anthias|blenny|cardinal/.test(n)) return 'Peixes'
  return 'Marinho'
}
function parseProducts(html) {
  const starts = [...html.matchAll(/"@type"\s*:\s*"Product"/g)]
  const products = []
  for (const start of starts) {
    const end = html.indexOf('</script>', start.index)
    const block = html.slice(start.index, end > -1 ? end : start.index + 6000)
    const get = (regex) => clean(block.match(regex)?.[1] || '')
    const name = get(/"name"\s*:\s*"([^"]+)"/)
    const sourceImage = get(/"image"\s*:\s*"([^"]+)"/)
    const sourceUrl = get(/"url"\s*:\s*"([^"]+)"/)
    const sku = get(/"sku"\s*:\s*"([^"]*)"/)
    const description = get(/"description"\s*:\s*"([^"]*)"/)
    const offerPrice = Number(get(/"price"\s*:\s*"([0-9.]+)"/))
    const descriptionPrice = numberFromBRL(description.match(/por\s+R\$\s*([0-9.,]+)/i)?.[1])
    const sourcePrice = descriptionPrice || (Number.isFinite(offerPrice) ? offerPrice : null)
    const stock = Number(get(/"inventoryLevel"[\s\S]*?"value"\s*:\s*"([0-9]+)"/))
    if (!name || !sourceUrl || !sourcePrice) continue
    products.push({ name, sourceImage, sourceUrl, sku, category: classify(name), sourcePrice, price: money10Below(sourcePrice), stockObserved: Number.isFinite(stock) ? stock : null })
  }
  return products
}
async function fetchPage(page) {
  const url = page === 1 ? SOURCE : `${SOURCE}?page=${page}`
  const response = await fetch(url, { headers: { 'user-agent': 'AgroNexusCatalogSync/2.0', accept: 'text/html,application/xhtml+xml' } })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return response.text()
}
function commonsQuery(name = '') {
  return String(name)
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[+*]/g, ' ')
    .replace(/\b(a boca|muda|polipos?|pequeno|pequena|grande|adulto|adulta|biomarine|green|red|blue|gold|purple|orange|pink|brown|lemon)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
async function commonsImage(name) {
  const q = commonsQuery(name)
  if (!q || q.length < 3) return null
  const url = new URL('https://commons.wikimedia.org/w/api.php')
  url.search = new URLSearchParams({ action:'query', generator:'search', gsrnamespace:'6', gsrsearch:q, gsrlimit:'3', prop:'imageinfo', iiprop:'url|extmetadata', iiurlwidth:'900', format:'json', origin:'*' })
  try {
    const response = await fetch(url, { headers:{ 'user-agent':'AgroNexusCatalogSync/2.0 (agronexus.life)' } })
    if (!response.ok) return null
    const data = await response.json()
    const pages = Object.values(data?.query?.pages || {})
    for (const page of pages) {
      const info = page?.imageinfo?.[0]
      const image = info?.thumburl || info?.url
      if (!image) continue
      const artist = String(info?.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim()
      const license = String(info?.extmetadata?.LicenseShortName?.value || '').replace(/<[^>]+>/g, '').trim()
      return { cleanImage:image, imageCredit:[artist, license].filter(Boolean).join(' · ') || 'Wikimedia Commons' }
    }
  } catch {}
  return null
}
async function enrichCleanMedia(products) {
  const out = []
  const BATCH = 6
  for (let i = 0; i < products.length; i += BATCH) {
    const chunk = products.slice(i, i + BATCH)
    const enriched = await Promise.all(chunk.map(async product => ({ ...product, ...(await commonsImage(product.name) || {}) })))
    out.push(...enriched)
  }
  return out
}
async function main() {
  const map = new Map(); let emptyPages = 0
  for (let page = 1; page <= 40; page += 1) {
    try {
      const batch = parseProducts(await fetchPage(page)); let added = 0
      for (const product of batch) if (!map.has(product.sourceUrl)) { map.set(product.sourceUrl, product); added += 1 }
      emptyPages = added ? 0 : emptyPages + 1
      if (emptyPages >= 2) break
    } catch (error) {
      console.warn(`[marine-sync] page ${page}: ${error.message}`)
      if (page === 1) throw error
      break
    }
  }
  let products = [...map.values()].map((item, index) => ({ id:`agx-marine-${String(index + 1).padStart(4,'0')}`, adNumber:`198553${String(index + 3504).padStart(4,'0')}`, ...item }))
  if (!products.length) throw new Error('No marine products found')
  products = await enrichCleanMedia(products)
  const withClean = products.filter(x => x.cleanImage).length
  const payload = `/** Auto-generated at build time. Public UI uses cleanImage, never sourceImage. */\nexport const MARINE_CATALOG = ${JSON.stringify(products, null, 2)}\nexport const MARINE_CATALOG_META = ${JSON.stringify({ sourceCount:products.length, cleanImageCount:withClean, discount:DISCOUNT, syncedAt:new Date().toISOString() }, null, 2)}\nexport default MARINE_CATALOG\n`
  await fs.writeFile(OUT, payload, 'utf8')
  console.log(`[marine-sync] ${products.length} products; ${withClean} clean licensed images resolved`)
}
main().catch(error => console.warn(`[marine-sync] keeping checked-in fallback: ${error.message}`))
