import { useMemo, useState } from 'react'
import EXOTIC_CATALOG from '../data/exoticCatalog.generated'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const money = (value) => value == null ? 'Preço sob consulta' : new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value)

export default function AgroNexusExotics(){
  const [query,setQuery]=useState('')
  const [category,setCategory]=useState('Todos')
  const [status,setStatus]=useState('todos')

  const categories=useMemo(()=>['Todos',...new Set(EXOTIC_CATALOG.flatMap((item)=>item.categories||[]).filter((item)=>!['Animais','Exóticos'].includes(item)))],[ ])
  const filtered=useMemo(()=>EXOTIC_CATALOG.filter((item)=>{
    const haystack=[item.name,item.description,...(item.categories||[])].join(' ').toLowerCase()
    const matchesQuery=!query||haystack.includes(query.toLowerCase())
    const matchesCategory=category==='Todos'||item.categories?.includes(category)
    const matchesStatus=status==='todos'||item.availability===status
    return matchesQuery&&matchesCategory&&matchesStatus
  }),[query,category,status])

  const availableCount=EXOTIC_CATALOG.filter((item)=>item.availability==='available').length
  const unavailableCount=EXOTIC_CATALOG.length-availableCount

  return <main className="agx-exotics">
    <style>{`
      .agx-exotics{background:#07110d;color:#f6f5ee;min-height:100vh;padding-top:96px}.agx-exotics *{box-sizing:border-box}
      .agx-exotics__hero{padding:clamp(70px,10vw,150px) clamp(20px,6vw,90px) 70px;background:radial-gradient(circle at 80% 10%,rgba(79,154,104,.24),transparent 30%),linear-gradient(145deg,#07110d,#10271b)}
      .agx-exotics__wrap{width:min(1500px,100%);margin:0 auto}.agx-exotics__eyebrow{margin:0 0 18px;color:#9ee5b3;font:900 .68rem/1 Inter,sans-serif;letter-spacing:.17em;text-transform:uppercase}.agx-exotics h1{max-width:1100px;margin:0;font:650 clamp(4rem,9vw,9.2rem)/.83 'Space Grotesk',Inter,sans-serif;letter-spacing:-.07em}.agx-exotics__lead{max-width:760px;margin:28px 0 0;color:rgba(255,255,255,.68);font:500 clamp(1rem,1.5vw,1.25rem)/1.7 Inter,sans-serif}.agx-exotics__stats{display:flex;flex-wrap:wrap;gap:1px;margin-top:42px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.15);width:max-content;max-width:100%}.agx-exotics__stat{padding:15px 20px;background:#0b1812;font:800 .65rem/1.35 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}.agx-exotics__stat strong{display:block;margin-bottom:3px;color:#fff;font-size:1.1rem}
      .agx-exotics__catalog{padding:52px clamp(20px,6vw,90px) 110px;background:#eeeDE7;color:#101511}.agx-exotics__controls{display:grid;grid-template-columns:minmax(220px,1.5fr) 1fr 1fr;gap:10px;margin-bottom:26px}.agx-exotics__controls input,.agx-exotics__controls select{width:100%;min-height:50px;border:1px solid rgba(16,21,17,.18);background:#fff;padding:0 15px;font:700 .76rem Inter,sans-serif;color:#101511}.agx-exotics__count{margin:0 0 24px;color:#59625c;font:800 .66rem/1.4 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}.agx-exotics__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:rgba(16,21,17,.14);border:1px solid rgba(16,21,17,.14)}.agx-exotic-card{background:#fff;display:flex;flex-direction:column;min-width:0}.agx-exotic-card__media{position:relative;aspect-ratio:1/1;overflow:hidden;background:#dfe4de}.agx-exotic-card__media img{width:100%;height:100%;object-fit:cover;display:block}.agx-exotic-card__brand{position:absolute;left:12px;bottom:12px;background:rgba(7,17,13,.9);color:#fff;padding:7px 9px;font:900 .56rem/1 Inter,sans-serif;letter-spacing:.09em;text-transform:uppercase}.agx-exotic-card__status{position:absolute;right:12px;top:12px;padding:7px 9px;background:#eef9f0;color:#17532e;font:900 .55rem/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}.agx-exotic-card__status--off{background:#191d1a;color:#fff}.agx-exotic-card__body{display:flex;flex-direction:column;gap:10px;padding:20px;min-height:250px}.agx-exotic-card__ad{color:#8a6a22;font:900 .56rem/1 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase}.agx-exotic-card h2{margin:0;font:700 clamp(1.2rem,1.7vw,1.7rem)/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.035em}.agx-exotic-card__desc{margin:0;color:#687069;font:500 .76rem/1.5 Inter,sans-serif}.agx-exotic-card__variants{display:flex;flex-wrap:wrap;gap:5px}.agx-exotic-card__variants span{border:1px solid rgba(16,21,17,.16);padding:5px 7px;font:800 .54rem/1 Inter,sans-serif;text-transform:uppercase}.agx-exotic-card__price{margin-top:auto;font:850 1.1rem/1 Inter,sans-serif}.agx-exotic-card__actions{display:grid;grid-template-columns:1fr 1fr;gap:7px}.agx-exotic-card__actions a{min-height:40px;display:flex;align-items:center;justify-content:center;text-decoration:none;background:#0d2318;color:#fff;font:900 .57rem/1 Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}.agx-exotic-card__actions a:last-child{background:#efe6c8;color:#33280c}
      .agx-exotics__note{margin-top:26px;padding-top:20px;border-top:1px solid rgba(16,21,17,.16);color:#687069;font:600 .68rem/1.6 Inter,sans-serif}.agx-exotics__note strong{color:#101511}
      @media(max-width:1150px){.agx-exotics__grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
      @media(max-width:850px){.agx-exotics__controls{grid-template-columns:1fr}.agx-exotics__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:560px){.agx-exotics__grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.agx-exotic-card{flex:0 0 82vw;scroll-snap-align:start}.agx-exotics h1{font-size:clamp(3.4rem,18vw,5.6rem)}}
    `}</style>

    <section className="agx-exotics__hero"><div className="agx-exotics__wrap">
      <p className="agx-exotics__eyebrow">AgroNexus™ · Biodiversidade · Exóticos</p>
      <h1>Exóticos.<br/>Todos entram.</h1>
      <p className="agx-exotics__lead">Catálogo integral AgroNexus™ com animais exóticos, registros disponíveis e indisponíveis preservados, imagens do acervo conectado e variações de gênero quando registradas.</p>
      <div className="agx-exotics__stats"><div className="agx-exotics__stat"><strong>{EXOTIC_CATALOG.length}</strong>registros</div><div className="agx-exotics__stat"><strong>{availableCount}</strong>disponíveis</div><div className="agx-exotics__stat"><strong>{unavailableCount}</strong>indisponíveis preservados</div></div>
    </div></section>

    <section className="agx-exotics__catalog"><div className="agx-exotics__wrap">
      <div className="agx-exotics__controls"><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar no catálogo exótico" aria-label="Buscar"/><select value={category} onChange={(e)=>setCategory(e.target.value)}>{categories.map((item)=><option key={item}>{item}</option>)}</select><select value={status} onChange={(e)=>setStatus(e.target.value)}><option value="todos">Todos os status</option><option value="available">Disponíveis</option><option value="unavailable">Indisponíveis</option></select></div>
      <p className="agx-exotics__count">{filtered.length} registros exibidos · identidade pública AgroNexus™</p>
      <div className="agx-exotics__grid">{filtered.map((item)=><article className="agx-exotic-card" key={item.id}><div className="agx-exotic-card__media"><img src={item.image} alt={item.name} loading="lazy" referrerPolicy="no-referrer"/><span className="agx-exotic-card__brand">AgroNexus™</span><span className={`agx-exotic-card__status ${item.availability==='unavailable'?'agx-exotic-card__status--off':''}`}>{item.stockLabel}</span></div><div className="agx-exotic-card__body"><div className="agx-exotic-card__ad">Anúncio #{item.adNumber}</div><h2>{item.name}</h2><p className="agx-exotic-card__desc">{item.description||'Registro do catálogo exótico AgroNexus™.'}</p>{item.variants?.length?<div className="agx-exotic-card__variants">{item.variants.map((variant)=><span key={`${item.id}-${variant.label}`}>{variant.label} · {variant.available?'disp.':'indisp.'}</span>)}</div>:null}<div className="agx-exotic-card__price">{money(item.price)}</div><div className="agx-exotic-card__actions"><a href={AGRONEXUS_COMMERCE.contactLinks.whatsapp.url} target="_blank" rel="noreferrer">WhatsApp</a><a href={AGRONEXUS_COMMERCE.contactLinks.telegram.url} target="_blank" rel="noreferrer">Telegram</a></div></div></article>)}</div>
      <p className="agx-exotics__note"><strong>AgroNexus™</strong> preserva também registros atualmente indisponíveis para manter o acervo completo. Disponibilidade e condições finais são confirmadas no atendimento antes de qualquer operação.</p>
    </div></section>
  </main>
}
