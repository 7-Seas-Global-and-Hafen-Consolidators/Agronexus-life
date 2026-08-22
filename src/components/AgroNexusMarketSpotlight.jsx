import { useMemo, useState } from 'react'
import { MARKET_OFFERS, publicOffer } from '../data/marketCatalog'
import '../styles/AgroNexusMarketSpotlight.css'

const QUICK_WORLDS = [
  ['Aves', '#/mundo/aves'],
  ['Cães', '#/mundo/caes'],
  ['Gatos', '#/mundo/gatos'],
  ['Peixes & Aquarismo', '#/mundo/aquarismo'],
  ['Corais & Reef', '#/mundo/corais'],
  ['Répteis', '#/mundo/repteis'],
  ['Pequenos Mamíferos', '#/mundo/pequenos-mamiferos'],
  ['Plantas', '#/mundo/plantas'],
  ['Saúde', '#/mundo/saude'],
  ['Alimentação', '#/mundo/alimentacao'],
  ['Equipamentos', '#/mundo/equipamentos'],
]

const HOME_SHELF_LIMIT = 8

export default function AgroNexusMarketSpotlight({
  title = 'Encontre. Descubra. Adquira.',
  limit = HOME_SHELF_LIMIT,
}) {
  const [query, setQuery] = useState('')
  const visibleLimit = Math.min(limit, HOME_SHELF_LIMIT)

  const result = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt-BR')
    const pool = MARKET_OFFERS.map(publicOffer)

    const filtered = !normalized
      ? pool
      : pool.filter((offer) => {
          const haystack = [
            offer.name,
            offer.world,
            ...(offer.categories || []),
            ...(offer.highlights || []),
          ]
            .filter(Boolean)
            .join(' ')
            .toLocaleLowerCase('pt-BR')

          return haystack.includes(normalized)
        })

    return {
      total: filtered.length,
      offers: filtered.slice(0, visibleLimit),
    }
  }, [query, visibleLimit])

  return (
    <section className="agx-market-spotlight" id="mercado">
      <div className="agx-market-spotlight__inner">
        <div className="agx-market-spotlight__heading">
          <p>AgroNexus™ · Catálogo vivo</p>
          <h2>{title}</h2>
          <span>
            Um catálogo enorme sem transformar a Home em corredor infinito. Pesquise, entre em um mundo e aprofunde só onde quiser.
          </span>
        </div>

        <div className="agx-market-search">
          <label htmlFor="agx-market-query">O que você procura?</label>
          <div className="agx-market-search__box">
            <input
              id="agx-market-query"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Espécie, raça, coral, planta, ração, equipamento..."
              autoComplete="off"
            />
            <span aria-hidden="true">↗</span>
          </div>
        </div>

        <nav className="agx-market-worlds" aria-label="Atalhos do catálogo AgroNexus">
          {QUICK_WORLDS.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className="agx-market-spotlight__bar">
          <div>
            <strong>{query ? 'Resultados' : 'Seleção AgroNexus'}</strong>
            <small>
              {query
                ? `${result.total} encontrados · exibindo até ${visibleLimit}`
                : `${MARKET_OFFERS.length} anúncios no catálogo · Home exibe apenas ${visibleLimit}`}
            </small>
          </div>
          <span>Entre nos mundos para explorar o restante</span>
        </div>

        {result.offers.length > 0 ? (
          <div className="agx-market-spotlight__grid">
            {result.offers.map((offer) => (
              <a
                className="agx-market-spotlight__card"
                href={`#/anuncio/${offer.id}`}
                key={offer.id}
              >
                <div className="agx-market-spotlight__media">
                  {offer.image ? (
                    <img src={offer.image} alt={offer.name} loading="lazy" />
                  ) : (
                    <div className="agx-market-spotlight__no-image">AgroNexus™</div>
                  )}
                </div>
                <div className="agx-market-spotlight__copy">
                  <small>{offer.adNumber}</small>
                  <strong>{offer.name}</strong>
                  <div>{offer.formattedPrice || 'Preço sob consulta'}</div>
                  <span>{offer.stockLabel || 'Consulte disponibilidade'}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="agx-market-empty">
            <strong>A busca continua.</strong>
            <span>Este termo ainda não está entre os anúncios integrados ao catálogo.</span>
          </div>
        )}

        <div className="agx-market-spotlight__exit">
          <span>O catálogo continua dentro dos mundos, não para baixo da Home.</span>
          <a href="#/mundo/aves">Começar pelos mundos ↗</a>
        </div>
      </div>
    </section>
  )
}
