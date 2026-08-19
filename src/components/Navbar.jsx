import { useEffect, useState } from 'react'

import '../styles/Navbar.css'

const LOGO_SRC = `${
  import.meta.env.BASE_URL
}images/agronexus-logo-biodiversity.png`

const LINKS = [
  {
    label: 'Início',
    href: '#/',
    route: '/',
  },
  {
    label: 'Marketplace',
    href: '#/marketplace',
    route: '/marketplace',
  },
  {
    label: 'Aves',
    href: '#/aves',
    route: '/aves',
  },
  {
    label: 'Aquarismo',
    href: '#/aquarismo',
    route: '/aquarismo',
  },
  {
    label: 'Plantas',
    href: '#/plantas',
    route: '/plantas',
  },
]

function getCurrentRoute() {
  const hash =
    window.location.hash || '#/'

  const route =
    hash
      .replace(/^#/, '')
      .split('?')[0]

  if (!route) {
    return '/'
  }

  return route.length > 1
    ? route.replace(/\/+$/, '')
    : route
}

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false)

  const [open, setOpen] =
    useState(false)

  const [
    currentRoute,
    setCurrentRoute,
  ] = useState(getCurrentRoute)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(
        window.scrollY > 24
      )
    }

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      )
    }
  }, [])

  useEffect(() => {
    const onRouteChange = () => {
      setCurrentRoute(
        getCurrentRoute()
      )

      setOpen(false)
    }

    window.addEventListener(
      'hashchange',
      onRouteChange
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        onRouteChange
      )
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow =
      open
        ? 'hidden'
        : ''

    return () => {
      document.body.style.overflow =
        ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        event.key === 'Escape' &&
        open
      ) {
        setOpen(false)
      }
    }

    window.addEventListener(
      'keydown',
      onKeyDown
    )

    return () => {
      window.removeEventListener(
        'keydown',
        onKeyDown
      )
    }
  }, [open])

  const handleNavigation = () => {
    setOpen(false)
  }

  return (
    <header
      className={`navbar ${
        scrolled
          ? 'navbar--scrolled'
          : ''
      }`}
    >
      <style>{`
        /*
         * AGRONEXUS — NEW BIODIVERSITY IDENTITY
         * Overrides legacy logo constraints without
         * changing the existing navigation behavior.
         */

        .navbar__brand {
          display: flex !important;
          align-items: center !important;
          flex: 0 0 auto !important;

          min-width: 0;

          text-decoration: none;
        }

        .navbar__logo {
          display: block !important;

          width:
            clamp(
              210px,
              18vw,
              285px
            ) !important;

          max-width: none !important;

          height: auto !important;

          max-height:
            92px !important;

          object-fit:
            contain !important;

          object-position:
            left center !important;

          opacity:
            1 !important;

          filter:
            none !important;

          transform:
            none !important;

          mix-blend-mode:
            normal !important;
        }

        @media (
          max-width: 1100px
        ) {
          .navbar__logo {
            width:
              clamp(
                190px,
                20vw,
                235px
              ) !important;

            max-height:
              82px !important;
          }
        }

        @media (
          max-width: 820px
        ) {
          .navbar__logo {
            width:
              195px !important;

            max-height:
              74px !important;
          }
        }

        @media (
          max-width: 520px
        ) {
          .navbar__logo {
            width:
              168px !important;

            max-height:
              66px !important;
          }
        }

        @media (
          max-width: 380px
        ) {
          .navbar__logo {
            width:
              150px !important;

            max-height:
              60px !important;
          }
        }
      `}</style>

      <div className="navbar__inner">
        <a
          href="#/"
          className="navbar__brand"
          aria-label="AgroNexus.Life — Início"
          onClick={handleNavigation}
        >
          <img
            src={LOGO_SRC}
            alt="AgroNexus.Life"
            className="navbar__logo"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <nav
          id="principal-navigation"
          className={`navbar__nav ${
            open
              ? 'is-open'
              : ''
          }`}
          aria-label="Navegação principal"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => {
              const isActive =
                currentRoute ===
                link.route

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={
                      isActive
                        ? 'is-active'
                        : ''
                    }
                    aria-current={
                      isActive
                        ? 'page'
                        : undefined
                    }
                    onClick={
                      handleNavigation
                    }
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="#/marketplace"
            className="navbar__cta"
            onClick={
              handleNavigation
            }
          >
            Comprar

            <span aria-hidden="true">
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${
            open
              ? 'is-open'
              : ''
          }`}
          aria-label={
            open
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          aria-expanded={open}
          aria-controls="principal-navigation"
          onClick={() => {
            setOpen(
              (current) =>
                !current
            )
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
