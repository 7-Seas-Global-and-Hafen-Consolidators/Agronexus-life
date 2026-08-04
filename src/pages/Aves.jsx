import budgerigarPhoto1 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-1.jpg'
import budgerigarPhoto2 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-2.jpg'
import budgerigarPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-editor_cZCwtWtagronexus-australian-budgerigars-editorial-guid-3.jpg'
import budgerigarPhoto4 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-4.jpg'

import agapornisPhoto1 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-1.jpg'
import agapornisPhoto2 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-2.jpg'
import agapornisPhoto3 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-3.jpg'
import agapornisPhoto4 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-4.jpg'

import ringNeckPhoto1 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-1.jpg'
import ringNeckPhoto2 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-2.jpg'
import ringNeckPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-3.jpg'

import rosellaPhoto1 from '../assets/images/editorial/agronexus-rosellas-editorial-guide-1.jpg'
import rosellaPhoto2 from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'

const COLLECTIONS = [
  {
    id: 'periquitos-australianos',
    number: '01',
    title: 'Periquitos Australianos',
    scientificName: 'Melopsittacus undulatus',
    eyebrow: 'Genética · comportamento · diversidade',
    description:
      'Uma coleção dedicada à extraordinária variedade cromática, à sociabilidade, à inteligência e à história de uma das aves de companhia mais admiradas do mundo.',
    cover: budgerigarPhoto3,
    gallery: [
      budgerigarPhoto1,
      budgerigarPhoto2,
      budgerigarPhoto3,
      budgerigarPhoto4,
    ],
    infographic:
      '/images/marketplace/psitacideos/agronexus-periquitos-australianos-marketplace.png',
    primaryAction: 'Acessar publicação oficial',
    primaryHref: '#/biblioteca',
  },
  {
    id: 'agapornis',
    number: '02',
    title: 'Agapornis',
    scientificName: 'Agapornis spp.',
    eyebrow: 'Vínculo · personalidade · criação responsável',
    description:
      'Psitacídeos intensamente sociais, reconhecidos pelos fortes vínculos, pelas cores marcantes e por personalidades que transformam cada indivíduo em uma história única.',
    cover: agapornisPhoto1,
    gallery: [
      agapornisPhoto1,
      agapornisPhoto2,
      agapornisPhoto3,
      agapornisPhoto4,
    ],
    infographic:
      '/images/marketplace/psitacideos/agronexus-agapornis-marketplace.png',
    primaryAction: 'Apresentar interesse',
    primaryHref: '#/contato',
  },
  {
    id: 'ring-necks',
    number: '03',
    title: 'Ring Necks',
    scientificName: 'Psittacula krameri',
    eyebrow: 'Elegância · inteligência · vocalização',
    description:
      'Aves de silhueta elegante, inteligência reconhecida e notável capacidade vocal, reunidas em uma coleção fotográfica dedicada às suas variações e comportamentos.',
    cover: ringNeckPhoto1,
    gallery: [
      ringNeckPhoto1,
      ringNeckPhoto2,
      ringNeckPhoto3,
    ],
    infographic:
      '/images/marketplace/psitacideos/agronexus-ring-necks-marketplace.png',
    primaryAction: 'Apresentar interesse',
    primaryHref: '#/contato',
  },
  {
    id: 'rosellas',
    number: '04',
    title: 'Rosellas',
    scientificName: 'Platycercus spp.',
    eyebrow: 'Austrália · cores · biodiversidade',
    description:
      'Espécies australianas de presença extraordinária, plumagens intensas e características próprias de habitat, comportamento, genética e criação responsável.',
    cover: rosellaPhoto1,
    gallery: [
      rosellaPhoto1,
      rosellaPhoto2,
    ],
    infographic:
      '/images/marketplace/psitacideos/agronexus-roselas-marketplace.png',
    primaryAction: 'Apresentar interesse',
    primaryHref: '#/contato',
  },
]

