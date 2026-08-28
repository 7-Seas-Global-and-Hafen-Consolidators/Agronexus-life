import { Link } from 'react-router-dom'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const SEALS=[
 {icon:'🔄',title:'Troca em 7 dias',desc:'Não gostou? A gente resolve sem burocracia.'},
 {icon:'🚚',title:'Envio Brasil inteiro',desc:'Embalagem adequada e código de rastreio.'},
 {icon:'💳',title:'Até 5x sem juros',desc:'Pix, boleto e cartão.'},
 {icon:'💬',title:'Atendimento humano',desc:'WhatsApp e Telegram com especialista.'},
]
const IMPACT=[
 {n:'+14',d:'mundos conectados',cta:'Explorar',to:'/'},
 {n:'194',d:'anúncios no catálogo',cta:'Ver catálogo',to:'/marketplace'},
 {n:'100%',d:'envios com rastreio',cta:'Apoiar',to:'/apoie'},
 {n:'5x',d:'sem juros no cartão',cta:'Planos',to:'/agronexus-life'},
]
export default function AgroNexusTrust(){
 const wa=`${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent('Olá! Quero contar como foi minha experiência com a AgroNexus™.')}`
 return <section className="trust"><style>{`.trust{padding:34px 20px;background:#fff;font-family:Inter,system-ui,sans-serif;color:#101828}.trust__w{max-width:1200px;margin:auto}.trust__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.trust article{border:1px solid #eaecf0;border-radius:12px;padding:16px}.trust article b{display:block;margin:8px 0 4px}.trust article span{color:#667085;font-size:.78rem}.trust__impact{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:14px}.trust__impact strong{font-size:1.45rem}.trust__impact a{display:block;margin-top:8px;color:#1570ef;font-weight:800;text-decoration:none}.trust__review{margin-top:16px;padding:14px;border-radius:10px;background:#f9fafb}.trust__review a{font-weight:900;color:#12b76a;text-decoration:none}@media(max-width:780px){.trust__grid,.trust__impact{grid-template-columns:repeat(2,1fr)}}`}</style><div className="trust__w"><h2>Confiança AgroNexus™</h2><div className="trust__grid">{SEALS.map(s=><article key={s.title}><i>{s.icon}</i><b>{s.title}</b><span>{s.desc}</span></article>)}</div><div className="trust__impact">{IMPACT.map(x=><article key={x.d}><strong>{x.n}</strong><span>{x.d}</span><Link to={x.to}>{x.cta}</Link></article>)}</div><div className="trust__review">Já comprou, apoiou ou falou com a gente? <a href={wa} target="_blank" rel="noreferrer">Conte sua experiência pelo WhatsApp.</a></div></div></section>
}
