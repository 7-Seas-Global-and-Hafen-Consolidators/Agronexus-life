import {
  useEffect,
  useState,
} from 'react'

import '../styles/agro-hub.css'

import MarketplaceWarPlan from '../components/MarketplaceWarPlan'

const SUPPORT_URL =
  'https://www.asaas.com/c/u6toboa8xhqsmosv'

const HERO_VIDEOS = [
  {
    id: 'calopsitas',
    src: '/agronexus-calopsitas.mp4',
    label: 'Calopsitas',
  },
  {
    id: 'hamsters',
    src: '/chinese-longhair-hamster.mp4',
    label: 'Hamsters',
  },
]

const SUPPORT_VALUES = [
  'R$ 2',
  'R$ 5',
  'R$ 10',
  'R$ 25',
  'R$ 50',
  'R$ 100',
]

const ACTIONS = [
  {
    id: 'comprar',
    label: 'COMPRAR',
    description:
      'Produtos, animais permitidos, alimentação, equipamentos, plantas e guias.',
    href: '#catalogo-marketplace',
  },
  {
    id: 'vender',
    label: 'VENDER',
    description:
      'Tem produtos para vender no Marketplace AgroNexus?',
    href: '#/contato?acao=vender',
  },
  {
    id: 'anunciar',
    label: 'ANUNCIAR',
    description:
      'Divulgue sua empresa, serviço, marca ou negócio.',
    href: '#/contato?acao=anunciar',
  },
  {
    id: 'clinica',
    label: 'CADASTRAR CLÍNICA',
    description:
      'Tem uma clínica veterinária? Cadastre aqui.',
    href: '#/contato?acao=cadastrar-clinica',
  },
  {
    id: 'petshop',
    label: 'CADASTRAR PET SHOP',
    description:
      'Tem um pet shop? Cadastre aqui.',
    href: '#/contato?acao=cadastrar-petshop',
  },
  {
    id: 'ong',
    label: 'CADASTRAR ONG',
    description:
      'Tem uma ONG de proteção animal? Cadastre aqui.',
    href: '#/contato?acao=cadastrar-ong',
  },
  {
    id: 'adotar',
    label: 'ADOTAR',
    description:
      'Quer adotar? Faça seu cadastro para encaminhamento a uma ONG parceira.',
    href: '#/contato?acao=adotar',
  },
  {
    id: 'doar',
    label: 'DOAR',
    description:
      'Escolha uma ONG e compre produtos que ela precisa.',
    href: '#/contato?acao=doar',
  },
]

