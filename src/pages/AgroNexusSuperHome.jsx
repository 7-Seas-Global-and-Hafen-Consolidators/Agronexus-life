import { Link } from 'react-router-dom'
import { AGRONEXUS_COMMERCE } from '../data/commerceConfig'
import { MARINE_CATALOG } from '../data/marineCatalog.generated'
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
  { icon: '🐱', name: 'Gatos', to: '/gatos', desc: 'Tudo para gatos' }
]

const NAV = [
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/mercado-de-plantas', label: 'Plantas' },
  { to: '/rural', label: 'Rural' },
  { to: '/mercado-pet', label: 'Pet' },
  { to: '/exoticos', label: 'Exóticos' },
  { to: '/ferramentas', label: 'Ferramentas' },
  { to: '/agronexus-life', label: 'Planos' },
  { to: '/contato', label: 'Contato' }
]

const TOOLS = [
  { to: '/ferramentas/calculadora-aquario', label: 'Calculadora de aquário', desc: 'Volume, carga e partida.' },
  { to: '/ferramentas/calculadora-pomar', label: 'Calculadora de pomar', desc: 'Espaço e mudas.' },
  { to: '/ferramentas/desafio-biodiversidade', label: 'Desafio biodiversidade', desc: 'Quiz do acervo.' }
]

const BENEFITS = [
  { icon: '🚚', title: 'Envio Brasil inteiro', desc: 'Embalagem adequada e rastreio' },
  { icon: '💳', title: 'Até 5x sem juros', desc: 'Pix, boleto e cartão' },
  { icon: '🛡️', title: 'Procedência garantida', desc: 'Origem e responsável em cada registro' },
  { icon: '💬', title: 'Atendimento humano', desc: 'WhatsApp e Telegram' }
]

function tunnelPhoto(index) {
  const item = MARINE_CATALOG[index]
  return item?.image || item?.sourceImage || ''
}

const TUNNELS = [
  {
    to: '/corais',
    kicker: 'Túnel',
    name: 'Universo marinho · Corais',
    desc: 'Entre no túnel de corais, LPS, SPS e invertebrados.',
    image: tunnelPhoto(0)
  },
  {
    to: '/aquarismo',
    kicker: 'Túnel',
    name: 'Aquarismo',
    desc: 'Água doce, marinha e o acervo que alimenta o túnel.',
    image: tunnelPhoto(2)
  },
  {
    to: '/plantas-aquaticas',
    kicker: 'Túnel',
    name: 'Plantas aquáticas',
    desc: 'Flora de aquário no mundo botânico.',
    image: tunnelPhoto(5)
  }
]

