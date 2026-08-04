import '../styles/Aves.css'

const SPECIES = [
  {
    id: 'periquitos-australianos',
    number: '01',
    name: 'Periquitos Australianos',
    scientificName: 'Melopsittacus undulatus',
    image:
      '/images/editorial/agronexus-australian-budgerigars-editorial-guide.jpg',
    description:
      'Pequenos em tamanho, extraordinários em inteligência, sociabilidade e diversidade genética.',
    highlights: [
      'Genética e mutações',
      'Comportamento social',
      'Manejo responsável',
    ],
    href: '#/aves/periquito-australiano',
    status: 'Guia oficial disponível',
  },
  {
    id: 'agapornis',
    number: '02',
    name: 'Agapornis',
    scientificName: 'Agapornis spp.',
    image:
      '/images/editorial/agronexus-lovebirds-editorial-guide.jpg',
    description:
      'Psitacídeos intensamente sociais, conhecidos pelos vínculos afetivos, personalidade e beleza.',
    highlights: [
      'Espécies e variedades',
      'Vínculos e comportamento',
      'Criação responsável',
    ],
    href: '#/aves/agapornis',
    status: 'Coleção editorial',
  },
  {
    id: 'ring-necks',
    number: '03',
    name: 'Ring Necks',
    scientificName: 'Psittacula krameri',
    image:
      '/images/editorial/agronexus-ring-neck-parakeets-editorial-guide.jpg',
    description:
      'Elegância, inteligência e uma das mais impressionantes diversidades de cores entre os psitacídeos.',
    highlights: [
      'Mutações e linhagens',
      'Inteligência e vocalização',
      'Cuidados especializados',
    ],
    href: '#/aves/ring-necks',
    status: 'Coleção editorial',
  },
  {
    id: 'rosellas',
    number: '04',
    name: 'Rosellas',
    scientificName: 'Platycercus spp.',
    image:
      '/images/editorial/agronexus-rosellas-editorial-guide.jpg',
    description:
      'Cores marcantes, elegância natural e espécies australianas de extraordinária presença.',
    highlights: [
      'Principais espécies',
      'Cores e variedades',
      'Habitat e comportamento',
    ],
    href: '#/aves/rosellas',
    status: 'Coleção editorial',
  },
]

function SpeciesCard({ species }) {
  return (
    <article className="aves-species-card">
      <a
        href={species.href}
        className="aves-species-card__image-link"
        aria-label={`Conhecer ${species.name}`}
      >
        <div className="aves-species-card__image-wrap">
          <img
            src={species.image}
            alt={`${species.name} em composição fotográfica editorial AgroNexus`}
            className="aves-species-card__image"
            loading="lazy"
            decoding="async"
          />

          <div
            className="aves-species-card__image-overlay"
            aria-hidden="true"
          />

          <span className="aves-species-card__number">
            {species.number}
          </span>

          <span className="aves-species-card__status">
            {species.status}
          </span>
        </div>
      </a>

      <div className="aves-species-card__body">
        <span className="aves-species-card__category">
          Psitacídeos
        </span>

        <h3>{species.name}</h3>

        <p className="aves-species-card__scientific">
          {species.scientificName}
        </p>

        <p className="aves-species-card__description">
          {species.description}
        </p>

        <div className="aves-species-card__highlights">
          {species.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>

        <a
          href={species.href}
          className="aves-species-card__action"
        >
          Conhecer a espécie
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default function Aves() {
  return (
    <main className="aves-page">
      <section className="aves-hero">
        <div className="aves-hero__glow" aria-hidden="true" />

        <div className="aves-container aves-hero__content">
          <span className="aves-eyebrow">
            AgroNexus Living Ecosystem™
          </span>

          <h1>
            Aves e
            <span> Psitacídeos</span>
          </h1>

          <p className="aves-hero__lead">
            Um acervo editorial dedicado à diversidade, genética,
            comportamento, conservação e criação responsável das aves
            que conectam pessoas em todo o mundo.
          </p>

          <div className="aves-hero__actions">
            <a href="#especies" className="aves-button aves-button--primary">
              Explorar espécies
            </a>

            <a href="#/biblioteca" className="aves-button aves-button--outline">
              Biblioteca AgroNexus
            </a>
          </div>

          <div className="aves-hero__metrics">
            <div>
              <strong>04</strong>
              <span>Coleções iniciais</span>
            </div>

            <div>
              <strong>Editorial</strong>
              <span>Fotografia e ciência</span>
            </div>

            <div>
              <strong>Global</strong>
              <span>Conhecimento conectado</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="especies"
        className="aves-species"
        aria-labelledby="aves-species-title"
      >
        <div className="aves-container">
          <header className="aves-section-heading">
            <div>
              <span className="aves-eyebrow">
                Biblioteca de espécies
              </span>

              <h2 id="aves-species-title">
                Conheça cada espécie.
                <span> Descubra cada história.</span>
              </h2>
            </div>

            <p>
              A fotografia desperta a curiosidade. O conteúdo aprofunda
              o conhecimento. A conexão responsável completa a jornada.
            </p>
          </header>

          <div className="aves-species-grid">
            {SPECIES.map((species) => (
              <SpeciesCard
                species={species}
                key={species.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="aves-journey">
        <div className="aves-container">
          <div className="aves-journey__content">
            <span className="aves-eyebrow">
              A jornada AgroNexus™
            </span>

            <h2>
              Da beleza natural ao
              <span> conhecimento responsável.</span>
            </h2>

            <p>
              Cada coleção começa com uma imagem editorial, conduz o
              visitante ao conteúdo técnico e, posteriormente, conecta
              tutores, criadores, especialistas, produtos e serviços
              dentro do ecossistema da espécie.
            </p>
          </div>

          <div className="aves-journey__steps">
            <article>
              <span>01</span>
              <h3>Descobrir</h3>
              <p>Fotografia, espécie, origem e diversidade.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Conhecer</h3>
              <p>Comportamento, genética, saúde e bem-estar.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Conectar</h3>
              <p>Criadores, veterinários, comunidade e marketplace.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="aves-final-cta">
        <div className="aves-container aves-final-cta__inner">
          <div>
            <span className="aves-eyebrow">
              Conhecimento que orienta
            </span>

            <h2>Explore a Biblioteca AgroNexus™</h2>

            <p>
              Guias oficiais, publicações editoriais e conteúdos
              aprofundados para quem acredita que cuidar começa por
              compreender.
            </p>
          </div>

          <a href="#/biblioteca" className="aves-button aves-button--primary">
            Acessar biblioteca
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}
