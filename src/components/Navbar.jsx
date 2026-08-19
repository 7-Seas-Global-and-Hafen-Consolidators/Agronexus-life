import { useEffect, useState } from 'react'

import '../styles/Navbar.css'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/agronexus-logo-biodiversity.png`

const LINKS = [
  { label: 'Início', href: '#/', route: '/' },
  { label: 'Marketplace', href: '#/marketplace', route: '/marketplace' },
  { label: 'Aves', href: '#/aves', route: '/aves' },
  { label: 'Aquarismo', href: '#/aquarismo', route: '/aquarismo' },
  { label: 'Plantas', href: '#/plantas', route: '/plantas' },
]

function getCurrentRoute() {
  const hash = window.location.hash || '#/'
  const route = hash.replace(/^#/, '').split('?')[0]

  if (!route) return '/'

  return route.length > 1
    ? route.replace(/\/+$/, '')
    : route
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const onRouteChange = () => {
      setCurrentRoute(getCurrentRoute())
      setOpen(false)
    }

    window.addEventListener('hashchange', onRouteChange)

    return () => {
      window.removeEventListener('hashchange', onRouteChange)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const handleNavigation = () => {
    setOpen(false)
  }

  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar--scrolled' : ''
      }`}
    >
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
            open ? 'is-open' : ''
          }`}
          aria-label="Navegação principal"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => {
              const isActive = currentRoute === link.route

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive ? 'is-active' : ''}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={handleNavigation}
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
            onClick={handleNavigation}
          >
            Comprar
            <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${
            open ? 'is-open' : ''
          }`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="principal-navigation"
          onClick={() => {
            setOpen((current) => !current)
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
