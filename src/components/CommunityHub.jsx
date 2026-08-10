import React from 'react'

const ecosystemAreas = [
  {
    number: '01',
    category: 'SAÚDE ANIMAL',
    title: 'Rede Veterinária',
    description:
      'Conexão com clínicas, médicos-veterinários e profissionais especializados em saúde, prevenção e bem-estar animal.',
    status: 'REDE EM EXPANSÃO',
  },
  {
    number: '02',
    category: 'AQUARISMO',
    title: 'Clubes de Aquarismo',
    description:
      'Comunidades dedicadas ao aquarismo marinho, água doce, nano reef, plantados, peixes ornamentais e manutenção especializada.',
    status: 'COMUNIDADES EM INTEGRAÇÃO',
  },
  {
    number: '03',
    category: 'CRIADORES',
    title: 'Criadores Especializados',
    description:
      'Estrutura para aproximar criadores, mantenedores e especialistas de diferentes espécies e linhas de criação responsável.',
    status: 'REDE EM EXPANSÃO',
  },
  {
    number: '04',
    category: 'BOTÂNICA',
    title: 'Produtores & Viveiros',
    description:
      'Conexão com produtores, viveiros, cultivadores, especialistas em plantas ornamentais, bonsais e espécies de interesse.',
    status: 'REDE EM EXPANSÃO',
  },
  {
    number: '05',
    category: 'COMÉRCIO ESPECIALIZADO',
    title: 'Lojas & Operações',
    description:
      'Integração progressiva com operações especializadas em animais, aquarismo, alimentação, equipamentos, habitats e acessórios.',
    status: 'INTEGRAÇÃO COMERCIAL',
  },
  {
    number: '06',
    category: 'ESPECIALISTAS',
    title: 'Especialistas & Consultores',
    description:
      'Profissionais e colaboradores especializados em manejo, comportamento, alimentação, reprodução, habitats e educação.',
    status: 'REDE EM EXPANSÃO',
  },
  {
    number: '07',
    category: 'COMUNIDADES',
    title: 'Projetos & Comunidades',
    description:
      'Espaço para comunidades independentes, clubes, projetos e iniciativas relacionadas à biodiversidade e criação responsável.',
    status: 'COMUNIDADES CONVIDADAS',
  },
  {
    number: '08',
    category: 'CONTEÚDO',
    title: 'Especialistas & Publicações',
    description:
      'Produção e distribuição de conhecimento especializado através de guias, materiais técnicos, conteúdo editorial e educação.',
    status: 'NÚCLEO EDITORIAL',
  },
]

function CommunityHub() {
  return (
    <section
      id="comunidade"
      className="agronexus-ecosystem"
      style={{
        background: '#0b100d',
        color: '#ffffff',
        padding: '110px 24px 120px',
      }}
    >
      <div
        style={{
          width: 'min(1380px, 100%)',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'minmax(0, 1.35fr) minmax(280px, 0.65fr)',
            gap: '70px',
            alignItems: 'end',
            marginBottom: '70px',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 18px',
                color: '#54d39b',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Ecossistema AgroNexus™
            </p>

            <h2
              style={{
                margin: 0,
                maxWidth: '900px',
                fontSize: 'clamp(3rem, 7vw, 7rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.065em',
                fontWeight: 900,
              }}
            >
              Não é uma loja.
              <br />
              É uma rede.
            </h2>
          </div>

          <div>
            <p
              style={{
                margin: '0 0 24px',
                color: '#b8c2bb',
                fontSize: '1.05rem',
                lineHeight: 1.75,
              }}
            >
              A AgroNexus está sendo construída para conectar
              comércio, conhecimento, especialistas, comunidades
              e serviços em torno do universo animal, vegetal e
              do aquarismo.
            </p>

            <p
              style={{
                margin: 0,
                color: '#54d39b',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Uma estrutura em expansão.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(280px, 1fr))',
            borderTop: '1px solid #29332d',
            borderLeft: '1px solid #29332d',
          }}
        >
          {ecosystemAreas.map((area) => (
            <article
              key={area.number}
              style={{
                minHeight: '330px',
                padding: '34px',
                borderRight: '1px solid #29332d',
                borderBottom: '1px solid #29332d',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '55px',
                  }}
                >
                  <span
                    style={{
                      color: '#54d39b',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                    }}
                  >
                    {area.number}
                  </span>

                  <span
                    style={{
                      color: '#7e8981',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {area.status}
                  </span>
                </div>

                <p
                  style={{
                    margin: '0 0 10px',
                    color: '#54d39b',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                  }}
                >
                  {area.category}
                </p>

                <h3
                  style={{
                    margin: '0 0 18px',
                    fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    fontWeight: 800,
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: '#9da8a0',
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                  }}
                >
                  {area.description}
                </p>
              </div>

              <div
                style={{
                  marginTop: '35px',
                  paddingTop: '18px',
                  borderTop: '1px solid #29332d',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                AgroNexus™
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: '70px',
            padding: '42px',
            border: '1px solid #29332d',
            background: '#111713',
            display: 'grid',
            gridTemplateColumns:
              'minmax(0, 1fr) auto',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 12px',
                color: '#54d39b',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Quer fazer parte?
            </p>

            <h3
              style={{
                margin: '0 0 12px',
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.045em',
              }}
            >
              Conecte sua operação
              <br />
              ao ecossistema.
            </h3>

            <p
              style={{
                maxWidth: '720px',
                margin: 0,
                color: '#9da8a0',
                lineHeight: 1.7,
              }}
            >
              Clínicas, clubes, especialistas, criadores,
              produtores, lojas, comunidades e projetos
              podem entrar em contato com a AgroNexus para
              conhecer as possibilidades de integração.
            </p>
          </div>

          <a
            href="#/contato"
            style={{
              minHeight: '56px',
              padding: '0 30px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#24c9d4',
              color: '#061011',
              textDecoration: 'none',
              fontSize: '0.76rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Quero integrar →
          </a>
        </div>

        <div
          style={{
            marginTop: '28px',
            color: '#68736b',
            fontSize: '0.72rem',
            lineHeight: 1.6,
          }}
        >
          AgroNexus™ · Ecossistema em expansão · Operação e
          pagamentos: Guiropa World
        </div>
      </div>
    </section>
  )
}

export default CommunityHub
