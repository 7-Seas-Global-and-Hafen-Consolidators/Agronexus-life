import Reveal from './Reveal'

const MARKETPLACE_AREAS = [
  {
    id: 'psitacideos',
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

export default function MarketplaceWarPlan() {
  return (
    <section
      id="marketplace"
      className="section"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)',
      }}
    >
      <div className="container">
        <Reveal
          style={{
            maxWidth: '820px',
            marginBottom: '48px',
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
                  href="#contact"
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
