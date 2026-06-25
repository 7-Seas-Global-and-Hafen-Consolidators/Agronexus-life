import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

const LINKS = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Nossa Missão', href: '#missao' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    if (href === '#topo') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#topo" className="navbar__brand" onClick={(e) => handleNav(e, '#topo')}>
          <img src={logo} alt="AgroNexus.Life" className="navbar__logo" />
        </a>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn navbar__cta" onClick={(e) => handleNav(e, '#contato')}>
            Agendar Consulta
          </a>
        </nav>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
