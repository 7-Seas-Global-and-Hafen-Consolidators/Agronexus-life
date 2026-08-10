import React from 'react'

/*
============================================================
AGRONEXUS™ — COMMUNITY HUB
Rede, parceiros, clubes e adoção responsável.

Este componente concentra quatro frentes principais:

01. Rede AgroNexus
02. Clubes e comunidades
03. Adoção responsável
04. Entrada de novos parceiros

IMPORTANTE:
- Não expõe fornecedores.
- Não apresenta empresas reais como parceiras sem confirmação.
- A área de adoção trabalha com processo de solicitação,
  termo de responsabilidade e eventual taxa administrativa.
- Operação e pagamentos permanecem identificados como
  responsabilidade da Guiropa World.
============================================================
*/

const networkAreas = [
  {
    number: '01',
    category: 'SAÚDE ANIMAL',
    title: 'Clínicas Veterinárias',
    description:
      'Rede destinada a clínicas, médicos-veterinários e profissionais especializados em prevenção, atendimento, saúde e bem-estar animal.',
    status: 'REDE EM EXPANSÃO',
  },
  {
    number: '02',
    category: 'AQUARISMO',
    title: 'Clubes de Aquarismo',
    description:
      'Comunidades para aquarismo marinho, água doce, nano reef, plantados, peixes ornamentais, corais e manutenção especializada.',
    status: 'COMUNIDADES EM EXPANSÃO',
  },
  {
    number: '03',
    category: 'AVES',
    title: 'Criadores & Especialistas',
    description:
      'Estrutura para aproximar criadores, mantenedores e profissionais ligados a aves ornamentais e criação responsável.',
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
    category: 'COMÉRCIO',
    title: 'Lojas Especializadas',
    description:
      'Integração progressiva com operações especializadas em alimentação, equipamentos, habitats, acessórios e produtos.',
    status: 'INTEGRAÇÃO COMERCIAL',
  },
  {
    number: '06',
    category: 'ESPECIALISTAS',
    title: 'Consultores & Profissionais',
    description:
      'Profissionais ligados a manejo, comportamento, alimentação, reprodução, habitats, manutenção e educação especializada.',
    status: 'REDE EM EXPANSÃO',
  },
]

const adoptionTypes = [
  {
    category: 'CÃES',
    title: 'Cães SRD',
    description:
      'Animais sem raça definida buscando uma nova família e uma adoção responsável.',
  },
  {
    category: 'GATOS',
    title: 'Gatos SRD',
    description:
      'Gatos disponíveis para adoção responsável, conforme perfil e condições de cada animal.',
  },
  {
    category: 'FILHOTES',
    title: 'Filhotes',
    description:
      'Filhotes encaminhados para famílias preparadas para assumir os cuidados necessários.',
  },
  {
    category: 'ADULTOS',
    title: 'Animais adultos',
    description:
      'Animais adultos que também precisam de uma nova oportunidade e de um lar responsável.',
  },
  {
    category: 'CASOS ESPECIAIS',
    title: 'Necessidades específicas',
    description:
      'Animais que podem exigir cuidados, adaptação ou acompanhamento diferenciado.',
  },
  {
    category: 'ADOÇÃO RESPONSÁVEL',
    title: 'Perfil compatível',
    description:
      'A prioridade é encontrar uma família compatível com o perfil e as necessidades do animal.',
  },
]

const aquariumClubs = [
  {
    number: '01',
    title: 'Clube Marinho',
    description:
      'Aquarismo marinho, reef, corais, peixes ornamentais, equipamentos e manutenção.',
  },
  {
    number: '02',
    title: 'Clube Água Doce',
    description:
      'Aquários de água doce, plantados, peixes ornamentais, montagem e manutenção.',
  },
  {
    number: '03',
    title: 'Clube Nano Reef',
    description:
      'Aquários compactos, nano reef, montagem, equipamentos e rotina de manutenção.',
  },
]

