import ServiceCard from './ServiceCard'
import Dashboard from './Dashboard'
import Reveal from './Reveal'
import icons from '../assets/icons'
import '../styles/Portfolio.css'

const SOLUTIONS = [
  {
    icons: [icons.flask],
    title: 'Biotecnologia e Genética',
    text: 'Estratégias e conhecimento aplicado para genética, melhoramento e desenvolvimento sustentável de espécies animais e vegetais.',
    accent: 'cyan',
  },
  {
    icons: [icons.shield],
    title: 'Conservação e Compliance Global',
    text: 'Estruturas responsáveis para conectar criadores, produtores, instituições e projetos internacionais seguindo padrões regulatórios.',
    accent: 'purple',
  },
  {
    icons: [icons.paw, icons.leaf],
    title: 'Biodiversidade e Ecossistemas',
    text: 'Soluções integradas para espécies animais, plantas ornamentais e organismos aquáticos com foco em preservação e responsabilidade.',
    accent: 'cyan',
  },
  {
    icons: [icons.ship, icons.airplane],
    title: 'Logística Especializada Global',
    text: 'Infraestrutura logística internacional para conectar origem e destino com segurança, rastreabilidade e cuidado especializado.',
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
            Soluções <span className="hl-cyan">Integradas</span>
          </h2>
        </Reveal>

        <div className="portfolio__grid">

          <div className="portfolio__cards">
            {SOLUTIONS.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <ServiceCard {...card} />
              </Reveal>
            ))}
          </div>

          <Reveal className="portfolio__dash" delay={150}>
            <div className="portfolio__dash-head">
              <svg 
                className="portfolio__dash-icon" 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                aria-hidden="true"
              >
                <rect x="3" y="11" width="4" height="9" rx="1" fill="var(--cyan)" />
                <rect x="10" y="6" width="4" height="14" rx="1" fill="var(--cyan)" />
                <rect x="17" y="3" width="4" height="17" rx="1" fill="var(--cyan)" />
              </svg>

              <span className="eyebrow portfolio__dash-label">
                Dashboards de Desempenho
              </span>
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
