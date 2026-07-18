import ServiceCard from './ServiceCard'
import Reveal from './Reveal'
import icons from '../assets/icons'
import '../styles/Mission.css'

const CARDS = [
  {
    icons: [icons.leaf, icons.flask],
    title: 'Biodiversidade Global',
    text: 'Conectamos espécies, genética e conhecimento científico para criar pontes responsáveis entre ecossistemas, instituições e mercados internacionais.',
    accent: 'cyan',
  },
  {
    icons: [icons.flask, icons.leaf],
    title: 'Genética e Desenvolvimento Sustentável',
    text: 'Soluções baseadas em pesquisa, conservação e valorização de variedades animais e vegetais de importância estratégica.',
    accent: 'cyan',
  },
  {
    icons: [icons.paw, icons.bird],
    title: 'Logística Especializada Global',
    text: 'Infraestrutura internacional para conectar origem e destino com segurança, rastreabilidade e cuidado especializado para organismos vivos.',
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
            No nexo entre biodiversidade <br />
            <span className="hl-cyan">ciência e conexão global</span>
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