export default function AgroNexusSuperHome() {
  const wa = `${AGRONEXUS_COMMERCE.contactLinks.whatsapp.url}?text=${encodeURIComponent('Olá! Quero conhecer a AgroNexus™.')}`
  const tg = AGRONEXUS_COMMERCE.contactLinks.telegram.url

  return (
    <main className="sh">
      <style>{`
        .sh{--ink:#3b2a22;--muted:#7a5c4a;--paper:#fff7ef;--card:#fffdf8;--line:#f0d7c4;--accent:#c45c26;--accent-2:#2f6f9f;--wash:#ffe8d6;--sky:#e7f3fb;color:var(--ink);background:linear-gradient(180deg,var(--sky) 0%,var(--paper) 28%,#fff4e8 100%);font-family:Inter,system-ui,sans-serif;padding-top:0}
        .sh a{color:inherit}
        .sh__wrap{width:min(1180px,calc(100% - 28px));margin:0 auto}
        .sh__topbar{background:#fff4e6;border-bottom:1px solid var(--line);font-size:.72rem;font-weight:800}
        .sh__topbar-in{display:flex;gap:14px;justify-content:center;padding:8px 12px;flex-wrap:wrap;color:var(--muted)}
        .sh__topbar a{color:var(--accent-2);text-decoration:none;min-height:32px;display:inline-flex;align-items:center}
        .sh__head{background:rgba(255,253,248,.94);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:40;backdrop-filter:blur(10px)}
        .sh__head-in{display:flex;align-items:center;gap:12px;padding:12px 0;flex-wrap:wrap}
        .sh__logo{font-size:1.15rem;font-weight:900;text-decoration:none;color:var(--accent);min-height:44px;display:inline-flex;align-items:center}
        .sh__search{flex:1;min-width:min(100%,220px)}
        .sh__search a{display:flex;justify-content:space-between;align-items:center;gap:8px;border:1px solid var(--line);border-radius:999px;padding:12px 16px;min-height:44px;background:#fff;text-decoration:none;color:var(--muted);font-size:.82rem}
        .sh__nav{display:flex;gap:4px;flex-wrap:wrap;flex:1 1 100%}
        .sh__nav a{color:var(--ink);text-decoration:none;font-size:.72rem;font-weight:800;padding:10px 12px;border-radius:999px;min-height:40px;display:inline-flex;align-items:center}
        .sh__nav a:hover,.sh__nav a:focus-visible{background:#ffe0c8;outline:none}
        .sh__nav .apoie{background:var(--accent);color:#fff8f1}
        .sh__hero{display:grid;grid-template-columns:1.2fr .8fr;gap:22px;align-items:center;margin-top:22px}
        .sh__hero-copy{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:clamp(22px,4vw,48px)}
        .sh__hero h1{font-size:clamp(2rem,6vw,4.2rem);font-weight:900;letter-spacing:-.05em;line-height:.95;margin:0;color:#5a3218}
        .sh__hero h1 span{color:var(--accent)}
        .sh__hero p{color:var(--muted);max-width:560px;margin:16px 0 24px;line-height:1.55}
        .sh__hero-cta{display:flex;gap:10px;flex-wrap:wrap}
        .sh__hero-cta a{padding:13px 20px;border-radius:999px;font-weight:800;font-size:.8rem;text-decoration:none;min-height:44px;display:inline-flex;align-items:center;justify-content:center}
        .sh__hero-cta .go{background:var(--accent);color:#fff8f1}
        .sh__hero-cta .ghost{border:1px solid var(--line);background:#fff;color:var(--ink)}
        .sh__hero-photo{border-radius:24px;overflow:hidden;min-height:240px;border:1px solid var(--line);background:var(--wash)}
        .sh__hero-photo img{width:100%;height:100%;object-fit:cover;display:block;min-height:240px}
        .sh__benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:22px 0}
        .sh__benefit{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px}
        .sh__benefit b{display:block;margin:8px 0 4px}
        .sh__benefit span{color:var(--muted);font-size:.72rem}
        .sh__dept-title{font-size:clamp(1.35rem,3vw,2rem);font-weight:900;margin:28px 0 14px;color:#5a3218}
        .sh__tunnels{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .sh__tunnel{display:flex;flex-direction:column;min-height:100%;background:var(--card);border:1px solid var(--line);border-radius:20px;overflow:hidden;text-decoration:none;color:var(--ink)}
        .sh__tunnel img{width:100%;height:180px;object-fit:cover;display:block;background:var(--wash)}
        .sh__tunnel div{padding:16px 16px 18px}
        .sh__tunnel small{color:var(--accent);font-weight:800;letter-spacing:.12em;text-transform:uppercase;font-size:.62rem}
        .sh__tunnel b{display:block;margin:6px 0;font-size:1.05rem}
        .sh__tunnel p{margin:0;color:var(--muted);font-size:.8rem;line-height:1.45}
        .sh__depts{display:grid;grid-template-columns:repeat(7,1fr);gap:10px}
        .sh__dept{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px 10px;text-align:center;text-decoration:none;color:var(--ink);min-height:118px;display:flex;flex-direction:column;align-items:center;justify-content:center}
        .sh__dept:hover,.sh__dept:focus-visible,.sh__tunnel:hover,.sh__tunnel:focus-visible{border-color:#e8a06a;transform:translateY(-2px);outline:none}
        .sh__dept .i{font-size:1.7rem}
        .sh__dept b{display:block;margin:8px 0 4px;font-size:.78rem}
        .sh__dept span{color:var(--muted);font-size:.64rem}
        .sh__tools{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .sh__tool{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px;text-decoration:none;min-height:120px}
        .sh__tool b{display:block;margin-bottom:6px}
        .sh__tool span{color:var(--muted);font-size:.78rem}
        .sh .agx-market-spotlight{background:transparent;color:var(--ink);border-top:0;padding:36px 0 72px}
        .sh .agx-market-spotlight__inner{width:100%}
        .sh .agx-market-worlds a:hover{background:#ffe0c8;color:var(--ink)}
        .sh .agx-market-search__box{border-bottom-color:#e8a06a}
        @media(max-width:1100px){
          .sh__hero{grid-template-columns:1fr}
          .sh__depts{grid-template-columns:repeat(4,1fr)}
          .sh__benefits,.sh__tunnels,.sh__tools{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:640px){
          .sh__depts{grid-template-columns:repeat(2,1fr)}
          .sh__benefits,.sh__tunnels,.sh__tools{grid-template-columns:1fr}
          .sh__nav{gap:6px}
          .sh__nav a{flex:1 1 calc(50% - 6px);justify-content:center}
        }
      `}</style>

      <div className="sh__topbar">
        <div className="sh__wrap sh__topbar-in">
          <span>Envio Brasil inteiro</span>
          <span>Até 5x sem juros</span>
          <a href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={tg} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>

      <div className="sh__head">
        <div className="sh__wrap sh__head-in">
          <Link to="/" className="sh__logo">AgroNexus™</Link>
          <div className="sh__search">
            <Link to="/marketplace">Buscar espécie, ração, coral, planta… <span aria-hidden="true">🔍</span></Link>
          </div>
          <nav className="sh__nav" aria-label="Navegação da home">
            {NAV.map(item => (
              <Link to={item.to} key={item.to}>{item.label}</Link>
            ))}
            <Link to="/apoie" className="apoie">Apoie</Link>
          </nav>
        </div>
      </div>

      <div className="sh__wrap">
        <section className="sh__hero">
          <div className="sh__hero-copy">
            <h1>Tudo para a sua <span>biodiversidade.</span></h1>
            <p>Mundos, túneis, mercados e ferramentas no mesmo mapa. Clica e entra. Sem faixa de caixão, sem botão fantasma.</p>
            <div className="sh__hero-cta">
              <Link className="go" to="/marketplace">Explorar o catálogo</Link>
              <Link className="ghost" to="/ferramentas">Abrir ferramentas</Link>
              <Link className="ghost" to="/corais">Entrar no túnel marinho</Link>
            </div>
          </div>
          <Link className="sh__hero-photo" to="/corais" aria-label="Abrir túnel de corais">
            {TUNNELS[0].image ? <img src={TUNNELS[0].image} alt="Coral em destaque no túnel marinho" /> : null}
          </Link>
        </section>

        <section className="sh__benefits">
          {BENEFITS.map(b => (
            <div className="sh__benefit" key={b.title}>
              <span>{b.icon}</span>
              <b>{b.title}</b>
              <span>{b.desc}</span>
            </div>
          ))}
        </section>

        <h2 className="sh__dept-title">Túneis cavados</h2>
        <section className="sh__tunnels">
          {TUNNELS.map(t => (
            <Link className="sh__tunnel" to={t.to} key={t.to}>
              {t.image ? <img src={t.image} alt="" /> : null}
              <div>
                <small>{t.kicker}</small>
                <b>{t.name}</b>
                <p>{t.desc}</p>
              </div>
            </Link>
          ))}
        </section>

        <h2 className="sh__dept-title">Compre por departamento</h2>
        <section className="sh__depts">
          {DEPARTMENTS.map(d => (
            <Link className="sh__dept" to={d.to} key={d.name}>
              <span className="i" aria-hidden="true">{d.icon}</span>
              <b>{d.name}</b>
              <span>{d.desc}</span>
            </Link>
          ))}
        </section>

        <h2 className="sh__dept-title">Ferramentas</h2>
        <section className="sh__tools">
          {TOOLS.map(t => (
            <Link className="sh__tool" to={t.to} key={t.to}>
              <b>{t.label}</b>
              <span>{t.desc}</span>
            </Link>
          ))}
        </section>

        <AgroNexusMarketSpotlight title="Em destaque agora" limit={12} />
      </div>
    </main>
  )
}
