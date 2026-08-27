import fs from 'node:fs/promises'

/*
  AGRONEXUS™ — PLANTS TUNNEL (Vaso e Flor)
  Igual ao marine/exotic tunnel: roda no build, extrai os produtos
  embutidos no HTML da vitrine e gera plantsCatalog.generated.js.
  Se a fonte falhar, mantém o fallback commitado.
*/

const SOURCE = 'https://www.vasoeflor.com.br/'
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
  if (!categoria.includes('Mudas')) return null // só plantas de verdade, larga fertilizante/vaso
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
    image: cleanImage(item.midia_url),       // foto principal, corte quadrado limpo
    secondaryMedia: '',                       // ignora infográfico com arte da loja
    sourceUrl: item.link ? new URL(item.link, SOURCE).href : SOURCE,
    sourceCode: item.codigo || '',
    description: item.complemento || '',
  }
}

async function main() {
  const response = await fetch(SOURCE, {
    headers: { 'user-agent': 'AgroNexusCatalogSync/1.0', accept: 'text/html,application/xhtml+xml' },
  })
  if (!response.ok) throw new Error(`${response.status} ${SOURCE}`)
  const html = await response.text()

  const arrays = [
    ...extractAllBalancedArrays(html, 'produtos:'),
    ...extractAllBalancedArrays(html, 'itens:'),
  ]

  const seen = new Set()
  const products = []
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
    }
  }

  if (!products.length) throw new Error('No plant products found')

  const payload =
    `/** Auto-generated plants tunnel. Public brand normalized to AgroNexus™. */\n` +
    `export const PLANTS_CATALOG = ${JSON.stringify(products, null, 2)}\n` +
    `export const PLANTS_CATALOG_META = ${JSON.stringify({ sourceCount: products.length, syncedAt: new Date().toISOString() }, null, 2)}\n` +
    `export default PLANTS_CATALOG\n`

  await fs.writeFile(OUT, payload, 'utf8')
  console.log(`[plants-sync] ${products.length} plant records written`)
}

main().catch((error) => {
  console.warn(`[plants-sync] keeping checked-in fallback: ${error.message}`)
})
