import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const TOOLS=[
  {icon:'🐠',title:'Calculadora de Aquário',to:'/ferramentas/calculadora-aquario'},
  {icon:'🌱',title:'Calculadora de Pomar',to:'/ferramentas/calculadora-pomar'},
  {icon:'🧠',title:'Desafio Biodiversidade',to:'/ferramentas/desafio-biodiversidade'},
]

const CONTEXT=[
  {match:['/aquarismo','/corais'],icon:'🐠',label:'Calcular meu aquário',to:'/ferramentas/calculadora-aquario'},
  {match:['/plantas','/mercado-de-plantas','/bonsais','/orquideas'],icon:'🌱',label:'Calcular meu pomar',to:'/ferramentas/calculadora-pomar'},
  {match:['/pequenos-mamiferos','/mamiferos'],icon:'🐹',label:'Mamíferos & produtos',to:'/mercado-de-mamiferos'},
  {match:['/repteis','/exoticos','/agronexus-exoticos'],icon:'🦎',label:'Répteis & exóticos',to:'/mercado-de-exoticos'},
  {match:['/caes','/gatos'],icon:'🐶',label:'Mercado Pet',to:'/mercado-pet'},
]

export default function AgroNexusToolsWidget(){
  const [open,setOpen]=useState(false)
  const {pathname}=useLocation()
  const ctx=CONTEXT.find(c=>c.match.some(p=>pathname===p||pathname.startsWith(`${p}/`)))
  return (
    <>
      <style>{`
        .agx-tools-dock{position:fixed;right:14px;bottom:14px;z-index:115;font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;align-items:flex-end;gap:8px}
        .agx-tools-context,.agx-tools-toggle{border:0;border-radius:999px;padding:11px 16px;font-weight:900;font-size:.75rem;text-decoration:none;box-shadow:0 8px 24px rgba(16,24,40,.18);cursor:pointer}
        .agx-tools-context{background:#fff;color:#101828;border:1px solid #d0d5dd}
        .agx-tools-toggle{background:#101828;color:#fff}
        .agx-tools-panel{width:min(310px,calc(100vw - 28px));background:#fff;border:1px solid #d0d5dd;border-radius:14px;padding:10px;box-shadow:0 14px 40px rgba(16,24,40,.2)}
        .agx-tools-panel a{display:flex;align-items:center;gap:10px;padding:11px;border-radius:9px;text-decoration:none;color:#101828;font-size:.8rem;font-weight:800}
        .agx-tools-panel a:hover{background:#f2f4f7}
        @media(max-width:620px){.agx-tools-dock{right:10px;bottom:10px}.agx-tools-context{display:none}}
      `}</style>
      <div className="agx-tools-dock">
        {open&&<div className="agx-tools-panel" role="menu">
          <Link to="/ferramentas" onClick={()=>setOpen(false)}>🧰 Todas as ferramentas</Link>
          {TOOLS.map(t=><Link key={t.to} to={t.to} onClick={()=>setOpen(false)}><span>{t.icon}</span>{t.title}</Link>)}
        </div>}
        {ctx&&<Link className="agx-tools-context" to={ctx.to}>{ctx.icon} {ctx.label}</Link>}
        <button className="agx-tools-toggle" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>🧰 Ferramentas</button>
      </div>
    </>
  )
}
