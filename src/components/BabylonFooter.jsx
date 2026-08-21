/**
 * AgroNexus — Babylon Footer
 * Project Babylon Rebuild
 *
 * Footer editorial da nova arquitetura Babylon.
 *
 * Regras:
 * - sem rodapé corporativo antigo;
 * - sem lista infinita de links;
 * - sem aparência de marketplace;
 * - foco em identidade, mundos e continuidade da exploração.
 */

const FOOTER_WORLDS = [
  {
    label: 'Aves',
    href: '#/mundo/aves',
  },

  {
    label: 'Aquarismo',
    href: '#/mundo/aquarismo',
  },

  {
    label: 'Corais & Reef',
    href: '#/mundo/corais',
  },

  {
    label: 'Répteis',
    href: '#/mundo/repteis',
  },

  {
    label: 'Pequenos Mamíferos',
    href: '#/mundo/pequenos-mamiferos',
  },

  {
    label: 'Plantas',
    href: '#/mundo/plantas',
  },

  {
    label: 'Saúde',
    href: '#/mundo/saude',
  },

  {
    label: 'Equipamentos',
    href: '#/mundo/equipamentos',
  },
]

const FOOTER_DISCOVERY = [
  {
    label: 'Cães',
    href: '#/mundo/caes',
  },

  {
    label: 'Gatos',
    href: '#/mundo/gatos',
  },

  {
    label: 'Plantas Aquáticas',
    href: '#/mundo/plantas-aquaticas',
  },

  {
    label: 'Bonsais',
    href: '#/mundo/bonsais',
  },

  {
    label: 'Orquídeas',
    href: '#/mundo/orquideas',
  },

  {
    label: 'Alimentação',
    href: '#/mundo/alimentacao',
  },
]

function FooterLink({
  href,
  children,
}) {
  return (
    <a
      href={href}
      className="babylon-footer__link"
    >
      <span>
        {children}
      </span>

      <span
        className="babylon-footer__link-arrow"
        aria-hidden="true"
      >
        ↗
      </span>
    </a>
  )
}

