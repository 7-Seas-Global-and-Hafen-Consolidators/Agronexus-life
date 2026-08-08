import { useMemo, useState } from 'react'

const MAMMAL_CATEGORIES = [
  {
    id: 'hamsters',
    name: 'Hamsters',
    description:
      'Hamster Sírio, Anão Russo, Campbell, Roborovski e outras variedades, além de produtos específicos.',
    keywords:
      'hamster sirio anao russo campbell roborovski',
  },
  {
    id: 'chinchilas',
    name: 'Chinchilas',
    description:
      'Chinchilas, alimentação, habitats, plataformas, banho, enriquecimento e acessórios.',
    keywords:
      'chinchila',
  },
  {
    id: 'coelhos',
    name: 'Coelhos',
    description:
      'Coelhos, alimentação, feno, habitats, cercados, higiene, enriquecimento e acessórios.',
    keywords:
      'coelho mini lop holland lop anao',
  },
  {
    id: 'porquinhos',
    name: 'Porquinhos-da-Índia',
    description:
      'Animais, alimentação, feno, habitats, acessórios, higiene e enriquecimento.',
    keywords:
      'porquinho india guinea pig',
  },
  {
    id: 'gerbilos',
    name: 'Gerbilos',
    description:
      'Gerbilos, habitats, substratos, alimentação, rodas, túneis e acessórios.',
    keywords:
      'gerbil gerbilo esquilo mongolia',
  },
  {
    id: 'ratos',
    name: 'Ratos e Camundongos Domésticos',
    description:
      'Variedades domésticas, habitats, alimentação, enriquecimento e acessórios específicos.',
    keywords:
      'rato domestico twister camundongo fancy mouse',
  },
  {
    id: 'furoes',
    name: 'Furões',
    description:
      'Produtos, habitats, alimentação e acessórios para furões, observadas as exigências aplicáveis.',
    keywords:
      'furao ferret',
  },
  {
    id: 'alimentacao',
    name: 'Alimentação',
    description:
      'Rações, pellets, fenos, mixes, snacks e alimentos específicos para pequenos mamíferos.',
    keywords:
      'racao pellet feno mix snack alimento',
  },
  {
    id: 'habitats',
    name: 'Habitats',
    description:
      'Gaiolas, cercados, terrários adaptados, alojamentos, plataformas, tocas e estruturas.',
    keywords:
      'gaiola cercado habitat toca plataforma',
  },
  {
    id: 'substratos',
    name: 'Substratos e Higiene',
    description:
      'Forrações, substratos, areia de banho, sanitários e produtos de higiene e manutenção.',
    keywords:
      'substrato forracao areia banho higiene sanitario',
  },
  {
    id: 'enriquecimento',
    name: 'Enriquecimento',
    description:
      'Rodas, túneis, brinquedos, esconderijos, materiais para roer e itens de atividade.',
    keywords:
      'roda tunel brinquedo toca roer enriquecimento',
  },
  {
    id: 'transporte',
    name: 'Transporte e Acessórios',
    description:
      'Caixas de transporte, bebedouros, comedouros, acessórios e itens para manejo cotidiano.',
    keywords:
      'transporte caixa bebedouro comedouro acessorio',
  },
]

export default function Mamiferos() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLocaleLowerCase('pt-BR')

    if (!search) {
      return MAMMAL_CATEGORIES
    }

    return MAMMAL_CATEGORIES.filter((category) => {
      const content = [
        category.name,
        category.description,
        category.keywords,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return content.includes(search)
    })
  }, [searchTerm])

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f4f6f4',
        color: '#111411',
        padding: '70px 20px 100px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
        }}
      >
        <header
          style={{
            maxWidth: '900px',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              display: 'block',
              marginBottom: '14px',
              color: '#087a4b',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Marketplace AgroNexus™
          </span>

          <h1
            style={{
              margin: '0 0 20px',
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.055em',
            }}
          >
            Pequenos Mamíferos
          </h1>

          <p
            style={{
              maxWidth: '760px',
              margin: 0,
              color: '#4b554e',
              fontSize: '1.05rem',
              lineHeight: 1.75,
            }}
          >
            Hamsters, chinchilas, coelhos,
            porquinhos-da-Índia, gerbilos, pequenos
            roedores, habitats, alimentação, substratos,
            enriquecimento e acessórios.
          </p>
        </header>

        <section
          style={{
            marginBottom: '46px',
          }}
        >
          <label
            htmlFor="mamiferos-search"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Buscar em Pequenos Mamíferos
          </label>

          <input
            id="mamiferos-search"
            type="search"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Ex.: Hamster Sírio, chinchila, coelho, feno, roda..."
            style={{
              width: '100%',
              minHeight: '58px',
              padding: '0 18px',
              border: '1px solid #c9d0cb',
              borderRadius: '4px',
              background: '#ffffff',
              color: '#111411',
              fontSize: '1rem',
              outline: 'none',
            }}
          />
        </section>

        <section>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {filteredCategories.map((category) => (
              <article
                key={category.id}
                style={{
                  minHeight: '220px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #d7ddd8',
                  borderRadius: '6px',
                  background: '#ffffff',
                }}
              >
                <div>
                  <h2
                    style={{
                      margin: '0 0 14px',
                      fontSize: '1.45rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {category.name}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: '#58615b',
                      lineHeight: 1.65,
                    }}
                  >
                    {category.description}
                  </p>
                </div>

                <span
                  style={{
                    marginTop: '28px',
                    color: '#087a4b',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Catálogo em expansão
                </span>
              </article>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: '70px',
            paddingTop: '24px',
            borderTop: '1px solid #d7ddd8',
            color: '#69716c',
            fontSize: '0.78rem',
          }}
        >
          AgroNexus™ · Uma iniciativa da Guiropa World
        </div>
      </div>
    </main>
  )
}
