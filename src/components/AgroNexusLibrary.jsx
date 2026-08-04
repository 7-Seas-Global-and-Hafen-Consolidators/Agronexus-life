import Reveal from './Reveal'
import '../styles/AgroNexusLibrary.css'

const PERIQUITO_PURCHASE_URL =
  'https://www.asaas.com/c/bzsxz4qaps5glfm4'

const CALOPSITA_PURCHASE_URL =
  'https://www.asaas.com/c/x17xj6s0gmqrhgnm'

const COMBO_PURCHASE_URL =
  'https://www.asaas.com/c/lkx8ivjw04c01a1w'

const GUIDES = [
  {
    id: 'periquito-australiano',
    volume: 'VOLUME 01',
    species: 'Periquito Australiano',
    scientificName: 'Melopsittacus undulatus',
    pages: '230 páginas',
    price: 'R$ 9,90',
    purchaseUrl: PERIQUITO_PURCHASE_URL,
    status: 'Disponível agora',
    description:
      'Um material completo desenvolvido para tutores, criadores, estudantes e apaixonados pela espécie, com linguagem acessível, cuidado editorial e foco em criação responsável.',
    details: [
      'História natural, origem e comportamento',
      'Alimentação, ambiente e manejo responsável',
      'Saúde, prevenção e qualidade de vida',
      'Inteligência, genética e reprodução',
    ],
  },
  {
    id: 'calopsita',
    volume: 'VOLUME 02',
    species: 'Calopsitas',
    scientificName: 'Nymphicus hollandicus',
    pages: '139 páginas',
    price: 'R$ 9,90',
    purchaseUrl: CALOPSITA_PURCHASE_URL,
    status: 'Disponível agora',
    description:
      'Uma publicação aprofundada sobre inteligência, comportamento, linguagem corporal, confiança, saúde, alimentação, ambiente, reprodução e convivência responsável.',
    details: [
      'Inteligência, personalidade e comunicação',
      'Construção de confiança e vínculo com o tutor',
      'Alimentação, ambiente, saúde e prevenção',
      'Comportamento, reprodução e qualidade de vida',
    ],
  },
]

const FUTURE_COLLECTIONS = [
  'Psitacídeos e aves ornamentais',
  'Aquarismo e vida aquática',
  'Pequenos mamíferos',
  'Répteis, anfíbios e terrários',
]

function PaymentDisclosure() {
  return (
    <p
      style={{
        margin: '14px 0 0',
        color: 'rgba(243, 240, 232, 0.46)',
        fontSize: '0.68rem',
        lineHeight: 1.5,
        letterSpacing: '0.04em',
      }}
    >
      Pagamento seguro. Processado por GUIROPA WORLD.
    </p>
  )
}

