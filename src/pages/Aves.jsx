const BIRD_COLLECTIONS = [
  {
    id: 'periquitos-australianos',
    number: '01',
    title: 'Periquitos Australianos',
    scientificName: 'Melopsittacus undulatus',
    eyebrow: 'Genética · comportamento · diversidade',
    description:
      'Uma das espécies mais populares do mundo, celebrada por sua inteligência, sociabilidade e extraordinária diversidade de cores e mutações.',
    image:
      '/images/editorial/agronexus-australian-budgerigars-editorial-guide.jpg',
    imagePosition: 'center',
    actionLabel: 'Acessar guia oficial',
    href: '/#biblioteca',
  },
  {
    id: 'agapornis',
    number: '02',
    title: 'Agapornis',
    scientificName: 'Agapornis spp.',
    eyebrow: 'Vínculo · personalidade · criação responsável',
    description:
      'Psitacídeos intensamente sociais, reconhecidos por seus vínculos afetivos, personalidade marcante e diversidade de espécies e mutações.',
    image:
      '/images/editorial/agronexus-lovebirds-editorial-guide.jpg',
    imagePosition: 'center',
    actionLabel: 'Conhecer a coleção',
    href: '/#contato',
  },
  {
    id: 'ring-necks',
    number: '03',
    title: 'Ring Necks',
    scientificName: 'Psittacula krameri',
    eyebrow: 'Elegância · inteligência · vocalização',
    description:
      'Aves elegantes e inteligentes, conhecidas pela capacidade de vocalização e por uma das mais belas diversidades cromáticas entre os psitacídeos.',
    image:
      '/images/editorial/agronexus-ring-neck-parakeets-editorial-guide.jpg',
    imagePosition: 'center',
    actionLabel: 'Conhecer a coleção',
    href: '/#contato',
  },
  {
    id: 'rosellas',
    number: '04',
    title: 'Rosellas',
    scientificName: 'Platycercus spp.',
    eyebrow: 'Austrália · cores · biodiversidade',
    description:
      'Espécies australianas de presença extraordinária, plumagens intensas e características próprias de comportamento, habitat e criação.',
    image:
      '/images/editorial/agronexus-rosellas-editorial-guide.jpg',
    imagePosition: 'center',
    actionLabel: 'Conhecer a coleção',
    href: '/#contato',
  },
]