export default function BabylonFooter() {
  const year =
    new Date().getFullYear()

  return (
    <>
      <style>
        {`
          .babylon-footer {
            background:
              #090b0a;

            color:
              white;

            padding:
              clamp(
                80px,
                10vw,
                150px
              )
              clamp(
                24px,
                5.6vw,
                96px
              )
              34px;
          }

          .babylon-footer__top {
            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1.35fr
              )
              minmax(
                260px,
                0.65fr
              );

            gap:
              clamp(
                50px,
                10vw,
                150px
              );

            align-items:
              start;

            padding-bottom:
              clamp(
                70px,
                9vw,
                130px
              );

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.12
              );
          }

          .babylon-footer__eyebrow {
            margin:
              0
              0
              24px;

            color:
              #d8b76a;

            font-size:
              0.68rem;

            font-weight:
              900;

            letter-spacing:
              0.2em;

            text-transform:
              uppercase;
          }

          .babylon-footer__statement {
            max-width:
              1000px;

            margin:
              0;

            font-size:
              clamp(
                3.2rem,
                7.5vw,
                8.5rem
              );

            font-weight:
              500;

            line-height:
              0.84;

            letter-spacing:
              -0.07em;
          }

          .babylon-footer__statement span {
            color:
              #d8b76a;
          }

          .babylon-footer__intro {
            max-width:
              520px;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.62
              );

            font-size:
              1rem;

            line-height:
              1.8;
          }

          .babylon-footer__explore {
            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            min-height:
              48px;

            margin-top:
              34px;

            padding:
              0
              22px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.24
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.68rem;

            font-weight:
              900;

            letter-spacing:
              0.14em;

            text-transform:
              uppercase;

            transition:
              background
                180ms ease,
              color
                180ms ease,
              border-color
                180ms ease;
          }

          .babylon-footer__explore:hover,
          .babylon-footer__explore:focus-visible {
            background:
              #d8b76a;

            color:
              #111411;

            border-color:
              #d8b76a;
          }

          .babylon-footer__middle {
            display:
              grid;

            grid-template-columns:
              minmax(
                0,
                1fr
              )
              minmax(
                0,
                1fr
              );

            gap:
              clamp(
                60px,
                9vw,
                140px
              );

            padding:
              clamp(
                70px,
                9vw,
                120px
              )
              0;
          }

          .babylon-footer__column-title {
            margin:
              0
              0
              28px;

            color:
              rgba(
                255,
                255,
                255,
                0.44
              );

            font-size:
              0.64rem;

            font-weight:
              900;

            letter-spacing:
              0.16em;

            text-transform:
              uppercase;
          }

          .babylon-footer__links {
            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.12
              );
          }

          .babylon-footer__link {
            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap:
              20px;

            padding:
              18px
              0;

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.12
              );

            color:
              rgba(
                255,
                255,
                255,
                0.82
              );

            text-decoration:
              none;

            font-size:
              clamp(
                1.05rem,
                1.8vw,
                1.5rem
              );

            letter-spacing:
              -0.025em;

            transition:
              color
                180ms ease,
              padding
                180ms ease;
          }

          .babylon-footer__link:hover,
          .babylon-footer__link:focus-visible {
            color:
              white;

            padding-left:
              10px;
          }

          .babylon-footer__link-arrow {
            color:
              #d8b76a;

            font-size:
              1.25rem;

            transition:
              transform
                180ms ease;
          }

          .babylon-footer__link:hover
          .babylon-footer__link-arrow {
            transform:
              translate(
                5px,
                -5px
              );
          }

          .babylon-footer__bottom {
            display:
              grid;

            grid-template-columns:
              auto
              minmax(
                0,
                1fr
              )
              auto;

            gap:
              30px;

            align-items:
              end;

            padding-top:
              28px;

            border-top:
              1px solid
              rgba(
                255,
                255,
                255,
                0.12
              );
          }

          .babylon-footer__brand {
            display:
              flex;

            flex-direction:
              column;

            gap:
              4px;
          }

          .babylon-footer__brand-name {
            font-size:
              1.2rem;

            font-weight:
              800;

            letter-spacing:
              -0.04em;
          }

          .babylon-footer__brand-system {
            color:
              #d8b76a;

            font-size:
              0.58rem;

            font-weight:
              900;

            letter-spacing:
              0.18em;

            text-transform:
              uppercase;
          }

          .babylon-footer__meta {
            justify-self:
              center;

            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.38
              );

            font-size:
              0.62rem;

            font-weight:
              800;

            letter-spacing:
              0.12em;

            line-height:
              1.7;

            text-align:
              center;

            text-transform:
              uppercase;
          }

          .babylon-footer__copyright {
            margin:
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.38
              );

            font-size:
              0.62rem;

            font-weight:
              800;

            letter-spacing:
              0.1em;

            text-transform:
              uppercase;
          }

          @media (
            max-width:
              900px
          ) {
            .babylon-footer__top,
            .babylon-footer__middle,
            .babylon-footer__bottom {
              grid-template-columns:
                1fr;
            }

            .babylon-footer__meta {
              justify-self:
                start;

              text-align:
                left;
            }
          }

          @media (
            max-width:
              620px
          ) {
            .babylon-footer {
              padding-top:
                70px;
            }

            .babylon-footer__statement {
              font-size:
                clamp(
                  3rem,
                  16vw,
                  5.6rem
                );
            }

            .babylon-footer__middle {
              gap:
                54px;
            }
          }

          @media (
            prefers-reduced-motion:
              reduce
          ) {
            .babylon-footer *,
            .babylon-footer *::before,
            .babylon-footer *::after {
              transition:
                none !important;
            }
          }
        `}
      </style>

      <footer className="babylon-footer">

        <div className="babylon-footer__top">

          <div>
            <p className="babylon-footer__eyebrow">
              AgroNexus Babylon
            </p>

            <h2 className="babylon-footer__statement">
              Continue
              {' '}
              <span>
                exploring.
              </span>
            </h2>
          </div>

          <div>
            <p className="babylon-footer__intro">
              Cada mundo conecta
              espécies, ciência,
              conhecimento, habitats,
              cuidado, criação responsável,
              produtos, serviços e pessoas.
            </p>

            <a
              href="#/mundo/aves"
              className="babylon-footer__explore"
            >
              Entrar em Babylon
            </a>
          </div>

        </div>

        <div className="babylon-footer__middle">

          <section>
            <p className="babylon-footer__column-title">
              Mundos principais
            </p>

            <div className="babylon-footer__links">
              {
                FOOTER_WORLDS.map(
                  (item) => (
                    <FooterLink
                      key={item.href}
                      href={item.href}
                    >
                      {item.label}
                    </FooterLink>
                  )
                )
              }
            </div>
          </section>

          <section>
            <p className="babylon-footer__column-title">
              Descobrir mais
            </p>

            <div className="babylon-footer__links">
              {
                FOOTER_DISCOVERY.map(
                  (item) => (
                    <FooterLink
                      key={item.href}
                      href={item.href}
                    >
                      {item.label}
                    </FooterLink>
                  )
                )
              }
            </div>
          </section>

        </div>

        <div className="babylon-footer__bottom">

          <div className="babylon-footer__brand">
            <span className="babylon-footer__brand-name">
              AgroNexus
            </span>

            <span className="babylon-footer__brand-system">
              Babylon
            </span>
          </div>

          <p className="babylon-footer__meta">
            Biodiversidade · Ciência · Conhecimento · Conexão
          </p>

          <p className="babylon-footer__copyright">
            © {year}
          </p>

        </div>

      </footer>
    </>
  )
}
