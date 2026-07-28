import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const MARKETPLACE_STATS = [
  {
    id: 'species',
    value: 1286,
    suffix: '+',
    label: 'Espécies e variedades',
    description: 'Catalogadas no ecossistema',
  },
  {
    id: 'products',
    value: 18921,
    suffix: '+',
    label: 'Produtos especializados',
    description: 'Alimentação, habitats e cuidados',
  },
  {
    id: 'partners',
    value: 124,
    suffix: '+',
    label: 'Parceiros em integração',
    description: 'Criadores, lojas e especialistas',
  },
  {
    id: 'enquiries',
    value: 5376,
    suffix: '+',
    label: 'Consultas comerciais',
    description: 'Interações projetadas no marketplace',
  },
  {
    id: 'business',
    value: 1842,
    suffix: '+',
    label: 'Oportunidades de negócio',
    description: 'Conexões comerciais do ecossistema',
  },
  {
    id: 'response',
    value: 98,
    suffix: '%',
    label: 'Meta de atendimento',
    description: 'Solicitações acompanhadas',
  },
]

const MARKETPLACE_AREAS = [
  {
    id: 'psitacideos',
    href: '#psitacideos-marketplace',
    eyebrow: 'Aves',
    title: 'Psitacídeos',
    description:
      'Espécies, criadores legalizados, viveiros, alimentação, brinquedos, poleiros e cuidados especializados.',
    items: [
      'Periquitos',
      'Calopsitas',
      'Agapornis',
      'Ring Necks',
      'Papagaios',
      'Araras',
    ],
  },
  {
    id: 'aqua',
    href: '#aqua-marketplace',
    eyebrow: 'Ecossistemas aquáticos',
    title: 'Mundo Aqua',
    description:
      'Aquários marinhos, água doce, plantados, peixes, corais, equipamentos, filtragem e manutenção completa.',
    items: [
      'Marinho',
      'Água doce',
      'Plantados',
      'Corais',
      'Peixes',
      'Equipamentos',
    ],
  },
  {
    id: 'roedores',
    href: '#hamsters-marketplace',
    eyebrow: 'Pequenos animais',
    title: 'Roedores',
    description:
      'Espécies, alimentação, alojamentos, substratos, enriquecimento, acessórios e cuidados responsáveis.',
    items: [
      'Hamsters',
      'Gerbilos',
      'Twisters',
      'Camundongos',
      'Chinchilas',
      'Acessórios',
    ],
  },
  {
    id: 'pequenos-mamiferos',
    href: '#contact',
    eyebrow: 'Companheiros especiais',
    title: 'Pequenos Mamíferos',
    description:
      'Animais, criadores, produtos, alimentação, alojamentos e suporte especializado em um único lugar.',
    items: [
      'Coelhos',
      'Porquinhos-da-índia',
      'Chinchilas',
      'Furões',
      'Alimentação',
      'Cuidados',
    ],
  },
]


