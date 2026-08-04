import { useEffect, useRef, useState } from 'react'
import '../styles/agro-hub.css'

import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Portfolio from '../components/Portfolio'

import birdsImage from '../assets/images/editorial/AgroNexus-Birds.png'
import budgerigarsImage from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-1.jpg'
import hamstersImage from '../assets/images/editorial/agronexus-hamsters-editorial-guide-1.jpg'
import reptilesImage from '../assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg'
import rosellasImage from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'
import cockatielsImage from '../assets/images/editorial/agronexus-cockatiels-editorial-guide.jpg'

const AREAS = [
  {
    title: 'Aves',
    subtitle: 'Psitacídeos e biodiversidade',
    description:
      'Espécies, genética, mutações, comportamento, manejo responsável e conhecimento especializado.',
    href: '#/aves',
    number: '01',
    image: birdsImage,
    imagePosition: 'center',
  },
  {
    title: 'Aquarismo',
    subtitle: 'Ecossistemas de água doce e marinhos',
    description:
      'Peixes ornamentais, recifes, genética, equipamentos, conservação, saúde e bem-estar.',
    href: '#/aquarismo',
    number: '02',
    image:
      '/images/marketplace/aqua/agronexus-discus-marketplace.png',
    imagePosition: 'center',
  },
  {
    title: 'Mamíferos',
    subtitle: 'Criação e cuidado responsável',
    description:
      'Comportamento, saúde, genética, ambientes adequados, enriquecimento e criação responsável.',
    href: '#/mamiferos',
    number: '03',
    image: hamstersImage,
    imagePosition: 'center',
  },
  {
    title: 'Marketplace',
    subtitle: 'Mercado responsável',
    description:
      'Criadores, produtores, serviços, publicações e conexões selecionadas dentro do ecossistema.',
    href: '#/marketplace',
    number: '04',
    image: reptilesImage,
    imagePosition: 'center',
  },
  {
    title: 'Biblioteca',
    subtitle: 'Conhecimento que orienta',
    description:
      'Guias oficiais, conteúdos técnicos, publicações especializadas e materiais educacionais.',
    href: '#/biblioteca',
    number: '05',
    image: cockatielsImage,
    imagePosition: 'center',
  },
  {
    title: 'Comunidade',
    subtitle: 'Conexões que transformam',
    description:
      'Criadores, especialistas, instituições, clubes, consumidores e apaixonados por biodiversidade.',
    href: '#/comunidade',
    number: '06',
    image: rosellasImage,
    imagePosition: 'center',
  },
]

const METRICS = [
  {
    value: 28,
    suffix: '+',
    title: 'Criadores e produtores',
    description:
      'Referências identificadas para conexões responsáveis.',
  },
  {
    value: 24,
    suffix: '+',
    title: 'Clubes e entidades',
    description:
      'Associações, comunidades e organizações especializadas.',
  },
  {
    value: 21,
    suffix: '+',
    title: 'Ciência e educação',
    description:
      'Universidades, escolas, pesquisadores e instituições.',
  },
  {
    value: 17,
    suffix: '+',
    title: 'Saúde e bem-estar',
    description:
      'Clínicas, veterinários e profissionais especializados.',
  },
  {
    value: 90,
    suffix: '+',
    title: 'Conexões mapeadas',
    description:
      'Uma rede multissetorial em desenvolvimento contínuo.',
  },
  {
    value: 2,
    suffix: '',
    title: 'Publicações oficiais',
    description:
      'Guias editoriais completos produzidos pela AgroNexus™.',
  },
]

const SPECIALTIES = [
  'Aves',
  'Psitacídeos',
  'Aquarismo',
  'Peixes ornamentais',
  'Crustáceos',
  'Répteis',
  'Anfíbios',
  'Roedores',
  'Mamíferos',
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
  suffix,
  active,
  delay,
}) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let animationFrame = null
    let timeout = null

    timeout = window.setTimeout(() => {
      const duration = 1400
      const start = window.performance.now()

      const animate = (time) => {
        const elapsed = time - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)

        setCurrentValue(
          Math.round(value * eased)
        )

        if (progress < 1) {
          animationFrame =
            window.requestAnimationFrame(animate)
        }
      }

      animationFrame =
        window.requestAnimationFrame(animate)
    }, delay)

    return () => {
      window.clearTimeout(timeout)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [active, delay, value])

  return (
    <strong className="agro-metrics__value">
      {currentValue}

      {suffix && (
        <small>{suffix}</small>
      )}
    </strong>
  )
}

