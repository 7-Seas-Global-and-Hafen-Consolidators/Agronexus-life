import { useMemo, useState } from 'react'
import { MARINE_CATALOG, MARINE_CATALOG_META } from '../data/marineCatalog.generated'
import { FISH_NATURE_PRODUCTS } from '../data/fishNature/products'
import { AGRONEXUS_COMMERCE, formatAdNumber } from '../data/commerceConfig'

const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const norm=(v='')=>String(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim()

function buyLink(product) {
  const text = encodeURIComponent(`Olá, quero o ${product.name} — ${formatAdNumber(product.adNumber)} — ${money.format(product.price)}.`)
  return `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${text}`
}

function cleanLocalMedia(product){
  const target=norm(product.name)
  const match=FISH_NATURE_PRODUCTS.find((item)=>{
    const candidate=norm(item?.name||item?.commonName||'')
    return candidate.length>5&&(candidate===target||target.includes(candidate)||candidate.includes(target))
  })
  return match?.primaryImage || match?.images?.find(Boolean) || null
}

function MarineMedia({product}){
  const clean=cleanLocalMedia(product)
  if(clean) return <img src={clean} alt={product.name} loading="lazy"/>
  return <div className="agx-marine__clean-placeholder"><span>AgroNexus™</span><strong>{product.name}</strong><small>{product.category||'Universo Marinho'}</small></div>
}

export default function AgroNexusMarineTunnel() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const categories = useMemo(() => ['Todos', ...new Set(MARINE_CATALOG.map((item) => item.category).filter(Boolean))], [])
  const items = useMemo(() => MARINE_CATALOG.filter((item) => {
    const q = query.trim().toLowerCase()
    const matchQuery = !q || `${item.name} ${item.sku || ''} ${item.category || ''}`.toLowerCase().includes(q)
    const matchCategory = category === 'Todos' || item.category === category
    return matchQuery && matchCategory
  }), [query, category])

  return <main className="agx-marine"><style>{`
    .agx-marine{background:#06110d;color:#f7f7f1;min-height:100vh;padding-top:88px}.agx-marine *{box-sizing:border-box}.agx-marine a{text-decoration:none;color:inherit}.agx-marine__hero{min-height:60vh;display:flex;align-items:flex-end;padding:80px 5vw 72px;background:radial-gradient(circle at 78% 30%,rgba(28,160,125,.24),transparent 32%),linear-gradient(135deg,#06110d,#0b2a20 52%,#102f27)}.agx-marine__hero-inner{width:min(1320px,100%);margin:auto}.agx-marine__eyebrow{font-size:.72rem;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:#89e0b3}.agx-marine h1{margin:18px 0 24px;max-width:950px;font-size:clamp(4rem,9vw,9.2rem);line-height:.84;letter-spacing:-.065em}.agx-marine__lead{max-width:740px;color:rgba(255,255,255,.72);font-size:clamp(1rem,1.5vw,1.25rem);line-height:1.7}.agx-marine__facts{display:flex;flex-wrap:wrap;gap:28px;margin-top:38px}.agx-marine__fact strong{display:block;font-size:1.7rem}.agx-marine__fact span{font-size:.7rem;color:rgba(255,255,255,.52);text-transform:uppercase;letter-spacing:.12em}.agx-marine__controls{position:sticky;top:72px;z-index:5;background:#f4f2eb;color:#111;padding:22px 5vw;border-bottom:1px solid rgba(0,0,0,.12)}.agx-marine__controls-inner{width:min(1320px,100%);margin:auto;display:flex;gap:12px;align-items:center;flex-wrap:wrap}.agx-marine__search{flex:1 1 320px;min-height:48px;border:1px solid #c8c6bf;background:#fff;padding:0 16px;font:inherit}.agx-marine__chips{display:flex;gap:8px;overflow:auto}.agx-marine__chip{white-space:nowrap;border:1px solid #c8c6bf;background:#fff;padding:11px 14px;font-size:.72rem;font-weight:800;cursor:pointer}.agx-marine__chip.is-active{background:#0b2a20;color:#fff}.agx-marine__catalog{background:#f4f2eb;color:#111;padding:54px 5vw 110px}.agx-marine__catalog-inner{width:min(1320px,100%);margin:auto}.agx-marine__catalog-head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin-bottom:34px}.agx-marine__catalog h2{margin:0;font-size:clamp(2.8rem,6vw,6rem);line-height:.9}.agx-marine__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.agx-marine__card{background:#fff;border:1px solid rgba(0,0,0,.12);display:flex;flex-direction:column}.agx-marine__image{aspect-ratio:3/4;background:#d9ddd8;overflow:hidden}.agx-marine__image img{width:100%;height:100%;object-fit:cover}.agx-marine__clean-placeholder{height:100%;padding:22px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(145deg,#07110d,#113828 58%,#2e5e49);color:#fff}.agx-marine__clean-placeholder span{font:900 .62rem Inter;letter-spacing:.14em;text-transform:uppercase;color:#9ee5b3}.agx-marine__clean-placeholder strong{margin-top:auto;font:650 clamp(1.7rem,2.5vw,3rem)/.92 'Space Grotesk';letter-spacing:-.05em}.agx-marine__clean-placeholder small{margin-top:12px;color:#c0d0c6}.agx-marine__body{display:flex;flex:1;flex-direction:column;padding:20px}.agx-marine__meta{display:flex;justify-content:space-between;gap:10px;color:#47705c;font-size:.66rem;font-weight:800;text-transform:uppercase}.agx-marine__card h3{margin:18px 0 22px;font-size:1.5rem}.agx-marine__pricing{margin-top:auto}.agx-marine__source-price{display:block;color:#888;text-decoration:line-through;font-size:.85rem}.agx-marine__price{display:block;margin-top:3px;font-size:2rem;font-weight:900}.agx-marine__discount{margin-top:6px;color:#0e6f48;font-size:.68rem;font-weight:900;text-transform:uppercase}.agx-marine__actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:20px}.agx-marine__button{min-height:45px;display:flex;align-items:center;justify-content:center;background:#0b2a20;color:#fff!important;font-size:.68rem;font-weight:900;text-transform:uppercase}.agx-marine__button--ghost{background:#fff!important;color:#0b2a20!important;border:1px solid #0b2a20}.agx-marine__payments{background:#0b2a20;padding:72px 5vw}.agx-marine__payments-inner{width:min(1320px,100%);margin:auto;display:grid;grid-template-columns:1.4fr 1fr;gap:70px}.agx-marine__paybuttons{display:grid;gap:10px}.agx-marine__paybuttons a{min-height:54px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.3);font-weight:900;text-transform:uppercase}@media(max-width:1080px){.agx-marine__grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:780px){.agx-marine__grid{grid-template-columns:repeat(2,1fr)}.agx-marine__payments-inner{grid-template-columns:1fr}}@media(max-width:520px){.agx-marine__grid{grid-template-columns:1fr}}
  `}</style>
  <section className="agx-marine__hero"><div className="agx-marine__hero-inner"><div className="agx-marine__eyebrow">AgroNexus™ · Universo Marinho</div><h1>Corais, peixes & vida marinha.</h1><p className="agx-marine__lead">Catálogo AgroNexus™ para corais, invertebrados, peixes e espécies marinhas.</p><div className="agx-marine__facts"><div className="agx-marine__fact"><strong>{MARINE_CATALOG_META.sourceCount||MARINE_CATALOG.length}</strong><span>itens</span></div><div className="agx-marine__fact"><strong>−10%</strong><span>sobre a referência observada</span></div></div></div></section>
  <section className="agx-marine__controls"><div className="agx-marine__controls-inner"><input className="agx-marine__search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar coral, peixe, SKU ou categoria…"/><div className="agx-marine__chips">{categories.map(item=><button key={item} className={`agx-marine__chip ${category===item?'is-active':''}`} onClick={()=>setCategory(item)}>{item}</button>)}</div></div></section>
  <section className="agx-marine__catalog"><div className="agx-marine__catalog-inner"><div className="agx-marine__catalog-head"><div><div className="agx-marine__eyebrow">Catálogo AgroNexus™</div><h2>{items.length} itens.</h2></div></div><div className="agx-marine__grid">{items.map(product=><article className="agx-marine__card" key={product.id}><div className="agx-marine__image"><MarineMedia product={product}/></div><div className="agx-marine__body"><div className="agx-marine__meta"><span>{product.category||'Marinho'}</span><span>{formatAdNumber(product.adNumber)}</span></div><h3>{product.name}</h3><div className="agx-marine__pricing"><span className="agx-marine__source-price">Referência {money.format(product.sourcePrice)}</span><strong className="agx-marine__price">{money.format(product.price)}</strong><div className="agx-marine__discount">AgroNexus™ · 10% abaixo</div></div><div className="agx-marine__actions"><a className="agx-marine__button" href={buyLink(product)} target="_blank" rel="noreferrer">Quero este</a><a className="agx-marine__button agx-marine__button--ghost" href={AGRONEXUS_COMMERCE.contactLinks.telegram.url} target="_blank" rel="noreferrer">Telegram</a></div></div></article>)}</div></div></section>
  <section className="agx-marine__payments"><div className="agx-marine__payments-inner"><div><div className="agx-marine__eyebrow">AgroNexus™ · Pagamentos</div><h2>Pix, boleto e cartões.</h2><p>{AGRONEXUS_COMMERCE.installmentLabel}</p></div><div className="agx-marine__paybuttons"><a href={AGRONEXUS_COMMERCE.paymentLinks.asaas.url} target="_blank" rel="noreferrer">Pagar com Asaas</a><a href={AGRONEXUS_COMMERCE.paymentLinks.mercadoPago.url} target="_blank" rel="noreferrer">Pagar com Mercado Pago</a></div></div></section>
  </main>
}
