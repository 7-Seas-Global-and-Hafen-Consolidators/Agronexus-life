import ServiceCard from './ServiceCard'
import Reveal from './Reveal'
import icons from '../assets/icons'
import '../styles/Mission.css'

const CARDS = [
  {
    icons: [icons.ship, icons.airplane, icons.truck],
    title: 'Logística Multimodal Global',
    text: 'Plataforma integrada para o transporte seguro de material biológico de alto valor, aves, peixes e plantas ornamentais.',
    accent: 'cyan',
  },
  {
    icons: [icons.leaf],
    title: 'Envio de Plantas e Flores',
    text: 'Envio refrigerado (reefer) especializado para plantas ornamentais raras, corais e organismos aquáticos marinhos.',
    accent: 'cyan',
  },
  {
    icons: [icons.paw, icons.bird],
    title: 'Transporte de Animais Vivos',
    text: 'Soluções de carga expressa para aves exóticas, pets de raça e espécies sensíveis, com foco no bem-estar animal.',
    accent: 'cyan',
  },
]

export default function Mission() {
  return (
    <section id="missao" className="section mission">
      <div className="container">
        <Reveal className="mission__head">
          <span className="eyebrow center">Nossa Missão</span>
          <h2 className="mission__title">
            No nexo do transporte <br />
            <span className="hl-cyan">animal e vegetal</span>
          </h2>
        </Reveal>

        <div className="mission__grid">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <ServiceCard {...card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