const AQUA_EDITORIAL_GUIDES = [
  {
    id: 'oscar',
    volume: 'Vol. 01',
    eyebrow: 'Grandes ciclídeos sul-americanos',
    title: 'Oscar',
    scientificName: 'Astronotus ocellatus',
    description:
      'Inteligência, personalidade, variedades de cor, compatibilidade, manejo e cuidados essenciais.',
    image:
      '/images/marketplace/aqua/agronexus-oscar-grandes-ciclideos-sul-americanos-marketplace.png',
    imageAlt:
      'Guia editorial AgroNexus sobre Oscar e grandes ciclídeos sul-americanos',
  },
  {
    id: 'discus',
    volume: 'Vol. 02',
    eyebrow: 'Elegância amazônica',
    title: 'Discus',
    scientificName: 'Symphysodon spp.',
    description:
      'Variedades, habitat amazônico, água ideal, alimentação, reprodução, conservação e comércio responsável.',
    image: '/images/marketplace/aqua/agronexus-discus-marketplace.png',
    imageAlt: 'Guia editorial AgroNexus sobre peixes Discus',
  },
  {
    id: 'acaras-bandeira',
    volume: 'Vol. 03',
    eyebrow: 'Símbolos dos aquários',
    title: 'Acarás Bandeira',
    scientificName: 'Pterophyllum spp.',
    description:
      'Formas selvagens, variedades selecionadas, convivência, reprodução, parâmetros e cuidados.',
    image: '/images/marketplace/aqua/agronexus-acaras-bandeira-marketplace.png',
    imageAlt: 'Guia editorial AgroNexus sobre Acarás Bandeira',
  },
  {
    id: 'africanos-tres-lagos',
    volume: 'Vol. 04',
    eyebrow: 'Introdução aos grandes lagos',
    title: 'Ciclídeos Africanos',
    scientificName: 'Malawi • Tanganyika • Victoria',
    description:
      'Uma visão editorial dos três grandes lagos, suas linhagens, habitats, comportamentos e conservação.',
    image:
      '/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png',
    imageAlt:
      'Guia editorial AgroNexus sobre ciclídeos africanos dos três grandes lagos',
  },
  {
    id: 'africanos-cuidados',
    volume: 'Guia prático',
    eyebrow: 'Cuidados e convivência',
    title: 'Ciclídeos Africanos',
    scientificName: 'Compatibilidade • Temperamento • Manejo',
    description:
      'Temperatura, parâmetros, alimentação, experiência exigida e compatibilidades para evitar treta e tiroteio.',
    image:
      '/images/marketplace/aqua/agronexus-ciclideos-africanos-guia-completo-marketplace.png',
    imageAlt:
      'Guia completo AgroNexus de cuidados e compatibilidade de ciclídeos africanos',
  },
  {
    id: 'agronexus-club',
    volume: 'Clube de benefícios',
    eyebrow: 'Assine, aprenda e economize',
    title: 'AgroNexus Club',
    scientificName: 'Conhecimento que gera benefícios',
    description:
      'Descontos, conteúdo premium, vantagens no Marketplace, fidelidade e benefícios para parceiros.',
    image:
      '/images/marketplace/aqua/agronexus-club-beneficios-marketplace.png',
    imageAlt: 'Apresentação editorial dos benefícios do AgroNexus Club',
  },
]


const HAMSTER_EDITORIAL_GUIDES = [
  {
    id: 'hamster-sirio',
    volume: 'Vol. 01',
    eyebrow: 'O gigante solitário',
    title: 'Hamster Sírio',
    scientificName: 'Mesocricetus auratus',
    description:
      'Origem, comportamento territorial, alojamento individual, enriquecimento, alimentação e cuidados essenciais.',
    image:
      '/images/marketplace/hamsters/agronexus-hamster-sirio-guia-completo-marketplace-v2.png',
    imageAlt: 'Guia editorial AgroNexus sobre Hamster Sírio',
  },
  {
    id: 'hamster-roborovski',
    volume: 'Vol. 02',
    eyebrow: 'Velocidade em miniatura',
    title: 'Hamster Roborovski',
    scientificName: 'Phodopus roborovskii',
    description:
      'O menor e mais veloz dos hamsters domésticos: habitat, comportamento, manejo delicado e enriquecimento seguro.',
    image:
      '/images/marketplace/hamsters/agronexus-hamster-roborovski-guia-completo-marketplace.png',
    imageAlt: 'Guia editorial AgroNexus sobre Hamster Roborovski',
  },
  {
    id: 'hamster-winter-white',
    volume: 'Vol. 03',
    eyebrow: 'O pequeno filósofo da neve',
    title: 'Hamster Winter White',
    scientificName: 'Phodopus sungorus',
    description:
      'Mudança sazonal da pelagem, temperamento, ambiente adequado, genética, alimentação e bem-estar responsável.',
    image:
      '/images/marketplace/hamsters/agronexus-hamster-winter-white-guia-completo-marketplace-v2.png',
    imageAlt: 'Guia editorial AgroNexus sobre Hamster Winter White',
  },
  {
    id: 'hamster-campbell',
    volume: 'Vol. 04',
    eyebrow: 'O investigador do território',
    title: 'Hamster Campbell',
    scientificName: 'Phodopus campbelli',
    description:
      'Personalidade alerta, diferenças em relação ao Winter White, variedades, habitat, dieta e cuidados especializados.',
    image:
      '/images/marketplace/hamsters/agronexus-hamster-campbell-guia-completo-marketplace.png',
    imageAlt: 'Guia editorial AgroNexus sobre Hamster Campbell',
  },
  {
    id: 'hamster-chines',
    volume: 'Vol. 05',
    eyebrow: 'O ninja invisível',
    title: 'Hamster Chinês',
    scientificName: 'Cricetulus griseus',
    description:
      'Corpo alongado, cauda característica, habilidade de fuga, comportamento, alojamento seguro e manejo responsável.',
    image:
      '/images/marketplace/hamsters/agronexus-hamster-chines-guia-completo-marketplace.png',
    imageAlt: 'Guia editorial AgroNexus sobre Hamster Chinês',
  },
]

