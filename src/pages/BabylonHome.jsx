/**
 * AgroNexus — Babylon Home
 * Project Babylon Rebuild
 *
 * NOVA HOME.
 *
 * Não é catálogo.
 * Não é zoológico de cards.
 * Não é marketplace na primeira dobra.
 *
 * É a porta de entrada para o ecossistema Babylon.
 */

import worldCatalog from '../data/worldCatalog'

/* ============================================================
   CURADORIA DOS MUNDOS
   ============================================================ */

const FEATURED_WORLD_IDS = [
  'aves',
  'aquarismo',
  'corais',
  'pequenos-mamiferos',
  'repteis',
  'plantas',
  'saude',
  'equipamentos',
]

const DISCOVERY_WORLD_IDS = [
  'caes',
  'gatos',
  'plantas-aquaticas',
  'bonsais',
  'orquideas',
  'alimentacao',
]

const WORLD_NUMBERS = {
  aves: '01',
  aquarismo: '02',
  corais: '03',
  'pequenos-mamiferos': '04',
  repteis: '05',
  plantas: '06',
  saude: '07',
  equipamentos: '08',
  caes: '09',
  gatos: '10',
  'plantas-aquaticas': '11',
  bonsais: '12',
  orquideas: '13',
  alimentacao: '14',
}

const WORLD_ACCENTS = {
  aves: '#d8b76a',
  aquarismo: '#68b9d8',
  corais: '#ed826d',
  'pequenos-mamiferos': '#c9a57d',
  repteis: '#839d66',
  plantas: '#6ea477',
  saude: '#c8d7d2',
  equipamentos: '#9ca6ac',
  caes: '#cba37c',
  gatos: '#a89ac1',
  'plantas-aquaticas': '#65aaa1',
  bonsais: '#9e805c',
  orquideas: '#c78ba7',
  alimentacao: '#c4a45b',
}

function getWorld(worldId) {
  const world =
    worldCatalog[worldId]

  if (!world) {
    return null
  }

  return {
    id:
      worldId,

    number:
      WORLD_NUMBERS[worldId] ||
      '00',

    accent:
      WORLD_ACCENTS[worldId] ||
      '#d8b76a',

    title:
      world.title,

    eyebrow:
      world.eyebrow,

    hero:
      world.hero,

    departments:
      world.departments || [],

    href:
      `#/mundo/${worldId}`,
  }
}

const FEATURED_WORLDS =
  FEATURED_WORLD_IDS
    .map(getWorld)
    .filter(Boolean)

const DISCOVERY_WORLDS =
  DISCOVERY_WORLD_IDS
    .map(getWorld)
    .filter(Boolean)

/* ============================================================
   WORLD PORTAL
   ============================================================ */

function WorldPortal({
  world,
  index,
}) {
  return (
    <a
      href={world.href}
      className="babylon-world"
      style={{
        '--world-accent':
          world.accent,
      }}
    >
      <div className="babylon-world__index">
        {world.number}
      </div>

      <div className="babylon-world__body">
        <p className="babylon-world__eyebrow">
          {world.eyebrow}
        </p>

        <h2 className="babylon-world__title">
          {world.title}
        </h2>

        <p className="babylon-world__statement">
          {world.hero?.title}
        </p>

        <p className="babylon-world__description">
          {world.hero?.subtitle}
        </p>

        <div className="babylon-world__departments">
          {
            world.departments
              .slice(0, 5)
              .map(
                (department) => (
                  <span
                    key={
                      `${world.id}-${department}`
                    }
                  >
                    {department}
                  </span>
                )
              )
          }
        </div>
      </div>

      <div className="babylon-world__action">
        <span>
          Entrar
        </span>

        <span
          aria-hidden="true"
          className="babylon-world__arrow"
        >
          ↗
        </span>
      </div>

      <div
        className="babylon-world__sequence"
        aria-hidden="true"
      >
        {
          String(
            index + 1
          ).padStart(
            2,
            '0'
          )
        }
      </div>
    </a>
  )
}

/* ============================================================
   HOME
   ============================================================ */

