import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import majorMitchell from '../assets/images/community-hub/major-mitchell.png'
import '../styles/CommunityHub.css'

const MEMBERS = [
  'Criadores',
  'Produtores',
  'Consumidores',
  'Veterinários',
  'Biólogos',
  'Pesquisadores',
  'Universidades',
  'Escolas',
  'Clubes',
  'Entidades',
  'Instituições',
  'Importadores',
  'Cultivadores',
  'Empresas',
]

const NETWORKS = [
  {
    number: '01',
    title: 'Aquarismo',
    text: 'Água doce, marinho, reef, aquários plantados, ciclídeos, peixes ornamentais, crustáceos, invertebrados, clubes e especialistas.',
  },
  {
    number: '02',
    title: 'Avicultura responsável',
    text: 'Criadores legalizados, genética, manejo, canto, conservação, aves ornamentais, aves exóticas e troca de conhecimento.',
  },
  {
    number: '03',
    title: 'Répteis e terrários',
    text: 'Répteis, anfíbios, quelônios, terrários, manejo responsável, saúde, bem-estar e orientação especializada.',
  },
  {
    number: '04',
    title: 'Mamíferos e produção animal',
    text: 'Mamíferos, roedores, equinos, ovinos, bovinos, suínos e outras espécies acompanhadas com responsabilidade.',
  },
  {
    number: '05',
    title: 'Botânica e cultivo',
    text: 'Plantas ornamentais, espécies raras, cultivadores, plantas carnívoras, coleções botânicas e biodiversidade vegetal.',
  },
]

