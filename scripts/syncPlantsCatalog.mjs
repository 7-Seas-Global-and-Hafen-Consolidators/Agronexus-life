import fs from 'node:fs/promises'

/*
  AGRONEXUS™ — PLANTS TUNNEL (Vaso e Flor) — MULTI-PAGE
  Raspa home + páginas de categoria para casar foto real
  com o PLANT_WAVE. Se tudo falhar, mantém o fallback commitado.
*/

const SOURCES = [
  'https://www.vasoeflor.com.br/',
  'https://www.vasoeflor.com.br/mudas-de-plantas-frutiferas',
  'https://www.vasoeflor.com.br/mudas-arvores-nativas',
  'https://www.vasoeflor.com.br/mudas-ornamentais-vaso-flor',
  'https://www.vasoeflor.com.br/mudas-para-reflorestamento',
  'https://www.vasoeflor.com.br/mudas-trepadeiras-vaso-flor',
]
const OUT = new URL('../src/data/plantsCatalog.generated.js', import.meta.url)
const IMAGE_SIZE = '800x800'

function extractAllBalancedArrays(source, marker) {
  const results = []
  let searchFrom = 0
  while (true) {
    const markerIndex = source.indexOf(marker, searchFrom)
    if (markerIndex < 0) break
    const start = source.indexOf('[', markerIndex)
    if (start < 0) break
    let depth = 0, inString = false, escaped = false, end = -1
    for (let i = start; i < source.length; i += 1) {
      const ch = source[i]
      if (inString) {
        if (escaped) escaped = false
        else if (ch === '\\') escaped = true
        else if (ch === '"') inString = false
        continue
      }
      if (ch === '"') inString = true
      else if (ch === '[') depth += 1
      else if (ch === ']') { depth -= 1; if (depth === 0) { end = i; break } }
    }
    if (end < 0) break
    results.push(source.slice(start, end + 1))
    searchFrom = end + 1
  }
  return results
}

function cleanImage(url = '') {
  const base = String(url).split('?')[0]
  if (!base) return ''
  return `${base}?ims=fit-in/${IMAGE_SIZE}/filters:fill(white)`
}

function normalize(item, index) {
  const categoria = String(item.categoria || '')
  if (!categoria.includes('Mudas')) return null
  const categories = categoria.split(',').map((v) => v.trim()).filter(Boolean)
  const available = Boolean(item.qtde_estoque)
  return {
    id: `agx-plant-${String(index + 1).padStart(4, '0')}`,
    name: item.nome || item.titulo || `Planta ${index + 1}`,
    brand: 'AgroNexus™',
    categories,
    price: Number(item.valor) || null,
    availability: available ? 'available' : 'unavailable',
    stockLabel: available ? 'Disponível' : 'Indisponível no momento',
    image: cleanImage(item.midia_url),
    secondaryMedia: '',
    sourceUrl: item.link ? new URL(item.link, SOURCES[0]).href : SOURCES[0],
    sourceCode: item.codigo || '',
    description: item.complemento || '',
  }
}

async function main() {
  const seen = new Set()
  const products = []

  for (const url of SOURCES) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': 'AgroNexusCatalogSync/1.0', accept: 'text/html,application/xhtml+xml' },
      })
      if (!response.ok) throw new Error(`${response.status} ${url}`)
      const html = await response.text()

      const arrays = [
        ...extractAllBalancedArrays(html, 'produtos:'),
        ...extractAllBalancedArrays(html, 'itens:'),
      ]

      let added = 0
      for (const raw of arrays) {
        let items = []
        try { items = JSON.parse(raw) } catch { continue }
        for (const item of items) {
          const norm = normalize(item, products.length)
          if (!norm) continue
          const key = norm.sourceCode || norm.name
          if (seen.has(key)) continue
          seen.add(key)
          products.push(norm)
          added += 1
        }
      }
      console.log(`[plants-sync] ${url} -> +${added} records`)
    } catch (error) {
      console.warn(`[plants-sync] skipping ${url}: ${error.message}`)
    }
  }

  if (!products.length) throw new Error('No plant products found')

  const payload =
    `/** Auto-generated plants tunnel (multi-page). Public brand normalized to AgroNexus™. */\n` +
    `export const PLANTS_CATALOG = ${JSON.stringify(products, null, 2)}\n` +
    `export const PLANTS_CATALOG_META = ${JSON.stringify({ sourceCount: products.length, syncedAt: new Date().toISOString() }, null, 2)}\n` +
    `export default PLANTS_CATALOG\n`

  await fs.writeFile(OUT, payload, 'utf8')
  console.log(`[plants-sync] ${products.length} plant records written`)
}

main().catch((error) => {
  console.warn(`[plants-sync] keeping checked-in fallback: ${error.message}`)
})
