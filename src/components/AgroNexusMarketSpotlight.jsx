import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MARKET_OFFERS, publicOffer } from '../data/marketCatalog'
import '../styles/AgroNexusMarketSpotlight.css'

const canShowMedia = (src = '') => typeof src === 'string' && (src.startsWith('/images/') || src.startsWith('/assets/') || src.startsWith('/agronexus-') || src.startsWith('http://') || src.startsWith('https://'))
const QUICK_WORLDS = [
  ['Aves', '/aves'],
  ['Cães', '/caes'],
  ['Gatos', '/gatos'],
  ['Peixes & Aquarismo', '/aquarismo'],
  ['Corais & Reef', '/corais'],
  ['Répteis', '/repteis'],
  ['Pequenos Mamíferos', '/pequenos-mamiferos'],
  ['Plantas', '/plantas'],
  ['Saúde', '/saude'],
  ['Alimentação', '/alimentacao'],
  ['Equipamentos', '/equipamentos']
]
const HOME_FEATURED_IDS = ['1985533504', '1985533505', '1985533506', '1985533701', '1985533702', '1985533703']
const HOME_SHELF_LIMIT = HOME_FEATURED_IDS.length

export default function AgroNexusMarketSpotlight({ title = 'Encontre. Descubra. Adquira.', limit = HOME_SHELF_LIMIT }) {
  const [query, setQuery] = useState('')
  const visibleLimit = Math.min(limit, HOME_SHELF_LIMIT)
  const result = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt-BR')
    const pool = MARKET_OFFERS.map(publicOffer)
    if (!normalized) {
      const byId = new Map(pool.map(o => [o.id, o]))
      const featured = HOME_FEATURED_IDS.map(id => byId.get(id)).filter(Boolean)
      const fill = pool.filter(o => !HOME_FEATURED_IDS.includes(o.id))
      return { total: pool.length, offers: [...featured, ...fill].slice(0, visibleLimit) }
    }
    const filtered = pool.filter(o => [o.name, o.world, ...(o.categories || []), ...(o.highlights || [])].filter(Boolean).join(' ').toLocaleLowerCase('pt-BR').includes(normalized))
    return { total: filtered.length, offers: filtered.slice(0, visibleLimit) }
  }, [query, visibleLimit])

  return (
    <section className="agx-market-spotlight" id="mercado">
      <div className="agx-market-spotlight__inner">
        <div className="agx-market-spotlight__heading">
          <p>AgroNexus™ · Catálogo</p>
          <h2>{title}</h2>
          <span>Pesquise o que procura ou entre diretamente em um dos mundos AgroNexus™.</span>
        </div>
        <div className="agx-market-search">
          <label htmlFor="agx-market-query">O que você procura?</label>
          <div className="agx-market-search__box">
            <input id="agx-market-query" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Espécie, raça, coral, planta, ração, equipamento..." autoComplete="off" />
            <span aria-hidden="true">↗</span>
          </div>
        </div>
        <nav className="agx-market-worlds" aria-label="Atalhos do catálogo AgroNexus">
          {QUICK_WORLDS.map(([label, href]) => (
            <Link to={href} key={href}>{label}<span aria-hidden="true">↗</span></Link>
          ))}
        </nav>
        <div className="agx-market-spotlight__bar">
          <div>
            <strong>{query ? 'Resultados' : 'Seleção AgroNexus™'}</strong>
            <small>{query ? `${result.total} encontrados · exibindo até ${visibleLimit}` : `${MARKET_OFFERS.length} anúncios no catálogo`}</small>
          </div>
          <span>Explore os mundos para ver mais</span>
        </div>
        {result.offers.length > 0 ? (
          <div className="agx-market-spotlight__grid">
            {result.offers.map(offer => (
              <Link className="agx-market-spotlight__card" to={`/anuncio/${offer.id}`} key={offer.id}>
                <div className="agx-market-spotlight__media">
                  {canShowMedia(offer.image) ? <img src={offer.image} alt={offer.name} loading="lazy" referrerPolicy="no-referrer" /> : <div className="agx-market-spotlight__no-image">AgroNexus™</div>}
                </div>
                <div className="agx-market-spotlight__copy">
                  <small>{offer.adNumber}</small>
                  <strong>{offer.name}</strong>
                  <div>{offer.formattedPrice || 'Preço sob consulta'}</div>
                  {offer.installmentText ? <em>{offer.installmentText}</em> : null}
                  <span>{offer.stockLabel || 'Consulte a AgroNexus™'}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="agx-market-empty">
            <strong>Nenhum resultado.</strong>
            <span>Tente outro termo ou explore um dos mundos AgroNexus™.</span>
          </div>
        )}
        <div className="agx-market-spotlight__exit">
          <span>Mais categorias e anúncios estão organizados por mundo.</span>
          <Link to="/aves">Explorar mundos ↗</Link>
        </div>
      </div>
    </section>
  )
}
