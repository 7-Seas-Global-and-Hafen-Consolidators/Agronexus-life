import { useMemo, useState } from 'react'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'
import { getMarketOffer, getRelatedOffers, publicOffer } from '../data/marketCatalog'
import '../styles/AgroNexusOfferPage.css'

const isLocalPublicMedia = (src = '') => typeof src === 'string' && (src.startsWith('/images/') || src.startsWith('/assets/') || src.startsWith('/agronexus-'))
const publicImages = (offer) => [...new Set([offer?.image, ...(offer?.images || [])].filter(isLocalPublicMedia))]

function imageWithFallback(images, index, setActiveImage, alt) {
  const src = images[index]
  if (!src) return <div className="agx-offer__image-fallback">AgroNexus™<small>Imagem indisponível</small></div>
  return <img src={src} alt={alt} onError={() => { const next = images.findIndex((item, itemIndex) => itemIndex > index && item); if (next >= 0) setActiveImage(next) }} />
}

export default function AgroNexusOfferPage({ offerId }) {
  const [activeImage, setActiveImage] = useState(0)
  const offer = useMemo(() => publicOffer(getMarketOffer(offerId)), [offerId])
  const related = useMemo(() => getRelatedOffers(offer).map(publicOffer), [offer])

  if (!offer) return <main className="agx-offer agx-offer--missing"><div className="agx-offer__missing-inner"><p>AgroNexus™ · Catálogo</p><h1>Oferta não encontrada.</h1><a href="#/">Voltar ao início</a></div></main>

  const images = publicImages(offer)
  const discount = offer.oldPrice && offer.price ? Math.max(0, Math.round((1 - offer.price / offer.oldPrice) * 100)) : 0
  const whatsappText = encodeURIComponent(`Olá! Quero saber mais sobre ${offer.name} — ${offer.adNumber}.`)
  const questionText = encodeURIComponent(`Olá! Tenho uma pergunta sobre ${offer.adNumber} — ${offer.name}.`)
  const asaas = AGRONEXUS_COMMERCE.paymentLinks.asaas
  const mercadoPago = AGRONEXUS_COMMERCE.paymentLinks.mercadoPago

  return <main className="agx-offer">
    <style>{`.agx-offer__checkout-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.agx-offer__checkout-option{display:flex;flex-direction:column;gap:8px;padding:14px;border:1px solid rgba(17,20,17,.14);background:#fff}.agx-offer__checkout-option a{min-height:46px;display:flex;align-items:center;justify-content:center;text-decoration:none;background:#0b120f;color:#fff;font-weight:900;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase}.agx-offer__checkout-option small{color:#727872;font-size:.58rem;line-height:1.45}.agx-offer__contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.agx-offer__contact-grid a{min-height:44px;display:flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid rgba(17,20,17,.18);color:#111411;font-weight:900;font-size:.64rem;letter-spacing:.08em;text-transform:uppercase}.agx-offer__brands{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}.agx-offer__brands span{padding:7px 9px;border:1px solid rgba(17,20,17,.15);font-size:.56rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;background:#fff}.agx-offer__brand-stamp{position:absolute;left:16px;bottom:16px;background:rgba(9,11,10,.86);color:#fff;padding:8px 11px;font-size:.58rem;font-weight:900;letter-spacing:.09em;text-transform:uppercase}.agx-offer__main-media{position:relative}.agx-offer__image-fallback{min-height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:linear-gradient(145deg,#07110d,#174b35);color:#fff;font:900 1rem Inter;letter-spacing:.12em;text-transform:uppercase}.agx-offer__image-fallback small{font-size:.6rem;color:#9ee5b3}@media(max-width:700px){.agx-offer__checkout-grid,.agx-offer__contact-grid{grid-template-columns:1fr}}`}</style>
    <section className="agx-offer__shell">
      <nav className="agx-offer__crumbs" aria-label="Navegação"><a href="#/">AgroNexus™</a><span>›</span><a href={`#/mundo/${offer.world}`}>{offer.world}</a><span>›</span><strong>{offer.adNumber}</strong></nav>
      <div className="agx-offer__hero-grid">
        <section className="agx-offer__gallery" aria-label="Galeria do produto"><div className="agx-offer__main-media">{imageWithFallback(images, activeImage, setActiveImage, offer.name)}<span className="agx-offer__brand-stamp">AgroNexus™ · {offer.adNumber}</span></div>{images.length > 1 && <div className="agx-offer__thumbs">{images.map((image,index)=><button key={`${image}-${index}`} type="button" onClick={()=>setActiveImage(index)} className={index===activeImage?'is-active':''} aria-label={`Ver imagem ${index+1}`}><img src={image} alt="" onError={(e)=>{e.currentTarget.style.display='none'}}/></button>)}</div>}</section>
        <aside className="agx-offer__buybox">
          <p className="agx-offer__ad-number">{offer.adNumber}</p><p className="agx-offer__eyebrow">{offer.categories?.join(' · ')}</p><h1>{offer.name}</h1>
          {offer.highlights?.length>0&&<ul className="agx-offer__highlights">{offer.highlights.slice(0,4).map(item=><li key={item}>{item}</li>)}</ul>}
          <div className="agx-offer__pricing">{offer.formattedOldPrice&&<div className="agx-offer__old-price">{offer.formattedOldPrice}</div>}<div className="agx-offer__price-row"><strong>{offer.formattedPrice||'Preço sob consulta'}</strong>{discount>0&&<span>{discount}% OFF</span>}</div>{offer.installmentText&&<p>{offer.installmentText}</p>}</div>
          <div className="agx-offer__availability"><span>Disponibilidade</span><strong>{offer.stockLabel||'Consulte a AgroNexus™'}</strong></div>
          <div className="agx-offer__delivery"><span>Entrega</span><p>{offer.delivery||'Condições confirmadas no atendimento antes do fechamento.'}</p></div>
          <div className="agx-offer__payments"><h2>Comprar / pagar</h2><p>Pix · boleto bancário · cartão de crédito · até 5x no cartão.</p><div className="agx-offer__checkout-grid"><div className="agx-offer__checkout-option"><a href={asaas.url} target="_blank" rel="noreferrer">Pagar com Asaas ↗</a><small>{asaas.disclosure}</small></div><div className="agx-offer__checkout-option"><a href={mercadoPago.url} target="_blank" rel="noreferrer">Pagar com Mercado Pago ↗</a><small>{mercadoPago.disclosure}</small></div></div><div className="agx-offer__payment-pills">{AGRONEXUS_COMMERCE.paymentMethods.map(method=><span key={method.id}>{method.label}</span>)}</div><div className="agx-offer__brands">{AGRONEXUS_COMMERCE.cardBrands.map(brand=><span key={brand}>{brand}</span>)}</div></div>
          <div className="agx-offer__contact-grid"><a href={`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${whatsappText}`} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={AGRONEXUS_COMMERCE.contactLinks.telegram.url} target="_blank" rel="noreferrer">Telegram ↗</a></div>
        </aside>
      </div>
      <section className="agx-offer__content-grid"><article className="agx-offer__section"><p className="agx-offer__section-kicker">Essencial</p><h2>O que você precisa saber</h2><p>{offer.description}</p></article>{offer.attributes?.length>0&&<article className="agx-offer__section"><p className="agx-offer__section-kicker">Ficha</p><h2>Características</h2><dl className="agx-offer__specs">{offer.attributes.map(([label,value])=><div key={`${label}-${value}`}><dt>{label}</dt><dd>{String(value)}</dd></div>)}</dl></article>}</section>
      <section className="agx-offer__qa"><div><p className="agx-offer__section-kicker">Atendimento direto</p><h2>Perguntas e respostas</h2><p>Use o número do anúncio no atendimento para localizar rapidamente este item.</p></div><a href={`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${questionText}`} target="_blank" rel="noreferrer">Fazer uma pergunta</a></section>
      {related.length>0&&<section className="agx-offer__related"><p className="agx-offer__section-kicker">Continue explorando</p><h2>Relacionados</h2><div className="agx-offer__related-grid">{related.map(item=>{const img=publicImages(item)[0];return <a key={item.id} href={`#/anuncio/${item.id}`} className="agx-offer__card"><div className="agx-offer__card-media">{img?<img src={img} alt={item.name} loading="lazy"/>:<div className="agx-offer__image-fallback">AgroNexus™</div>}</div><div className="agx-offer__card-copy"><span>{item.adNumber}</span><strong>{item.name}</strong><b>{item.formattedPrice||'Preço sob consulta'}</b></div></a>})}</div></section>}
    </section>
  </main>
}