export default function Home() {
  const [heroIndex, setHeroIndex] =
    useState(0)

  useEffect(() => {
    const previousTitle = document.title

    const metaDescription =
      document.querySelector(
        'meta[name="description"]'
      )

    const previousDescription =
      metaDescription?.getAttribute(
        'content'
      ) || ''

    document.title =
      'AgroNexus™ — Marketplace de Animais, Aquarismo, Plantas e Biodiversidade'

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Marketplace AgroNexus de aves, aquarismo, peixes ornamentais, cães, gatos, hamsters, plantas, flores, bonsais, alimentação, equipamentos, habitats, acessórios, serviços e publicações especializadas.'
      )
    }

    return () => {
      document.title = previousTitle

      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          previousDescription
        )
      }
    }
  }, [])

  function showNextHero() {
    setHeroIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        HERO_VIDEOS.length
    )
  }

  const activeHero =
    HERO_VIDEOS[heroIndex]

  return (
    <main>

      {/* ======================================================
          HERO VIVO
          ====================================================== */}

      <section className="commerce-hero">
        <video
          key={activeHero.id}
          className="commerce-hero__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={showNextHero}
          aria-label={`AgroNexus — ${activeHero.label}`}
        >
          <source
            src={activeHero.src}
            type="video/mp4"
          />
        </video>

        <div className="commerce-hero__overlay" />

        <div className="commerce-container">
          <div className="commerce-hero__content">
            <span className="commerce-kicker">
              Marketplace AgroNexus™
            </span>

            <h1>
              Encontre.
              <br />
              Compare.
              <br />
              <strong>Compre.</strong>
            </h1>

            <p>
              Animais, aquarismo, plantas,
              flores, alimentação, habitats,
              equipamentos, acessórios e
              publicações especializadas.
            </p>

            <div className="commerce-hero__actions">
              <a
                href="#catalogo-marketplace"
                className="commerce-button commerce-button--primary"
              >
                Comprar

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#acoes-agronexus"
                className="commerce-button commerce-button--secondary"
              >
                Vender ou anunciar
              </a>
            </div>

            <span className="commerce-guiropa">
              AgroNexus™ · Uma iniciativa da
              Guiropa World
            </span>
          </div>

          <div className="commerce-hero__media-note">
            <span>
              Biodiversidade em movimento
            </span>

            <strong>
              {activeHero.label}
            </strong>
          </div>
        </div>
      </section>

      {/* ======================================================
          O QUE VOCÊ QUER FAZER?
          SEM FLU-FLU. VERBO DIRETO.
          ====================================================== */}

      <section
        id="acoes-agronexus"
        style={{
          background: '#0c120f',
          color: '#ffffff',
          padding: 'clamp(72px, 8vw, 118px) 0',
          borderTop: '1px solid rgba(255,255,255,.08)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        <div className="commerce-container">
          <div
            style={{
              maxWidth: '1050px',
              marginBottom: '42px',
            }}
          >
            <span
              className="commerce-kicker"
              style={{
                color: '#8fe0b2',
              }}
            >
              AgroNexus
            </span>

            <h2
              style={{
                margin: '10px 0 0',
                color: '#ffffff',
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                fontWeight: 950,
                lineHeight: 0.88,
                letterSpacing: '-0.065em',
              }}
            >
              O que você quer fazer?
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,.12)',
              border: '1px solid rgba(255,255,255,.12)',
            }}
          >
            {ACTIONS.map((action) => (
              <a
                key={action.id}
                href={action.href}
                style={{
                  minHeight: '190px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '26px',
                  background: '#101712',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    fontSize: 'clamp(1.65rem, 2.8vw, 2.7rem)',
                    fontWeight: 950,
                    lineHeight: 0.95,
                    letterSpacing: '-0.045em',
                  }}
                >
                  {action.label}
                </strong>

                <span
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '20px',
                    color: 'rgba(255,255,255,.68)',
                    fontSize: '.9rem',
                    lineHeight: 1.55,
                  }}
                >
                  <span>
                    {action.description}
                  </span>

                  <strong
                    aria-hidden="true"
                    style={{
                      flex: '0 0 auto',
                      color: '#8fe0b2',
                      fontSize: '1.3rem',
                    }}
                  >
                    →
                  </strong>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          MARKETPLACE REAL
          A Home usa o MESMO catálogo comercial da rota
          /marketplace.
          ====================================================== */}

      <MarketplaceWarPlan embedded />

      {/* ======================================================
          CHAMADA B2B — ESCANCARADA
          ====================================================== */}

      <section
        style={{
          background: '#ffffff',
          color: '#111411',
          padding: 'clamp(70px, 8vw, 110px) 0',
          borderTop: '1px solid #d8dfda',
          borderBottom: '1px solid #d8dfda',
        }}
      >
        <div className="commerce-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              alignItems: 'end',
            }}
          >
            <div>
              <span className="commerce-kicker">
                Venda e anúncio
              </span>

              <h2
                style={{
                  maxWidth: '850px',
                  margin: '10px 0 0',
                  fontSize: 'clamp(3rem, 6vw, 5.8rem)',
                  fontWeight: 950,
                  lineHeight: 0.9,
                  letterSpacing: '-0.06em',
                }}
              >
                Venda. Anuncie.
                <br />
                Seja encontrado.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '10px',
              }}
            >
              <a
                href="#/contato?acao=vender"
                className="commerce-button commerce-button--primary"
              >
                Vender na AgroNexus
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/contato?acao=anunciar"
                className="commerce-button commerce-button--secondary"
              >
                Anunciar na AgroNexus
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/contato?acao=cadastrar-clinica"
                className="commerce-button commerce-button--secondary"
              >
                Cadastrar clínica veterinária
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/contato?acao=cadastrar-petshop"
                className="commerce-button commerce-button--secondary"
              >
                Cadastrar pet shop
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/contato?acao=cadastrar-ong"
                className="commerce-button commerce-button--secondary"
              >
                Cadastrar ONG
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GUIAS
          ====================================================== */}

      <section className="commerce-guides">
        <div className="commerce-container">
          <div className="commerce-guides__panel">
            <div>
              <span className="commerce-kicker">
                Guias Oficiais AgroNexus
              </span>

              <h2>
                Informação também é
                produto.
              </h2>

              <p>
                Publicações especializadas com
                compra imediata e acesso direto
                ao conteúdo AgroNexus.
              </p>
            </div>

            <a
              href="#produtos-disponiveis"
              className="commerce-button commerce-button--light"
            >
              Comprar guias

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          ADOÇÃO E DOAÇÃO
          SEM MOSTRAR ANIMAIS. SEM INTERPRETAÇÃO.
          ====================================================== */}

      <section
        style={{
          background: '#eef4ef',
          color: '#111411',
          padding: 'clamp(72px, 8vw, 112px) 0',
        }}
      >
        <div className="commerce-container">
          <div
            style={{
              maxWidth: '1000px',
              marginBottom: '34px',
            }}
          >
            <span className="commerce-kicker">
              Adoção e doação
            </span>

            <h2
              style={{
                margin: '10px 0 0',
                fontSize: 'clamp(3rem, 6vw, 5.8rem)',
                fontWeight: 950,
                lineHeight: 0.9,
                letterSpacing: '-0.06em',
              }}
            >
              Adotar. Doar.
              <br />
              Cadastrar ONG.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px',
            }}
          >
            <a
              href="#/contato?acao=adotar"
              className="commerce-button commerce-button--primary"
            >
              Adotar
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/contato?acao=doar"
              className="commerce-button commerce-button--primary"
            >
              Doar
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/contato?acao=cadastrar-ong"
              className="commerce-button commerce-button--primary"
            >
              Cadastrar ONG
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          APOIO
          Mantido, mas abaixo das ações comerciais principais.
          ====================================================== */}

      <section
        className="commerce-support"
        id="apoie"
      >
        <div className="commerce-container">
          <div className="commerce-support__panel">
            <div className="commerce-support__copy">
              <span className="commerce-kicker">
                Apoie a AgroNexus
              </span>

              <h2>
                Ajude a manter e ampliar
                este trabalho.
              </h2>

              <p>
                Sua contribuição ajuda a
                manter guias, conteúdos,
                pesquisa, educação e a
                infraestrutura que sustenta
                a AgroNexus.
              </p>

              <div className="commerce-support__suggestions">
                <span>
                  Sugestões de apoio
                </span>

                <div>
                  {SUPPORT_VALUES.map(
                    (value) => (
                      <strong key={value}>
                        {value}
                      </strong>
                    )
                  )}
                </div>
              </div>

              <span className="commerce-support__guiropa">
                AgroNexus™ · Operação e
                pagamentos: Guiropa World
              </span>
            </div>

            <div className="commerce-support__checkout">
              <span className="commerce-support__checkout-label">
                Você escolhe o valor
              </span>

              <strong>
                R$ 2

                <small>
                  {' '}
                  ou qualquer outro valor
                </small>
              </strong>

              <p>
                No checkout você informa
                quanto deseja contribuir e
                escolhe a forma de pagamento.
              </p>

              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribuir

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <div className="commerce-support__payment-methods">
                <span>Pix</span>
                <span>Cartão de crédito</span>
                <span>Boleto</span>
              </div>

              <small>
                O checkout será exibido em
                nome da Guiropa World,
                responsável pela operação de
                pagamento da AgroNexus.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FECHAMENTO
          ====================================================== */}

      <section className="commerce-final">
        <div className="commerce-container">
          <div className="commerce-final__panel">
            <div>
              <span className="commerce-kicker">
                Marketplace AgroNexus™
              </span>

              <h2>
                Comprar. Vender.
                <br />
                Anunciar.
              </h2>

              <p>
                A AgroNexus conecta quem
                procura, quem vende, quem
                anuncia e quem precisa ser
                encontrado.
              </p>
            </div>

            <a href="#acoes-agronexus">
              Ver opções

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="commerce-final__institution">
            AgroNexus™ · Marketplace de
            biodiversidade · Uma iniciativa da
            Guiropa World
          </p>
        </div>
      </section>
    </main>
  )
}
