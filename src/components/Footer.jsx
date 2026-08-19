import '../styles/Footer.css'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/agronexus-logo-biodiversity.png`

const FOOTER_GROUPS = [
  {
    title: 'Explore',
    links: [
      { label: 'Marketplace', href: '#/marketplace' },
      { label: 'Aves', href: '#/aves' },
      { label: 'Aquarismo', href: '#/aquarismo' },
      { label: 'Plantas', href: '#/plantas' },
    ],
  },
  {
    title: 'AgroNexus',
    links: [
      { label: 'Comprar', href: '#/marketplace' },
      { label: 'Vender', href: '#/marketplace' },
      { label: 'Anunciar', href: '#/marketplace' },
      { label: 'Guias', href: '#/aves' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="footer__identity">
          <a
            href="#/"
            className="footer__brand"
            aria-label="AgroNexus — Início"
          >
            <img
              src={LOGO_SRC}
              alt="AgroNexus"
              className="footer__logo"
              loading="lazy"
              decoding="async"
            />
          </a>

          <p className="footer__statement">
            Biodiversidade.
            <br />
            Conhecimento.
            <br />
            Mercado.
          </p>

          <p className="footer__description">
            Um ecossistema para encontrar, conhecer,
            comprar, vender e conectar tudo o que vive
            ao redor de nós.
          </p>
        </div>

        <div className="footer__navigation">
          {FOOTER_GROUPS.map((group) => (
            <nav
              key={group.title}
              className="footer__group"
              aria-label={group.title}
            >
              <p className="footer__title">
                {group.title}
              </p>

              {group.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}

          <div className="footer__group footer__group--support">
            <p className="footer__title">Participe</p>

            <a href="#/marketplace">
              Seja encontrado
            </a>

            <a href="#/marketplace">
              Venda na AgroNexus
            </a>

            <a href="#/marketplace">
              Anuncie
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © 2026 AgroNexus™ · Marketplace de Biodiversidade
          · Uma iniciativa da Guiropa World
        </p>

        <nav
          className="footer__legal"
          aria-label="Informações legais"
        >
          <a href="#/privacidade">Privacidade</a>
          <a href="#/termos">Termos</a>
          <a href="#/cookies">Cookies</a>
        </nav>
      </div>
    </footer>
  )
}
