import fs from 'node:fs/promises'

/*
  AGRONEXUS™ — RURAL TUNNEL (MF Rural)
  Puxa anúncios de animais, normaliza pra marca AgroNexus™.
  Se a fonte falhar, mantém o fallback commitado.
*/

const SOURCE = 'https://www.mfrural.com.br/produtos/1-38/animais'
const OUT = new URL('../data/ruralCatalog.generated.js', import.meta.url)

const decode = (s = '') =>
  String(s)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/\s+/g, ' ')
    .trim()

const parsePrice = (s = '') => {
  const m = String(s || '').match(/R\$\s*([\d.,]+)/)
  if (!m) return null
  return Number(m[1].replace(/\./g, '').replace(',', '.')) || null
}

const categorize = (name = '') => {
  const n = name.toLowerCase()
  const has = (...ws) => ws.some((w) => n.includes(w))
  if (has('nelore', 'novilha', 'bezerro', 'gado', 'tourinho', 'touro', 'holandes', 'girolando')) return 'Gado'
  if (has('galinha', 'pombo', 'pintinho', 'indio', 'índio', 'poedeira')) return 'Aves'
  if (has('buldogue', 'golden', 'pastor', 'cachorro', 'cao', 'cão')) return 'Cães'
  if (has('cavalo', 'pampa', 'egua', 'égua')) return 'Equinos'
  if (has('ovino', 'dorper', 'texel', 'carneiro', 'matriz')) return 'Ovinos'
  if (has('suino', 'suíno', 'porco')) return 'Suínos'
  if (has('coelho')) return 'Pequenos Mamíferos'
  if (has('minhoca', 'tenebrio', 'tenébrio')) return 'Alimento Vivo'
  return 'Rural'
}

async function main() {
  const res = await fetch(SOURCE, {
    headers: { 'user-agent': 'AgroNexusCatalogSync/1.0', accept: 'text/html,application/xhtml+xml' },
  })
  if (!res.ok) throw new Error(`${res.status} ${SOURCE}`)
  const html = await res.text()

  const blocks = html.split('products__container-item card-imagem').slice(1)
  const items = []

  for (const block of blocks) {
    if (items.length >= 48) break
    const link = block.match(/href="(https:\/\/www\.mfrural\.com\.br\/detalhe\/[^"]+)"\s+title="([^"]+)"/)
    const img = block.match(/src=(https:\/\/img\.mfrural\.com\.br\/api\/image\?url=[^\s"]+)/)
    if (!link || !img) continue
    const rawUrl = decode(img[1])
    if (rawUrl.includes('sem_foto')) continue

    const name = decode(link[2])
    const loc = block.match(/<span>([^<]{3,60})<\/span>/)
    const price = block.match(/R\$\s*[\d.,]+/)
    const unit = block.match(/<small>([^<]+)<\/small>/)

    items.push({
      id: `agx-rural-${String(items.length + 1).padStart(4, '0')}`,
      name,
      categories: ['rural', categorize(name)],
      price: parsePrice(price ? price[0] : ''),
      unit: unit ? decode(unit[1]) : 'Unidade',
      location: loc ? decode(loc[1]) : 'Brasil',
      image: rawUrl.replace(/width=\d+/, 'width=600').replace(/height=\d+/, 'height=450'),
      sourceUrl: decode(link[1]),
    })
  }

  if (!items.length) throw new Error('No rural items found')

  const payload =
    `/** Auto-generated rural tunnel (MF Rural). Public brand normalized to AgroNexus™. */\n` +
    `export const RURAL_CATALOG = ${JSON.stringify(items, null, 2)}\n` +
    `export default RURAL_CATALOG\n`

  await fs.writeFile(OUT, payload, 'utf8')
  console.log(`[rural-sync] ${items.length} rural records written`)
}

main().catch((error) => {
  console.warn(`[rural-sync] keeping checked-in fallback: ${error.message}`)
})
