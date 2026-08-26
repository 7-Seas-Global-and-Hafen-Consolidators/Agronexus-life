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
  if (/hammer|trumpet|torch|frogspawn|candy|acan|euphyl|blastom|fav|chalice|leptast|lobo|scolym|micromussa/.test(n)) return 'LPS'
  if (/pocill|montip|acrop|styloph|seriatop|birdsnest/.test(n)) return 'SPS'
  if (/cloves|kenia|mush|mursh|carpet|organ pipe|xenia|leather|sarcophy|sinularia|ricordea|discosoma/.test(n)) return 'Soft'
  if (/anem/.test(n)) return 'Anêmonas'
  if (/shrimp|camar|carang|snail|estrela|starfish|urchin|ouriço|lobster|cucumber|pepino|tridacna|brittle|serpent/.test(n)) return 'Invertebrados'
  if (/fish|peixe|tang|goby|wrasse|clown|palhaço|angel|anthias|blenny|cardinal|dartfish|jawfish|pipefish|rabbitfish|butterfly|gramma|chromis|hawkfish|trigger/.test(n)) return 'Peixes'
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
    products.push({
      name,
      sourceImage,
      sourceUrl,
      sku,
      category: classify(name),
      sourcePrice,
      price: money10Below(sourcePrice),
      stockObserved: Number.isFinite(stock) ? stock : null,
      imageStrategy: sourceImage ? 'exact-source-product' : 'missing'
    })
  }
  return products
}
async function fetchPage(page) {
  const url = page === 1 ? SOURCE : `${SOURCE}?page=${page}`
  const response = await fetch(url, { headers: { 'user-agent': 'AgroNexusCatalogSync/4.0', accept: 'text/html,application/xhtml+xml' } })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return response.text()
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
  const products = [...map.values()].map((item,index)=>({ id:`agx-marine-${String(index+1).padStart(4,'0')}`, adNumber:`198553${String(index+3504).padStart(4,'0')}`, ...item }))
  if (!products.length) throw new Error('No marine products found')
  const withImage = products.filter(x=>x.sourceImage).length
  const payload = `/** Auto-generated at build time. Exact product imagery from the source catalog is preserved item-by-item; the public UI masks external branding and overlays AgroNexus™ identity. */\nexport const MARINE_CATALOG = ${JSON.stringify(products,null,2)}\nexport const MARINE_CATALOG_META = ${JSON.stringify({ sourceCount:products.length, exactImageCount:withImage, discount:DISCOUNT, mediaStrategy:'exact-source-product', syncedAt:new Date().toISOString() },null,2)}\nexport default MARINE_CATALOG\n`
  await fs.writeFile(OUT,payload,'utf8')
  console.log(`[marine-sync] ${products.length} products; ${withImage} exact product images mapped one-to-one`)
}
main().catch(error=>console.warn(`[marine-sync] keeping checked-in fallback: ${error.message}`))
