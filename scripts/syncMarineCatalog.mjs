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
    products.push({ name, sourceImage, sourceUrl, sku, category: classify(name), sourcePrice, price: money10Below(sourcePrice), stockObserved: Number.isFinite(stock) ? stock : null })
  }
  return products
}
async function fetchPage(page) {
  const url = page === 1 ? SOURCE : `${SOURCE}?page=${page}`
  const response = await fetch(url, { headers: { 'user-agent': 'AgroNexusCatalogSync/3.0', accept: 'text/html,application/xhtml+xml' } })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return response.text()
}

function normalizedCommonName(name='') {
  return String(name)
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[+*]/g, ' ')
    .replace(/\b(a boca|muda|polipos?|pequeno|pequena|grande|adulto|adulta|selvagem|criado|criada|biomarine|ultra|premium)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function representativeQuery(product) {
  const n = product.name.toLowerCase()
  if (/zoanth/.test(n)) return 'Zoanthus coral reef'
  if (/palyth/.test(n)) return 'Palythoa coral reef'
  if (/trumpet|candy cane|caulastrea/.test(n)) return 'Caulastrea coral'
  if (/hammer|torch|frogspawn|euphyl/.test(n)) return 'Euphyllia coral'
  if (/acan|micromussa/.test(n)) return 'Micromussa coral'
  if (/blastom/.test(n)) return 'Blastomussa coral'
  if (/favites|favia/.test(n)) return 'Favites coral'
  if (/chalice/.test(n)) return 'Echinophyllia chalice coral'
  if (/leptast/.test(n)) return 'Leptastrea coral'
  if (/scolym/.test(n)) return 'Scolymia coral'
  if (/lobophyll/.test(n)) return 'Lobophyllia coral'
  if (/montip/.test(n)) return 'Montipora coral'
  if (/acrop/.test(n)) return 'Acropora coral'
  if (/styloph/.test(n)) return 'Stylophora coral'
  if (/pocill/.test(n)) return 'Pocillopora coral'
  if (/seriatop|birdsnest/.test(n)) return 'Seriatopora coral'
  if (/cloves|clavularia/.test(n)) return 'Clavularia coral'
  if (/xenia/.test(n)) return 'Xenia coral'
  if (/organ pipe|tubipora/.test(n)) return 'Tubipora musica coral'
  if (/leather|sarcophy/.test(n)) return 'Sarcophyton leather coral'
  if (/sinularia/.test(n)) return 'Sinularia coral'
  if (/ricordea/.test(n)) return 'Ricordea coral'
  if (/mush|mursh|discosoma/.test(n)) return 'Discosoma mushroom coral'
  if (/anem/.test(n)) return 'sea anemone reef'
  if (/tridacna/.test(n)) return 'Tridacna clam reef'
  if (/starfish|estrela/.test(n)) return 'sea star reef'
  if (/brittle|serpent/.test(n)) return 'brittle star reef'
  if (/urchin|ouriço/.test(n)) return 'sea urchin reef'
  if (/cucumber|pepino/.test(n)) return 'sea cucumber reef'
  if (/lobster/.test(n)) return 'reef lobster marine'
  if (/shrimp|camar/.test(n)) return 'reef shrimp marine'
  if (product.category === 'Peixes') {
    const common = normalizedCommonName(product.name)
      .replace(/\b(green|red|blue|gold|purple|orange|pink|brown|yellow|white|black)\b/gi, m => m)
      .trim()
    return `${common} marine fish`
  }
  if (product.category === 'LPS') return 'LPS stony coral reef'
  if (product.category === 'SPS') return 'SPS stony coral reef'
  if (product.category === 'Soft') return 'soft coral reef'
  if (product.category === 'Invertebrados') return 'marine reef invertebrate'
  return 'coral reef marine life'
}

const mediaCache = new Map()
async function commonsRepresentative(query) {
  if (mediaCache.has(query)) return mediaCache.get(query)
  const promise = (async()=>{
    const url = new URL('https://commons.wikimedia.org/w/api.php')
    url.search = new URLSearchParams({ action:'query', generator:'search', gsrnamespace:'6', gsrsearch:query, gsrlimit:'5', prop:'imageinfo', iiprop:'url|mime|extmetadata', iiurlwidth:'900', format:'json', origin:'*' })
    try {
      const response = await fetch(url, { headers:{ 'user-agent':'AgroNexusCatalogSync/3.0 (agronexus.life)' } })
      if (!response.ok) return null
      const data = await response.json()
      const pages = Object.values(data?.query?.pages || {})
      for (const page of pages) {
        const info = page?.imageinfo?.[0]
        const image = info?.thumburl || info?.url
        const mime = String(info?.mime || '')
        if (!image || !mime.startsWith('image/')) continue
        if (/logo|map|diagram|illustration|drawing|stamp|flag|poster/i.test(String(page?.title || ''))) continue
        const artist = String(info?.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim()
        const license = String(info?.extmetadata?.LicenseShortName?.value || '').replace(/<[^>]+>/g, '').trim()
        return { cleanImage:image, imageCredit:[artist, license].filter(Boolean).join(' · ') || 'Wikimedia Commons', imageStrategy:'representative-v3', imageQuery:query }
      }
    } catch {}
    return null
  })()
  mediaCache.set(query,promise)
  return promise
}

async function enrichCleanMedia(products) {
  const queryMap = new Map()
  for (const product of products) queryMap.set(product.id, representativeQuery(product))
  const uniqueQueries = [...new Set(queryMap.values())]
  const queryResults = new Map()
  const BATCH = 5
  for (let i=0;i<uniqueQueries.length;i+=BATCH) {
    const chunk = uniqueQueries.slice(i,i+BATCH)
    const resolved = await Promise.all(chunk.map(async q => [q, await commonsRepresentative(q)]))
    for (const [q,result] of resolved) queryResults.set(q,result)
  }
  return products.map(product => ({ ...product, ...(queryResults.get(queryMap.get(product.id)) || {}), imageQuery: queryMap.get(product.id) }))
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
  let products = [...map.values()].map((item,index)=>({ id:`agx-marine-${String(index+1).padStart(4,'0')}`, adNumber:`198553${String(index+3504).padStart(4,'0')}`, ...item }))
  if (!products.length) throw new Error('No marine products found')
  products = await enrichCleanMedia(products)
  const withClean = products.filter(x=>x.cleanImage && x.imageStrategy==='representative-v3').length
  const payload = `/** Auto-generated at build time. Supplier artwork is retained only as sourceImage and is never public media. */\nexport const MARINE_CATALOG = ${JSON.stringify(products,null,2)}\nexport const MARINE_CATALOG_META = ${JSON.stringify({ sourceCount:products.length, cleanImageCount:withClean, discount:DISCOUNT, mediaStrategy:'representative-v3', syncedAt:new Date().toISOString() },null,2)}\nexport default MARINE_CATALOG\n`
  await fs.writeFile(OUT,payload,'utf8')
  console.log(`[marine-sync] ${products.length} products; ${withClean} deterministic clean media assignments`)
}
main().catch(error=>console.warn(`[marine-sync] keeping checked-in fallback: ${error.message}`))
