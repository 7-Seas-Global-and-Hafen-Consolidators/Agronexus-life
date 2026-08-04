import { useEffect, useState } from 'react'

import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

const LINKS = [
  {
    label: 'Sobre Nós',
    href: '#/sobre',
    route: '/sobre',
  },
  {
    label: 'Nossa Missão',
    href: '#/missao',
    route: '/missao',
  },
  {
    label: 'Ecossistema',
    href: '#/ecossistema',
    route: '/ecossistema',
  },
  {
    label: 'Portfólio',
    href: '#/portfolio',
    route: '/portfolio',
  },
]

export default function Navbar({ currentRoute = '/' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [currentRoute])

  const handleNavigation = () => {
    setOpen(false)
  }

  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar--scrolled' : ''
      }`}
    >
      <div className="container navbar__inner">
        <a
          href="#/"
          className="navbar__brand"
          onClick={handleNavigation}
          aria-label="Voltar à página inicial da AgroNexus"
        >
          <img
            src={logo}
            alt="AgroNexus.Life"
            className="navbar__logo"
          />
        </a>

        <nav
          className={`navbar__nav ${
            open ? 'is-open' : ''
          }`}
          aria-label="Navegação principal"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => {
              const isActive =
                currentRoute === link.route ||
                (link.route === '/sobre' &&
                  currentRoute === '/')

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={isActive ? 'is-active' : ''}
                    onClick={handleNavigation}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="#/contato"
            className="btn navbar__cta"
            onClick={handleNavigation}
          >
            Conectar-se
            <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${
            open ? 'is-open' : ''
          }`}
          aria-label={
            open ? 'Fechar menu' : 'Abrir menu'
          }
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
