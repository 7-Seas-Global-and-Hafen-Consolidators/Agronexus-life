import { useEffect, useMemo, useState } from 'react'
import { getOffersByWorld, getOffersByCategory, publicOffer, MARKET_OFFERS } from '../data/marketCatalog'

const PAGE_SIZE = 16
const isLocalPublicMedia = (src = '') => typeof src === 'string' && (src.startsWith('/images/') || src.startsWith('/assets/') || src.startsWith('/agronexus-'))

function ProductImage({ offer }) {
  const sources = useMemo(() => [...new Set([offer.image, ...(offer.images || [])].filter(isLocalPublicMedia))], [offer])
  const [index, setIndex] = useState(0)
  useEffect(() => setIndex(0), [offer.id])
  const src = sources[index]
  return <div className="agx-product__media">{src ? <img src={src} alt={offer.name} loading="lazy" onError={()=>setIndex(v=>v+1<sources.length?v+1:sources.length)}/> : <div className="agx-product__empty"><strong>AgroNexus™</strong><span>Imagem indisponível</span></div>}<div className="agx-product__brandmark">AgroNexus™</div></div>
}

export default function AgroNexusProductCatalog({ world = null, category = null, limit = null }) {
  const [page,setPage]=useState(1)
  const allOffers=useMemo(()=>{let items=world?getOffersByWorld(world):category?getOffersByCategory(category):MARKET_OFFERS;if(world&&category)items=items.filter(item=>item.categories?.includes(category)||item.type===category);return items.map(publicOffer)},[world,category])
  useEffect(()=>setPage(1),[world,category])
  const maxVisible=Number.isFinite(Number(limit))?Number(limit):allOffers.length
  const scoped=allOffers.slice(0,maxVisible)
  const totalPages=Math.max(1,Math.ceil(scoped.length/PAGE_SIZE))
  const currentPage=Math.min(page,totalPages)
  const visible=scoped.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE)
  if(!scoped.length)return null

  return <section className="agx-catalog" id="agronexus-catalog" aria-label="Catálogo AgroNexus">
    <style>{`.agx-catalog{background:#f1f0e9;color:#111411;padding:clamp(72px,9vw,120px) clamp(22px,5.5vw,88px)}.agx-catalog__head{display:flex;justify-content:space-between;gap:28px;align-items:end;margin-bottom:38px;border-bottom:1px solid rgba(17,20,17,.16);padding-bottom:24px}.agx-catalog__eyebrow{margin:0 0 10px;color:#477153;font:900 .64rem/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase}.agx-catalog__head h2{margin:0;font:600 clamp(2.6rem,5vw,5.6rem)/.9 'Space Grotesk',Inter,sans-serif;letter-spacing:-.06em}.agx-catalog__count{margin:0;color:#69716b;font:700 .68rem/1.4 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;text-align:right}.agx-catalog__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:rgba(17,20,17,.14);border:1px solid rgba(17,20,17,.14)}.agx-product{display:flex;flex-direction:column;background:#fff;min-width:0}.agx-product__media{position:relative;aspect-ratio:1;background:#e7e7e1;overflow:hidden;display:grid;place-items:center}.agx-product__media img{width:100%;height:100%;object-fit:cover;display:block}.agx-product__brandmark{position:absolute;left:12px;bottom:12px;padding:7px 9px;background:rgba(9,11,10,.86);color:#fff;font:900 .56rem/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}.agx-product__empty{display:grid;gap:8px;text-align:center;text-transform:uppercase}.agx-product__empty strong{font:900 .78rem/1 Inter;color:#315d42;letter-spacing:.14em}.agx-product__empty span{font:800 .54rem/1 Inter;color:#8b918c;letter-spacing:.1em}.agx-product__body{display:flex;flex-direction:column;gap:10px;padding:20px;min-height:230px}.agx-product__meta{font:900 .56rem/1 Inter;letter-spacing:.11em;text-transform:uppercase;color:#94701f}.agx-product h3{margin:0;font:650 clamp(1.05rem,1.7vw,1.45rem)/1.02 'Space Grotesk',Inter;letter-spacing:-.035em}.agx-product__price{margin-top:auto;font:800 1.05rem/1.1 Inter}.agx-product__installments,.agx-product__status{font:600 .7rem/1.35 Inter;color:#66706a}.agx-product__open{margin-top:8px;min-height:42px;display:flex;align-items:center;justify-content:center;background:#0b120f;color:#fff;text-decoration:none;font:900 .62rem/1 Inter;letter-spacing:.1em;text-transform:uppercase}.agx-catalog__pager{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:26px}.agx-catalog__pager button{border:1px solid rgba(17,20,17,.22);background:transparent;min-height:42px;padding:0 16px;font:800 .62rem/1 Inter;letter-spacing:.09em;text-transform:uppercase}.agx-catalog__pager button:disabled{opacity:.3}@media(max-width:1100px){.agx-catalog__grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:760px){.agx-catalog__head{align-items:start;flex-direction:column}.agx-catalog__grid{display:flex;overflow-x:auto}.agx-product{flex:0 0 min(78vw,330px)}}`}</style>
    <div className="agx-catalog__head"><div><p className="agx-catalog__eyebrow">AgroNexus™ · Catálogo</p><h2>Escolha e explore.</h2></div><p className="agx-catalog__count">{scoped.length} anúncios · página {currentPage} de {totalPages}</p></div>
    <div className="agx-catalog__grid">{visible.map(offer=><article className="agx-product" key={offer.id}><ProductImage offer={offer}/><div className="agx-product__body"><div className="agx-product__meta">{offer.adNumber}</div><h3>{offer.name}</h3><div className="agx-product__price">{offer.formattedPrice||'Preço sob consulta'}</div>{offer.installmentText?<div className="agx-product__installments">{offer.installmentText}</div>:null}<div className="agx-product__status">{offer.stockLabel||'Consulte a AgroNexus™'}</div><a className="agx-product__open" href={`#/anuncio/${offer.id}`}>Ver anúncio</a></div></article>)}</div>
    {totalPages>1?<div className="agx-catalog__pager"><button type="button" disabled={currentPage===1} onClick={()=>setPage(v=>Math.max(1,v-1))}>← Anterior</button><span>{currentPage} / {totalPages}</span><button type="button" disabled={currentPage===totalPages} onClick={()=>setPage(v=>Math.min(totalPages,v+1))}>Próxima →</button></div>:null}
  </section>
}