function CommunityHub() {
  return (
    <section
      id="comunidade"
      className="agronexus-community"
      style={{
        background: '#0b100d',
        color: '#ffffff',
        padding: '110px 24px 120px',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          .agronexus-community *,
          .agronexus-community *::before,
          .agronexus-community *::after {
            box-sizing: border-box;
          }

          .agronexus-community a {
            transition:
              transform 160ms ease,
              background 160ms ease,
              border-color 160ms ease,
              color 160ms ease;
          }

          .agronexus-community a:hover {
            transform: translateY(-2px);
          }

          .agronexus-community-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid #29332d;
            border-left: 1px solid #29332d;
          }

          .agronexus-community-clubs {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid #29332d;
            border-left: 1px solid #29332d;
          }

          .agronexus-adoption-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px;
          }

          .agronexus-adoption-card {
            min-height: 260px;
            padding: 28px;
            border: 1px solid #29332d;
            background: #111713;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .agronexus-community-top {
            display: grid;
            grid-template-columns:
              minmax(0, 1.35fr)
              minmax(280px, 0.65fr);
            gap: 70px;
            align-items: end;
            margin-bottom: 70px;
          }

          .agronexus-adoption-header {
            display: grid;
            grid-template-columns:
              minmax(0, 1.2fr)
              minmax(300px, 0.8fr);
            gap: 60px;
            align-items: end;
            margin-bottom: 50px;
          }

          .agronexus-community-cta {
            display: grid;
            grid-template-columns:
              minmax(0, 1fr)
              auto;
            gap: 40px;
            align-items: center;
          }

          @media (max-width: 1050px) {
            .agronexus-community-grid,
            .agronexus-adoption-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .agronexus-community-clubs {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 760px) {
            .agronexus-community {
              padding: 80px 18px 90px !important;
            }

            .agronexus-community-top,
            .agronexus-adoption-header,
            .agronexus-community-cta {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .agronexus-community-grid,
            .agronexus-adoption-grid {
              grid-template-columns: 1fr;
            }

            .agronexus-community-top {
              margin-bottom: 48px;
            }

            .agronexus-community-grid article {
              min-height: auto !important;
            }

            .agronexus-community-clubs article {
              min-height: auto !important;
            }

            .agronexus-community-cta a {
              width: 100%;
            }
          }
        `}
      </style>

      <div
        style={{
          width: 'min(1380px, 100%)',
          margin: '0 auto',
        }}
      >

        {/* ==================================================
            01 — CABEÇALHO DO ECOSSISTEMA
        ================================================== */}

        <div className="agronexus-community-top">
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
              A AgroNexus conecta comércio, conhecimento,
              profissionais, comunidades, serviços e
              oportunidades em torno do universo animal,
              vegetal e do aquarismo.
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
              Estrutura em expansão.
            </p>
          </div>
        </div>

        {/* ==================================================
            02 — REDE AGRO NEXUS
        ================================================== */}

        <div
          style={{
            marginBottom: '110px',
          }}
        >
          <div
            style={{
              marginBottom: '30px',
            }}
          >
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
              Rede AgroNexus
            </p>

            <h3
              style={{
                margin: 0,
                fontSize: 'clamp(2.4rem, 5vw, 5rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.055em',
                fontWeight: 900,
              }}
            >
              Conexões que
              <br />
              movimentam o setor.
            </h3>
          </div>

          <div className="agronexus-community-grid">
            {networkAreas.map((area) => (
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
                      gap: '20px',
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
                        textAlign: 'right',
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
        </div>

        {/* ==================================================
            03 — CLUBES DE AQUARISMO
        ================================================== */}

        <section
          style={{
            marginBottom: '110px',
            padding: '60px 0',
            borderTop: '1px solid #29332d',
            borderBottom: '1px solid #29332d',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(0, 0.85fr) minmax(0, 1.15fr)',
              gap: '60px',
              alignItems: 'start',
            }}
            className="agronexus-adoption-header"
          >
            <div>
              <p
                style={{
                  margin: '0 0 14px',
                  color: '#54d39b',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Comunidade
              </p>

              <h3
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.5rem, 5vw, 5.2rem)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.055em',
                  fontWeight: 900,
                }}
              >
                Clubes de
                <br />
                Aquarismo.
              </h3>
            </div>

            <p
              style={{
                margin: 0,
                color: '#aeb8b0',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              Uma área dedicada às comunidades que vivem
              aquarismo no dia a dia: água doce, marinho,
              reef, plantados, nano aquários, peixes
              ornamentais, corais, equipamentos e manutenção.
            </p>
          </div>

          <div className="agronexus-community-clubs">
            {aquariumClubs.map((club) => (
              <article
                key={club.number}
                style={{
                  minHeight: '230px',
                  padding: '30px',
                  borderRight: '1px solid #29332d',
                  borderBottom: '1px solid #29332d',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    marginBottom: '45px',
                    color: '#54d39b',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                  }}
                >
                  {club.number}
                </span>

                <h4
                  style={{
                    margin: '0 0 14px',
                    fontSize: '1.7rem',
                    letterSpacing: '-0.035em',
                  }}
                >
                  {club.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: '#9da8a0',
                    lineHeight: 1.7,
                  }}
                >
                  {club.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================
            04 — ADOÇÃO RESPONSÁVEL
        ================================================== */}

        <section
          id="adocao"
          style={{
            marginBottom: '110px',
            padding: '70px 0',
            borderTop: '1px solid #29332d',
            borderBottom: '1px solid #29332d',
          }}
        >
          <div className="agronexus-adoption-header">
            <div>
              <p
                style={{
                  margin: '0 0 16px',
                  color: '#54d39b',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Adoção AgroNexus™
              </p>

              <h3
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.8rem, 6vw, 6rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.06em',
                  fontWeight: 900,
                }}
              >
                Um lar.
                <br />
                Uma responsabilidade.
                <br />
                Uma nova chance.
              </h3>
            </div>

            <div>
              <p
                style={{
                  margin: '0 0 18px',
                  color: '#c1c9c3',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                }}
              >
                A AgroNexus terá uma área dedicada à adoção
                responsável, aproximando animais disponíveis
                de pessoas interessadas em assumir seus
                cuidados de forma consciente.
              </p>

              <p
                style={{
                  margin: 0,
                  color: '#8e9a91',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                A disponibilidade, o perfil do animal e as
                condições de adoção serão apresentados
                individualmente antes da conclusão do processo.
              </p>
            </div>
          </div>

          <div className="agronexus-adoption-grid">
            {adoptionTypes.map((item) => (
              <article
                key={item.title}
                className="agronexus-adoption-card"
              >
                <div>
                  <p
                    style={{
                      margin: '0 0 12px',
                      color: '#54d39b',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                    }}
                  >
                    {item.category}
                  </p>

                  <h4
                    style={{
                      margin: '0 0 16px',
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: '#9da8a0',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <a
                  href="#/contato"
                  style={{
                    marginTop: '28px',
                    minHeight: '48px',
                    padding: '0 20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    border: '1px solid #405047',
                    background: '#0b100d',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                  }}
                >
                  Quero adotar
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>

          {/* ==================================================
              PROCESSO DE ADOÇÃO
          ================================================== */}

          <div
            style={{
              marginTop: '30px',
              padding: '36px',
              border: '1px solid #29332d',
              background: '#111713',
            }}
          >
            <p
              style={{
                margin: '0 0 12px',
                color: '#54d39b',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Como funciona
            </p>

            <h4
              style={{
                margin: '0 0 30px',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.045em',
              }}
            >
              Processo de adoção responsável.
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(190px, 1fr))',
                gap: '1px',
                background: '#29332d',
              }}
            >
              {[
                '01 · Escolha o animal',
                '02 · Solicite a adoção',
                '03 · Avaliação do perfil',
                '04 · Termo de responsabilidade',
                '05 · Taxa administrativa, quando aplicável',
                '06 · Conclusão da adoção',
              ].map((step) => (
                <div
                  key={step}
                  style={{
                    minHeight: '105px',
                    padding: '22px',
                    background: '#111713',
                    color: '#d6ddd8',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    lineHeight: 1.45,
                  }}
                >
                  {step}
                </div>
              ))}
            </div>

            <p
              style={{
                maxWidth: '850px',
                margin: '26px 0 0',
                color: '#7f8b82',
                fontSize: '0.78rem',
                lineHeight: 1.7,
              }}
            >
              Quando houver taxa administrativa relacionada ao
              processo de adoção, o valor e as condições serão
              informados previamente. A taxa não representa a
              venda do animal.
            </p>

            <a
              href="#/contato"
              style={{
                marginTop: '30px',
                minHeight: '54px',
                padding: '0 28px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#24c9d4',
                color: '#061011',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Quero iniciar uma adoção →
            </a>
          </div>
        </section>

        {/* ==================================================
            05 — ENTRADA DE PARCEIROS
        ================================================== */}

        <section
          style={{
            marginBottom: '60px',
          }}
        >
          <div className="agronexus-community-cta">
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
                Rede AgroNexus
              </p>

              <h3
                style={{
                  margin: '0 0 14px',
                  fontSize: 'clamp(2rem, 4vw, 3.6rem)',
                  lineHeight: 0.94,
                  letterSpacing: '-0.05em',
                }}
              >
                Sua operação pode fazer
                <br />
                parte do ecossistema.
              </h3>

              <p
                style={{
                  maxWidth: '760px',
                  margin: 0,
                  color: '#9da8a0',
                  lineHeight: 1.7,
                }}
              >
                Clínicas, clubes, criadores, especialistas,
                produtores, lojas, comunidades e projetos podem
                entrar em contato para apresentar sua operação e
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
        </section>

        {/* ==================================================
            06 — IDENTIDADE OPERACIONAL
        ================================================== */}

        <div
          style={{
            marginTop: '28px',
            paddingTop: '24px',
            borderTop: '1px solid #29332d',
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
