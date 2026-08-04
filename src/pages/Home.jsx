import '../styles/agro-hub.css'

import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Portfolio from '../components/Portfolio'

import avesImage from '../assets/images/editorial/AgroNexus-Birds.png'
import aquarismoImage from '../assets/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png'
import mamiferosImage from '../assets/images/editorial/agronexus-hamsters-editorial-guide-1.jpg'
import marketplaceImage from '../assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg'
import bibliotecaImage from '../assets/images/editorial/agronexus-cockatiels-editorial-guide.jpg'
import comunidadeImage from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'

const AREAS = [
  {
    title: 'Aves',
    subtitle: 'Psitacídeos e biodiversidade',
    description:
      'Espécies, genética, mutações, comportamento, manejo responsável, criadores e conhecimento especializado.',
    href: '#/aves',
    number: '01',
    image: avesImage,
    imageAlt:
      'Coleção editorial de aves e psitacídeos da AgroNexus',
  },
  {
    title: 'Aquarismo',
    subtitle: 'Ecossistemas de água doce e marinhos',
    description:
      'Peixes ornamentais, recifes, genética, equipamentos, conservação, saúde e bem-estar.',
    href: '#/aquarismo',
    number: '02',
    image: aquarismoImage,
    imageAlt:
      'Aquarismo e biodiversidade aquática AgroNexus',
  },
  {
    title: 'Mamíferos',
    subtitle: 'Criação e cuidado responsável',
    description:
      'Comportamento, saúde, genética, ambientes adequados, enriquecimento e criação responsável.',
    href: '#/mamiferos',
    number: '03',
    image: mamiferosImage,
    imageAlt:
      'Pequenos mamíferos e criação responsável AgroNexus',
  },
  {
    title: 'Marketplace',
    subtitle: 'Mercado responsável',
    description:
      'Criadores, produtores, serviços, publicações e conexões selecionadas dentro do ecossistema.',
    href: '#/marketplace',
    number: '04',
    image: marketplaceImage,
    imageAlt:
      'Biodiversidade e marketplace responsável AgroNexus',
  },
  {
    title: 'Biblioteca',
    subtitle: 'Conhecimento que orienta',
    description:
      'Guias oficiais, conteúdos técnicos, publicações especializadas e materiais educacionais.',
    href: '#/biblioteca',
    number: '05',
    image: bibliotecaImage,
    imageAlt:
      'Biblioteca editorial e publicações oficiais AgroNexus',
  },
  {
    title: 'Comunidade',
    subtitle: 'Conexões que transformam',
    description:
      'Criadores, especialistas, instituições, clubes, consumidores e apaixonados por biodiversidade.',
    href: '#/comunidade',
    number: '06',
    image: comunidadeImage,
    imageAlt:
      'Comunidade internacional AgroNexus',
  },
]

const CONNECTIONS = [
  {
    value: 13,
    suffix: '+',
    title: 'Criadores e produtores',
    text: 'Referências inicialmente identificadas para conexões responsáveis.',
  },
  {
    value: 18,
    suffix: '+',
    title: 'Clubes e comunidades',
    text: 'Federações, associações, fóruns e organizações especializadas mapeadas.',
  },
  {
    value: 15,
    suffix: '+',
    title: 'Ciência e bem-estar',
    text: 'Universidades, profissionais e potenciais conexões institucionais.',
  },
  {
    value: 12,
    suffix: '+',
    title: 'Áreas especializadas',
    text: 'Aves, mamíferos, aquarismo, produção, genética, botânica e conservação.',
  },
]

function AnimatedNumber({ value, suffix = '' }) {
  return (
    <strong
      className="agro-hub__metric-value"
      data-count={value}
    >
      {value}
      {suffix}
    </strong>
  )
}

export default function Home() {
  return (
    <main id="topo">
      <Hero />

      <Mission />

      <section
        id="ecossistema"
        className="agro-hub"
        aria-labelledby="agro-hub-title"
      >
        <div className="agro-hub__container">
          <header className="agro-hub__header">
            <span className="agro-hub__eyebrow">
              AgroNexus Living Ecosystem™
            </span>

            <h2 id="agro-hub-title">
              Explore o ecossistema AgroNexus™
            </h2>

            <p>
              Conhecimento, biodiversidade, ciência, mercado responsável
              e conexão global organizados em ambientes próprios para uma
              navegação mais rápida, clara e profunda.
            </p>
          </header>

          <div className="agro-hub__grid">
            {AREAS.map((area) => (
              <a
                className="agro-hub__card"
                href={area.href}
                key={area.title}
              >
                <div className="agro-hub__media">
                  <img
                    src={area.image}
                    alt={area.imageAlt}
                    loading="lazy"
                  />

                  <div
                    className="agro-hub__media-overlay"
                    aria-hidden="true"
                  />

                  <span className="agro-hub__number">
                    {area.number}
                  </span>
                </div>

                <div className="agro-hub__content">
                  <span className="agro-hub__subtitle">
                    {area.subtitle}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span className="agro-hub__action">
                    Explorar área
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div
            className="agro-hub__metrics"
            aria-label="Dimensão inicial da rede AgroNexus"
          >
            <header className="agro-hub__metrics-head">
              <span className="agro-hub__eyebrow">
                Rede em desenvolvimento
              </span>

              <h3>
                Conexões reais construídas com pesquisa,
                presença e relacionamento.
              </h3>

              <p>
                Indicadores institucionais apresentados como referências
                mapeadas e potenciais conexões do ecossistema.
              </p>
            </header>

            <div className="agro-hub__metrics-grid">
              {CONNECTIONS.map((connection) => (
                <article
                  className="agro-hub__metric"
                  key={connection.title}
                >
                  <AnimatedNumber
                    value={connection.value}
                    suffix={connection.suffix}
                  />

                  <h4>{connection.title}</h4>

                  <p>{connection.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="agro-hub__conversion">
            <div className="agro-hub__conversion-copy">
              <span className="agro-hub__eyebrow">
                Conhecimento e conexão
              </span>

              <h3>
                Escolha como deseja entrar no ecossistema.
              </h3>

              <p>
                Conheça as publicações oficiais, apresente seu projeto,
                encontre canais institucionais ou contribua com a
                continuidade da AgroNexus.
              </p>
            </div>

            <div className="agro-hub__conversion-actions">
              <a
                href="#/biblioteca"
                className="agro-hub__conversion-link"
              >
                <span>
                  Biblioteca editorial
                  <small>
                    Guias de Periquitos e Calopsitas
                  </small>
                </span>

                <strong aria-hidden="true">→</strong>
              </a>

              <a
                href="#/comunidade"
                className="agro-hub__conversion-link"
              >
                <span>
                  Fazer parte
                  <small>
                    Comunidade e conexões responsáveis
                  </small>
                </span>

                <strong aria-hidden="true">→</strong>
              </a>

              <a
                href="#/contato"
                className="agro-hub__conversion-link"
              >
                <span>
                  Contato institucional
                  <small>
                    WhatsApp, Telegram, telefone e formulário
                  </small>
                </span>

                <strong aria-hidden="true">→</strong>
              </a>
            </div>
          </div>

          <div className="agro-hub__footer">
            <a href="#/presenca-global">
              Presença global
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/contato"
              className="agro-hub__footer-primary"
            >
              Fale com a AgroNexus™
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
