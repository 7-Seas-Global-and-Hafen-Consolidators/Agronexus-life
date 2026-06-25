import logo from '../assets/images/logo.png'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="AgroNexus.Life" className="footer__logo" />
          <p className="footer__tag">© 2026 AgroNexus.Life — Onde a biologia encontra a logística.</p>
        </div>

        <nav className="footer__links" aria-label="Rodapé">
          <a href="#sobre">Privacidade</a>
          <a href="#sobre">Termos</a>
          <a href="#sobre">Cookies</a>
        </nav>
      </div>
    </footer>
  )
}
