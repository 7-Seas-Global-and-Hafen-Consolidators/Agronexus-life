/**
 * AgroNexus™ — Header
 *
 * Interface pública:
 * AgroNexus™
 *
 * Arquitetura interna:
 * Project Babylon Rebuild
 *
 * O codinome interno não deve aparecer
 * em nenhum texto renderizado para o visitante.
 *
 * Regras:
 * - sem mega menu de zoológico;
 * - sem parede de categorias;
 * - sem aparência de marketplace;
 * - navegação curta;
 * - foco em mundos;
 * - arquitetura minimalista;
 * - linguagem institucional e editorial.
 */

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

const NAV_ITEMS = [
  {
    label:
      'Mundos',

    href:
      '#/mundo/aves',
  },

  {
    label:
      'Aquarismo',

    href:
      '#/mundo/aquarismo',
  },

  {
    label:
      'Botânica',

    href:
      '#/mundo/plantas',
  },

  {
    label:
      'Saúde',

    href:
      '#/mundo/saude',
  },
]

function getCurrentRoute() {
  return (
    window.location.hash ||
    '#/'
  )
}

function isHomeRoute(route) {
  return (
    route === '#/' ||
    route === '#/home' ||
    route === '#/inicio'
  )
}

export default function BabylonHeader() {
  const [
    route,
    setRoute,
  ] = useState(
    getCurrentRoute
  )

  const [
    compact,
    setCompact,
  ] = useState(false)

  const [
    open,
    setOpen,
  ] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(
        getCurrentRoute()
      )

      setOpen(false)
    }

    window.addEventListener(
      'hashchange',
      handleHashChange
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setCompact(
        window.scrollY > 36
      )
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  const home =
    useMemo(
      () =>
        isHomeRoute(route),
      [route]
    )

  const headerClassName = [
    'babylon-header',

    compact
      ? 'babylon-header--compact'
      : '',

    home
      ? 'babylon-header--home'
      : '',

    open
      ? 'babylon-header--open'
      : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <style>
        {`
          .babylon-header {
            position:
              fixed;

            top:
              0;

            left:
              0;

            right:
              0;

            z-index:
              1000;

            height:
              92px;

            display:
              grid;

            grid-template-columns:
              auto
              minmax(
                0,
                1fr
              )
              auto;

            align-items:
              center;

            gap:
              34px;

            padding:
              0
              clamp(
                24px,
                5.6vw,
                96px
              );

            border-bottom:
              1px solid
              rgba(
                255,
                255,
                255,
                0.11
              );

            background:
              rgba(
                9,
                11,
                10,
                0.72
              );

            color:
              white;

            backdrop-filter:
              blur(
                18px
              );

            -webkit-backdrop-filter:
              blur(
                18px
              );

            transition:
              height
                220ms ease,
              background
                220ms ease,
              border-color
                220ms ease;
          }

          .babylon-header--compact {
            height:
              72px;

            background:
              rgba(
                9,
                11,
                10,
                0.94
              );

            border-bottom-color:
              rgba(
                255,
                255,
                255,
                0.08
              );
          }

          .babylon-header__brand {
            display:
              inline-flex;

            align-items:
              flex-start;

            color:
              inherit;

            text-decoration:
              none;
          }

          .babylon-header__brand-name {
            display:
              inline-flex;

            align-items:
              flex-start;

            gap:
              3px;

            font-size:
              1.08rem;

            font-weight:
              800;

            letter-spacing:
              -0.035em;
          }

          .babylon-header__brand-tm {
            position:
              relative;

            top:
              0.08em;

            font-size:
              0.48em;

            font-weight:
              900;

            letter-spacing:
              0;
          }

          .babylon-header__nav {
            justify-self:
              end;

            display:
              flex;

            align-items:
              center;

            gap:
              clamp(
                18px,
                2.6vw,
                42px
              );
          }

          .babylon-header__nav a {
            position:
              relative;

            padding:
              8px
              0;

            color:
              rgba(
                255,
                255,
                255,
                0.68
              );

            text-decoration:
              none;

            font-size:
              0.68rem;

            font-weight:
              800;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;

            transition:
              color
                180ms ease;
          }

          .babylon-header__nav a:hover,
          .babylon-header__nav a:focus-visible {
            color:
              white;
          }

          .babylon-header__nav a::after {
            content:
              '';

            position:
              absolute;

            left:
              0;

            right:
              100%;

            bottom:
              0;

            height:
              1px;

            background:
              #d8b76a;

            transition:
              right
                180ms ease;
          }

          .babylon-header__nav a:hover::after,
          .babylon-header__nav a:focus-visible::after {
            right:
              0;
          }

          .babylon-header__enter {
            min-height:
              42px;

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            padding:
              0
              18px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.28
              );

            color:
              white;

            text-decoration:
              none;

            font-size:
              0.64rem;

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

          .babylon-header__enter:hover,
          .babylon-header__enter:focus-visible {
            background:
              #d8b76a;

            color:
              #111411;

            border-color:
              #d8b76a;
          }

          .babylon-header__toggle {
            display:
              none;

            width:
              42px;

            height:
              42px;

            border:
              1px solid
              rgba(
                255,
                255,
                255,
                0.18
              );

            background:
              transparent;

            color:
              white;

            cursor:
              pointer;
          }

          .babylon-header__toggle span {
            display:
              block;

            width:
              18px;

            height:
              1px;

            margin:
              4px
              auto;

            background:
              currentColor;

            transition:
              transform
                180ms ease,
              opacity
                180ms ease;
          }

          .babylon-header--open
          .babylon-header__toggle
          span:nth-child(1) {
            transform:
              translateY(
                5px
              )
              rotate(
                45deg
              );
          }

          .babylon-header--open
          .babylon-header__toggle
          span:nth-child(2) {
            opacity:
              0;
          }

          .babylon-header--open
          .babylon-header__toggle
          span:nth-child(3) {
            transform:
              translateY(
                -5px
              )
              rotate(
                -45deg
              );
          }

          .babylon-header__mobile {
            display:
              none;
          }

          @media (
            max-width:
              980px
          ) {
            .babylon-header {
              grid-template-columns:
                auto
                1fr
                auto;
            }

            .babylon-header__nav,
            .babylon-header__enter {
              display:
                none;
            }

            .babylon-header__toggle {
              display:
                block;

              justify-self:
                end;
            }

            .babylon-header__mobile {
              position:
                fixed;

              inset:
                0;

              z-index:
                999;

              display:
                flex;

              flex-direction:
                column;

              justify-content:
                flex-end;

              padding:
                124px
                24px
                42px;

              background:
                #090b0a;

              color:
                white;

              opacity:
                0;

              visibility:
                hidden;

              transform:
                translateY(
                  -12px
                );

              transition:
                opacity
                  180ms ease,
                visibility
                  180ms ease,
                transform
                  180ms ease;
            }

            .babylon-header--open
            + .babylon-header__mobile {
              opacity:
                1;

              visibility:
                visible;

              transform:
                translateY(
                  0
                );
            }

            .babylon-header__mobile-inner {
              border-top:
                1px solid
                rgba(
                  255,
                  255,
                  255,
                  0.14
                );
            }

            .babylon-header__mobile a {
              display:
                flex;

              align-items:
                center;

              justify-content:
                space-between;

              gap:
                20px;

              padding:
                24px
                0;

              border-bottom:
                1px solid
                rgba(
                  255,
                  255,
                  255,
                  0.14
                );

              color:
                white;

              text-decoration:
                none;

              font-size:
                clamp(
                  1.6rem,
                  8vw,
                  3rem
                );

              line-height:
                1;

              letter-spacing:
                -0.045em;
            }

            .babylon-header__mobile-arrow {
              color:
                #d8b76a;

              font-size:
                1.4rem;
            }

            .babylon-header__mobile-meta {
              margin-top:
                34px;

              color:
                rgba(
                  255,
                  255,
                  255,
                  0.44
                );

              font-size:
                0.62rem;

              font-weight:
                800;

              letter-spacing:
                0.14em;

              line-height:
                1.7;

              text-transform:
                uppercase;
            }
          }
        `}
      </style>

      <header
        className={
          headerClassName
        }
      >
        <a
          href="#/"
          className="babylon-header__brand"
          aria-label="AgroNexus"
        >
          <span className="babylon-header__brand-name">
            AgroNexus
            <span
              className="babylon-header__brand-tm"
              aria-hidden="true"
            >
              ™
            </span>
          </span>
        </a>

        <nav
          className="babylon-header__nav"
          aria-label="Navegação principal"
        >
          {
            NAV_ITEMS.map(
              (item) => (
                <a
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </a>
              )
            )
          }
        </nav>

        <a
          href="#/mundo/aves"
          className="babylon-header__enter"
        >
          Explorar
        </a>

        <button
          type="button"
          className="babylon-header__toggle"
          aria-label={
            open
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          aria-expanded={
            open
          }
          onClick={() => {
            setOpen(
              (value) =>
                !value
            )
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className="babylon-header__mobile">
        <div className="babylon-header__mobile-inner">

          {
            NAV_ITEMS.map(
              (item) => (
                <a
                  key={
                    `mobile-${item.href}`
                  }
                  href={item.href}
                >
                  <span>
                    {item.label}
                  </span>

                  <span
                    className="babylon-header__mobile-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              )
            )
          }

          <a href="#/mundo/aves">
            <span>
              Explorar AgroNexus™
            </span>

            <span
              className="babylon-header__mobile-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>

        <p className="babylon-header__mobile-meta">
          AgroNexus™
          <br />
          Biodiversidade · Ciência · Conexão
        </p>
      </div>
    </>
  )
}
