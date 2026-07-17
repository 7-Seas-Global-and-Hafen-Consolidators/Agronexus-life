import ServiceCard from './ServiceCard'
import Reveal from './Reveal'
import icons from '../assets/icons'
import '../styles/Mission.css'

const CARDS = [
  {
    icons: [icons.ship, icons.airplane, icons.truck],
    title: 'Conexões Globais para Biodiversidade',

text: 'Soluções integradas para conectar espécies, genética, produtores e mercados internacionais com rastreabilidade, segurança e responsabilidade.'
    accent: 'cyan',
  },
  {
    icons: [icons.leaf],
    title: 'Ecossistemas Vegetais e Aquáticos',

text: 'Suporte especializado para plantas ornamentais, organismos aquáticos e biodiversidade vegetal através de cadeias responsáveis e controladas.'
    accent: 'cyan',
  },
  {
    icons: [icons.paw, icons.bird],
    title: 'Bem-estar Animal e Conservação',

text: 'Soluções responsáveis para espécies legalizadas, criadores conscientes e projetos de conservação, sempre priorizando o cuidado animal.'
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
            No nexo da biodiversidade <br />
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
