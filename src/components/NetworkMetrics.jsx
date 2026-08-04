import { useEffect, useRef, useState } from 'react'
import '../styles/NetworkMetrics.css'

const METRICS = [
  {
    value: 28,
    suffix: '+',
    title: 'Criadores & Produtores',
    description:
      'Criadores, produtores, importadores, distribuidores e cultivadores conectados ao desenvolvimento responsável.',
  },
  {
    value: 24,
    suffix: '+',
    title: 'Clubes & Entidades',
    description:
      'Clubes, associações, federações, fóruns, comunidades e organizações especializadas.',
  },
  {
    value: 21,
    suffix: '+',
    title: 'Ciência & Educação',
    description:
      'Universidades, escolas, pesquisadores, biólogos, instituições e referências científicas.',
  },
  {
    value: 17,
    suffix: '+',
    title: 'Saúde & Bem-estar',
    description:
      'Clínicas, veterinários e profissionais especializados em diferentes grupos e espécies.',
  },
  {
    value: 90,
    suffix: '+',
    title: 'Conexões Mapeadas',
    description:
      'Uma rede multissetorial em expansão, construída por diálogo, conhecimento e responsabilidade.',
  },
  {
    value: 2,
    suffix: '',
    title: 'Publicações Oficiais',
    description:
      'Guias editoriais completos já produzidos pela Biblioteca AgroNexus™.',
  },
]

const SPECIALTIES = [
  'Aves',
  'Aves exóticas',
  'Peixes ornamentais',
  'Aquarismo',
  'Crustáceos',
  'Répteis',
  'Anfíbios',
  'Mamíferos',
  'Roedores',
  'Equinos',
  'Ovinos',
  'Bovinos',
  'Suínos',
  'Botânica',
  'Genética',
  'Medicina veterinária',
]

function CountUpNumber({
  value,
  suffix = '',
  active,
  delay = 0,
}) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let animationFrameId = null
    let timeoutId = null

    const duration = 1300

    timeoutId = window.setTimeout(() => {
      const startTime = window.performance.now()

      const animate = (time) => {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 4)

        setCurrentValue(
          Math.round(value * easedProgress)
        )

        if (progress < 1) {
          animationFrameId =
            window.requestAnimationFrame(animate)
        }
      }

      animationFrameId =
        window.requestAnimationFrame(animate)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [active, delay, value])

  return (
    <strong className="network-metrics__number">
      {currentValue}
      {suffix && (
        <small aria-hidden="true">
          {suffix}
        </small>
      )}
    </strong>
  )
}

export default function NetworkMetrics() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return undefined
    }

    if (!('IntersectionObserver' in window)) {
      setActive(true)
      return undefined
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="network-metrics"
      aria-labelledby="network-metrics-title"
    >
      <div className="network-metrics__container">
        <header className="network-metrics__header">
          <span className="network-metrics__eyebrow">
            Rede AgroNexus™
          </span>

          <h2 id="network-metrics-title">
            Conexões que fortalecem
            <span>
              {' '}conhecimento, cuidado e biodiversidade.
            </span>
          </h2>

          <p>
            Um trabalho contínuo de aproximação com criadores,
            produtores, consumidores, clubes, entidades, escolas,
            universidades, clínicas, especialistas, importadores e
            cultivadores.
          </p>
        </header>

        <div className="network-metrics__grid">
          {METRICS.map((metric, index) => (
            <article
              className="network-metrics__card"
              key={metric.title}
            >
              <span className="network-metrics__index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <CountUpNumber
                value={metric.value}
                suffix={metric.suffix}
                active={active}
                delay={index * 120}
              />

              <h3>{metric.title}</h3>

              <p>{metric.description}</p>
            </article>
          ))}
        </div>

        <div
          className="network-metrics__specialties"
          aria-label="Áreas conectadas ao ecossistema AgroNexus"
        >
          {SPECIALTIES.map((specialty) => (
            <span key={specialty}>
              {specialty}
            </span>
          ))}
        </div>

        <p className="network-metrics__note">
          Os indicadores representam referências mapeadas,
          contatos desenvolvidos e publicações produzidas pelo
          ecossistema AgroNexus™. Não indicam necessariamente
          parceria, afiliação ou endosso institucional.
        </p>

        <a
          href="#contato"
          className="network-metrics__action"
        >
          Apresentar minha organização
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
