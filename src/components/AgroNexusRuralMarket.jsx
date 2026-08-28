import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const WA = (msg) =>
  `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent(msg)}`

const RURAL = [
  { emoji: '🐄', nome: 'Gado de Corte & Leite', desc: 'Nelore, Girolando, Holandês. Lotes e matrizes.', cat: 'Gado' },
  { emoji: '🐎', nome: 'Cavalos & Muares', desc: 'Marcha, trabalho, esporte e criação.', cat: 'Equinos' },
  { emoji: '🐐', nome: 'Caprinos & Ovinos', desc: 'Dorper, Texel, Boer, leite e corte.', cat: 'Ovinos' },
  { emoji: '🐖', nome: 'Suínos', desc: 'Leitões, matrizes e terminação.', cat: 'Suínos' },
  { emoji: '🐇', nome: 'Coelhos & Pequenos', desc: 'Criação, companhia e reprodução.', cat: 'Pequenos' },
  { emoji: '🐦', nome: 'Aves de Fazenda', desc: 'Galinhas poedeiras, caipiras e índio gigante.', cat: 'Aves' },
  { emoji: '🐟', nome: 'Peixe Vivo', desc: 'Alevinos e matrizes para tanque.', cat: 'Peixes' },
  { emoji: '🐕', nome: 'Cães de Trabalho', desc: 'Pastoreio e guarda, com procedência.', cat: 'Cães' },
]

export default function AgroNexusRuralMarket() {
  return (
    <main className="rural-page">
      <style>{`
        .rural-page{min-height:100vh;background:#f4f6f4;padding:120px 20px 80px;font-family:Inter,system-ui,sans-serif}
        .rural-wrap{max-width:1280px;margin:0 auto}
        .rural-hero h1{font-size:clamp(2.4rem,6vw,4.5rem);font-weight:900;letter-spacing:-.04em;color:#101828;line-height:.95}
        .rural-hero p{color:#4c5b53;max-width:640px;margin:14px 0 26px}
        .rural-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:26px}
        .rural-card{background:#fff;border:1px solid #dce5df;border-radius:10px;padding:22px;display:flex;flex-direction:column;gap:8px}
        .rural-card .e{font-size:2rem}
        .rural-card h3{font-size:1.05rem;font-weight:800;color:#101828}
        .rural-card p{color:#4c5b53;font-size:.85rem;flex:1}
        .rural-card a{background:#0e9f6e;color:#fff;text-align:center;padding:11px;border-radius:6px;font-weight:800;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
        .rural-card a:hover{background:#0b8a5e}
        @media(max-width:1000px){.rural-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.rural-grid{grid-template-columns:1fr}}
      `}</style>
      <div className="rural-wrap">
        <div className="rural-hero">
          <h1>Rural & Animais de Fazenda.</h1>
          <p>Estilo MF Rural: negociação direta, procedência e preço justo. Gado, cavalos, ovinos, suínos e aves — tudo com atendimento AgroNexus™.</p>
        </div>
        <div className="rural-grid">
          {RURAL.map((r) => (
            <div className="rural-card" key={r.nome}>
              <span className="e">{r.emoji}</span>
              <h3>{r.nome}</h3>
              <p>{r.desc}</p>
              <a href={WA(`Olá! Tenho interesse em: ${r.nome}`)} target="_blank" rel="noreferrer">Negociar agora</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
