import heroBg from '../assets/images/hero-bg-3.png'
import '../styles/Hero.css'

export default function Hero() {
  const scrollTo = (event, href) => {
    event.preventDefault()

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="sobre" className="hero">
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        aria-hidden="true"
      />

      <div
        className="hero__overlay"
        aria-hidden="true"
      />

      <div className="container hero__inner">
        <div className="hero__content reveal is-visible">
          <span className="eyebrow">
            Biodiversidade • Ciência • Conexão Global
          </span>

          <h1 className="hero__title">
            Onde a vida, o conhecimento e o
            <span className="hl-cyan">
              {' '}mercado responsável se conectam.
            </span>
          </h1>

          <p className="hero__lead">
            Um ecossistema que aproxima criadores, consumidores,
            especialistas, pesquisadores, instituições e empresas por meio da
            genética, biodiversidade, conhecimento e conexão global.
          </p>

          <p className="hero__tagline">
            Cada espécie tem uma história.
            <span className="hero__tagline-break">
              Cada conexão pode transformar o futuro.
            </span>
          </p>

          <div className="hero__actions">
            <a
              href="#portfolio"
              className="btn btn-primary hero__cta"
              onClick={(event) => scrollTo(event, '#portfolio')}
            >
              Explorar o Ecossistema
              <span className="arrow">→</span>
            </a>

            <a
              href="#contato"
              className="btn btn-outline hero__secondary"
              onClick={(event) => scrollTo(event, '#contato')}
            >
              Iniciar Conexão
            </a>
          </div>

          <div className="hero__pillars">
            <span>Genética</span>
            <span>Biodiversidade</span>
            <span>Conhecimento</span>
            <span>Conexão Global</span>
          </div>
        </div>
      </div>
    </section>
  )
}
