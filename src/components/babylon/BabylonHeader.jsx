import { useEffect, useState } from 'react'
import AgroNexusTranslate from '../AgroNexusTranslate'

const NAV_ITEMS = [
  { label: 'Mundos', href: '#/mundo/aves' },
  { label: 'Aquarismo', href: '#/mundo/aquarismo' },
  { label: 'Botânica', href: '#/mundo/plantas' },
  { label: 'Saúde', href: '#/mundo/saude' },
  { label: 'Contato', href: '#/contato' },
  { label: 'Apoie', href: '#/apoie' },
]

export default function BabylonHeader() {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36)
    const onHash = () => setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  return (
    <>
      <style>{`
        .agx-header{position:fixed;inset:0 0 auto 0;z-index:1000;height:${compact ? '72px' : '92px'};display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;gap:24px;padding:0 clamp(22px,5.6vw,96px);background:rgba(9,11,10,${compact ? '.96' : '.78'});border-bottom:1px solid rgba(255,255,255,.1);backdrop-filter:blur(18px);color:#fff;transition:height .2s ease,background .2s ease}
        .agx-header__brand{color:#fff;text-decoration:none;font:800 1.08rem/1 Inter,sans-serif;letter-spacing:-.035em;white-space:nowrap}.agx-header__brand sup{font-size:.48em;top:-.45em;position:relative}
        .agx-header__nav{justify-self:end;display:flex;gap:clamp(14px,2vw,34px);align-items:center}.agx-header__nav a{color:rgba(255,255,255,.72);text-decoration:none;font:800 .64rem/1 Inter,sans-serif;letter-spacing:.11em;text-transform:uppercase}.agx-header__nav a:hover{color:#fff}
        .agx-header__explore{min-height:42px;display:inline-flex;align-items:center;padding:0 18px;border:1px solid rgba(255,255,255,.26);color:#fff;text-decoration:none;font:900 .62rem/1 Inter,sans-serif;letter-spacing:.12em;text-transform:uppercase}
        .agx-header__translate{min-width:132px}.agx-translate{display:flex;align-items:center;gap:8px}.agx-translate__label{font:900 .56rem/1 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)}.agx-translate .goog-te-gadget{font-size:0}.agx-translate .goog-te-gadget-simple{background:transparent;border:1px solid rgba(255,255,255,.2);padding:6px 8px}.agx-translate .goog-te-gadget-simple span{color:#fff!important;font:800 .62rem/1 Inter,sans-serif}.agx-translate img{display:none!important}
        .agx-header__toggle{display:none;width:42px;height:42px;background:transparent;border:1px solid rgba(255,255,255,.2);color:#fff;font-size:1.2rem}
        .agx-mobile{display:none}
        @media(max-width:1050px){.agx-header{grid-template-columns:auto 1fr auto}.agx-header__nav,.agx-header__explore{display:none}.agx-header__translate{justify-self:end}.agx-header__toggle{display:block}.agx-mobile{position:fixed;inset:72px 0 0 0;z-index:999;background:#090b0a;color:#fff;padding:28px 24px 40px;display:${open ? 'block' : 'none'};overflow:auto}.agx-mobile a{display:flex;justify-content:space-between;padding:22px 0;border-bottom:1px solid rgba(255,255,255,.13);color:#fff;text-decoration:none;font:600 clamp(1.6rem,8vw,3rem)/1 'Space Grotesk',Inter,sans-serif;letter-spacing:-.04em}.agx-mobile__translate{margin-top:28px;max-width:240px}}
        @media(max-width:620px){.agx-header__translate{display:none}}
      `}</style>

      <header className="agx-header">
        <a href="#/" className="agx-header__brand" aria-label="AgroNexus">AgroNexus<sup>™</sup></a>
        <nav className="agx-header__nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="agx-header__translate"><AgroNexusTranslate /></div>
        <a href="#/mundo/aves" className="agx-header__explore">Explorar</a>
        <button type="button" className="agx-header__toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? '×' : '☰'}</button>
      </header>

      <div className="agx-mobile">
        {NAV_ITEMS.map((item) => <a key={`m-${item.href}`} href={item.href}><span>{item.label}</span><span>↗</span></a>)}
        <div className="agx-mobile__translate"><AgroNexusTranslate /></div>
      </div>
    </>
  )
}
