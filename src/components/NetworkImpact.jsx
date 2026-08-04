import { useEffect, useRef, useState } from 'react'
import '../styles/NetworkImpact.css'

const NETWORK_METRICS = [
  {
    id: 'creators',
    value: 13,
    label: 'Criadores, produtores e importadores',
    description:
      'Rede nacional mapeada para conexões responsáveis em biodiversidade, produção e comércio especializado.',
  },
  {
    id: 'communities',
    value: 18,
    label: 'Clubes, entidades e comunidades',
    description:
      'Federações, associações, fóruns e organizações dedicadas à troca de conhecimento e ao desenvolvimento responsável.',
  },
  {
    id: 'science',
    value: 15,
    label: 'Ciência, educação e bem-estar',
    description:
      'Universidades, escolas, instituições, clínicas veterinárias e organizações ligadas à pesquisa e ao cuidado animal.',
  },
]

function getDigitalConnections() {
  const storageKey = 'agronexus-digital-connections'
  const baseValue = 146

  try {
    const storedValue = Number.parseInt(
      window.localStorage.getItem(storageKey) || '',
      10
    )

    const currentValue = Number.isFinite(storedValue)
      ? storedValue + 1
      : baseValue

    window.localStorage.setItem(
      storageKey,
      String(currentValue)
    )

    return currentValue
  } catch {
    return baseValue
  }
}

function AnimatedNumber({
  value,
  active,
  duration = 1200,
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    let animationFrame
    const startTime = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easedProgress =
        1 - Math.pow(1 - progress, 3)

      setDisplayValue(
        Math.round(value * easedProgress)
      )

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [active, duration, value])

  return (
    <span aria-label={String(value)}>
      {displayValue}
    </span>
  )
}

export default function NetworkImpact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [digitalConnections, setDigitalConnections] =
    useState(146)

  useEffect(() => {
    setDigitalConnections(getDigitalConnections())

    const section = sectionRef.current

    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  const metrics = [
    ...NETWORK_METRICS,
    {
      id: 'digital',
      value: digitalConnections,
      label: 'Conexões digitais',
      description:
        'Pessoas alcançadas pelo ecossistema AgroNexus™ por meio de conteúdo, conhecimento e participação digital.',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="network-impact"
      aria-labelledby="network-impact-title"
    >
      <div className="network-impact__container">
        <header className="network-impact__header">
          <span className="network-impact__eyebrow">
            Rede AgroNexus™
          </span>

          <h2 id="network-impact-title">
            Um ecossistema construído por
            <span> conexões reais.</span>
          </h2>

          <p>
            Criadores, produtores, consumidores,
            pesquisadores, universidades, escolas,
            clínicas veterinárias, importadores,
            cultivadores e especialistas conectados por
            biodiversidade, ciência e responsabilidade.
          </p>
        </header>

        <div className="network-impact__grid">
          {metrics.map((metric, index) => (
            <article
              className="network-impact__metric"
              key={metric.id}
            >
              <span className="network-impact__index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <strong className="network-impact__number">
                <AnimatedNumber
                  value={metric.value}
                  active={isVisible}
                  duration={1100 + index * 180}
                />
                <small>+</small>
              </strong>

              <h3>{metric.label}</h3>

              <p>{metric.description}</p>
            </article>
          ))}
        </div>

        <p className="network-impact__note">
          Os indicadores representam organizações,
          referências e conexões mapeadas pelo ecossistema
          AgroNexus™. A métrica digital registra interações
          de acesso e não representa parceria institucional.
        </p>
      </div>
    </section>
  )
}