const METRICS = [
  {
    value: 13,
    suffix: '+',
    title: 'Criadores & Produtores',
    description:
      'Criadores, produtores, importadores, distribuidores e cultivadores identificados para conexões responsáveis.',
  },
  {
    value: 18,
    suffix: '+',
    title: 'Clubes & Comunidades',
    description:
      'Federações, associações, fóruns, clubes, entidades e comunidades especializadas mapeadas.',
  },
  {
    value: 15,
    suffix: '+',
    title: 'Ciência & Bem-estar',
    description:
      'Universidades, escolas, pesquisadores, clínicas veterinárias, profissionais e instituições relacionadas.',
  },
  {
    value: 46,
    suffix: '+',
    title: 'Conexões Mapeadas',
    description:
      'Referências reunidas em uma rede multissetorial dedicada ao conhecimento, ao cuidado e à biodiversidade.',
  },
  {
    value: 2,
    suffix: '',
    title: 'Publicações Oficiais',
    description:
      'Guias editoriais completos já desenvolvidos pela Biblioteca AgroNexus™.',
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

function AnimatedNumber({
  value,
  suffix = '',
  active,
  delay = 0,
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return undefined
    }

    let animationFrame
    let delayTimer

    const duration = 1400

    delayTimer = window.setTimeout(() => {
      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easedProgress =
          progress === 1
            ? 1
            : 1 - Math.pow(1 - progress, 4)

        setDisplayValue(
          Math.round(value * easedProgress)
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
      window.clearTimeout(delayTimer)

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [active, delay, value])

  return (
    <strong className="community-network__number">
      {displayValue}
      <small>{suffix}</small>
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.16,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="community-network"
    >
      <header className="community-network__header">
        <span className="eyebrow">
          Rede AgroNexus™
        </span>

        <h2>
          Um ecossistema construído por
          <span> conexões que transformam.</span>
        </h2>

        <p>
          Um trabalho contínuo de aproximação com criadores,
          produtores, clubes, entidades, universidades,
          escolas, profissionais, clínicas especializadas,
          importadores, cultivadores e consumidores.
        </p>
      </header>

      <div className="community-network__grid">
        {METRICS.map((metric, index) => (
          <article
            className="community-network__metric"
            key={metric.title}
          >
            <span className="community-network__index">
              {String(index + 1).padStart(2, '0')}
            </span>

            <AnimatedNumber
              value={metric.value}
              suffix={metric.suffix}
              active={active}
              delay={index * 130}
            />

            <h3>{metric.title}</h3>

            <p>{metric.description}</p>
          </article>
        ))}
      </div>

      <div className="community-network__specialties">
        {SPECIALTIES.map((specialty) => (
          <span key={specialty}>
            {specialty}
          </span>
        ))}
      </div>

      <p className="community-network__note">
        Os indicadores representam referências mapeadas,
        contatos desenvolvidos e publicações produzidas pelo
        ecossistema AgroNexus™. Não indicam necessariamente
        parceria, afiliação ou endosso institucional.
      </p>

      <a
        href="#/contato"
        className="community-network__action"
      >
        Apresentar minha organização
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}

export default function CommunityHub() {
  const scrollToContact = (event) => {
    event.preventDefault()

    const target = document.querySelector('#contato')

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      })

      return
    }

    window.location.hash = '#/contato'
  }

  return (
    <section
      id="comunidade"
      className="section community-hub"
    >
      <style>
        {`
          .community-network {
            position: relative;
            margin-top: clamp(90px, 12vw, 170px);
            padding: clamp(70px, 9vw, 120px) 0 10px;
            border-top: 1px solid rgba(34, 211, 216, 0.16);
          }

          .community-network::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            width: 100vw;
            height: 100%;
            transform: translateX(-50%);
            z-index: -1;
            pointer-events: none;
            background:
              radial-gradient(
                circle at 50% 0%,
                rgba(34, 211, 216, 0.075),
                transparent 34%
              ),
              linear-gradient(
                180deg,
                rgba(5, 13, 25, 0.96),
                rgba(3, 8, 16, 0.98)
              );
          }

          .community-network__header {
            max-width: 850px;
            margin: 0 auto clamp(46px, 7vw, 78px);
            text-align: center;
          }

          .community-network__header h2 {
            margin: 18px 0 0;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(2.6rem, 5vw, 5.3rem);
            font-weight: 400;
            line-height: 0.98;
            letter-spacing: -0.035em;
          }

          .community-network__header h2 span {
            color: #22d3d8;
          }

          .community-network__header p {
            max-width: 720px;
            margin: 25px auto 0;
            color: rgba(243, 240, 232, 0.62);
            font-size: clamp(0.96rem, 1.5vw, 1.08rem);
            line-height: 1.8;
          }

          .community-network__grid {
            display: grid;
            grid-template-columns:
              repeat(5, minmax(0, 1fr));
            border-top:
              1px solid rgba(212, 175, 55, 0.28);
            border-left:
              1px solid rgba(212, 175, 55, 0.28);
          }

          .community-network__metric {
            min-height: 350px;
            padding: 28px 24px 32px;
            display: flex;
            flex-direction: column;
            border-right:
              1px solid rgba(212, 175, 55, 0.28);
            border-bottom:
              1px solid rgba(212, 175, 55, 0.28);
            background:
              linear-gradient(
                150deg,
                rgba(8, 21, 34, 0.88),
                rgba(3, 8, 16, 0.97)
              );
            transition:
              transform 220ms ease,
              border-color 220ms ease,
              background 220ms ease;
          }

          .community-network__metric:hover {
            z-index: 2;
            transform: translateY(-5px);
            border-color:
              rgba(212, 175, 55, 0.56);
            background:
              linear-gradient(
                150deg,
                rgba(10, 30, 43, 0.96),
                rgba(3, 8, 16, 1)
              );
          }

          .community-network__index {
            color: rgba(212, 175, 55, 0.62);
            font-family: Georgia, serif;
            font-size: 0.82rem;
            letter-spacing: 0.14em;
          }

          .community-network__number {
            display: block;
            margin-top: auto;
            color: #22d3d8;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(4rem, 6vw, 6.6rem);
            font-weight: 400;
            line-height: 0.82;
            letter-spacing: -0.055em;
          }

          .community-network__number small {
            margin-left: 3px;
            color: #d4af37;
            font-size: 0.36em;
            vertical-align: top;
          }

          .community-network__metric h3 {
            margin: 27px 0 14px;
            font-family:
              "Cormorant Garamond",
              Georgia,
              serif;
            font-size: clamp(1.45rem, 2vw, 2rem);
            font-weight: 400;
            line-height: 1.08;
          }

          .community-network__metric p {
            margin: 0;
            color: rgba(243, 240, 232, 0.56);
            font-size: 0.84rem;
            line-height: 1.7;
          }

          .community-network__specialties {
            margin: 42px auto 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 9px;
          }

          .community-network__specialties span {
            padding: 8px 13px;
            border:
              1px solid rgba(34, 211, 216, 0.18);
            border-radius: 999px;
            color: rgba(243, 240, 232, 0.7);
            background: rgba(8, 21, 34, 0.64);
            font-size: 0.64rem;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }

          .community-network__note {
            max-width: 870px;
            margin: 32px auto 0;
            color: rgba(243, 240, 232, 0.36);
            font-size: 0.68rem;
            line-height: 1.7;
            text-align: center;
          }

          .community-network__action {
            width: fit-content;
            min-height: 49px;
            margin: 28px auto 0;
            padding: 13px 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            border: 1px solid #22d3d8;
            border-radius: 999px;
            color: #02060b;
            background: #22d3d8;
            text-decoration: none;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            transition:
              transform 200ms ease,
              box-shadow 200ms ease;
          }

          .community-network__action:hover {
            transform: translateY(-2px);
            box-shadow:
              0 15px 38px rgba(34, 211, 216, 0.15);
          }

          @media (max-width: 1100px) {
            .community-network__grid {
              grid-template-columns:
                repeat(3, minmax(0, 1fr));
            }
          }

          @media (max-width: 760px) {
            .community-network__grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));
            }

            .community-network__metric {
              min-height: 300px;
              padding: 24px 20px 27px;
            }

            .community-network__number {
              font-size:
                clamp(4rem, 16vw, 5.7rem);
            }
          }

          @media (max-width: 520px) {
            .community-network {
              margin-top: 75px;
              padding-top: 65px;
            }

            .community-network__grid {
              grid-template-columns: 1fr;
            }

            .community-network__metric {
              min-height: 275px;
            }

            .community-network__action {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="community-hub__layout">
          <Reveal className="community-hub__visual">
            <div className="community-hub__image-wrap">
              <img
                src={majorMitchell}
                alt="Cacatua Major Mitchell representando a diversidade do AgroNexus Living Ecosystem"
                className="community-hub__image"
                loading="lazy"
                decoding="async"
              />

              <div
                className="community-hub__image-overlay"
                aria-hidden="true"
              />

              <div className="community-hub__image-caption">
                <span>AgroNexus Community</span>

                <strong>
                  Conhecimento, responsabilidade e pertencimento.
                </strong>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="community-hub__content"
            delay={120}
          >
            <span className="eyebrow">
              AgroNexus Living Ecosystem™
            </span>

            <h2 className="community-hub__title">
              Muito além de um marketplace.
              <span className="hl-cyan">
                {' '}
                Uma comunidade internacional.
              </span>
            </h2>

            <p className="community-hub__lead">
              Um espaço para quem sonha em conhecer uma
              espécie, para quem já cria com
              responsabilidade e para quem deseja
              compartilhar conhecimento, experiências,
              boas práticas e novas possibilidades.
            </p>

            <p className="community-hub__statement">
              Aqui, curiosidade pode virar conhecimento.
              <strong>
                {' '}
                Conhecimento pode virar conexão.
              </strong>
            </p>

            <div className="community-hub__members">
              {MEMBERS.map((member) => (
                <span key={member}>
                  {member}
                </span>
              ))}
            </div>

            <div className="community-hub__actions">
              <a
                href="#/contato"
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Quero fazer parte
                <span
                  className="arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <a
                href="https://www.instagram.com/agronexus.life?igsh=MW9pMXhtbW9xeWwy"
                className="btn btn-outline community-hub__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhar a AgroNexus no Instagram"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1E93BrSr1w/"
                className="btn btn-outline community-hub__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acompanhar a AgroNexus no Facebook"
              >
                Facebook
              </a>
            </div>
          </Reveal>
        </div>

        <div className="community-hub__networks">
          {NETWORKS.map((network, index) => (
            <Reveal
              className="community-hub__network"
              key={network.title}
              delay={160 + index * 80}
            >
              <span className="community-hub__network-number">
                {network.number}
              </span>

              <div>
                <h3>{network.title}</h3>
                <p>{network.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="community-hub__closing"
          delay={260}
        >
          <span>Descubra.</span>
          <span>Aprenda.</span>
          <span>Conecte-se.</span>

          <strong>
            Faça parte do ecossistema.
          </strong>
        </Reveal>

        <NetworkMetrics />
      </div>
    </section>
  )
}
