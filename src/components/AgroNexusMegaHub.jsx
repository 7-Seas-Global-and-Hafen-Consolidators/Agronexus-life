import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'

const WA = `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent('Olá! Vim pelo MegaHub AgroNexus™ e quero atendimento.')}`

const DEPTS = [
  { e: '🐶', t: 'Cães & Gatos', d: 'Ração, farmácia, brinquedos, higiene.', h: '/caes' },
  { e: '🐦', t: 'Aves & Psitacídeos', d: 'Calopsitas, papagaios, canários e exóticos.', h: '/aves' },
  { e: '🐠', t: 'Aquarismo & Reef', d: 'Peixes, corais, invertebrados e equipamentos.', h: '/aquarismo' },
  { e: '🦎', t: 'Répteis & Exóticos', d: 'Serpentes, lagartos, quelônios com procedência.', h: '/exoticos' },
  { e: '🐹', t: 'Pequenos Mamíferos', d: 'Coelhos, hamsters, porquinhos e chinchilas.', h: '/pequenos-mamiferos' },
  { e: '🌱', t: 'Plantas & Jardim', d: 'Frutíferas, ornamentais, nativas e kits.', h: '/plantas' },
  { e: '🐄', t: 'Rural & Fazenda', d: 'Gado, cavalos, ovinos e aves de fazenda.', h: '/rural' },
  { e: '💊', t: 'Saúde & Planos', d: 'Planos AgroNexus Life™ do essencial ao premium.', h: '/agronexus-life' },
]

const SOCIAL = [
  { e: '🧑‍⚕️', t: 'Espaço Veterinário', d: 'Clínicas parceiras: cadastre-se ou encontre um vet perto de você.', cta: 'Quero cadastrar minha clínica', h: '/contato' },
  { e: '🐾', t: 'Adoção Responsável', d: 'Conectamos lares a animais que precisam. Adote com orientação.', cta: 'Quero adotar', h: '/contato' },
  { e: '💚', t: 'ONGs & Doações', d: 'Apoie ONGs parceiras ou doe ração, itens e cuidado.', cta: 'Quero doar / apoiar', h: '/apoie' },
  { e: '🤝', t: 'Parcerias & Fornecedores', d: 'Criadores, lojas e marcas: venda no ecossistema AgroNexus™.', cta: 'Quero ser parceiro', h: '/apoie' },
]

export default function AgroNexusMegaHub() {
  return (
    <main className="mega-page">
      <style>{`
        .mega-page{min-height:100vh;background:#f4f6f4;padding:120px 20px 90px;font-family:Inter,system-ui,sans-serif}
        .mega-wrap{max-width:1280px;margin:0 auto}
        .mega-hero{text-align:left}
        .mega-hero h1{font-size:clamp(2.6rem,7vw,5.2rem);font-weight:900;letter-spacing:-.05em;color:#101828;line-height:.92}
        .mega-hero h1 span{color:#0e9f6e}
        .mega-hero p{color:#4c5b53;max-width:700px;margin:16px 0 30px;font-size:1.02rem}
        .mega-cta{display:inline-block;background:#0e9f6e;color:#fff;padding:14px 26px;border-radius:8px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;font-size:.75rem;text-decoration:none}
        .mega-cta:hover{background:#0b8a5e}
        .mega-h2{font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:900;color:#101828;margin:56px 0 18px;letter-spacing:-.03em}
        .mega-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .mega-card{background:#fff;border:1px solid #dce5df;border-radius:10px;padding:22px;display:flex;flex-direction:column;gap:8px;text-decoration:none}
        .mega-card:hover{border-color:#0e9f6e;transform:translateY(-2px)}
        .mega-card .e{font-size:2rem}
        .mega-card h3{font-size:1.05rem;font-weight:800;color:#101828}
        .mega-card p{color:#4c5b53;font-size:.85rem;flex:1}
        .mega-card a{color:#0e9f6e;font-weight:800;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
        @media(max-width:1000px){.mega-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.mega-grid{grid-template-columns:1fr}}
      `}</style>
      <div className="mega-wrap">
        <div className="mega-hero">
          <h1>Um tanque. <span>Todos os mundos.</span></h1>
          <p>Petz, Cobasi, Mercado Livre, plantas, reef, rural e répteis — tudo num único ecossistema. Biodiversidade, saúde, parcerias e adoção com procedência AgroNexus™.</p>
          <a className="mega-cta" href={WA} target="_blank" rel="noreferrer">Falar com o AgroNexus™</a>
        </div>

        <h2 className="mega-h2">Escolha seu mundo</h2>
        <div className="mega-grid">
          {DEPTS.map((d) => (
            <a className="mega-card" href={d.h} key={d.t}>
              <span className="e">{d.e}</span>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
              <span>Explorar →</span>
            </a>
          ))}
        </div>

        <h2 className="mega-h2">Cuidado, comunidade & negócio</h2>
        <div className="mega-grid">
          {SOCIAL.map((s) => (
            <div className="mega-card" key={s.t}>
              <span className="e">{s.e}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a href={s.h}>{s.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
