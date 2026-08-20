import {
  useEffect,
  useState,
} from 'react'

import '../styles/agro-hub.css'

import MarketplaceWarPlan from '../components/MarketplaceWarPlan'

const ASAAS_SUPPORT_URL =
  'https://www.asaas.com/c/u6toboa8xhqsmosv'

const MERCADO_PAGO_SUPPORT_URL =
  'https://link.mercadopago.com.br/agronexus'

const PUBLIC_IMAGE = (name) =>
  `${import.meta.env.BASE_URL}images/${name}`

const ASAAS_LOGO =
  PUBLIC_IMAGE(
    'asaas-blue-only-icon-9fe98aa6050e814a9ecb83a819109bed(1).svg'
  )

const MERCADO_PAGO_LOGO =
  PUBLIC_IMAGE(
    'MP_RGB_HANDSHAKE_color_horizontal(1).svg'
  )

const NGO_PARTNERS = [
  {
    name: 'Amigos dos Bichos — Proteção Animal',
    file: 'Amigos_dos_Bichos_Protecao_Animal_c2568caecf.png',
  },
  {
    name: 'Adote com Consciência',
    file: 'adote_com_consciencia_650b67cd4e.png',
  },
  {
    name: 'Adote uma Vida',
    file: 'adote_uma_vida_77effe5640.png',
  },
  {
    name: 'Associação Anjos da Rua',
    file: 'associacao_anjos_da_rua_a96f1fc28d.png',
  },
  {
    name: 'Deixe Viver',
    file: 'deixe_viver_99d9f36f1e.png',
  },
  {
    name: 'Focinhos Curitiba',
    file: 'focinhos_curitiba_6cfaeaea7d.png',
  },
  {
    name: 'GPA — Grupo de Proteção Animal',
    file: 'gpa_abbaafffde.png',
  },
  {
    name: 'Miau Aumigos',
    file: 'miau_aumigos_7d552da112.png',
  },
  {
    name: 'ONG 100% Proteção',
    file: 'ong_100_protecao_2605b103f9.png',
  },
  {
    name: 'OPAM',
    file: 'opam_8c4fd75b3e.png',
  },
  {
    name: 'Patinhas que Brilham',
    file: 'patinhas_que_brilham_98df337b69.png',
  },
  {
    name: 'Protetores Independentes',
    file: 'protetores_independentes_24fe822f36.png',
  },
  {
    name: 'SOS Bichos',
    file: 'sos_bichos_362edf66a4.png',
  },
  {
    name: 'Toca dos Peludos',
    file: 'toca_dos_peludos_77caf2fc2c.png',
  },
]

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

  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <main>

      <style>{`
        .agro-ngo-section {
          background: #eef4ef;
          color: #111411;
          padding: clamp(72px, 8vw, 112px) 0;
        }

        .agro-ngo-head {
          max-width: 1050px;
          margin-bottom: 38px;
        }

        .agro-ngo-head h2 {
          margin: 10px 0 0;
          font-size: clamp(3rem, 6vw, 5.8rem);
          font-weight: 950;
          line-height: 0.9;
          letter-spacing: -0.06em;
        }

        .agro-ngo-head p {
          max-width: 760px;
          margin: 22px 0 0;
          color: #657069;
          font-size: 1rem;
          line-height: 1.7;
        }

        .agro-ngo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
          gap: 12px;
          margin-top: 34px;
        }

        .agro-ngo-card {
          min-height: 164px;
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d7dfd9;
          border-radius: 8px;
          background: #ffffff;
        }

        .agro-ngo-card img {
          display: block;
          width: 100%;
          height: 118px;
          object-fit: contain;
        }

        .agro-ngo-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 12px;
          margin-top: 34px;
        }

        .agro-payment-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 24px;
        }

        .agro-payment-card {
          min-height: 250px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.035);
        }

        .agro-payment-card__logo {
          min-height: 58px;
          display: flex;
          align-items: center;
        }

        .agro-payment-card__logo img {
          display: block;
          max-width: 170px;
          max-height: 52px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .agro-payment-card--asaas .agro-payment-card__logo img {
          width: 48px;
          height: 48px;
        }

        .agro-payment-card h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(1.4rem, 2.4vw, 2rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .agro-payment-card p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.66);
          font-size: 0.88rem;
          line-height: 1.55;
        }

        .agro-payment-card a {
          min-height: 50px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border: 1px solid #79d9a4;
          background: #79d9a4;
          color: #0c120f;
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.055em;
          text-transform: uppercase;
        }

        .agro-payment-card a:hover,
        .agro-payment-card a:focus-visible {
          background: #ffffff;
          border-color: #ffffff;
        }

        .agro-payment-note {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.72rem;
          line-height: 1.55;
        }

        @media (max-width: 760px) {
          .agro-payment-grid {
            grid-template-columns: 1fr;
          }

          .agro-ngo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 420px) {
          .agro-ngo-card {
            min-height: 132px;
            padding: 12px;
          }

          .agro-ngo-card img {
            height: 94px;
          }
        }
      `}</style>


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
                href="#/marketplace"
                className="commerce-button commerce-button--primary"
              >
                Comprar

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <button
                type="button"
                className="commerce-button commerce-button--secondary"
                onClick={() =>
                  scrollToSection('acoes-agronexus')
                }
              >
                Vender ou anunciar
              </button>
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
              href="#/marketplace"
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
          ADOÇÃO · PROTEÇÃO · ONGs
          ====================================================== */}

      <section className="agro-ngo-section">
        <div className="commerce-container">
          <div className="agro-ngo-head">
            <span className="commerce-kicker">
              Adoção · proteção animal · parceiros
            </span>

            <h2>
              Quem também faz
              <br />
              a diferença.
            </h2>

            <p>
              Organizações e grupos de proteção animal
              que ajudam a transformar cuidado,
              acolhimento e adoção em ação.
            </p>
          </div>

          <div className="agro-ngo-grid">
            {NGO_PARTNERS.map((partner) => (
              <div
                className="agro-ngo-card"
                key={partner.file}
                title={partner.name}
              >
                <img
                  src={PUBLIC_IMAGE(partner.file)}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="agro-ngo-actions">
            <a
              href="#/contato?acao=adotar"
              className="commerce-button commerce-button--primary"
            >
              Quero adotar
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/contato?acao=doar"
              className="commerce-button commerce-button--primary"
            >
              Quero ajudar uma ONG
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
          APOIO — ASAAS + MERCADO PAGO
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
                Sua contribuição ajuda a manter
                guias, conteúdos, pesquisa,
                educação e a infraestrutura
                que sustenta a AgroNexus.
              </p>

              <div className="commerce-support__suggestions">
                <span>
                  Você decide quanto apoiar
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
                AgroNexus™ · Operação financeira:
                Guiropa World · 7 Seas Global
              </span>
            </div>

            <div className="commerce-support__checkout">
              <span className="commerce-support__checkout-label">
                Escolha como apoiar
              </span>

              <strong>
                Valor livre
                <small>
                  {' '}
                  · você informa no checkout
                </small>
              </strong>

              <p>
                Escolha o meio de pagamento.
                Você será direcionado ao ambiente
                seguro do processador selecionado.
              </p>

              <div className="agro-payment-grid">
                <article className="agro-payment-card agro-payment-card--asaas">
                  <div>
                    <div className="agro-payment-card__logo">
                      <img
                        src={ASAAS_LOGO}
                        alt="Asaas"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <h3>Asaas</h3>

                    <p>
                      Pix, cartão de crédito e boleto.
                      Escolha o valor no checkout.
                    </p>
                  </div>

                  <a
                    href={ASAAS_SUPPORT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apoiar com Asaas
                    <span aria-hidden="true">→</span>
                  </a>
                </article>

                <article className="agro-payment-card">
                  <div>
                    <div className="agro-payment-card__logo">
                      <img
                        src={MERCADO_PAGO_LOGO}
                        alt="Mercado Pago"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <h3>Mercado Pago</h3>

                    <p>
                      Defina o valor e escolha entre
                      Pix, cartão e demais opções
                      disponíveis no checkout.
                    </p>
                  </div>

                  <a
                    href={MERCADO_PAGO_SUPPORT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apoiar com Mercado Pago
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              </div>

              <div className="commerce-support__payment-methods">
                <span>Pix</span>
                <span>Cartão</span>
                <span>Boleto</span>
                <span>Mercado Pago</span>
                <span>Asaas</span>
              </div>

              <p className="agro-payment-note">
                Dependendo do meio escolhido, o
                processamento poderá ser exibido em
                nome de Guiropa World ou 7 Seas Global,
                responsáveis pela infraestrutura de
                pagamento utilizada pela AgroNexus.
              </p>
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

            <button
              type="button"
              onClick={() =>
                scrollToSection('acoes-agronexus')
              }
            >
              Ver opções

              <span aria-hidden="true">
                →
              </span>
            </button>
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