function CollectionCard({ collection }) {
  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none'

    const fallback =
      event.currentTarget.parentElement?.querySelector(
        '.birds-card__fallback'
      )

    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  return (
    <article className="birds-card">
      <div className="birds-card__visual">
        <img
          src={collection.image}
          alt={`${collection.title} em composição fotográfica editorial AgroNexus`}
          className="birds-card__image"
          style={{
            objectPosition: collection.imagePosition,
          }}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />

        <div className="birds-card__fallback">
          <span>Imagem não localizada</span>

          <small>
            Confira o nome do arquivo no GitHub:
          </small>

          <code>{collection.image}</code>
        </div>

        <div
          className="birds-card__shade"
          aria-hidden="true"
        />

        <span className="birds-card__number">
          {collection.number}
        </span>

        <span className="birds-card__label">
          Coleção editorial
        </span>
      </div>

      <div className="birds-card__content">
        <span className="birds-card__eyebrow">
          {collection.eyebrow}
        </span>

        <h2>{collection.title}</h2>

        <p className="birds-card__scientific">
          {collection.scientificName}
        </p>

        <p className="birds-card__description">
          {collection.description}
        </p>

        <a
          href={collection.href}
          className="birds-card__button"
        >
          {collection.actionLabel}

          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default function Aves() {
  return (
    <main className="birds-page">
      <style>
        {`
          .birds-page {
            --birds-bg: #02060b;
            --birds-panel: #07111c;
            --birds-panel-deep: #040a12;
            --birds-text: #f3f0e8;
            --birds-muted: rgba(243, 240, 232, 0.64);
            --birds-cyan: #25c8d1;
            --birds-gold: #d4af37;
            --birds-border: rgba(212, 175, 55, 0.28);

            min-height: 100vh;
            overflow: hidden;
            background: var(--birds-bg);
            color: var(--birds-text);
          }

          .birds-hero {
            position: relative;
            padding: clamp(130px, 14vw, 210px) 24px
              clamp(85px, 10vw, 145px);
            overflow: hidden;
            border-bottom:
              1px solid rgba(37, 200, 209, 0.14);
            background:
              radial-gradient(
                circle at 75% 25%,
                rgba(37, 200, 209, 0.12),
                transparent 34%
              ),
              radial-gradient(
                circle at 68% 44%,
                rgba(212, 175, 55, 0.08),
                transparent 42%
              ),
              #02060b;
          }

          .birds-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.32;
            background-image:
              linear-gradient(
                rgba(37, 200, 209, 0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(37, 200, 209, 0.025) 1px,
                transparent 1px
              );
            background-size: 76px 76px;
          }

          .birds-container {
            position: relative;
            z-index: 1;
            width: min(1220px, 100%);
            margin: 0 auto;
          }

          .birds-hero__eyebrow,
          .birds-section__eyebrow {
            display: block;
            color: var(--birds-gold);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.23em;
            line-height: 1.6;
            text-transform: uppercase;
          }

          .birds-hero h1 {
            max-width: 1100px;
            margin: 26px 0 30px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(4.3rem, 10vw, 9.5rem);
            font-weight: 400;
            line-height: 0.84;
            letter-spacing: -0.05em;
          }

          .birds-hero h1 span {
            color: var(--birds-cyan);
          }

          .birds-hero__lead {
            max-width: 760px;
            margin: 0;
            color: var(--birds-muted);
            font-size: clamp(1rem, 1.8vw, 1.25rem);
            line-height: 1.85;
          }

          .birds-hero__actions {
            margin-top: 38px;
            display: flex;
            flex-wrap: wrap;
            gap: 13px;
          }

          .birds-button {
            min-height: 51px;
            padding: 14px 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 13px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 0.69rem;
            font-weight: 700;
            letter-spacing: 0.13em;
            text-transform: uppercase;
            transition:
              transform 180ms ease,
              border-color 180ms ease,
              background 180ms ease;
          }

          .birds-button:hover {
            transform: translateY(-2px);
          }

          .birds-button--primary {
            border: 1px solid var(--birds-cyan);
            color: #02060b;
            background: var(--birds-cyan);
          }

          .birds-button--secondary {
            border:
              1px solid rgba(243, 240, 232, 0.26);
            color: var(--birds-text);
            background: transparent;
          }

          .birds-button--secondary:hover {
            border-color: var(--birds-gold);
          }

          .birds-overview {
            padding: clamp(80px, 10vw, 145px) 24px;
          }

          .birds-section__header {
            margin-bottom: clamp(46px, 7vw, 78px);
            display: grid;
            grid-template-columns:
              minmax(0, 1.2fr)
              minmax(280px, 0.8fr);
            gap: 60px;
            align-items: end;
          }

          .birds-section__header h2 {
            margin: 18px 0 0;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(3rem, 6vw, 6rem);
            font-weight: 400;
            line-height: 0.95;
            letter-spacing: -0.04em;
          }

          .birds-section__header h2 span {
            color: var(--birds-cyan);
          }

          .birds-section__header > p {
            margin: 0;
            color: var(--birds-muted);
            line-height: 1.85;
          }

          .birds-grid {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
            gap: 28px;
          }

          .birds-card {
            overflow: hidden;
            border: 1px solid var(--birds-border);
            background:
              linear-gradient(
                145deg,
                rgba(8, 21, 34, 0.96),
                rgba(3, 8, 15, 0.99)
              );
            transition:
              transform 240ms ease,
              border-color 240ms ease,
              box-shadow 240ms ease;
          }

          .birds-card:hover {
            transform: translateY(-6px);
            border-color:
              rgba(212, 175, 55, 0.62);
            box-shadow:
              0 28px 70px rgba(0, 0, 0, 0.34);
          }

          .birds-card__visual {
            position: relative;
            overflow: hidden;
            aspect-ratio: 4 / 5;
            background: #07111c;
          }

          .birds-card__image {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition:
              transform 700ms cubic-bezier(
                0.2,
                0.7,
                0,
                1
              );
          }

          .birds-card:hover .birds-card__image {
            transform: scale(1.035);
          }

          .birds-card__fallback {
            position: absolute;
            inset: 0;
            padding: 30px;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            color: var(--birds-text);
            background:
              radial-gradient(
                circle,
                rgba(37, 200, 209, 0.08),
                transparent 60%
              ),
              #07111c;
            text-align: center;
          }

          .birds-card__fallback span {
            color: var(--birds-gold);
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: 1.8rem;
          }

          .birds-card__fallback small {
            color: var(--birds-muted);
          }

          .birds-card__fallback code {
            max-width: 100%;
            overflow-wrap: anywhere;
            color: var(--birds-cyan);
            font-size: 0.7rem;
          }

          .birds-card__shade {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                to top,
                rgba(2, 6, 11, 0.85),
                transparent 48%
              ),
              linear-gradient(
                135deg,
                rgba(2, 6, 11, 0.25),
                transparent
              );
            pointer-events: none;
          }

          .birds-card__number {
            position: absolute;
            top: 22px;
            left: 22px;
            color: rgba(255, 255, 255, 0.9);
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: 1.25rem;
            letter-spacing: 0.08em;
          }

          .birds-card__label {
            position: absolute;
            right: 18px;
            bottom: 18px;
            padding: 8px 12px;
            border:
              1px solid rgba(212, 175, 55, 0.48);
            border-radius: 999px;
            color: #f1d47b;
            background: rgba(2, 6, 11, 0.76);
            backdrop-filter: blur(8px);
            font-size: 0.59rem;
            font-weight: 700;
            letter-spacing: 0.11em;
            text-transform: uppercase;
          }

          .birds-card__content {
            padding: clamp(27px, 4vw, 42px);
          }

          .birds-card__eyebrow {
            display: block;
            margin-bottom: 13px;
            color: var(--birds-gold);
            font-size: 0.63rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            line-height: 1.6;
            text-transform: uppercase;
          }

          .birds-card__content h2 {
            margin: 0;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(2.5rem, 4vw, 4rem);
            font-weight: 400;
            line-height: 0.98;
          }

          .birds-card__scientific {
            margin: 11px 0 0;
            color: var(--birds-cyan);
            font-family: Georgia, serif;
            font-style: italic;
          }

          .birds-card__description {
            margin: 24px 0 29px;
            color: var(--birds-muted);
            line-height: 1.78;
          }

          .birds-card__button {
            min-height: 48px;
            padding: 13px 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            border:
              1px solid rgba(37, 200, 209, 0.52);
            border-radius: 999px;
            color: var(--birds-text);
            background: transparent;
            text-decoration: none;
            font-size: 0.67rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            transition:
              color 180ms ease,
              background 180ms ease,
              transform 180ms ease;
          }

          .birds-card__button:hover {
            transform: translateY(-2px);
            color: #02060b;
            background: var(--birds-cyan);
          }

          .birds-card__button span {
            color: var(--birds-gold);
            font-size: 1.05rem;
          }

          .birds-final {
            padding:
              clamp(30px, 6vw, 70px)
              24px
              clamp(90px, 10vw, 150px);
          }

          .birds-final__box {
            padding: clamp(35px, 7vw, 78px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
            border: 1px solid var(--birds-border);
            background:
              radial-gradient(
                circle at 90% 50%,
                rgba(212, 175, 55, 0.1),
                transparent 35%
              ),
              #07111c;
          }

          .birds-final h2 {
            margin: 14px 0 18px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(2.6rem, 5vw, 5rem);
            font-weight: 400;
            line-height: 0.96;
          }

          .birds-final p {
            max-width: 680px;
            margin: 0;
            color: var(--birds-muted);
            line-height: 1.8;
          }

          @media (max-width: 900px) {
            .birds-section__header {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .birds-final__box {
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 720px) {
            .birds-hero {
              padding-top: 120px;
            }

            .birds-hero h1 {
              font-size:
                clamp(4rem, 18vw, 6.3rem);
            }

            .birds-grid {
              grid-template-columns: 1fr;
            }

            .birds-card__visual {
              aspect-ratio: 4 / 5;
            }
          }

          @media (max-width: 520px) {
            .birds-hero,
            .birds-overview,
            .birds-final {
              padding-left: 15px;
              padding-right: 15px;
            }

            .birds-hero__actions {
              flex-direction: column;
            }

            .birds-button,
            .birds-card__button {
              width: 100%;
            }

            .birds-card__content {
              padding: 27px 21px 31px;
            }

            .birds-final__box {
              padding: 31px 22px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .birds-card,
            .birds-card__image,
            .birds-button,
            .birds-card__button {
              transition: none;
            }

            .birds-card:hover,
            .birds-card:hover .birds-card__image,
            .birds-button:hover,
            .birds-card__button:hover {
              transform: none;
            }
          }
        `}
      </style>

      <section className="birds-hero">
        <div className="birds-container">
          <span className="birds-hero__eyebrow">
            AgroNexus Living Ecosystem™
          </span>

          <h1>
            Aves e
            <span> Psitacídeos</span>
          </h1>

          <p className="birds-hero__lead">
            Fotografia editorial, biodiversidade, genética,
            comportamento, conservação e criação responsável
            reunidos em uma experiência visual dedicada a cada
            espécie.
          </p>

          <div className="birds-hero__actions">
            <a
              href="#colecoes-de-aves"
              className="birds-button birds-button--primary"
            >
              Explorar coleções
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="/#biblioteca"
              className="birds-button birds-button--secondary"
            >
              Biblioteca AgroNexus
            </a>
          </div>
        </div>
      </section>

      <section
        id="colecoes-de-aves"
        className="birds-overview"
      >
        <div className="birds-container">
          <header className="birds-section__header">
            <div>
              <span className="birds-section__eyebrow">
                Coleções iniciais
              </span>

              <h2>
                Cada espécie,
                <span> uma história.</span>
              </h2>
            </div>

            <p>
              Imagens que despertam curiosidade e conduzem o
              visitante ao conhecimento técnico, à biblioteca,
              à comunidade e às futuras conexões responsáveis
              do marketplace AgroNexus™.
            </p>
          </header>

          <div className="birds-grid">
            {BIRD_COLLECTIONS.map((collection) => (
              <CollectionCard
                collection={collection}
                key={collection.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="birds-final">
        <div className="birds-container">
          <div className="birds-final__box">
            <div>
              <span className="birds-section__eyebrow">
                Conhecimento que orienta
              </span>

              <h2>Biblioteca Editorial AgroNexus™</h2>

              <p>
                Guias oficiais completos para quem acredita
                que conhecer profundamente uma espécie é o
                primeiro passo para cuidar com
                responsabilidade.
              </p>
            </div>

            <a
              href="/#biblioteca"
              className="birds-button birds-button--primary"
            >
              Acessar biblioteca
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
