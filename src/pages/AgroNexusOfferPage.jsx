import { useMemo, useState } from 'react'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'
import { getMarketOffer, getRelatedOffers, publicOffer } from '../data/marketCatalog'
import '../styles/AgroNexusOfferPage.css'

export default function AgroNexusOfferPage({ offerId }) {
  const [activeImage, setActiveImage] = useState(0)

  const offer = useMemo(
    () => publicOffer(getMarketOffer(offerId)),
    [offerId]
  )

  const related = useMemo(
    () => getRelatedOffers(offer).map(publicOffer),
    [offer]
  )

  if (!offer) {
    return (
      <main className="agx-offer agx-offer--missing">
        <div className="agx-offer__missing-inner">
          <p>AgroNexus™ · Catálogo</p>
          <h1>Oferta não encontrada.</h1>
          <a href="#/">Voltar ao início</a>
        </div>
      </main>
    )
  }

  const images = offer.images?.length ? offer.images : [offer.image].filter(Boolean)
  const checkout = AGRONEXUS_COMMERCE.paymentLinks?.asaas?.url
  const discount = offer.oldPrice && offer.price
    ? Math.max(0, Math.round((1 - offer.price / offer.oldPrice) * 100))
    : 0

  return (
    <main className="agx-offer">
      <section className="agx-offer__shell">
        <nav className="agx-offer__crumbs" aria-label="Navegação">
          <a href="#/">AgroNexus</a>
          <span>›</span>
          <a href={`#/mundo/${offer.world}`}>{offer.world}</a>
          <span>›</span>
          <strong>{offer.adNumber}</strong>
        </nav>

        <div className="agx-offer__hero-grid">
          <section className="agx-offer__gallery" aria-label="Galeria do produto">
            <div className="agx-offer__main-media">
              {images[activeImage] ? (
                <img src={images[activeImage]} alt={offer.name} />
              ) : (
                <div className="agx-offer__image-fallback">AGRONEXUS</div>
              )}
            </div>

            {images.length > 1 && (
              <div className="agx-offer__thumbs">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={index === activeImage ? 'is-active' : ''}
                    aria-label={`Ver imagem ${index + 1}`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            )}
          </section>

          <aside className="agx-offer__buybox">
            <p className="agx-offer__ad-number">{offer.adNumber}</p>
            <p className="agx-offer__eyebrow">{offer.categories?.join(' · ')}</p>
            <h1>{offer.name}</h1>

            {offer.highlights?.length > 0 && (
              <ul className="agx-offer__highlights">
                {offer.highlights.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <div className="agx-offer__pricing">
              {offer.formattedOldPrice && (
                <div className="agx-offer__old-price">{offer.formattedOldPrice}</div>
              )}
              <div className="agx-offer__price-row">
                <strong>{offer.formattedPrice || 'Preço sob consulta'}</strong>
                {discount > 0 && <span>{discount}% OFF</span>}
              </div>
              {offer.installmentText && <p>{offer.installmentText}</p>}
            </div>

            <div className="agx-offer__availability">
              <span>Disponibilidade</span>
              <strong>{offer.stockLabel || 'Consulte disponibilidade'}</strong>
            </div>

            <div className="agx-offer__delivery">
              <span>Entrega</span>
              <p>{offer.delivery}</p>
            </div>

            <div className="agx-offer__actions">
              <a className="agx-offer__primary" href={checkout} target="_blank" rel="noreferrer">
                Comprar agora
              </a>
              <a
                className="agx-offer__secondary"
                href={`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(`Olá! Quero saber mais sobre ${offer.name} — ${offer.adNumber}.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Falar com a AgroNexus
              </a>
            </div>

            <div className="agx-offer__payments">
              <h2>Meios de pagamento</h2>
              <p>{AGRONEXUS_COMMERCE.installmentLabel}</p>
              <div className="agx-offer__payment-pills">
                {AGRONEXUS_COMMERCE.paymentMethods.map((method) => (
                  <span key={method.id}>{method.label}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="agx-offer__content-grid">
          <article className="agx-offer__section">
            <p className="agx-offer__section-kicker">Essencial</p>
            <h2>O que você precisa saber</h2>
            <p>{offer.description}</p>
          </article>

          {offer.attributes?.length > 0 && (
            <article className="agx-offer__section">
              <p className="agx-offer__section-kicker">Ficha</p>
              <h2>Características</h2>
              <dl className="agx-offer__specs">
                {offer.attributes.map(([label, value]) => (
                  <div key={`${label}-${value}`}>
                    <dt>{label}</dt>
                    <dd>{String(value)}</dd>
                  </div>
                ))}
              </dl>
            </article>
          )}
        </section>

        <section className="agx-offer__qa">
          <div>
            <p className="agx-offer__section-kicker">Atendimento</p>
            <h2>Perguntas e respostas</h2>
            <p>Tem dúvida sobre este item? Fale diretamente com a AgroNexus usando o número do anúncio para agilizar o atendimento.</p>
          </div>
          <a
            href={`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(`Olá! Tenho uma pergunta sobre ${offer.adNumber} — ${offer.name}.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            Fazer uma pergunta
          </a>
        </section>

        {related.length > 0 && (
          <section className="agx-offer__related">
            <p className="agx-offer__section-kicker">Continue explorando</p>
            <h2>Relacionados</h2>
            <div className="agx-offer__related-grid">
              {related.map((item) => (
                <a key={item.id} href={`#/anuncio/${item.id}`} className="agx-offer__card">
                  <div className="agx-offer__card-media">
                    {item.image && <img src={item.image} alt={item.name} loading="lazy" />}
                  </div>
                  <div className="agx-offer__card-copy">
                    <span>{item.adNumber}</span>
                    <strong>{item.name}</strong>
                    <b>{item.formattedPrice || 'Preço sob consulta'}</b>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  )
}