function NetworkMetrics() {
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
        threshold: 0.12,
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
      className="agro-metrics"
      aria-labelledby="agro-metrics-title"
    >
      <div className="agro-hub__container">
        <header className="agro-metrics__header">
          <span className="agro-hub__eyebrow">
            Rede AgroNexus™
          </span>

          <h2 id="agro-metrics-title">
            Um ecossistema construído por
            <span> conexões reais.</span>
          </h2>

          <p>
            Um trabalho contínuo de aproximação com
            criadores, produtores, consumidores, clubes,
            profissionais, instituições, escolas,
            universidades, clínicas e especialistas.
          </p>
        </header>

        <div className="agro-metrics__grid">
          {METRICS.map((metric, index) => (
            <article
              className="agro-metrics__card"
              key={metric.title}
            >
              <span className="agro-metrics__index">
                {String(index + 1).padStart(2, '0')}
              </span>

              <CountUpNumber
                value={metric.value}
                suffix={metric.suffix}
                active={active}
                delay={index * 110}
              />

              <h3>{metric.title}</h3>

              <p>{metric.description}</p>
            </article>
          ))}
        </div>

        <div className="agro-metrics__specialties">
          {SPECIALTIES.map((specialty) => (
            <span key={specialty}>
              {specialty}
            </span>
          ))}
        </div>

        <p className="agro-metrics__note">
          Os indicadores representam referências
          mapeadas, contatos desenvolvidos e publicações
          produzidas. Não significam necessariamente
          parceria, afiliação ou endosso institucional.
        </p>
      </div>
    </section>
  )
}

function EcosystemAreaCard({ area }) {
  const handleImageError = (event) => {
    event.currentTarget.style.display = 'none'
  }

  return (
    <a
      className="agro-hub__card"
      href={area.href}
    >
      <div className="agro-hub__visual">
        <img
          src={area.image}
          alt={`${area.title} no ecossistema AgroNexus`}
          className="agro-hub__image"
          style={{
            objectPosition: area.imagePosition,
          }}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />

        <div
          className="agro-hub__image-shade"
          aria-hidden="true"
        />

        <span className="agro-hub__number">
          {area.number}
        </span>
      </div>

      <div className="agro-hub__content">
        <span className="agro-hub__subtitle">
          {area.subtitle}
        </span>

        <h3>{area.title}</h3>

        <p>{area.description}</p>

        <span className="agro-hub__action">
          Explorar área

          <span aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </a>
  )
}

export default function Home() {
  useEffect(() => {
    const pendingTarget =
      window.sessionStorage.getItem(
        'agronexus-scroll-target'
      )

    if (!pendingTarget) {
      return
    }

    window.sessionStorage.removeItem(
      'agronexus-scroll-target'
    )

    const timeout = window.setTimeout(() => {
      const target =
        document.querySelector(pendingTarget)

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }, 350)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="agro-home">
      <div
        id="topo"
        className="agro-anchor"
        aria-hidden="true"
      />

      <div
        id="sobre"
        className="agro-anchor"
        aria-hidden="true"
      />

      <Hero />

      <div
        id="missao"
        className="agro-anchor"
        aria-hidden="true"
      />

      <Mission />

      <NetworkMetrics />

      <section
        className="agro-hub"
        aria-labelledby="agro-hub-title"
      >
        <div className="agro-hub__container">
          <header className="agro-hub__header">
            <span className="agro-hub__eyebrow">
              Living Ecosystem
            </span>

            <h2 id="agro-hub-title">
              Explore o ecossistema
              <span> AgroNexus™</span>
            </h2>

            <p>
              Cada ambiente conduz o visitante da
              fotografia e da curiosidade ao conhecimento,
              à responsabilidade e às conexões do
              ecossistema.
            </p>
          </header>

          <div className="agro-hub__grid">
            {AREAS.map((area) => (
              <EcosystemAreaCard
                area={area}
                key={area.title}
              />
            ))}
          </div>

          <div className="agro-hub__footer">
            <a href="#/presenca-global">
              Presença global
              <span aria-hidden="true">→</span>
            </a>

            <a href="#contato">
              Fale com a AgroNexus™
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div
        id="portfolio"
        className="agro-anchor"
        aria-hidden="true"
      />

      <Portfolio />

      <section
        id="contato"
        className="agro-contact"
        aria-labelledby="agro-contact-title"
      >
        <div className="agro-hub__container">
          <div className="agro-contact__panel">
            <div className="agro-contact__copy">
              <span className="agro-hub__eyebrow">
                Conexões que transformam
              </span>

              <h2 id="agro-contact-title">
                Faça parte do
                <span> ecossistema.</span>
              </h2>

              <p>
                Criadores, produtores, consumidores,
                clubes, instituições, pesquisadores,
                profissionais e empresas encontram na
                AgroNexus™ um ambiente de conhecimento,
                responsabilidade e conexão.
              </p>
            </div>

            <div className="agro-contact__actions">
              <a
                href="mailto:hr@agronexus.life"
                className="agro-contact__button agro-contact__button--primary"
              >
                Entrar em contato
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/comunidade"
                className="agro-contact__button agro-contact__button--secondary"
              >
                Conhecer a comunidade
              </a>
            </div>
          </div>

          <div className="agro-contact__identity">
            <span>AgroNexus™</span>

            <p>
              Um ecossistema do Grupo Guiropa World.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
