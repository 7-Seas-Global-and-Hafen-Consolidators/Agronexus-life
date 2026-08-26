import fs from 'node:fs/promises'

const SOURCE = 'https://www.avesornamentaisjej.com.br/exoticos'
const OUT = new URL('../src/data/exoticCatalog.generated.js', import.meta.url)

function extractBalancedArray(source, marker) {
  const markerIndex = source.indexOf(marker)
  if (markerIndex < 0) return null
  const start = source.indexOf('[', markerIndex)
  if (start < 0) return null
  let depth = 0
  let inString = false
  let escaped = false
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
    else if (ch === ']') {
      depth -= 1
      if (depth === 0) return source.slice(start, i + 1)
    }
  }
  return null
}

function normalizeImage(url = '') {
  return String(url).replace(/\?ims=\d+x\d+.*$/i, '')
}

function normalize(item, index) {
  const categories = String(item.categoria || 'Animais,Exóticos').split(',').map((v) => v.trim()).filter(Boolean)
  const available = Boolean(item.qtde_estoque)
  const variants = (item.derivacoesItem || []).flat().map((entry) => ({
    label: entry.derivacao || entry.deri_nome || 'Variação',
    available: Boolean(entry.estoque),
  }))
  return {
    id: `agx-exotic-${String(index + 1).padStart(3, '0')}`,
    adNumber: `198554${String(index + 1).padStart(4, '0')}`,
    name: item.nome || item.titulo || `Exótico ${index + 1}`,
    brand: 'AgroNexus™',
    categories,
    price: Number(item.valor) || null,
    availability: available ? 'available' : 'unavailable',
    stockLabel: available ? 'Disponível' : 'Indisponível no momento',
    image: normalizeImage(item.midia_url),
    secondaryMedia: item.midia_secundaria_url || '',
    sourceUrl: item.link ? new URL(item.link, SOURCE).href : SOURCE,
    sourceCode: item.codigo || '',
    description: item.complemento || '',
    variants,
  }
}

async function main() {
  const response = await fetch(SOURCE, {
    headers: {
      'user-agent': 'AgroNexusCatalogSync/1.0',
      accept: 'text/html,application/xhtml+xml',
    },
  })
  if (!response.ok) throw new Error(`${response.status} ${SOURCE}`)
  const html = await response.text()
  const raw = extractBalancedArray(html, 'itens:')
  if (!raw) throw new Error('dataVitrine itens array not found')
  const sourceItems = JSON.parse(raw)
  const products = sourceItems.map(normalize)
  if (!products.length) throw new Error('No exotic products found')

  const payload = `/** Auto-generated from the current Exóticos category. Public brand normalized to AgroNexus™. */\nexport const EXOTIC_CATALOG = ${JSON.stringify(products, null, 2)}\nexport const EXOTIC_CATALOG_META = ${JSON.stringify({ sourceCount: products.length, includesUnavailable: true, syncedAt: new Date().toISOString() }, null, 2)}\nexport default EXOTIC_CATALOG\n`
  await fs.writeFile(OUT, payload, 'utf8')
  const unavailable = products.filter((item) => item.availability === 'unavailable').length
  console.log(`[exotic-sync] ${products.length} records written; ${unavailable} unavailable preserved`)
}

main().catch((error) => {
  console.warn(`[exotic-sync] keeping checked-in fallback: ${error.message}`)
})
