import { Link } from 'react-router-dom'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'
import AgroNexusMarketSpotlight from '../components/AgroNexusMarketSpotlight'

const DEPARTMENTS = [
  { icon: '🦜', name: 'Aves', to: '/aves', desc: 'Psitacídeos, canários e exóticos' },
  { icon: '🐠', name: 'Peixes & Aquarismo', to: '/aquarismo', desc: 'Água doce e marinha' },
  { icon: '🪸', name: 'Corais & Reef', to: '/corais', desc: 'Corais e invertebrados' },
  { icon: '🦎', name: 'Répteis', to: '/repteis', desc: 'Serpentes, lagartos e quelônios' },
  { icon: '🐹', name: 'Pequenos Mamíferos', to: '/pequenos-mamiferos', desc: 'Roedores e pequenos' },
  { icon: '🌱', name: 'Plantas', to: '/plantas', desc: 'Frutíferas, nativas e ornamentais' },
  { icon: '🌿', name: 'Plantas Aquáticas', to: '/plantas-aquaticas', desc: 'Flora para aquários' },
  { icon: '🌳', name: 'Bonsais', to: '/bonsais', desc: 'Arte viva' },
  { icon: '🌸', name: 'Orquídeas & Flores', to: '/orquideas', desc: 'Flores raras' },
  { icon: '🍎', name: 'Alimentação', to: '/alimentacao', desc: 'Rações e nutrição' },
  { icon: '💊', name: 'Saúde & Farmácia', to: '/saude', desc: 'Medicamentos e bem-estar' },
  { icon: '🧰', name: 'Equipamentos', to: '/equipamentos', desc: 'Aquários, gaiolas e habitats' },
  { icon: '🐶', name: 'Cães', to: '/caes', desc: 'Tudo para cães' },
  { icon: '🐱', name: 'Gatos', to: '/gatos', desc: 'Tudo para gatos' },
]

const BENEFITS = [
  { icon: '🚚', title: 'Envio Brasil inteiro', desc: 'Embalagem viva e rastreio' },
  { icon: '💳', title: 'Até 5x sem juros', desc: 'Pix, boleto e cartão' },
  { icon: '🛡️', title: 'Procedência garantida', desc: 'Origem e responsável em cada registro' },
  { icon: '💬', title: 'Atendimento humano', desc: 'WhatsApp e Telegram' },
]

