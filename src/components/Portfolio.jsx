import ServiceCard from './ServiceCard'
import Dashboard from './Dashboard'
import Reveal from './Reveal'
import icons from '../assets/icons'
import '../styles/Portfolio.css'

const SOLUTIONS = [
  {
    icons: [icons.flask],
    title: 'Logística Especializada',
    text: 'Transporte centrado em carga animal e vegetal, tendo como especialidade: aves exóticas legalizadas, psitacídeos, flores e peixes ornamentais.',
    accent: 'cyan',
  },
  {
    icons: [icons.shield],
    title: 'Compliance Global',
    text: 'Conformidade e harmonização regulatória em transações internacionais para o agronegócio.',
    accent: 'purple',
  },
  {
    icons: [icons.flask],
    title: 'Consultoria Genética',
    text: 'Análise e seleção de variedades de alta performance adaptadas à realidade do produtor.',
    accent: 'cyan',
  },
  {
    icons: [icons.truck2],
    title: 'Logística de Fornecimento Crítico',
    text: 'Cadeia de inventário e rotas de abastecimento para insumos críticos em todas as regiões do globo.',
    accent: 'purple',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <Reveal className="portfolio__head">
          <span className="eyebrow">Portfólio</span>
          <h2 className="portfolio__title">
            Soluções <span className="hl-cyan">Verticais</span>
          </h2>
        </Reveal>

        <div className="portfolio__grid">
          {/* Coluna esquerda: cards de soluções */}
          <div className="portfolio__cards">
            {SOLUTIONS.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <ServiceCard {...card} />
              </Reveal>
            ))}
          </div>

          {/* Coluna direita: dashboards (em breve) */}
          <Reveal className="portfolio__dash" delay={150}>
            <div className="portfolio__dash-head">
              <svg className="portfolio__dash-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <rect x="3" y="11" width="4" height="9" rx="1" fill="var(--cyan)" />
                <rect x="10" y="6" width="4" height="14" rx="1" fill="var(--cyan)" />
                <rect x="17" y="3" width="4" height="17" rx="1" fill="var(--cyan)" />
              </svg>
              <span className="eyebrow portfolio__dash-label">Dashboards de Desempenho</span>
            </div>

            <div className="portfolio__dash-frame">
              <div className="portfolio__dash-blur">
                <Dashboard />
              </div>
              <div className="portfolio__soon">
                <span>Em Breve</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
