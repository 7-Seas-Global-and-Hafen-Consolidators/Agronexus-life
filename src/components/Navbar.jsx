import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

const LINKS = [
  {
    label: 'Sobre Nós',
    href: '#sobre',
  },
  {
    label: 'Nossa Missão',
    href: '#missao',
  },
  {
    label: 'Ecossistema',
    href: '#ecossistema',
  },
  {
    label: 'Portfólio',
    href: '#portfolio',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
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

  useEffect(() => {
    document.body.style.overflow =
      open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [])

  const goToHomeSection = (
    event,
    selector
  ) => {
    event.preventDefault()
    setOpen(false)

    const target =
      document.querySelector(selector)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      return
    }

    window.sessionStorage.setItem(
      'agronexus-scroll-target',
      selector
    )

    window.location.href = '/#/'
  }

  const handleBrandClick = (event) => {
    event.preventDefault()
    setOpen(false)

    const top =
      document.querySelector('#topo')

    if (top) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

      return
    }

    window.location.href = '/#/'
  }

  return (
    <header
      className={`navbar ${
        scrolled
          ? 'navbar--scrolled'
          : ''
      }`}
    >
      <div className="container navbar__inner">
        <a
          href="/#/"
          className="navbar__brand"
          onClick={handleBrandClick}
          aria-label="Voltar ao início da AgroNexus"
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
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) =>
                    goToHomeSection(
                      event,
                      link.href
                    )
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="navbar__cta"
            onClick={(event) =>
              goToHomeSection(
                event,
                '#contato'
              )
            }
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
            open
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          aria-expanded={open}
          aria-controls="navegacao-principal"
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
