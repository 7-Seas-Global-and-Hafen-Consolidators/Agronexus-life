import { useMemo, useState } from 'react'
import PLANTS_MERGED from '../data/plantsMerge'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'
import '../styles/MarketplaceWarPlan.css'

const FALLBACK =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='800' height='800' fill='%230a1f16'/><text x='400' y='392' fill='%23a3e635' font-family='sans-serif' font-size='30' font-weight='bold' text-anchor='middle'>AgroNexus™</text><text x='400' y='436' fill='%23ffffff' font-family='sans-serif' font-size='18' text-anchor='middle'>Muda em viveiro próprio</text></svg>"

const CHIPS = ['Todas', 'Frutíferas', 'Nativas', 'Ornamentais']
const brl = (v) => `R$ ${Number(v || 0).toFixed(2).replace('.', ',')}`
const wa = (name) =>
  `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(`Olá! Quero saber mais sobre: ${name}`)}`

export default function AgroNexusPlantsMarket() {
  const [chip, setChip] = useState('Todas')
  const [query, setQuery] = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PLANTS_MERGED.filter((item) => {
      const hay = `${item.group} ${item.categories}`.toLowerCase()
      const okChip = chip === 'Todas' || hay.includes(chip.toLowerCase())
      const okQuery =
        !q || item.name.toLowerCase().includes(q) || (item.scientificName || '').toLowerCase().includes(q)
      return okChip && okQuery
    })
  }, [chip, query])

  return (
    <main className="marketplace-war">
      <div className="marketplace-war__container">
        <header className="marketplace-war__hero">
          <div className="marketplace-war__hero-copy">
            <span className="marketplace-war__eyebrow">AGRONEXUS™ · MUNDO BOTÂNICO</span>
            <h1>
              Mercado de <strong>plantas.</strong>
            </h1>
            <p>
              Frutíferas enxertadas, nativas e ornamentais com procedência, nome científico e oferta
              individual AgroNexus™ para pomar, jardim e paisagismo.
            </p>
          </div>
          <div className="marketplace-war__search">
            <label htmlFor="plant-search">Buscar muda ou nome científico</label>
            <div className="marketplace-war__search-row">
              <input
                id="plant-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex.: jabuticaba, lichia, Passiflora…"
              />
              <button type="button">Buscar</button>
            </div>
            <div className="marketplace-war__category-strip">
              {CHIPS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={chip === c ? 'is-active' : ''}
                  onClick={() => setChip(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="marketplace-war__section marketplace-war__section--products">
          <div className="marketplace-war__section-head">
            <div>
              <span>VITRINE VIVA</span>
              <h2>{items.length} ofertas agora.</h2>
            </div>
            <p>Fotos reais do túnel botânico ou placeholder AgroNexus™ quando a muda é de viveiro próprio.</p>
          </div>

          <div className="marketplace-war__products">
            {items.map((item) => (
              <article className="marketplace-war__product" key={item.id}>
                <div className="marketplace-war__product-image">
                  <img
                    src={item.image || FALLBACK}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = FALLBACK
                    }}
                  />
                  <span className="marketplace-war__badge">AgroNexus™</span>
                </div>
                <div className="marketplace-war__product-top">
                  <span>{item.group || 'Plantas'}</span>
                  <span>{item.origin === 'tunnel' ? 'Foto do túnel' : 'Viveiro próprio'}</span>
                </div>
                <div className="marketplace-war__product-copy">
                  <h3>{item.name}</h3>
                  {item.scientificName ? <p><em>{item.scientificName}</em></p> : null}
                </div>
                <div className="marketplace-war__price-block">
                  <strong>{brl(item.price)}</strong>
                  <span>Pix · boleto · cartão em até 5x</span>
                </div>
                <a className="marketplace-war__buy" href={wa(item.name)} target="_blank" rel="noreferrer">
                  Quero esta muda <span>→</span>
                </a>
                <small>Disponibilidade e tamanho confirmados no atendimento.</small>
              </article>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="marketplace-war__no-results">
              <strong>Nada por aqui com esse filtro.</strong>
              <button type="button" onClick={() => { setChip('Todas'); setQuery('') }}>
                Limpar filtros
              </button>
            </div>
          ) : null}
        </section>

        <footer className="marketplace-war__footer-note">
          AgroNexus™ · biodiversidade com procedência · imagens de catálogo normalizadas para a marca
        </footer>
      </div>
    </main>
  )
}