export default function AgroNexusSuperHome() {
  const wa = `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent('Olá! Quero conhecer a AgroNexus™.')}`

  return (
    <main className="sh">
      <style>{`
        /* RAIO-X global: mata overlay que bloqueia clique */
        [class*="skin"],[class*="Skin"],[class*="overlay"],[class*="Overlay"],
        [class*="beacon"],[class*="Beacon"],[class*="floating"],[class*="Floating"]{pointer-events:none!important;}
        [class*="skin"] a,[class*="skin"] button,[class*="beacon"] a,[class*="beacon"] button,
        [class*="floating"] a,[class*="floating"] button{pointer-events:auto!important;}

        .sh{background:#f4f6f4;color:#101828;font-family:Inter,system-ui,sans-serif;padding-top:82px;}
        .sh__wrap{width:min(1380px,100% - 32px);margin:0 auto;}
        .sh__topbar{background:#0a1f16;color:#cfe8dc;font-size:.72rem;font-weight:700;}
        .sh__topbar-in{display:flex;gap:18px;justify-content:center;padding:8px 0;flex-wrap:wrap;}
        .sh__topbar a{color:#a3e635;text-decoration:none;font-weight:800;}
        .sh__head{background:#fff;border-bottom:1px solid #dce5df;position:sticky;top:0;z-index:50;}
        .sh__head-in{display:flex;align-items:center;gap:16px;padding:14px 0;flex-wrap:wrap;}
        .sh__logo{font-size:1.3rem;font-weight:900;letter-spacing:-.03em;color:#0a1f16;text-decoration:none;}
        .sh__search{flex:1;min-width:220px;display:flex;}
        .sh__search a{flex:1;display:flex;align-items:center;justify-content:space-between;border:1px solid #a9bbaf;border-radius:8px;padding:12px 16px;color:#5b6b62;font-size:.85rem;text-decoration:none;background:#fff;}
        .sh__nav{display:flex;gap:6px;flex-wrap:wrap;}
        .sh__nav a{color:#101828;text-decoration:none;font-size:.75rem;font-weight:800;padding:8px 12px;border-radius:6px;}
        .sh__nav a:hover{background:#e6f4ec;color:#0e9f6e;}
        .sh__hero{background:linear-gradient(120deg,#0a1f16,#0e4d33 55%,#1e3a2c);color:#fff;border-radius:14px;padding:clamp(28px,5vw,64px);margin-top:20px;}
        .sh__hero h1{font-size:clamp(2.2rem,6vw,4.6rem);font-weight:900;letter-spacing:-.05em;line-height:.95;margin:0;}
        .sh__hero h1 span{color:#a3e635;}
        .sh__hero p{color:#cfe8dc;max-width:640px;margin:16px 0 24px;}
        .sh__hero-cta{display:flex;gap:10px;flex-wrap:wrap;}
        .sh__hero-cta a{padding:13px 22px;border-radius:8px;font-weight:900;font-size:.8rem;text-decoration:none;letter-spacing:.05em;}
        .sh__hero-cta .go{background:#a3e635;color:#0a1f16;}
        .sh__hero-cta .ghost{border:1px solid rgba(255,255,255,.4);color:#fff;}
        .sh__benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:22px 0;}
        .sh__benefit{background:#fff;border:1px solid #dce5df;border-radius:10px;padding:16px;}
        .sh__benefit .i{font-size:1.4rem;}
        .sh__benefit b{display:block;margin:8px 0 4px;font-size:.85rem;}
        .sh__benefit span{color:#5b6b62;font-size:.72rem;}
        .sh__dept-title{font-size:clamp(1.4rem,3vw,2.2rem);font-weight:900;letter-spacing:-.04em;margin:26px 0 14px;}
        .sh__depts{display:grid;grid-template-columns:repeat(7,1fr);gap:12px;}
        .sh__dept{background:#fff;border:1px solid #dce5df;border-radius:10px;padding:18px 12px;text-align:center;text-decoration:none;color:#101828;}
        .sh__dept:hover{border-color:#0e9f6e;transform:translateY(-2px);}
        .sh__dept .i{font-size:1.8rem;}
        .sh__dept b{display:block;margin:8px 0 4px;font-size:.8rem;}
        .sh__dept span{color:#5b6b62;font-size:.66rem;}
        @media(max-width:1100px){.sh__depts{grid-template-columns:repeat(4,1fr);}.sh__benefits{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:620px){.sh__depts{grid-template-columns:repeat(2,1fr);}.sh__benefits{grid-template-columns:1fr;}}
      `}</style>

      <div className="sh__topbar">
        <div className="sh__wrap sh__topbar-in">
          <span>🚚 Envio Brasil inteiro</span>
          <span>💳 Até 5x sem juros</span>
          <a href={wa} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          <a href={AGRONEXUS_COMMERCE.contactLinks.telegram.url} target="_blank" rel="noreferrer">✈️ Telegram</a>
        </div>
      </div>

      <div className="sh__head">
        <div className="sh__wrap sh__head-in">
          <Link to="/" className="sh__logo">AgroNexus™</Link>
          <div className="sh__search">
            <Link to="/marketplace">Buscar espécie, ração, coral, planta… <span>🔍</span></Link>
          </div>
          <nav className="sh__nav">
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/mercado-de-plantas">Plantas</Link>
            <Link to="/rural">Rural</Link>
            <Link to="/agronexus-life">Planos</Link>
            <Link to="/apoie">Apoie</Link>
          </nav>
        </div>
      </div>

      <div className="sh__wrap">
        <section className="sh__hero">
          <h1>Tudo para a sua <span>biodiversidade.</span></h1>
          <p>Do brinquedo ao medicamento, da ração à muda rara. Aves, aquarismo, reef, répteis, plantas e muito mais num único ecossistema.</p>
          <div className="sh__hero-cta">
            <Link className="go" to="/marketplace">Explorar tudo</Link>
            <Link className="ghost" to="/mercado-de-plantas">Mercado de Plantas</Link>
          </div>
        </section>

        <section className="sh__benefits">
          {BENEFITS.map((b) => (
            <div className="sh__benefit" key={b.title}>
              <span className="i">{b.icon}</span>
              <b>{b.title}</b>
              <span>{b.desc}</span>
            </div>
          ))}
        </section>

        <h2 className="sh__dept-title">Compre por departamento</h2>
        <section className="sh__depts">
          {DEPARTMENTS.map((d) => (
            <Link className="sh__dept" to={d.to} key={d.name}>
              <span className="i">{d.icon}</span>
              <b>{d.name}</b>
              <span>{d.desc}</span>
            </Link>
          ))}
        </section>

        <div style={{ margin: '30px 0 60px' }}>
          <AgroNexusMarketSpotlight title="Em destaque agora" limit={12} />
        </div>
      </div>
    </main>
  )
}