function CollectionSection({ collection, index }) {
  return (
    <article
      id={collection.id}
      className={`birds-collection ${
        index % 2 === 1
          ? 'birds-collection--reverse'
          : ''
      }`}
    >
      <div className="birds-collection__hero">
        <img
          src={collection.cover}
          alt={`${collection.title} em fotografia editorial AgroNexus`}
          className="birds-collection__cover"
          loading="lazy"
          decoding="async"
        />

        <div
          className="birds-collection__overlay"
          aria-hidden="true"
        />

        <span className="birds-collection__number">
          {collection.number}
        </span>

        <div className="birds-collection__caption">
          <span>Fotografia editorial AgroNexus™</span>

          <strong>
            Cada espécie, uma história.
          </strong>
        </div>
      </div>

      <div className="birds-collection__content">
        <span className="birds-collection__eyebrow">
          {collection.eyebrow}
        </span>

        <h2>{collection.title}</h2>

        <p className="birds-collection__scientific">
          {collection.scientificName}
        </p>

        <p className="birds-collection__description">
          {collection.description}
        </p>

        <div className="birds-collection__actions">
          <a
            href={collection.primaryHref}
            className="birds-action birds-action--primary"
          >
            {collection.primaryAction}
            <span aria-hidden="true">→</span>
          </a>

          <a
            href={collection.infographic}
            className="birds-action birds-action--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver infográfico técnico
          </a>
        </div>
      </div>

      <div className="birds-collection__gallery">
        {collection.gallery.map((image, imageIndex) => (
          <figure
            className="birds-gallery__item"
            key={`${collection.id}-${imageIndex}`}
          >
            <img
              src={image}
              alt={`${collection.title} — fotografia editorial ${
                imageIndex + 1
              }`}
              loading="lazy"
              decoding="async"
            />

            <figcaption>
              <span>
                {String(imageIndex + 1).padStart(2, '0')}
              </span>

              <p>
                Curadoria fotográfica AgroNexus™
              </p>
            </figcaption>
          </figure>
        ))}
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
            --birds-muted: rgba(243, 240, 232, 0.63);
            --birds-cyan: #25c8d1;
            --birds-gold: #d4af37;
            --birds-border: rgba(212, 175, 55, 0.25);

            min-height: 100vh;
            overflow-x: hidden;
            background: var(--birds-bg);
            color: var(--birds-text);
          }

          .birds-container {
            width: min(1240px, calc(100% - 48px));
            margin: 0 auto;
          }

          .birds-hero {
            position: relative;
            min-height: min(850px, 90vh);
            display: flex;
            align-items: center;
            overflow: hidden;
            border-bottom:
              1px solid rgba(37, 200, 209, 0.14);
            background:
              radial-gradient(
                circle at 72% 42%,
                rgba(37, 200, 209, 0.15),
                transparent 34%
              ),
              radial-gradient(
                circle at 66% 45%,
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
            opacity: 0.3;
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

          .birds-hero__content {
            position: relative;
            z-index: 1;
            max-width: 1020px;
            padding:
              clamp(150px, 15vw, 220px)
              0
              clamp(100px, 11vw, 155px);
          }

          .birds-eyebrow {
            display: block;
            color: var(--birds-gold);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.23em;
            line-height: 1.6;
            text-transform: uppercase;
          }

          .birds-hero h1 {
            max-width: 1080px;
            margin: 27px 0 31px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size:
              clamp(4.5rem, 10vw, 9.4rem);
            font-weight: 400;
            line-height: 0.85;
            letter-spacing: -0.05em;
          }

          .birds-hero h1 span {
            color: var(--birds-cyan);
          }

          .birds-hero__lead {
            max-width: 760px;
            margin: 0;
            color: var(--birds-muted);
            font-size:
              clamp(1rem, 1.8vw, 1.25rem);
            line-height: 1.85;
          }

          .birds-hero__actions {
            margin-top: 39px;
            display: flex;
            flex-wrap: wrap;
            gap: 13px;
          }

          .birds-action {
            min-height: 51px;
            padding: 14px 23px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 13px;
            border-radius: 999px;
            text-decoration: none;
            font-size: 0.67rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-align: center;
            text-transform: uppercase;
            transition:
              transform 180ms ease,
              background 180ms ease,
              border-color 180ms ease,
              color 180ms ease;
          }

          .birds-action:hover {
            transform: translateY(-2px);
          }

          .birds-action--primary {
            border: 1px solid var(--birds-cyan);
            color: #02060b;
            background: var(--birds-cyan);
          }

          .birds-action--secondary {
            border:
              1px solid rgba(243, 240, 232, 0.24);
            color: var(--birds-text);
            background: transparent;
          }

          .birds-action--secondary:hover {
            border-color: var(--birds-gold);
          }

          .birds-introduction {
            padding:
              clamp(85px, 10vw, 150px)
              0
              clamp(60px, 8vw, 110px);
          }

          .birds-introduction__layout {
            display: grid;
            grid-template-columns:
              minmax(0, 1.3fr)
              minmax(280px, 0.7fr);
            gap: clamp(40px, 8vw, 110px);
            align-items: end;
          }

          .birds-introduction h2 {
            margin: 18px 0 0;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size:
              clamp(3.2rem, 6.8vw, 6.6rem);
            font-weight: 400;
            line-height: 0.94;
            letter-spacing: -0.045em;
          }

          .birds-introduction h2 span {
            color: var(--birds-cyan);
          }

          .birds-introduction__layout > p {
            margin: 0;
            color: var(--birds-muted);
            line-height: 1.85;
          }

          .birds-navigation {
            padding-bottom:
              clamp(80px, 10vw, 145px);
          }

          .birds-navigation__grid {
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));
            border-top:
              1px solid var(--birds-border);
            border-left:
              1px solid var(--birds-border);
          }

          .birds-navigation__item {
            min-height: 210px;
            padding: 25px;
            display: flex;
            flex-direction: column;
            border-right:
              1px solid var(--birds-border);
            border-bottom:
              1px solid var(--birds-border);
            color: var(--birds-text);
            background:
              linear-gradient(
                145deg,
                rgba(8, 21, 34, 0.88),
                rgba(3, 8, 15, 0.98)
              );
            text-decoration: none;
            transition:
              transform 200ms ease,
              border-color 200ms ease,
              background 200ms ease;
          }

          .birds-navigation__item:hover {
            z-index: 2;
            transform: translateY(-4px);
            border-color:
              rgba(212, 175, 55, 0.58);
            background:
              linear-gradient(
                145deg,
                rgba(10, 31, 44, 0.96),
                rgba(3, 8, 15, 1)
              );
          }

          .birds-navigation__item > span {
            color: var(--birds-gold);
            font-size: 0.7rem;
            letter-spacing: 0.15em;
          }

          .birds-navigation__item h3 {
            margin: auto 0 10px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(1.8rem, 3vw, 2.7rem);
            font-weight: 400;
            line-height: 1;
          }

          .birds-navigation__item p {
            margin: 0;
            color: var(--birds-cyan);
            font-family: Georgia, serif;
            font-size: 0.82rem;
            font-style: italic;
          }

          .birds-collections {
            padding-bottom:
              clamp(90px, 11vw, 170px);
          }

          .birds-collection {
            display: grid;
            grid-template-columns:
              minmax(0, 1.12fr)
              minmax(330px, 0.88fr);
            border:
              1px solid var(--birds-border);
            background:
              linear-gradient(
                145deg,
                rgba(7, 18, 30, 0.98),
                rgba(2, 7, 13, 1)
              );
          }

          .birds-collection + .birds-collection {
            margin-top:
              clamp(85px, 11vw, 160px);
          }

          .birds-collection--reverse
          .birds-collection__hero {
            grid-column: 2;
          }

          .birds-collection--reverse
          .birds-collection__content {
            grid-column: 1;
            grid-row: 1;
          }

          .birds-collection__hero {
            position: relative;
            min-height: 720px;
            overflow: hidden;
            background: #07111c;
          }

          .birds-collection__cover {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
            transition:
              transform 900ms
              cubic-bezier(0.2, 0.7, 0, 1);
          }

          .birds-collection:hover
          .birds-collection__cover {
            transform: scale(1.025);
          }

          .birds-collection__overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              linear-gradient(
                to top,
                rgba(2, 6, 11, 0.86),
                transparent 48%
              ),
              linear-gradient(
                135deg,
                rgba(2, 6, 11, 0.2),
                transparent
              );
          }

          .birds-collection__number {
            position: absolute;
            top: 26px;
            left: 26px;
            z-index: 2;
            color: rgba(255, 255, 255, 0.88);
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: 1.35rem;
            letter-spacing: 0.09em;
          }

          .birds-collection__caption {
            position: absolute;
            right: 28px;
            bottom: 27px;
            left: 28px;
            z-index: 2;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 20px;
          }

          .birds-collection__caption span {
            color: var(--birds-gold);
            font-size: 0.61rem;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .birds-collection__caption strong {
            max-width: 230px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: 1.45rem;
            font-weight: 400;
            line-height: 1.1;
            text-align: right;
          }

          .birds-collection__content {
            padding:
              clamp(40px, 6vw, 78px);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .birds-collection__eyebrow {
            color: var(--birds-gold);
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            line-height: 1.6;
            text-transform: uppercase;
          }

          .birds-collection__content h2 {
            margin: 20px 0 0;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size:
              clamp(3.2rem, 5vw, 5.5rem);
            font-weight: 400;
            line-height: 0.92;
            letter-spacing: -0.04em;
          }

          .birds-collection__scientific {
            margin: 16px 0 0;
            color: var(--birds-cyan);
            font-family: Georgia, serif;
            font-style: italic;
          }

          .birds-collection__description {
            margin: 30px 0 0;
            color: var(--birds-muted);
            font-size: 1rem;
            line-height: 1.85;
          }

          .birds-collection__actions {
            margin-top: 35px;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .birds-collection__gallery {
            grid-column: 1 / -1;
            padding: 24px;
            display: grid;
            grid-template-columns:
              repeat(4, minmax(0, 1fr));
            gap: 18px;
            border-top:
              1px solid var(--birds-border);
            background: rgba(2, 6, 11, 0.65);
          }

          .birds-gallery__item {
            position: relative;
            min-width: 0;
            margin: 0;
            overflow: hidden;
            aspect-ratio: 3 / 4;
            background: #07111c;
          }

          .birds-gallery__item img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition:
              transform 650ms ease,
              filter 300ms ease;
          }

          .birds-gallery__item:hover img {
            transform: scale(1.035);
          }

          .birds-gallery__item figcaption {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 34px 14px 13px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background:
              linear-gradient(
                to top,
                rgba(2, 6, 11, 0.94),
                transparent
              );
          }

          .birds-gallery__item figcaption span {
            color: var(--birds-gold);
            font-size: 0.67rem;
            letter-spacing: 0.12em;
          }

          .birds-gallery__item figcaption p {
            margin: 0;
            color: rgba(243, 240, 232, 0.65);
            font-size: 0.58rem;
            letter-spacing: 0.08em;
            text-align: right;
            text-transform: uppercase;
          }

          .birds-final {
            padding:
              clamp(20px, 5vw, 60px)
              0
              clamp(100px, 12vw, 180px);
          }

          .birds-final__box {
            padding:
              clamp(42px, 7vw, 80px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 50px;
            border:
              1px solid var(--birds-border);
            background:
              radial-gradient(
                circle at 90% 50%,
                rgba(37, 200, 209, 0.1),
                transparent 38%
              ),
              #07111c;
          }

          .birds-final h2 {
            margin: 15px 0 18px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size:
              clamp(2.8rem, 5vw, 5rem);
            font-weight: 400;
            line-height: 0.96;
          }

          .birds-final p {
            max-width: 680px;
            margin: 0;
            color: var(--birds-muted);
            line-height: 1.8;
          }

          @media (max-width: 1020px) {
            .birds-navigation__grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
            }

            .birds-collection {
              grid-template-columns: 1fr;
            }

            .birds-collection--reverse
            .birds-collection__hero,
            .birds-collection--reverse
            .birds-collection__content {
              grid-column: auto;
              grid-row: auto;
            }

            .birds-collection__hero {
              min-height: 680px;
            }

            .birds-collection__gallery {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 820px) {
            .birds-introduction__layout {
              grid-template-columns: 1fr;
              gap: 26px;
            }

            .birds-final__box {
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 620px) {
            .birds-container {
              width: min(100% - 30px, 1240px);
            }

            .birds-hero {
              min-height: auto;
            }

            .birds-hero__content {
              padding-top: 130px;
            }

            .birds-hero h1 {
              font-size:
                clamp(4rem, 18vw, 6.3rem);
            }

            .birds-navigation__grid {
              grid-template-columns: 1fr;
            }

            .birds-navigation__item {
              min-height: 180px;
            }

            .birds-collection__hero {
              min-height: 570px;
            }

            .birds-collection__caption {
              align-items: flex-start;
              flex-direction: column;
            }

            .birds-collection__caption strong {
              text-align: left;
            }

            .birds-collection__content {
              padding: 37px 23px 43px;
            }

            .birds-collection__gallery {
              padding: 12px;
              grid-template-columns: 1fr;
              gap: 12px;
            }

            .birds-gallery__item {
              aspect-ratio: 4 / 5;
            }

            .birds-hero__actions,
            .birds-collection__actions {
              flex-direction: column;
            }

            .birds-action {
              width: 100%;
            }

            .birds-final__box {
              padding: 34px 23px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .birds-action,
            .birds-navigation__item,
            .birds-collection__cover,
            .birds-gallery__item img {
              transition: none;
            }

            .birds-action:hover,
            .birds-navigation__item:hover,
            .birds-collection:hover
            .birds-collection__cover,
            .birds-gallery__item:hover img {
              transform: none;
            }
          }
        `}
      </style>

      <section className="birds-hero">
        <div className="birds-container">
          <div className="birds-hero__content">
            <span className="birds-eyebrow">
              AgroNexus Living Ecosystem™
            </span>

            <h1>
              Aves e
              <span> Psitacídeos</span>
            </h1>

            <p className="birds-hero__lead">
              Fotografia editorial, biodiversidade, genética,
              comportamento, conservação e criação responsável
              reunidos em uma experiência dedicada à beleza e
              à singularidade de cada espécie.
            </p>

            <div className="birds-hero__actions">
              <a
                href="#colecoes"
                className="birds-action birds-action--primary"
              >
                Explorar coleções
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#/biblioteca"
                className="birds-action birds-action--secondary"
              >
                Biblioteca AgroNexus
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="colecoes"
        className="birds-introduction"
      >
        <div className="birds-container">
          <div className="birds-introduction__layout">
            <div>
              <span className="birds-eyebrow">
                Coleções editoriais
              </span>

              <h2>
                Primeiro a beleza.
                <span> Depois, o conhecimento.</span>
              </h2>
            </div>

            <p>
              A fotografia desperta curiosidade. A curadoria
              transforma essa curiosidade em conhecimento,
              responsabilidade, conservação e conexão com o
              ecossistema AgroNexus™.
            </p>
          </div>
        </div>
      </section>

      <nav
        className="birds-navigation"
        aria-label="Coleções de aves"
      >
        <div className="birds-container">
          <div className="birds-navigation__grid">
            {COLLECTIONS.map((collection) => (
              <a
                href={`#${collection.id}`}
                className="birds-navigation__item"
                key={collection.id}
              >
                <span>{collection.number}</span>

                <h3>{collection.title}</h3>

                <p>{collection.scientificName}</p>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="birds-collections">
        <div className="birds-container">
          {COLLECTIONS.map((collection, index) => (
            <CollectionSection
              collection={collection}
              index={index}
              key={collection.id}
            />
          ))}
        </div>
      </section>

      <section className="birds-final">
        <div className="birds-container">
          <div className="birds-final__box">
            <div>
              <span className="birds-eyebrow">
                Conhecimento que orienta
              </span>

              <h2>
                Biblioteca Editorial AgroNexus™
              </h2>

              <p>
                Guias oficiais completos para quem acredita
                que conhecer profundamente uma espécie é o
                primeiro passo para cuidar, preservar e criar
                com responsabilidade.
              </p>
            </div>

            <a
              href="#/biblioteca"
              className="birds-action birds-action--primary"
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
