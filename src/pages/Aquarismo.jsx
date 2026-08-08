import { useMemo, useState } from 'react'

const AQUARISMO_CATEGORIES = [
  {
    id: 'peixes-agua-doce',
    name: 'Peixes de Água Doce',
    description:
      'Bettas, Kinguios, Tetras, Guppies, Molinésias, Platis, Espadas, Cascudos, Corydoras, Ciclídeos e outras espécies.',
    keywords:
      'betta kinguio tetra guppy molinesia plati espada cascudo corydora ciclideo peixe agua doce',
  },
  {
    id: 'aquarismo-marinho',
    name: 'Aquarismo Marinho',
    description:
      'Peixes marinhos, invertebrados, corais e espécies destinadas a sistemas marinhos e reef.',
    keywords:
      'marinho reef coral peixe marinho invertebrado',
  },
  {
    id: 'aquarios',
    name: 'Aquários',
    description:
      'Aquários de diferentes volumes, formatos e aplicações para água doce, plantados, marinhos e reef.',
    keywords:
      'aquario vidro nano cubo plantado marinho reef',
  },
  {
    id: 'filtragem',
    name: 'Filtros e Filtragem',
    description:
      'Filtros internos, externos, hang-on, canisters, skimmers, mídias filtrantes, lã, carvão e reposições.',
    keywords:
      'filtro canister hang on skimmer midia carvao la filtragem',
  },
  {
    id: 'bombas',
    name: 'Bombas e Circulação',
    description:
      'Bombas submersas, bombas de retorno, circulação, wavemakers, compressores e acessórios.',
    keywords:
      'bomba circulacao retorno wavemaker compressor',
  },
  {
    id: 'iluminacao',
    name: 'Iluminação',
    description:
      'Luminárias, LEDs e sistemas de iluminação para aquários de água doce, plantados e reef.',
    keywords:
      'luminaria led iluminacao plantado reef',
  },
  {
    id: 'temperatura',
    name: 'Temperatura e Controle',
    description:
      'Termostatos, aquecedores, termômetros, chillers, controladores e soluções de climatização.',
    keywords:
      'termostato aquecedor termometro chiller temperatura',
  },
  {
    id: 'alimentacao',
    name: 'Alimentação',
    description:
      'Rações, alimentos especializados, alimentos vivos, congelados e opções específicas por espécie.',
    keywords:
      'racao alimento artemia tenebrio vivo congelado peixe',
  },
  {
    id: 'agua',
    name: 'Tratamento da Água',
    description:
      'Condicionadores, anticloro, testes, tamponadores, sais, suplementos e produtos de manutenção.',
    keywords:
      'anticloro condicionador teste ph amonia nitrito sal suplemento',
  },
  {
    id: 'substratos',
    name: 'Substratos e Decoração',
    description:
      'Substratos, cascalhos, areias, rochas, troncos, elementos naturais e decoração para aquários.',
    keywords:
      'substrato areia cascalho rocha tronco decoracao',
  },
  {
    id: 'plantas',
    name: 'Plantas Aquáticas',
    description:
      'Plantas naturais e itens destinados à montagem e manutenção de aquários plantados.',
    keywords:
      'planta aquatica plantado musgo carpete',
  },
  {
    id: 'manutencao',
    name: 'Manutenção e Acessórios',
    description:
      'Sifões, raspadores, redes, mangueiras, pinças, alimentadores, temporizadores e peças de reposição.',
    keywords:
      'sifao raspador rede mangueira pinca alimentador temporizador acessorio',
  },
]

export default function Aquarismo() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLocaleLowerCase('pt-BR')

    if (!search) {
      return AQUARISMO_CATEGORIES
    }

    return AQUARISMO_CATEGORIES.filter((category) => {
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
            Aquarismo
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
            Peixes, aquários, alimentação, filtragem,
            iluminação, controle de temperatura, tratamento
            da água, plantas, equipamentos, manutenção e
            acessórios.
          </p>
        </header>

        <section
          style={{
            marginBottom: '46px',
          }}
        >
          <label
            htmlFor="aquarismo-search"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Buscar em Aquarismo
          </label>

          <input
            id="aquarismo-search"
            type="search"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            placeholder="Ex.: Betta, filtro, bomba, ração, termostato..."
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
