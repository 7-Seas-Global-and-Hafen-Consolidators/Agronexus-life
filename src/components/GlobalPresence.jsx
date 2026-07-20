import Reveal from './Reveal'
import '../styles/GlobalPresence.css'

const CONNECTIONS = [
  {
    code: 'BR',
    title: 'Brasil',
    subtitle: 'Base de conexão nacional',
    text: 'Criadores, produtores, consumidores, veterinários, biólogos, aquaristas, instituições e parceiros conectados dentro de um ecossistema responsável.',
    position: {
      left: '31%',
      top: '66%',
    },
  },
  {
    code: 'EU',
    title: 'Europa Central',
    subtitle: 'Parcerias e articulação internacional',
    text: 'Conexões com mercados, especialistas, pesquisa, comércio responsável e projetos ligados à biodiversidade animal e vegetal.',
    position: {
      left: '54%',
      top: '35%',
    },
  },
  {
    code: 'UK',
    title: 'Reino Unido',
    subtitle: 'Comunicação e presença internacional',
    text: 'Canal de comunicação global para parceiros, especialistas, instituições e oportunidades de conexão entre diferentes mercados.',
    position: {
      left: '48%',
      top: '28%',
    },
  },
  {
    code: 'GL',
    title: 'Conexões Globais',
    subtitle: 'Um ecossistema sem fronteiras',
    text: 'Expansão responsável entre conhecimento, biodiversidade, ciência, mercado, logística especializada e colaboração internacional.',
    position: {
      left: '73%',
      top: '48%',
    },
  },
]

const ROUTES = [
  {
    className: 'global-presence__route global-presence__route--br-eu',
  },
  {
    className: 'global-presence__route global-presence__route--eu-uk',
  },
  {
    className: 'global-presence__route global-presence__route--eu-global',
  },
]

const PILLARS = [
  'Biodiversidade',
  'Conhecimento',
  'Pesquisa',
  'Mercado responsável',
  'Compliance',
  'Logística especializada',
]

export default function GlobalPresence() {
  return (
    <section
      id="presenca-global"
      className="section global-presence"
    >
      <div className="container">
        <Reveal className="global-presence__head">
          <span className="eyebrow center">
            Presença Global
          </span>

          <h2 className="global-presence__title">
            Conectando biodiversidade,
            <span className="hl-cyan">
              {' '}conhecimento e pessoas sem fronteiras.
            </span>
          </h2>

          <p className="global-presence__lead">
            A AgroNexus aproxima mercados, especialistas, instituições,
            criadores, consumidores e projetos por meio de uma rede
            internacional construída com responsabilidade, ciência e
            propósito.
          </p>
        </Reveal>

        <div className="global-presence__layout">
          <Reveal
            className="global-presence__map-card"
            delay={100}
          >
            <div
              className="global-presence__map"
              aria-label="Mapa ilustrativo das conexões internacionais da AgroNexus"
            >
              <div
                className="global-presence__map-glow"
                aria-hidden="true"
              />

              <svg
                className="global-presence__world"
                viewBox="0 0 1000 520"
                role="img"
                aria-label="Mapa mundial estilizado"
              >
                <defs>
                  <linearGradient
                    id="worldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--cyan)"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--purple)"
                      stopOpacity="0.24"
                    />
                  </linearGradient>

                  <filter id="worldGlow">
                    <feGaussianBlur
                      stdDeviation="3"
                      result="blur"
                    />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g
                  fill="url(#worldGradient)"
                  stroke="rgba(95, 220, 226, 0.32)"
                  strokeWidth="1.6"
                  filter="url(#worldGlow)"
                >
                  <path d="M105 130l45-35 76-8 52 22 25 37-17 38-49 11-28 42-61-8-38-36-5-63Z" />

                  <path d="M238 245l45 15 31 42-7 55-28 64-34 32-18-54 13-42-16-58 14-54Z" />

                  <path d="M470 112l53-22 56 12 34 29-15 31-41 2-18 29-48-8-37-27 16-46Z" />

                  <path d="M535 198l54-10 57 29 24 54-11 67-39 51-50 7-31-42-23-68 19-88Z" />

                  <path d="M598 105l82-23 118 15 63 38 18 43-46 42-78-2-46 36-51-16-12-55-48-28v-50Z" />

                  <path d="M816 335l48-16 45 18 24 39-18 36-52 9-42-28-5-58Z" />

                  <path d="M363 95l21-8 18 10-6 18-25 3-8-23Z" />

                  <path d="M432 79l18-10 18 7-2 18-21 5-13-20Z" />

                  <path d="M745 270l18-8 15 11-4 18-20 2-9-23Z" />
                </g>

                <g
                  fill="none"
                  stroke="rgba(95, 220, 226, 0.08)"
                  strokeWidth="1"
                >
                  <path d="M0 90h1000" />
                  <path d="M0 180h1000" />
                  <path d="M0 270h1000" />
                  <path d="M0 360h1000" />
                  <path d="M0 450h1000" />

                  <path d="M130 0v520" />
                  <path d="M260 0v520" />
                  <path d="M390 0v520" />
                  <path d="M520 0v520" />
                  <path d="M650 0v520" />
                  <path d="M780 0v520" />
                  <path d="M910 0v520" />
                </g>
              </svg>

              {ROUTES.map((route) => (
                <span
                  className={route.className}
                  key={route.className}
                  aria-hidden="true"
                />
              ))}

              {CONNECTIONS.map((connection) => (
                <div
                  className={`global-presence__marker global-presence__marker--${connection.code.toLowerCase()}`}
                  key={connection.code}
                  style={connection.position}
                >
                  <span
                    className="global-presence__pulse"
                    aria-hidden="true"
                  />

                  <span className="global-presence__dot">
                    {connection.code}
                  </span>

                  <span className="global-presence__marker-label">
                    {connection.title}
                  </span>
                </div>
              ))}

              <div className="global-presence__map-caption">
                <span>AgroNexus Living Ecosystem™</span>
                <strong>
                  Conexões internacionais em expansão
                </strong>
              </div>
            </div>
          </Reveal>

          <div className="global-presence__content">
            <Reveal
              className="global-presence__statement"
              delay={140}
            >
              <span className="global-presence__statement-label">
                Uma rede construída com propósito
              </span>

              <h3>
                A atuação global começa com
                <span className="hl-cyan">
                  {' '}conexões responsáveis.
                </span>
              </h3>

              <p>
                A AgroNexus não representa apenas países ou rotas. Ela
                representa a união entre pessoas, conhecimento,
                biodiversidade, mercados e instituições que compartilham
                objetivos comuns.
              </p>
            </Reveal>

            <div className="global-presence__connections">
              {CONNECTIONS.map((connection, index) => (
                <Reveal
                  className="global-presence__connection"
                  key={connection.code}
                  delay={180 + index * 90}
                >
                  <span className="global-presence__connection-code">
                    {connection.code}
                  </span>

                  <div>
                    <span className="global-presence__connection-subtitle">
                      {connection.subtitle}
                    </span>

                    <h4>{connection.title}</h4>
                    <p>{connection.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal
          className="global-presence__pillars"
          delay={240}
        >
          <span className="global-presence__pillars-label">
            Conectando
          </span>

          <div className="global-presence__pillars-list">
            {PILLARS.map((pillar) => (
              <span key={pillar}>
                {pillar}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal
          className="global-presence__closing"
          delay={280}
        >
          <p>
            Conectando pessoas.
            <span> Preservando conhecimento.</span>
            Construindo novas possibilidades.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