function PurchaseButton({ guide }) {
  return (
    <a
      href={guide.purchaseUrl}
      className="btn btn-primary agronexus-library__download"
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar por {guide.price}
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}

function GuideCover({ guide }) {
  return (
    <div className="agronexus-library__cover-column">
      <div
        className="agronexus-library__cover"
        aria-label={`Capa editorial do Guia Oficial AgroNexus sobre ${guide.species}`}
      >
        <div
          className="agronexus-library__cover-glow"
          aria-hidden="true"
        />

        <div className="agronexus-library__cover-top">
          <span>AGRONEXUS.LIFE</span>
          <small>PUBLICAÇÃO OFICIAL · {guide.volume}</small>
        </div>

        <div
          className="agronexus-library__cover-mark"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="agronexus-library__cover-content">
          <p>GUIA OFICIAL</p>

          <h3>{guide.species}</h3>

          <span>
            Conhecimento, comportamento, manejo, saúde e bem-estar.
          </span>
        </div>

        <div className="agronexus-library__cover-footer">
          <strong>AgroNexus Living Ecosystem™</strong>
          <span>Biodiversidade · Ciência · Conexão Global</span>
        </div>
      </div>

      <div className="agronexus-library__volume">
        <span>{guide.volume}</span>
        <strong>{guide.pages}</strong>
        <p>Publicação digital protegida · PDF</p>
      </div>
    </div>
  )
}

function GuideContent({ guide }) {
  return (
    <div className="agronexus-library__content">
      <span className="agronexus-library__edition">
        {guide.status}
      </span>

      <h3>Guia Oficial AgroNexus™</h3>

      <h4>{guide.species}</h4>

      <p
        style={{
          marginTop: '-8px',
          marginBottom: '22px',
          color: 'rgba(243, 240, 232, 0.58)',
          fontStyle: 'italic',
        }}
      >
        {guide.scientificName}
      </p>

      <p className="agronexus-library__lead">
        {guide.description}
      </p>

      <div className="agronexus-library__details">
        {guide.details.map((detail) => (
          <div
            className="agronexus-library__detail"
            key={detail}
          >
            <span aria-hidden="true" />
            <p>{detail}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: '28px 0 24px',
          padding: '20px 22px',
          border: '1px solid rgba(212, 175, 55, 0.32)',
          background: 'rgba(212, 175, 55, 0.045)',
        }}
      >
        <span
          style={{
            display: 'block',
            marginBottom: '7px',
            color: 'rgba(243, 240, 232, 0.58)',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Valor de lançamento
        </span>

        <strong
          style={{
            display: 'block',
            color: '#d4af37',
            fontSize: 'clamp(2rem, 5vw, 3.3rem)',
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          {guide.price}
        </strong>
      </div>

      <div className="agronexus-library__actions">
        <PurchaseButton guide={guide} />

        <a
          href={`#/aves/${guide.id}`}
          className="btn btn-outline agronexus-library__support"
        >
          Conhecer a espécie
        </a>
      </div>

      <PaymentDisclosure />

      <p className="agronexus-library__access-note">
        A publicação completa é entregue exclusivamente após a
        confirmação da compra. O arquivo não fica disponível
        publicamente no site.
      </p>
    </div>
  )
}

export default function AgroNexusLibrary() {
  return (
    <section
      id="biblioteca"
      className="section agronexus-library"
      aria-labelledby="agronexus-library-title"
    >
      <div className="container">
        <Reveal className="agronexus-library__head">
          <span className="eyebrow">
            Biblioteca Editorial AgroNexus™
          </span>

          <h2
            id="agronexus-library-title"
            className="agronexus-library__title"
          >
            Conhecimento que permanece.
            <span className="hl-cyan">
              {' '}
              Publicações que transformam.
            </span>
          </h2>

          <p className="agronexus-library__intro">
            Guias editoriais completos dedicados à biodiversidade,
            ciência, comportamento, conservação, manejo responsável e
            bem-estar animal. Cada publicação representa pesquisa,
            produção, revisão e muitas horas de trabalho especializado.
          </p>
        </Reveal>

        {GUIDES.map((guide, index) => (
          <div
            className="agronexus-library__feature"
            key={guide.id}
            style={{
              marginTop: index === 0 ? undefined : '72px',
            }}
          >
            <Reveal className="agronexus-library__cover-column">
              <GuideCover guide={guide} />
            </Reveal>

            <Reveal
              className="agronexus-library__content"
              delay={120}
            >
              <GuideContent guide={guide} />
            </Reveal>
          </div>
        ))}

        <div className="agronexus-library__support-panel">
          <Reveal className="agronexus-library__support-copy">
            <span className="eyebrow">
              Coleção especial
            </span>

            <h3>
              Dois grandes guias.
              <span className="hl-cyan">
                {' '}
                Uma biblioteca essencial.
              </span>
            </h3>

            <p>
              Reúna os Guias Oficiais de Calopsitas e Periquitos
              Australianos em uma coleção com 369 páginas de conteúdo
              dedicado à criação responsável, comportamento, saúde,
              inteligência, manejo e qualidade de vida.
            </p>
          </Reveal>

          <Reveal
            className="agronexus-library__support-card"
            delay={120}
          >
            <span className="agronexus-library__support-label">
              Combo de lançamento
            </span>

            <strong>R$ 19,90</strong>

            <p>
              Guia Oficial de Calopsitas + Guia Oficial de Periquitos
              Australianos em uma única compra.
            </p>

            <a
              href={COMBO_PURCHASE_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar o combo
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>

            <PaymentDisclosure />
          </Reveal>
        </div>

        <Reveal
          className="agronexus-library__future"
          delay={180}
        >
          <div className="agronexus-library__future-head">
            <span className="eyebrow">
              Próximas coleções
            </span>

            <h3>
              Uma biblioteca em
              <span className="hl-cyan">
                {' '}
                constante expansão.
              </span>
            </h3>
          </div>

          <div className="agronexus-library__future-grid">
            {FUTURE_COLLECTIONS.map((collection, index) => (
              <article
                className="agronexus-library__future-item"
                key={collection}
              >
                <span>
                  {String(index + 3).padStart(2, '0')}
                </span>

                <h4>{collection}</h4>

                <p>Em desenvolvimento editorial.</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
