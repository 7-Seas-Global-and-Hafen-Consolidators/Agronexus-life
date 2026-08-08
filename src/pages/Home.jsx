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
        'Marketplace AgroNexus de aves, aquarismo, peixes ornamentais, cães, gatos, hamsters, plantas, flores, bonsais, alimentação, equipamentos, habitats, acessórios e publicações especializadas.'
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
    <main
      id="topo"
      className="commerce-home"
    >
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
                Ver Marketplace

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#produtos-disponiveis"
                className="commerce-button commerce-button--secondary"
              >
                Ver produtos
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
          MARKETPLACE REAL
          A Home usa o MESMO catálogo comercial da rota
          /marketplace. Não existem mais cards paralelos,
          WhatsApp ou links para páginas vazias.
          ====================================================== */}

      <MarketplaceWarPlan embedded />

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
              Ver produtos disponíveis

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          APOIO
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
                Escolher valor e contribuir

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
                Continue comprando.
              </h2>

              <p>
                Volte ao Marketplace para
                pesquisar espécies, produtos,
                alimentação, plantas, habitats
                e equipamentos.
              </p>
            </div>

            <a href="#catalogo-marketplace">
              Voltar ao Marketplace

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
