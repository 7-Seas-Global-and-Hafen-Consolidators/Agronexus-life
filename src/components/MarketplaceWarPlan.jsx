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
    href: '#contact',
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
    href: '#contact',
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
                  Consultar disponibilidade
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
