import { useMemo, useState } from 'react'
import { getOffersByWorld, publicOffer, MARKET_OFFERS } from '../data/marketCatalog'

const PAGE_SIZE = 12

function ProductImage({ offer }) {
  const sources = useMemo(() => {
    const values = [offer.image, ...(offer.images || [])].filter(Boolean)
    return [...new Set(values)]
  }, [offer])
  const [index, setIndex] = useState(0)
  const src = sources[index]

  return (
    <div className="agx-product__media">
      {src ? (
        <img
          src={src}
          alt={offer.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setIndex((value) => value + 1 < sources.length ? value + 1 : sources.length)}
        />
      ) : (
        <div className="agx-product__empty">Imagem em recuperação</div>
      )}
      <div className="agx-product__brandmark">AgroNexus™</div>
    </div>
  )
}

export default function AgroNexusProductCatalog({ world = null, category = null, limit = null }) {
  const [page, setPage] = useState(1)

  const allOffers = useMemo(() => {
    let items = world ? getOffersByWorld(world) : MARKET_OFFERS
    if (category) items = items.filter((item) => item.categories?.includes(category) || item.type === category)
    return items.map(publicOffer)
  }, [world, category])

  const maxVisible = Number.isFinite(Number(limit)) ? Number(limit) : allOffers.length
  const scoped = allOffers.slice(0, maxVisible)
  const totalPages = Math.max(1, Math.ceil(scoped.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = scoped.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  if (!scoped.length) return null

  return (
    <section className="agx-catalog" aria-label="Catálogo AgroNexus">
      <style>{`
        .agx-catalog{background:#f1f0e9;color:#111411;padding:clamp(72px,9vw,120px) clamp(22px,5.5vw,88px)}
        .agx-catalog__head{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:38px;border-bottom:1px solid rgba(17,20,17,.16);padding-bottom:24px}
        .agx-catalog__eyebrow{margin:0 0 10px;color:#477153;font:900 .64rem/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase}
        .agx-catalog__head h2{margin:0;font:600 clamp(2.6rem,5vw,5.6rem)/.9 'Space Grotesk',Inter,sans-serif;letter-spacing:-.06em}
        .agx-catalog__count{margin:0;color:#69716b;font:700 .68rem/1.4 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;text-align:right}
        .agx-catalog__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:rgba(17,20,17,.14);border:1px solid rgba(17,20,17,.14)}
        .agx-product{display:flex;flex-direction:column;background:#fff;min-width:0}
        .agx-product__media{position:relative;aspect-ratio:1/1;background:#e7e7e1;overflow:hidden;display:grid;place-items:center}
        .agx-product__media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s ease}.agx-product:hover .agx-product__media img{transform:scale(1.025)}
        .agx-product__brandmark{position:absolute;left:12px;bottom:12px;padding:7px 9px;background:rgba(9,11,10,.86);color:#fff;font:900 .56rem/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;backdrop-filter:blur(8px)}
        .agx-product__empty{font:900 .62rem/1 Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8b918c}
        .agx-product__body{display:flex;flex-direction:column;gap:10px;padding:20px;min-height:230px}
        .agx-product__meta{font:900 .56rem/1 Inter,sans-serif;letter-spacing:.11em;text-transform:uppercase;color:#94701f}
        .agx-product h3{margin:0;font:650 clamp(1.05rem,1.7vw,1.45rem)/1.02 'Space Grotesk',Inter,sans-serif;letter-spacing:-.035em}
        .agx-product__price{margin-top:auto;font:800 1.05rem/1.1 Inter,sans-serif}.agx-product__installments,.agx-product__status{font:600 .7rem/1.35 Inter,sans-serif;color:#66706a}
        .agx-product__open{margin-top:8px;min-height:42px;display:flex;align-items:center;justify-content:center;background:#0b120f;color:white;text-decoration:none;font:900 .62rem/1 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase}
        .agx-catalog__pager{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:26px}.agx-catalog__pager button{border:1px solid rgba(17,20,17,.22);background:transparent;min-height:42px;padding:0 16px;font:800 .62rem/1 Inter,sans-serif;letter-spacing:.09em;text-transform:uppercase;cursor:pointer}.agx-catalog__pager button:disabled{opacity:.3;cursor:default}.agx-catalog__pager span{font:800 .64rem/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#69716b}
        @media(max-width:1100px){.agx-catalog__grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:760px){.agx-catalog__head{align-items:start;flex-direction:column}.agx-catalog__count{text-align:left}.agx-catalog__grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.agx-product{flex:0 0 min(78vw,330px);scroll-snap-align:start}}
      `}</style>

      <div className="agx-catalog__head">
        <div><p className="agx-catalog__eyebrow">AgroNexus™ · catálogo do mundo</p><h2>Acervo real. Sem parede vazia.</h2></div>
        <p className="agx-catalog__count">{scoped.length} anúncios · página {currentPage} de {totalPages}</p>
      </div>

      <div className="agx-catalog__grid">
        {visible.map((offer) => (
          <article className="agx-product" key={offer.id}>
            <ProductImage offer={offer} />
            <div className="agx-product__body">
              <div className="agx-product__meta">{offer.adNumber}</div>
              <h3>{offer.name}</h3>
              <div className="agx-product__price">{offer.formattedPrice || 'Preço sob consulta'}</div>
              {offer.installmentText ? <div className="agx-product__installments">{offer.installmentText}</div> : null}
              <div className="agx-product__status">{offer.stockLabel || 'Disponível na AgroNexus™'}</div>
              <a className="agx-product__open" href={`#/anuncio/${offer.id}`}>Ver anúncio</a>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 ? <div className="agx-catalog__pager"><button type="button" disabled={currentPage === 1} onClick={() => setPage((v) => Math.max(1, v - 1))}>← Anterior</button><span>{currentPage} / {totalPages}</span><button type="button" disabled={currentPage === totalPages} onClick={() => setPage((v) => Math.min(totalPages, v + 1))}>Próxima →</button></div> : null}
    </section>
  )
}
