import fs from 'node:fs/promises'

const SOURCE = 'https://www.reefaquarios.com.br/produtos/'
const OUT = new URL('../src/data/marineCatalog.generated.js', import.meta.url)
const DISCOUNT = 0.10

function clean(value = '') {
  return String(value)
    .replace(/\\\//g, '/')
    .replace(/\\\./g, '.')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .trim()
}

function numberFromBRL(value) {
  if (!value) return null
  const normalized = String(value)
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^0-9.]/g, '')
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

function money10Below(value) {
  return Math.round(value * (1 - DISCOUNT) * 100) / 100
}

function classify(name = '') {
  const n = name.toLowerCase()
  if (/zoanth|palyth/.test(n)) return 'Zoanthus & Palythoa'
  if (/hammer|trumpet|torch|frogspawn|candy|acan|euphyl/.test(n)) return 'LPS'
  if (/pocill|montip|acrop|styloph|seriatop/.test(n)) return 'SPS'
  if (/cloves|kenia|mush|mursh|carpet|organ pipe|xenia|leather/.test(n)) return 'Soft'
  if (/anem/.test(n)) return 'Anêmonas'
  if (/shrimp|camar|carang|snail|estrela|ouriço|inverte/.test(n)) return 'Invertebrados'
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
    const image = get(/"image"\s*:\s*"([^"]+)"/)
    const sourceUrl = get(/"url"\s*:\s*"([^"]+)"/)
    const sku = get(/"sku"\s*:\s*"([^"]*)"/)
    const description = get(/"description"\s*:\s*"([^"]*)"/)
    const offerPrice = Number(get(/"price"\s*:\s*"([0-9.]+)"/))
    const descriptionPrice = numberFromBRL(description.match(/por\s+R\$\s*([0-9.,]+)/i)?.[1])
    const sourcePrice = descriptionPrice || (Number.isFinite(offerPrice) ? offerPrice : null)
    const stock = Number(get(/"inventoryLevel"[\s\S]*?"value"\s*:\s*"([0-9]+)"/))

    if (!name || !image || !sourceUrl || !sourcePrice) continue

    products.push({
      name,
      image,
      sourceUrl,
      sku,
      category: classify(name),
      sourcePrice,
      price: money10Below(sourcePrice),
      stockObserved: Number.isFinite(stock) ? stock : null,
    })
  }

  return products
}

async function fetchPage(page) {
  const url = page === 1 ? SOURCE : `${SOURCE}?page=${page}`
  const response = await fetch(url, {
    headers: {
      'user-agent': 'AgroNexusCatalogSync/1.0',
      accept: 'text/html,application/xhtml+xml',
    },
  })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return response.text()
}

async function main() {
  const map = new Map()
  let emptyPages = 0

  for (let page = 1; page <= 40; page += 1) {
    try {
      const html = await fetchPage(page)
      const batch = parseProducts(html)
      let added = 0

      for (const product of batch) {
        if (!map.has(product.sourceUrl)) {
          map.set(product.sourceUrl, product)
          added += 1
        }
      }

      if (!added) emptyPages += 1
      else emptyPages = 0

      if (emptyPages >= 2) break
    } catch (error) {
      console.warn(`[marine-sync] page ${page}: ${error.message}`)
      if (page === 1) throw error
      break
    }
  }

  const products = [...map.values()].map((item, index) => ({
    id: `agx-marine-${String(index + 1).padStart(4, '0')}`,
    adNumber: `198553${String(index + 3504).padStart(4, '0')}`,
    ...item,
  }))

  if (!products.length) throw new Error('No marine products found')

  const payload = `/** Auto-generated at build time. Do not hand-edit. */\nexport const MARINE_CATALOG = ${JSON.stringify(products, null, 2)}\nexport const MARINE_CATALOG_META = ${JSON.stringify({ sourceCount: products.length, discount: DISCOUNT, syncedAt: new Date().toISOString() }, null, 2)}\nexport default MARINE_CATALOG\n`
  await fs.writeFile(OUT, payload, 'utf8')
  console.log(`[marine-sync] ${products.length} products written`)
}

main().catch(async (error) => {
  console.warn(`[marine-sync] keeping checked-in fallback: ${error.message}`)
})
