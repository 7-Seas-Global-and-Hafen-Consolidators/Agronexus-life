import Reveal from './Reveal'
import '../styles/Mission.css'

const PILLARS = [
  {
    number: '01',
    title: 'Conhecimento que orienta',
    text: 'Transformamos informação, experiência e ciência em decisões mais responsáveis para criadores, consumidores, produtores, especialistas e instituições.',
  },
  {
    number: '02',
    title: 'Biodiversidade que conecta',
    text: 'Aproximamos pessoas, espécies, projetos e mercados sem perder de vista a conservação, a procedência, o bem-estar e o valor de cada linhagem.',
  },
  {
    number: '03',
    title: 'Mercado responsável',
    text: 'Criamos pontes entre quem produz, quem pesquisa, quem cuida e quem procura, promovendo relações transparentes no mercado nacional e internacional.',
  },
  {
    number: '04',
    title: 'Conexões que transformam',
    text: 'Unimos criadores, veterinários, biólogos, aquaristas, produtores, universidades, empresas e parceiros em um ecossistema vivo de colaboração.',
  },
]

const COMMUNITY = [
  'Criadores',
  'Consumidores',
  'Veterinários',
  'Biólogos',
  'Aquaristas',
  'Produtores',
  'Pesquisadores',
  'Instituições',
  'Parceiros',
  'Empresas',
]

export default function Mission() {
  return (
    <section id="missao" className="section mission">
      <div className="container">
        <Reveal className="mission__head">
          <span className="eyebrow center">
            Nossa Missão
          </span>

          <h2 className="mission__title">
            Conectar pessoas que compartilham
            <span className="hl-cyan">
              {' '}a mesma paixão pela vida.
            </span>
          </h2>

          <p className="mission__lead">
            A AgroNexus existe para transformar conhecimento, biodiversidade e
            responsabilidade em conexões capazes de gerar valor para pessoas,
            espécies, instituições e mercados.
          </p>
        </Reveal>

        <div className="mission__story">
          <Reveal className="mission__statement">
            <span className="mission__statement-label">
              O nosso compromisso
            </span>

            <p>
              A biodiversidade não conhece fronteiras.
              <strong> Nós também não.</strong>
            </p>
          </Reveal>

          <div className="mission__pillars">
            {PILLARS.map((pillar, index) => (
              <Reveal
                className="mission__pillar"
                key={pillar.title}
                delay={index * 110}
              >
                <span className="mission__number">
                  {pillar.number}
                </span>

                <div className="mission__pillar-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mission__community" delay={180}>
          <span className="mission__community-label">
            Um ecossistema construído por
          </span>

          <div className="mission__community-list">
            {COMMUNITY.map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mission__closing" delay={220}>
          <p>
            Conhecimento gera confiança. Confiança gera conexão.
            <span> Conexão gera futuro.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
