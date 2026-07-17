import heroBg from '../assets/images/hero-bg-3.png'
import '../styles/Hero.css'

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sobre" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content reveal is-visible">
          <span className="eyebrow">Biodiversidade + Logística Global</span>

          <h1 className="hero__title">
  Soluções inteligentes para cadeias de valor{' '}
  <span className="hl-cyan">animal e vegetal.</span>
</h1>

          <p className="hero__lead">
            <p className="hero__lead">
  Conectando biodiversidade, genética, produção sustentável e logística especializada
  para criar soluções globais entre origem e destino.
</p>
          </p>

          <p className="hero__tagline">
            <p className="hero__tagline">
  Onde a <span className="hl-cyan">vida</span> encontra a{' '}
  <span className="hl-purple">conexão global.</span>
</p>

          <a href="#missao" className="btn btn-outline hero__cta" onClick={(e) => scrollTo(e, '#missao')}>
            Explore o Agro Nexus
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
