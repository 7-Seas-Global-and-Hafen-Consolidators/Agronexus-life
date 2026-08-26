import { SPECIES_MEDIA_WAVE } from '../data/marketCatalogSpeciesMediaWave'

export default function AgroNexusSpeciesGallery({ category = null }) {
  const items = category
    ? SPECIES_MEDIA_WAVE.filter((item) => item.categories?.includes(category))
    : SPECIES_MEDIA_WAVE

  if (!items.length) return null

  return (
    <section className="agx-species" aria-label="Acervo visual de biodiversidade AgroNexus">
      <style>{`
        .agx-species{background:#08100c;color:#f4f1e9;padding:clamp(72px,9vw,128px) clamp(22px,5.5vw,88px)}
        .agx-species__head{display:grid;grid-template-columns:minmax(150px,.35fr) minmax(0,1.65fr);gap:clamp(30px,7vw,110px);margin-bottom:44px}
        .agx-species__kicker{margin:0;color:#d4af37;font:900 .65rem/1 Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase}
        .agx-species h2{margin:0;max-width:980px;font:550 clamp(3rem,6vw,6.8rem)/.88 'Space Grotesk',Inter,sans-serif;letter-spacing:-.065em}
        .agx-species__intro{max-width:760px;margin:22px 0 0;color:rgba(244,241,233,.62);font:500 .9rem/1.7 Inter,sans-serif}
        .agx-species__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.14)}
        .agx-species__card{position:relative;aspect-ratio:4/5;overflow:hidden;background:#111b15}
        .agx-species__card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
        .agx-species__card:hover img{transform:scale(1.035)}
        .agx-species__shade{position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.82) 100%)}
        .agx-species__brand{position:absolute;top:14px;left:14px;padding:7px 9px;background:rgba(5,12,8,.82);font:900 .54rem/1 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase}
        .agx-species__copy{position:absolute;left:18px;right:18px;bottom:18px}.agx-species__copy small{display:block;margin-bottom:7px;color:#d4af37;font:900 .54rem/1 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase}.agx-species__copy h3{margin:0;font:650 clamp(1.1rem,1.8vw,1.55rem)/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.035em}
        @media(max-width:1050px){.agx-species__grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
        @media(max-width:720px){.agx-species__head{grid-template-columns:1fr}.agx-species__grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.agx-species__card{flex:0 0 min(78vw,330px);scroll-snap-align:start}}
      `}</style>
      <div className="agx-species__head"><p className="agx-species__kicker">AgroNexus™ · Acervo real</p><div><h2>Psitacídeos em imagem.</h2><p className="agx-species__intro">Fotografias já preservadas no próprio acervo AgroNexus™ agora deixam de ficar enterradas no repositório e passam a integrar a experiência pública de biodiversidade.</p></div></div>
      <div className="agx-species__grid">{items.map((item) => <article className="agx-species__card" key={item.id}><img src={item.image} alt={item.name} loading="lazy"/><div className="agx-species__shade"/><div className="agx-species__brand">AgroNexus™</div><div className="agx-species__copy"><small>Referência visual</small><h3>{item.name}</h3></div></article>)}</div>
    </section>
  )
}