function formatNumber(value) {
  return new Intl.NumberFormat('pt-BR').format(value)
}

function AnimatedNumber({ value, suffix = '', duration = 1400 }) {
  const [displayValue, setDisplayValue] = useState(0)
  const numberRef = useRef(null)

  useEffect(() => {
    const element = numberRef.current

    if (!element) {
      return undefined
    }

    let animationFrame
    let started = false

    const startAnimation = () => {
      if (started) {
        return
      }

      started = true
      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.round(value * easedProgress)

        setDisplayValue(currentValue)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()

      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [duration, value])

  return (
    <span ref={numberRef}>
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}

export default function MarketplaceWarPlan() {
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [failedImages, setFailedImages] = useState({})

  useEffect(() => {
    if (!selectedGuide) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedGuide(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedGuide])

  const markImageAsFailed = (guideId) => {
    setFailedImages((current) => ({ ...current, [guideId]: true }))
  }

  return (
    <section
      id="marketplace"
      className="section"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <Reveal
          style={{
            maxWidth: '820px',
            marginBottom: '42px',
          }}
        >
          <span className="eyebrow">Marketplace AgroNexus</span>

          <h2
            style={{
              marginTop: '18px',
              fontSize: 'clamp(2rem, 5vw, 3.6rem)',
              textTransform: 'uppercase',
            }}
          >
            Tudo o que cada espécie precisa,{' '}
            <span className="hl-cyan">em um único ecossistema</span>
          </h2>

          <p
            style={{
              marginTop: '22px',
              maxWidth: '720px',
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'var(--text-muted)',
            }}
          >
            Encontre espécies, equipamentos, alimentação, alojamentos,
            acessórios e cuidados especializados. A AgroNexus conecta cada
            escolha a uma experiência completa.
          </p>
        </Reveal>

        <Reveal
          style={{
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: 'clamp(24px, 4vw, 42px)',
              border: '1px solid rgba(42, 226, 255, 0.2)',
              borderRadius: 'var(--radius)',
              background:
                'linear-gradient(145deg, rgba(14, 31, 53, 0.98), rgba(5, 14, 26, 0.98))',
              boxShadow:
                '0 30px 80px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-140px',
                right: '-90px',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(42, 226, 255, 0.13), transparent 68%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '22px',
                paddingBottom: '28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    color: 'var(--cyan)',
                    fontSize: '0.74rem',
                    fontWeight: '800',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}
                >
                  AgroNexus Living Ecosystem
                </span>

                <h3
                  style={{
                    margin: '10px 0 0',
                    fontSize: 'clamp(1.45rem, 3vw, 2.3rem)',
                    textTransform: 'uppercase',
                  }}
                >
                  Inteligência comercial do ecossistema
                </h3>

                <p
                  style={{
                    maxWidth: '680px',
                    margin: '12px 0 0',
                    color: 'var(--text-muted)',
                    lineHeight: '1.7',
                  }}
                >
                  Uma visão consolidada da expansão do marketplace, das
                  categorias disponíveis e das conexões comerciais em
                  desenvolvimento.
                </p>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  minHeight: '38px',
                  padding: '0 16px',
                  border: '1px solid rgba(74, 222, 128, 0.34)',
                  borderRadius: '999px',
                  background: 'rgba(74, 222, 128, 0.08)',
                  color: '#86efac',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4ade80',
                    boxShadow: '0 0 14px rgba(74, 222, 128, 0.9)',
                  }}
                />

                Ecossistema em expansão
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1px',
                marginTop: '28px',
                background: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              {MARKETPLACE_STATS.map((stat, index) => (
                <div
                  key={stat.id}
                  style={{
                    minHeight: '172px',
                    padding: '26px 22px',
                    background:
                      index % 2 === 0
                        ? 'rgba(7, 18, 33, 0.96)'
                        : 'rgba(10, 23, 40, 0.96)',
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      color: 'var(--text)',
                      fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
                      lineHeight: '1',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={1300 + index * 120}
                    />
                  </strong>

                  <span
                    style={{
                      display: 'block',
                      marginTop: '16px',
                      color: 'var(--cyan)',
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      letterSpacing: '0.1em',
                      lineHeight: '1.5',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </span>

                  <span
                    style={{
                      display: 'block',
                      marginTop: '8px',
                      color: 'var(--text-muted)',
                      fontSize: '0.84rem',
                      lineHeight: '1.55',
                    }}
                  >
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                position: 'relative',
                zIndex: 1,
                margin: '20px 0 0',
                color: 'rgba(255, 255, 255, 0.46)',
                fontSize: '0.72rem',
                lineHeight: '1.6',
                letterSpacing: '0.03em',
              }}
            >
              Indicadores demonstrativos da estrutura inicial e das metas de
              expansão do Marketplace AgroNexus. Os dados serão atualizados
              progressivamente conforme a operação, a integração de parceiros
              e as transações da plataforma.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {MARKETPLACE_AREAS.map((area, index) => (
            <Reveal key={area.id} delay={index * 100}>
              <article
                style={{
                  height: '100%',
                  padding: '30px',
                  border: '1px solid rgba(42, 226, 255, 0.18)',
                  borderRadius: 'var(--radius)',
                  background:
                    'linear-gradient(145deg, rgba(15, 31, 54, 0.96), rgba(7, 16, 30, 0.96))',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.22)',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    marginBottom: '12px',
                    color: 'var(--cyan)',
                    fontSize: '0.76rem',
                    fontWeight: '700',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  {area.eyebrow}
                </span>

                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(1.55rem, 3vw, 2.1rem)',
                    textTransform: 'uppercase',
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    marginTop: '16px',
                    lineHeight: '1.7',
                    color: 'var(--text-muted)',
                  }}
                >
                  {area.description}
                </p>

                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px 14px',
                    margin: '24px 0 0',
                    padding: '0',
                    listStyle: 'none',
                  }}
                >
                  {area.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          marginRight: '8px',
                          color: 'var(--cyan)',
                        }}
                      >
                        +
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={area.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '28px',
                    minHeight: '46px',
                    padding: '0 22px',
                    border: '1px solid var(--cyan)',
                    borderRadius: '999px',
                    color: 'var(--cyan)',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  {area.id === 'aqua'
                    ? 'Explorar coleção Aqua'
                    : area.id === 'roedores'
                      ? 'Explorar coleção Hamsters'
                      : 'Consultar disponibilidade'}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <div
          id="aqua-marketplace"
          style={{
            scrollMarginTop: '110px',
            marginTop: 'clamp(72px, 9vw, 120px)',
          }}
        >
          <Reveal
            style={{
              maxWidth: '900px',
              marginBottom: '34px',
            }}
          >
            <span className="eyebrow">Coleção Editorial • Mundo Aqua</span>

            <h2
              style={{
                marginTop: '18px',
                fontSize: 'clamp(2rem, 5vw, 3.7rem)',
                textTransform: 'uppercase',
              }}
            >
              Conheça antes de escolher.{' '}
              <span className="hl-cyan">Cuide antes de comprar.</span>
            </h2>

            <p
              style={{
                marginTop: '20px',
                maxWidth: '780px',
                color: 'var(--text-muted)',
                fontSize: '1.02rem',
                lineHeight: '1.8',
              }}
            >
              Guias visuais completos sobre espécies, variedades, habitat,
              comportamento, compatibilidade, parâmetros da água, conservação e
              comércio responsável. Clique em qualquer capa para ampliar.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '26px',
            }}
          >
            {AQUA_EDITORIAL_GUIDES.map((guide, index) => {
              const imageFailed = failedImages[guide.id]

              return (
                <Reveal key={guide.id} delay={index * 80}>
                  <article
                    style={{
                      height: '100%',
                      border: '1px solid rgba(42, 226, 255, 0.18)',
                      borderRadius: 'var(--radius)',
                      background:
                        'linear-gradient(145deg, rgba(15, 31, 54, 0.97), rgba(5, 13, 25, 0.98))',
                      boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedGuide(guide)}
                      aria-label={`Ampliar ${guide.title}`}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '0',
                        border: '0',
                        background: '#030914',
                        cursor: 'zoom-in',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          aspectRatio: '2 / 3',
                          overflow: 'hidden',
                        }}
                      >
                        {!imageFailed ? (
                          <img
                            src={guide.image}
                            alt={guide.imageAlt}
                            loading="lazy"
                            onError={() => markImageAsFailed(guide.id)}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              transition: 'transform 350ms ease',
                            }}
                            onMouseEnter={(event) => {
                              event.currentTarget.style.transform = 'scale(1.025)'
                            }}
                            onMouseLeave={(event) => {
                              event.currentTarget.style.transform = 'scale(1)'
                            }}
                          />
                        ) : (
                          <div
                            role="img"
                            aria-label={`Imagem indisponível: ${guide.imageAlt}`}
                            style={{
                              display: 'grid',
                              placeItems: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '30px',
                              background:
                                'radial-gradient(circle at 50% 20%, rgba(42, 226, 255, 0.14), transparent 54%), #06101d',
                              color: 'var(--text-muted)',
                              textAlign: 'center',
                              lineHeight: '1.6',
                            }}
                          >
                            Guia editorial em preparação
                          </div>
                        )}

                        <span
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            padding: '8px 12px',
                            border: '1px solid rgba(42, 226, 255, 0.34)',
                            borderRadius: '999px',
                            background: 'rgba(2, 8, 17, 0.86)',
                            color: 'var(--cyan)',
                            fontSize: '0.68rem',
                            fontWeight: '800',
                            letterSpacing: '0.13em',
                            textTransform: 'uppercase',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          {guide.volume}
                        </span>
                      </div>
                    </button>

                    <div style={{ padding: '26px' }}>
                      <span
                        style={{
                          display: 'block',
                          color: 'var(--cyan)',
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          letterSpacing: '0.17em',
                          lineHeight: '1.5',
                          textTransform: 'uppercase',
                        }}
                      >
                        {guide.eyebrow}
                      </span>

                      <h3
                        style={{
                          margin: '10px 0 0',
                          fontSize: 'clamp(1.45rem, 3vw, 2rem)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {guide.title}
                      </h3>

                      <span
                        style={{
                          display: 'block',
                          marginTop: '7px',
                          color: 'rgba(255, 255, 255, 0.58)',
                          fontFamily: 'serif',
                          fontSize: '0.93rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {guide.scientificName}
                      </span>

                      <p
                        style={{
                          margin: '17px 0 0',
                          color: 'var(--text-muted)',
                          lineHeight: '1.7',
                        }}
                      >
                        {guide.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedGuide(guide)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '44px',
                          marginTop: '22px',
                          padding: '0 20px',
                          border: '1px solid var(--cyan)',
                          borderRadius: '999px',
                          background: 'transparent',
                          color: 'var(--cyan)',
                          fontWeight: '800',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                        }}
                      >
                        Abrir guia completo
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>


        <div
          id="hamsters-marketplace"
          style={{
            scrollMarginTop: '110px',
            marginTop: 'clamp(72px, 9vw, 120px)',
          }}
        >
          <Reveal
            style={{
              maxWidth: '900px',
              marginBottom: '34px',
            }}
          >
            <span className="eyebrow">Coleção Editorial • Hamsters</span>

            <h2
              style={{
                marginTop: '18px',
                fontSize: 'clamp(2rem, 5vw, 3.7rem)',
                textTransform: 'uppercase',
              }}
            >
              Pequenos no tamanho.{' '}
              <span className="hl-cyan">Gigantes em necessidades.</span>
            </h2>

            <p
              style={{
                marginTop: '20px',
                maxWidth: '780px',
                color: 'var(--text-muted)',
                fontSize: '1.02rem',
                lineHeight: '1.8',
              }}
            >
              Guias visuais completos sobre espécies, comportamento, alojamento,
              enriquecimento, alimentação, genética e bem-estar responsável.
              Clique em qualquer capa para ampliar.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '26px',
            }}
          >
            {HAMSTER_EDITORIAL_GUIDES.map((guide, index) => {
              const imageFailed = failedImages[guide.id]

              return (
                <Reveal key={guide.id} delay={index * 80}>
                  <article
                    style={{
                      height: '100%',
                      border: '1px solid rgba(42, 226, 255, 0.18)',
                      borderRadius: 'var(--radius)',
                      background:
                        'linear-gradient(145deg, rgba(15, 31, 54, 0.97), rgba(5, 13, 25, 0.98))',
                      boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedGuide(guide)}
                      aria-label={`Ampliar ${guide.title}`}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '0',
                        border: '0',
                        background: '#030914',
                        cursor: 'zoom-in',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          aspectRatio: '2 / 3',
                          overflow: 'hidden',
                        }}
                      >
                        {!imageFailed ? (
                          <img
                            src={guide.image}
                            alt={guide.imageAlt}
                            loading="lazy"
                            onError={() => markImageAsFailed(guide.id)}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              transition: 'transform 350ms ease',
                            }}
                            onMouseEnter={(event) => {
                              event.currentTarget.style.transform = 'scale(1.025)'
                            }}
                            onMouseLeave={(event) => {
                              event.currentTarget.style.transform = 'scale(1)'
                            }}
                          />
                        ) : (
                          <div
                            role="img"
                            aria-label={`Imagem indisponível: ${guide.imageAlt}`}
                            style={{
                              display: 'grid',
                              placeItems: 'center',
                              width: '100%',
                              height: '100%',
                              padding: '30px',
                              background:
                                'radial-gradient(circle at 50% 20%, rgba(42, 226, 255, 0.14), transparent 54%), #06101d',
                              color: 'var(--text-muted)',
                              textAlign: 'center',
                              lineHeight: '1.6',
                            }}
                          >
                            Guia editorial em preparação
                          </div>
                        )}

                        <span
                          style={{
                            position: 'absolute',
                            top: '16px',
                            left: '16px',
                            padding: '8px 12px',
                            border: '1px solid rgba(42, 226, 255, 0.34)',
                            borderRadius: '999px',
                            background: 'rgba(2, 8, 17, 0.86)',
                            color: 'var(--cyan)',
                            fontSize: '0.68rem',
                            fontWeight: '800',
                            letterSpacing: '0.13em',
                            textTransform: 'uppercase',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          {guide.volume}
                        </span>
                      </div>
                    </button>

                    <div style={{ padding: '26px' }}>
                      <span
                        style={{
                          display: 'block',
                          color: 'var(--cyan)',
                          fontSize: '0.7rem',
                          fontWeight: '800',
                          letterSpacing: '0.17em',
                          lineHeight: '1.5',
                          textTransform: 'uppercase',
                        }}
                      >
                        {guide.eyebrow}
                      </span>

                      <h3
                        style={{
                          margin: '10px 0 0',
                          fontSize: 'clamp(1.45rem, 3vw, 2rem)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {guide.title}
                      </h3>

                      <span
                        style={{
                          display: 'block',
                          marginTop: '7px',
                          color: 'rgba(255, 255, 255, 0.58)',
                          fontFamily: 'serif',
                          fontSize: '0.93rem',
                          fontStyle: 'italic',
                        }}
                      >
                        {guide.scientificName}
                      </span>

                      <p
                        style={{
                          margin: '17px 0 0',
                          color: 'var(--text-muted)',
                          lineHeight: '1.7',
                        }}
                      >
                        {guide.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelectedGuide(guide)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '44px',
                          marginTop: '22px',
                          padding: '0 20px',
                          border: '1px solid var(--cyan)',
                          borderRadius: '999px',
                          background: 'transparent',
                          color: 'var(--cyan)',
                          fontWeight: '800',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                        }}
                      >
                        Abrir guia completo
                      </button>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {selectedGuide ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Guia completo: ${selectedGuide.title}`}
            onClick={() => setSelectedGuide(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'grid',
              placeItems: 'center',
              padding: 'clamp(14px, 3vw, 34px)',
              background: 'rgba(0, 4, 10, 0.94)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedGuide(null)}
              aria-label="Fechar guia"
              style={{
                position: 'fixed',
                top: '18px',
                right: '18px',
                zIndex: 2,
                width: '46px',
                height: '46px',
                border: '1px solid rgba(42, 226, 255, 0.48)',
                borderRadius: '50%',
                background: 'rgba(3, 12, 23, 0.92)',
                color: 'var(--cyan)',
                fontSize: '1.55rem',
                lineHeight: '1',
                cursor: 'pointer',
              }}
            >
              ×
            </button>

            <div
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                width: 'min(100%, 1120px)',
                maxHeight: 'calc(100vh - 50px)',
                overflow: 'auto',
                border: '1px solid rgba(42, 226, 255, 0.28)',
                borderRadius: '18px',
                background: '#020812',
                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.7)',
              }}
            >
              <img
                src={selectedGuide.image}
                alt={selectedGuide.imageAlt}
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        ) : null}

      </div>
    </section>
  )
}
