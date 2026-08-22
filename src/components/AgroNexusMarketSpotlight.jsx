import { MARKET_OFFERS, publicOffer } from '../data/marketCatalog'
import '../styles/AgroNexusMarketSpotlight.css'

export default function AgroNexusMarketSpotlight({
  title = 'Em destaque agora',
  limit = 12,
}) {
  const offers = MARKET_OFFERS.slice(0, limit).map(publicOffer)

  return (
    <section className="agx-market-spotlight">
      <div className="agx-market-spotlight__inner">
        <div className="agx-market-spotlight__heading">
          <p>AgroNexus Market</p>
          <h2>{title}</h2>
          <span>Produtos, organismos, alimentação e equipamentos em uma única experiência.</span>
        </div>

        <div className="agx-market-spotlight__grid">
          {offers.map((offer) => (
            <a
              className="agx-market-spotlight__card"
              href={`#/anuncio/${offer.id}`}
              key={offer.id}
            >
              <div className="agx-market-spotlight__media">
                {offer.image && (
                  <img
                    src={offer.image}
                    alt={offer.name}
                    loading="lazy"
                  />
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
      </div>
    </section>
  )
}