export default function BabylonHome() {
  return (
    <>
      <style>
        {`
          :root {
            --babylon-black:
              #090b0a;

            --babylon-ink:
              #111411;

            --babylon-paper:
              #f1f0e9;

            --babylon-paper-soft:
              #e8e7df;

            --babylon-line:
              rgba(17, 20, 17, 0.16);

            --babylon-line-dark:
              rgba(255, 255, 255, 0.16);

            --babylon-muted:
              #626861;

            --babylon-accent:
              #d8b76a;
          }

          * {
            box-sizing:
              border-box;
          }

          html {
            scroll-behavior:
              smooth;
          }

          body {
            margin:
              0;

            background:
              var(--babylon-paper);

            color:
              var(--babylon-ink);
          }

          .babylon-home {
            overflow:
              hidden;

            background:
              var(--babylon-paper);
          }

          /* ================================================
             HERO
             ================================================ */

          .babylon-hero {
            position:
              relative;

            min-height:
              100svh;

            display:
              flex;

            flex-direction:
              column;

            justify-content:
              flex-end;

            padding:
              clamp(
                140px,
                16vw,
                220px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              clamp(
                52px,
                7vw,
                100px
              );

            background:
              var(--babylon-black);

            color:
              white;

            isolation:
              isolate;
          }

          .babylon-hero::before {
            content:
              '';

            position:
              absolute;

            inset:
              0;

            z-index:
              -2;

            background:
              radial-gradient(
                circle
                at
                78%
                22%,
                rgba(
                  216,
                  183,
                  106,
                  0.22
                ),
                transparent
                  28%
              ),
              radial-gradient(
                circle
                at
                18%
                74%,
                rgba(
                  68,
                  113,
                  84,
                  0.2
                ),
                transparent
                  30%
              ),
              linear-gradient(
                140deg,
                #080a09
                  0%,
                #101611
                  48%,
                #080a09
                  100%
              );
          }

          .babylon-hero::after {
            content:
              '';

            position:
              absolute;

            inset:
              0;

            z-index:
              -1;

            opacity:
              0.16;

            background-image:
              linear-gradient(
                rgba(
                  255,
                  255,
                  255,
                  0.05
                )
                1px,
                transparent
                  1px
              ),
              linear-gradient(
                90deg,
                rgba(
                  255,
                  255,
                  255,
                  0.05
                )
                1px,
                transparent
                  1px
              );

            background-size:
              72px
              72px;

            mask-image:
              linear-gradient(
                to bottom,
                black,
                transparent
              );
          }

          .babylon-hero__meta {
            position:
              absolute;

            top:
              clamp(
                118px,
                11vw,
                160px
              );

            left:
              clamp(
                24px,
                5.6vw,
                96px
              );

            right:
              clamp(
                24px,
                5.6vw,
                96px
              );

            display:
              flex;

            justify-content:
              space-between;

            gap:
              24px;

            color:
              rgba(
                255,
                255,
                255,
                0.62
              );

            font-size:
              0.7rem;

            font-weight:
              700;

            letter-spacing:
              0.16em;

            text-transform:
              uppercase;
          }

          .babylon-hero__kicker {
            margin:
              0
              0
              28px;

            color:
              var(
                --babylon-accent
              );

            font-size:
              clamp(
                0.7rem,
                1vw,
                0.84rem
              );

            font-weight:
              800;

            letter-spacing:
              0.22em;

            text-transform:
              uppercase;
          }

          .babylon-hero__title {
            max-width:
              1320px;

            margin:
              0;

            font-size:
              clamp(
                4.2rem,
                11.5vw,
                12rem
              );

            font-weight:
              500;

            line-height:
              0.78;

            letter-spacing:
              -0.075em;
          }

          .babylon-hero__title span {
            display:
              block;
          }

          .babylon-hero__title em {
            color:
              var(
                --babylon-accent
              );

            font-style:
              normal;
          }

          .babylon-hero__footer {
            margin-top:
              clamp(
                46px,
                7vw,
                90px
              );

            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1.4fr
              )
              minmax(
                260px,
                0.6fr
              );

            gap:
              clamp(
                36px,
                8vw,
                120px
              );

            align-items:
              end;
          }

          .babylon-hero__lead {
            max-width:
              860px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.82
              );

            font-size:
              clamp(
                1.2rem,
                2.15vw,
                2rem
              );

            line-height:
              1.38;

            letter-spacing:
              -0.025em;
          }

          .babylon-hero__manifest {
            margin:
              0;

            padding-top:
              20px;

            border-top:
              1px solid
              var(
                --babylon-line-dark
              );

            color:
              rgba(
                255,
                255,
                255,
                0.56
              );

            font-size:
              0.78rem;

            line-height:
              1.7;

            text-transform:
              uppercase;

            letter-spacing:
              0.1em;
          }

          /* ================================================
             MANIFESTO
             ================================================ */

          .babylon-manifesto {
            display:
              grid;

            grid-template-columns:
              minmax(
                160px,
                0.38fr
              )
              minmax(
                0,
                1.62fr
              );

            gap:
              clamp(
                40px,
                10vw,
                180px
              );

            padding:
              clamp(
                90px,
                13vw,
                190px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            border-bottom:
              1px solid
              var(
                --babylon-line
              );
          }

          .babylon-section-label {
            margin:
              0;

            color:
              var(
                --babylon-muted
              );

            font-size:
              0.69rem;

            font-weight:
              800;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .babylon-manifesto__text {
            max-width:
              1120px;

            margin:
              0;

            font-size:
              clamp(
                2.35rem,
                5vw,
                6.2rem
              );

            line-height:
              0.98;

            letter-spacing:
              -0.055em;

            font-weight:
              520;
          }

          .babylon-manifesto__text strong {
            color:
              #477153;

            font-weight:
              inherit;
          }

          /* ================================================
             WORLDS INTRO
             ================================================ */

          .babylon-worlds-header {
            display:
              grid;

            grid-template-columns:
              minmax(
                160px,
                0.38fr
              )
              minmax(
                0,
                1.62fr
              );

            gap:
              clamp(
                40px,
                10vw,
                180px
              );

            padding:
              clamp(
                80px,
                11vw,
                160px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              clamp(
                54px,
                7vw,
                90px
              );
          }

          .babylon-worlds-header h2 {
            max-width:
              940px;

            margin:
              0;

            font-size:
              clamp(
                3rem,
                7vw,
                8rem
              );

            font-weight:
              520;

            line-height:
              0.88;

            letter-spacing:
              -0.065em;
          }

          /* ================================================
             WORLD PORTALS
             ================================================ */

          .babylon-worlds {
            border-top:
              1px solid
              var(
                --babylon-line
              );
          }

          .babylon-world {
            position:
              relative;

            min-height:
              clamp(
                340px,
                43vw,
                600px
              );

            display:
              grid;

            grid-template-columns:
              minmax(
                80px,
                0.22fr
              )
              minmax(
                0,
                1fr
              )
              minmax(
                120px,
                0.24fr
              );

            gap:
              clamp(
                24px,
                6vw,
                90px
              );

            align-items:
              center;

            padding:
              clamp(
                48px,
                6vw,
                92px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            border-bottom:
              1px solid
              var(
                --babylon-line
              );

            color:
              var(
                --babylon-ink
              );

            text-decoration:
              none;

            transition:
              background
                260ms ease,
              color
                260ms ease;
          }

          .babylon-world::before {
            content:
              '';

            position:
              absolute;

            inset:
              0;

            opacity:
              0;

            background:
              var(
                --world-accent
              );

            transition:
              opacity
                260ms ease;

            z-index:
              0;
          }

          .babylon-world:hover::before,
          .babylon-world:focus-visible::before {
            opacity:
              0.13;
          }

          .babylon-world > * {
            position:
              relative;

            z-index:
              1;
          }

          .babylon-world__index {
            align-self:
              start;

            padding-top:
              8px;

            color:
              var(
                --world-accent
              );

            font-size:
              0.82rem;

            font-weight:
              900;

            letter-spacing:
              0.15em;
          }

          .babylon-world__eyebrow {
            margin:
              0
              0
              16px;

            color:
              var(
                --world-accent
              );

            font-size:
              0.71rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .babylon-world__title {
            margin:
              0;

            font-size:
              clamp(
                3.6rem,
                8vw,
                9.5rem
              );

            font-weight:
              520;

            line-height:
              0.82;

            letter-spacing:
              -0.07em;
          }

          .babylon-world__statement {
            max-width:
              760px;

            margin:
              34px
              0
              0;

            font-size:
              clamp(
                1.25rem,
                2.1vw,
                2rem
              );

            line-height:
              1.32;

            letter-spacing:
              -0.025em;
          }

          .babylon-world__description {
            max-width:
              700px;

            margin:
              16px
              0
              0;

            color:
              var(
                --babylon-muted
              );

            font-size:
              0.98rem;

            line-height:
              1.7;
          }

          .babylon-world__departments {
            margin-top:
              30px;

            display:
              flex;

            flex-wrap:
              wrap;

            gap:
              8px
              18px;

            color:
              var(
                --babylon-muted
              );

            font-size:
              0.68rem;

            font-weight:
              700;

            letter-spacing:
              0.1em;

            text-transform:
              uppercase;
          }

          .babylon-world__departments span:not(:last-child)::after {
            content:
              ' ·';

            opacity:
              0.5;
          }

          .babylon-world__action {
            align-self:
              end;

            justify-self:
              end;

            display:
              flex;

            align-items:
              center;

            gap:
              16px;

            padding-bottom:
              4px;

            font-size:
              0.76rem;

            font-weight:
              900;

            text-transform:
              uppercase;

            letter-spacing:
              0.14em;
          }

          .babylon-world__arrow {
            font-size:
              2rem;

            line-height:
              1;

            transition:
              transform
                220ms ease;
          }

          .babylon-world:hover
          .babylon-world__arrow {
            transform:
              translate(
                8px,
                -8px
              );
          }

          .babylon-world__sequence {
            position:
              absolute;

            right:
              2vw;

            bottom:
              -0.1em;

            z-index:
              0;

            color:
              rgba(
                17,
                20,
                17,
                0.028
              );

            font-size:
              clamp(
                8rem,
                22vw,
                28rem
              );

            font-weight:
              900;

            line-height:
              0.7;

            letter-spacing:
              -0.1em;

            pointer-events:
              none;
          }

          /* ================================================
             DISCOVERY
             ================================================ */

          .babylon-discovery {
            padding:
              clamp(
                90px,
                12vw,
                180px
              )
              clamp(
                24px,
                5.6vw,
                96px
              );

            background:
              #111411;

            color:
              white;
          }

          .babylon-discovery__header {
            display:
              grid;

            grid-template-columns:
              minmax(
                160px,
                0.38fr
              )
              minmax(
                0,
                1.62fr
              );

            gap:
              clamp(
                40px,
                10vw,
                180px
              );

            margin-bottom:
              clamp(
                70px,
                10vw,
                130px
              );
          }

          .babylon-discovery__header
          .babylon-section-label {
            color:
              rgba(
                255,
                255,
                255,
                0.48
              );
          }

          .babylon-discovery__header h2 {
            max-width:
              1020px;

            margin:
              0;

            font-size:
              clamp(
                3rem,
                7vw,
                8rem
              );

            font-weight:
              500;

            line-height:
              0.89;

            letter-spacing:
              -0.065em;
          }

          .babylon-discovery__list {
            border-top:
              1px solid
              var(
                --babylon-line-dark
              );
          }

          .babylon-discovery__item {
            display:
              grid;

            grid-template-columns:
              90px
              minmax(
                0,
                1fr
              )
              auto;

            gap:
              24px;

            align-items:
              center;

            padding:
              26px
              0;

            border-bottom:
              1px solid
              var(
                --babylon-line-dark
              );

            color:
              white;

            text-decoration:
              none;

            transition:
              padding
                200ms ease;
          }

          .babylon-discovery__item:hover {
            padding-left:
              14px;
          }

          .babylon-discovery__number {
            color:
              rgba(
                255,
                255,
                255,
                0.38
              );

            font-size:
              0.7rem;

            font-weight:
              800;

            letter-spacing:
              0.14em;
          }

          .babylon-discovery__name {
            font-size:
              clamp(
                1.6rem,
                3vw,
                3.4rem
              );

            line-height:
              1;

            letter-spacing:
              -0.045em;
          }

          .babylon-discovery__arrow {
            color:
              var(
                --world-accent
              );

            font-size:
              1.8rem;
          }

          /* ================================================
             FINAL
             ================================================ */

          .babylon-final {
            min-height:
              78vh;

            display:
              flex;

            flex-direction:
              column;

            justify-content:
              space-between;

            padding:
              clamp(
                90px,
                12vw,
                170px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              clamp(
                50px,
                6vw,
                80px
              );

            background:
              var(
                --babylon-accent
              );

            color:
              #101210;
          }

          .babylon-final__kicker {
            margin:
              0;

            font-size:
              0.72rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .babylon-final h2 {
            max-width:
              1320px;

            margin:
              80px
              0;

            font-size:
              clamp(
                4rem,
                10vw,
                11rem
              );

            font-weight:
              520;

            line-height:
              0.82;

            letter-spacing:
              -0.075em;
          }

          .babylon-final__footer {
            display:
              flex;

            justify-content:
              space-between;

            gap:
              30px;

            padding-top:
              28px;

            border-top:
              1px solid
              rgba(
                16,
                18,
                16,
                0.34
              );

            font-size:
              0.7rem;

            font-weight:
              800;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;
          }

          /* ================================================
             RESPONSIVE
             ================================================ */

          @media (
            max-width:
              900px
          ) {
            .babylon-hero__meta {
              flex-direction:
                column;

              gap:
                6px;
            }

            .babylon-hero__footer,
            .babylon-manifesto,
            .babylon-worlds-header,
            .babylon-discovery__header {
              grid-template-columns:
                1fr;
            }

            .babylon-world {
              grid-template-columns:
                52px
                minmax(
                  0,
                  1fr
                );

              gap:
                22px;
            }

            .babylon-world__action {
              grid-column:
                2;

              justify-self:
                start;

              margin-top:
                20px;
            }
          }

          @media (
            max-width:
              620px
          ) {
            .babylon-hero {
              min-height:
                92svh;
            }

            .babylon-hero__title {
              font-size:
                clamp(
                  3.8rem,
                  20vw,
                  6.2rem
                );
            }

            .babylon-world {
              min-height:
                auto;

              grid-template-columns:
                1fr;

              padding-top:
                56px;

              padding-bottom:
                56px;
            }

            .babylon-world__index,
            .babylon-world__action {
              grid-column:
                1;
            }

            .babylon-world__title {
              font-size:
                clamp(
                  3.2rem,
                  17vw,
                  5.8rem
                );
            }

            .babylon-world__departments {
              display:
                none;
            }

            .babylon-discovery__item {
              grid-template-columns:
                50px
                minmax(
                  0,
                  1fr
                )
                auto;
            }

            .babylon-final__footer {
              flex-direction:
                column;
            }
          }

          @media (
            prefers-reduced-motion:
              reduce
          ) {
            *,
            *::before,
            *::after {
              scroll-behavior:
                auto !important;

              transition:
                none !important;
            }
          }
        `}
      </style>

      <main className="babylon-home">

        {/* ==================================================
            HERO
            ================================================== */}

        <section className="babylon-hero">

          <div className="babylon-hero__meta">
            <span>
              AgroNexus / Babylon
            </span>

            <span>
              Biodiversity Intelligence System
            </span>
          </div>

          <p className="babylon-hero__kicker">
            Explore life differently
          </p>

          <h1 className="babylon-hero__title">
            <span>
              One planet.
            </span>

            <span>
              Infinite
              {' '}
              <em>
                worlds.
              </em>
            </span>
          </h1>

          <div className="babylon-hero__footer">

            <p className="babylon-hero__lead">
              Espécies, ambientes,
              conhecimento, ciência,
              criação responsável,
              produtos e pessoas
              conectados em uma única
              arquitetura de biodiversidade.
            </p>

            <p className="babylon-hero__manifest">
              Não comece pelo produto.
              <br />
              Comece pelo mundo.
              <br />
              Entenda a vida.
              <br />
              Descubra o ecossistema.
            </p>

          </div>

        </section>

        {/* ==================================================
            MANIFESTO
            ================================================== */}

        <section className="babylon-manifesto">

          <p className="babylon-section-label">
            00 / Babylon
          </p>

          <p className="babylon-manifesto__text">
            A biodiversidade não cabe
            em uma prateleira.
            {' '}
            <strong>
              Babylon organiza relações,
              não caixas.
            </strong>
          </p>

        </section>

        {/* ==================================================
            WORLD INTRO
            ================================================== */}

        <section className="babylon-worlds-header">

          <p className="babylon-section-label">
            01 / Mundos
          </p>

          <h2>
            Escolha onde
            você quer entrar.
          </h2>

        </section>

        {/* ==================================================
            FEATURED WORLDS
            ================================================== */}

        <section
          className="babylon-worlds"
          aria-label="Mundos AgroNexus"
        >
          {
            FEATURED_WORLDS.map(
              (
                world,
                index
              ) => (
                <WorldPortal
                  key={world.id}
                  world={world}
                  index={index}
                />
              )
            )
          }
        </section>

        {/* ==================================================
            DISCOVERY
            ================================================== */}

        <section className="babylon-discovery">

          <div className="babylon-discovery__header">

            <p className="babylon-section-label">
              02 / Descobrir
            </p>

            <h2>
              Há sempre outro
              mundo depois deste.
            </h2>

          </div>

          <div className="babylon-discovery__list">

            {
              DISCOVERY_WORLDS.map(
                (world) => (
                  <a
                    key={world.id}
                    href={world.href}
                    className="babylon-discovery__item"
                    style={{
                      '--world-accent':
                        world.accent,
                    }}
                  >

                    <span className="babylon-discovery__number">
                      {world.number}
                    </span>

                    <span className="babylon-discovery__name">
                      {world.title}
                    </span>

                    <span
                      className="babylon-discovery__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </a>
                )
              )
            }

          </div>

        </section>

        {/* ==================================================
            FINAL
            ================================================== */}

        <section className="babylon-final">

          <p className="babylon-final__kicker">
            AgroNexus Babylon
          </p>

          <h2>
            Life is not
            a category.
          </h2>

          <div className="babylon-final__footer">

            <span>
              Biodiversidade
            </span>

            <span>
              Ciência
            </span>

            <span>
              Conhecimento
            </span>

            <span>
              Conexão
            </span>

          </div>

        </section>

      </main>
    </>
  )
}
