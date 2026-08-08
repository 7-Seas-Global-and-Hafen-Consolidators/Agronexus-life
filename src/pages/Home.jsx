import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import '../styles/agro-hub.css'

const SUPPORT_URL =
  'https://www.asaas.com/c/u6toboa8xhqsmosv'

const HERO_VIDEOS = [
  {
    id: 'calopsitas',
    src: '/agronexus-calopsitas.mp4',
    label: 'Calopsitas',
  },
  {
    id: 'hamsters',
    src: '/chinese-longhair-hamster.mp4',
    label: 'Hamsters',
  },
]

const SUPPORT_VALUES = [
  'R$ 2',
  'R$ 5',
  'R$ 10',
  'R$ 25',
  'R$ 50',
  'R$ 100',
]

const CATEGORIES = [
  {
    id: 'aves',
    title: 'Aves',
    description:
      'Periquitos, Calopsitas, Ring Necks, Agapornis, Lóris, canários, psitacídeos, passeriformes, alimentação, viveiros e acessórios.',
    href: '#/aves',
    searches: [
      'Ring Neck',
      'Calopsita',
      'Agapornis',
      'Periquito Australiano',
    ],
  },

  {
    id: 'aquarismo',
    title: 'Aquarismo',
    description:
      'Peixes ornamentais, água doce, marinho, reef, Bettas, Kinguios, filtros, bombas, aquários, plantas e alimentação.',
    href: '#/aquarismo',
    searches: [
      'Betta',
      'Kinguio',
      'Aquário plantado',
      'Mini Reef',
    ],
  },

  {
    id: 'mamiferos',
    title: 'Pequenos Mamíferos',
    description:
      'Hamsters, chinchilas, coelhos, porquinhos-da-índia, gerbilos, pequenos roedores, habitats, alimentação e acessórios.',
    href: '#/mamiferos',
    searches: [
      'Hamster Sírio',
      'Roborovski',
      'Chinchila',
      'Coelho',
    ],
  },

  {
    id: 'caes',
    title: 'Cães',
    description:
      'Raças, filhotes, alimentação, higiene, camas, transporte, brinquedos, enriquecimento e acessórios.',
    href: '#/marketplace',
    searches: [
      'Labrador',
      'Border Collie',
      'Spitz Alemão',
      'Golden Retriever',
    ],
  },

  {
    id: 'gatos',
    title: 'Gatos',
    description:
      'Raças, alimentação, fontes, caixas sanitárias, areia, arranhadores, transporte, higiene e acessórios.',
    href: '#/marketplace',
    searches: [
      'Maine Coon',
      'Persa',
      'Sphynx',
      'Ragdoll',
    ],
  },

  {
    id: 'repteis',
    title: 'Répteis e Terrários',
    description:
      'Espécies comercializáveis, terrários, iluminação UVB, aquecimento, substratos, alimentação e equipamentos.',
    href: '#/marketplace',
    searches: [
      'Terrários',
      'UVB',
      'Aquecimento',
      'Substratos',
    ],
  },

  {
    id: 'plantas',
    title: 'Plantas e Bonsais',
    description:
      'Bonsais, mini árvores frutíferas, orquídeas, plantas ornamentais, vasos, substratos, fertilizantes e ferramentas.',
    href: '#/marketplace',
    searches: [
      'Bonsai',
      'Jabuticabeira',
      'Orquídeas',
      'Plantas ornamentais',
    ],
  },

  {
    id: 'alimentacao',
    title: 'Alimentação',
    description:
      'Rações, extrusadas, sementes, néctares, fenos, pellets, alimentos vivos e produtos especializados por espécie.',
    href: '#/marketplace',
    searches: [
      'Rações',
      'Sementes',
      'Néctares',
      'Alimentos vivos',
    ],
  },

  {
    id: 'habitats',
    title: 'Habitats',
    description:
      'Gaiolas, viveiros, aquários, terrários, cercados, ninhos, tocas, poleiros e estruturas adequadas.',
    href: '#/marketplace',
    searches: [
      'Gaiolas',
      'Viveiros',
      'Aquários',
      'Terrários',
    ],
  },

  {
    id: 'equipamentos',
    title: 'Equipamentos',
    description:
      'Filtros, bombas, iluminação, climatização, aquecimento, incubação, automação e equipamentos especializados.',
    href: '#/marketplace',
    searches: [
      'Filtros',
      'Bombas',
      'Iluminação',
      'Incubação',
    ],
  },
]

const POPULAR_SEARCHES = [
  'Comprar Ring Neck Azul',
  'Preço de Calopsita',
  'Comprar Agapornis',
  'Ração para Periquito Australiano',
  'Comprar Canário Belga',
  'Comprar Hamster Sírio',
  'Aquário para Betta',
  'Comprar Kinguio Oranda',
  'Comprar Ocellaris',
  'Montar Mini Reef',
  'Comprar Labrador',
  'Comprar Border Collie',
  'Comprar Spitz Alemão',
  'Comprar Gato Persa',
  'Comprar Maine Coon',
  'Comprar Alpaca',
  'Bonsai para apartamento',
  'Mini Jabuticabeira',
  'Viveiro para Ring Neck',
  'Néctar para Lóris',
]

const FEATURED_PRODUCTS = [
  {
    id: 'guia-periquito',
    label: 'Guia Oficial',
    title:
      'Guia Oficial AgroNexus — Periquito Australiano',
    description:
      '369 páginas dedicadas a comportamento, alimentação, manejo, genética, saúde, reprodução, mutações e bem-estar.',
    price: 'R$ 19,59',
    checkout:
      'https://www.asaas.com/c/bzsxz4qaps5glfm4',
  },

  {
    id: 'guia-calopsitas',
    label: 'Guia Oficial',
    title:
      'Guia Oficial AgroNexus — Calopsitas',
    description:
      'Publicação aprofundada sobre comportamento, alimentação, saúde, mutações, reprodução, ambiente e convivência responsável.',
    price: 'R$ 19,59',
    checkout:
      'https://www.asaas.com/c/x17xj6s0gmqrhgnm',
  },
]

export default function Home() {
  const [searchTerm, setSearchTerm] =
    useState('')

  const [heroIndex, setHeroIndex] =
    useState(0)

  useEffect(() => {
    const previousTitle = document.title

    const metaDescription =
      document.querySelector(
        'meta[name="description"]'
      )

    const previousDescription =
      metaDescription?.getAttribute(
        'content'
      ) || ''

    document.title =
      'AgroNexus™ — Marketplace de Animais, Aquarismo, Plantas e Biodiversidade'

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Marketplace AgroNexus de aves, aquarismo, peixes ornamentais, cães, gatos, hamsters, plantas, bonsais, alimentação, equipamentos, habitats, acessórios e publicações especializadas.'
      )
    }

    return () => {
      document.title = previousTitle

      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          previousDescription
        )
      }
    }
  }, [])

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const searchResults = useMemo(() => {
    if (!normalizedSearch) {
      return []
    }

    const results = new Set()

    CATEGORIES.forEach((category) => {
      const searchableItems = [
        category.title,
        category.description,
        ...category.searches,
      ]

      searchableItems.forEach((item) => {
        if (
          item
            .toLocaleLowerCase('pt-BR')
            .includes(normalizedSearch)
        ) {
          results.add(item)
        }
      })
    })

    POPULAR_SEARCHES.forEach((item) => {
      if (
        item
          .toLocaleLowerCase('pt-BR')
          .includes(normalizedSearch)
      ) {
        results.add(item)
      }
    })

    return [...results].slice(0, 8)
  }, [normalizedSearch])

  function showNextHero() {
    setHeroIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        HERO_VIDEOS.length
    )
  }

  const activeHero =
    HERO_VIDEOS[heroIndex]

  return (
    <main
      id="topo"
      className="commerce-home"
    >
      {/* ======================================================
          HERO VIVO
          ====================================================== */}

      <section className="commerce-hero">
        <video
          key={activeHero.id}
          className="commerce-hero__video"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={showNextHero}
          aria-label={`AgroNexus — ${activeHero.label}`}
        >
          <source
            src={activeHero.src}
            type="video/mp4"
          />
        </video>

        <div className="commerce-hero__overlay" />

        <div className="commerce-container">
          <div className="commerce-hero__content">
            <span className="commerce-kicker">
              Marketplace AgroNexus™
            </span>

            <h1>
              Encontre.
              <br />

              Compare.
              <br />

              <strong>Compre.</strong>
            </h1>

            <p>
              Animais, aquarismo, plantas,
              alimentação, habitats,
              equipamentos, acessórios e
              publicações especializadas.
            </p>

            <div className="commerce-hero__actions">
              <a
                href="#/marketplace"
                className="commerce-button commerce-button--primary"
              >
                Abrir Marketplace

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#produtos"
                className="commerce-button commerce-button--secondary"
              >
                Ver produtos
              </a>
            </div>

            <span className="commerce-guiropa">
              AgroNexus™ · Uma iniciativa da
              Guiropa World
            </span>
          </div>

          <div className="commerce-hero__media-note">
            <span>
              Biodiversidade em movimento
            </span>

            <strong>
              {activeHero.label}
            </strong>
          </div>
        </div>
      </section>

      {/* ======================================================
          BUSCA
          ====================================================== */}

      <section className="commerce-search">
        <div className="commerce-container">
          <div className="commerce-search__box">
            <label htmlFor="home-market-search">
              O que você procura?
            </label>

            <div className="commerce-search__control">
              <input
                id="home-market-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Ring Neck, Betta, hamster, ração, aquário, bonsai..."
                autoComplete="off"
              />

              <a
                className="commerce-search__marketplace"
                href="#/marketplace"
              >
                Buscar
              </a>

              {searchTerm ? (
                <button
                  type="button"
                  onClick={() =>
                    setSearchTerm('')
                  }
                >
                  Limpar
                </button>
              ) : null}
            </div>

            {searchTerm ? (
              <div className="commerce-search__results">
                {searchResults.length > 0 ? (
                  searchResults.map(
                    (result) => (
                      <a
                        key={result}
                        href="#/marketplace"
                      >
                        <span>
                          {result}
                        </span>

                        <strong>
                          →
                        </strong>
                      </a>
                    )
                  )
                ) : (
                  <a href="#/marketplace">
                    <span>
                      Procurar “
                      {searchTerm}” no
                      Marketplace
                    </span>

                    <strong>
                      →
                    </strong>
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* ======================================================
          CATEGORIAS
          ====================================================== */}

      <section className="commerce-categories">
        <div className="commerce-container">
          <header className="commerce-section-head">
            <span>
              Comprar por categoria
            </span>

            <h2>
              Um ecossistema inteiro.
            </h2>

            <p>
              Escolha uma área e entre
              diretamente no catálogo.
            </p>
          </header>

          <div className="commerce-category-grid">
            {CATEGORIES.map(
              (category, index) => (
                <article
                  className="commerce-category"
                  key={category.id}
                >
                  <div className="commerce-category__number">
                    {String(
                      index + 1
                    ).padStart(2, '0')}
                  </div>

                  <div className="commerce-category__body">
                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {
                        category.description
                      }
                    </p>

                    <div className="commerce-category__searches">
                      {category.searches.map(
                        (item) => (
                          <a
                            key={item}
                            href={category.href}
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>

                    <a
                      href={category.href}
                      className="commerce-category__action"
                    >
                      Abrir categoria

                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          PRODUTOS EM DESTAQUE
          ====================================================== */}

      <section
        className="commerce-products"
        id="produtos"
      >
        <div className="commerce-container">
          <header className="commerce-section-head">
            <span>
              Compra imediata
            </span>

            <h2>
              Produto.
              <br />
              Preço.
              <br />
              Compra.
            </h2>

            <p>
              Produtos disponíveis entram com
              preço visível e checkout direto.
            </p>
          </header>

          <div className="commerce-products__grid">
            {FEATURED_PRODUCTS.map(
              (product) => (
                <article
                  className="commerce-product"
                  key={product.id}
                >
                  <span className="commerce-product__label">
                    {product.label}
                  </span>

                  <h3>
                    {product.title}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                  <div className="commerce-product__bottom">
                    <div className="commerce-product__price">
                      <small>
                        Preço de lançamento
                      </small>

                      <strong>
                        {product.price}
                      </strong>
                    </div>

                    <a
                      href={product.checkout}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Comprar agora
                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>

                  <small className="commerce-product__operation">
                    Checkout processado pela
                    Guiropa World.
                  </small>
                </article>
              )
            )}

            <article className="commerce-product commerce-product--marketplace">
              <span className="commerce-product__label">
                Marketplace
              </span>

              <h3>
                Muito além das publicações.
              </h3>

              <p>
                O catálogo AgroNexus está sendo
                estruturado para animais,
                alimentação, habitats,
                aquarismo, plantas,
                equipamentos e acessórios.
              </p>

              <div className="commerce-product__bottom">
                <div className="commerce-product__price">
                  <small>
                    Catálogo
                  </small>

                  <strong>
                    Explore
                  </strong>
                </div>

                <a href="#/marketplace">
                  Abrir Marketplace
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================
          PESQUISAS POPULARES
          ====================================================== */}

      <section className="commerce-popular">
        <div className="commerce-container">
          <header className="commerce-section-head">
            <span>
              Pesquisas populares
            </span>

            <h2>
              O que as pessoas procuram.
            </h2>
          </header>

          <div className="commerce-popular__grid">
            {POPULAR_SEARCHES.map(
              (item) => (
                <a
                  key={item}
                  href="#/marketplace"
                >
                  <span>
                    {item}
                  </span>

                  <strong>
                    →
                  </strong>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          GUIAS
          ====================================================== */}

      <section className="commerce-guides">
        <div className="commerce-container">
          <div className="commerce-guides__panel">
            <div>
              <span className="commerce-kicker">
                Guias Oficiais AgroNexus
              </span>

              <h2>
                Informação também é
                produto.
              </h2>

              <p>
                Publicações especializadas com
                compra imediata e acesso direto
                ao conteúdo AgroNexus.
              </p>
            </div>

            <a
              href="#produtos"
              className="commerce-button commerce-button--light"
            >
              Ver produtos disponíveis

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          APOIO
          ====================================================== */}

      <section
        className="commerce-support"
        id="apoie"
      >
        <div className="commerce-container">
          <div className="commerce-support__panel">
            <div className="commerce-support__copy">
              <span className="commerce-kicker">
                Apoie a AgroNexus
              </span>

              <h2>
                Ajude a manter e ampliar
                este trabalho.
              </h2>

              <p>
                Sua contribuição ajuda a
                manter guias, conteúdos,
                pesquisa, educação e a
                infraestrutura que sustenta
                a AgroNexus.
              </p>

              <div className="commerce-support__suggestions">
                <span>
                  Sugestões de apoio
                </span>

                <div>
                  {SUPPORT_VALUES.map(
                    (value) => (
                      <strong
                        key={value}
                      >
                        {value}
                      </strong>
                    )
                  )}
                </div>
              </div>

              <span className="commerce-support__guiropa">
                AgroNexus™ · Operação e
                pagamentos: Guiropa World
              </span>
            </div>

            <div className="commerce-support__checkout">
              <span className="commerce-support__checkout-label">
                Você escolhe o valor
              </span>

              <strong>
                R$ 2

                <small>
                  ou qualquer outro valor
                </small>
              </strong>

              <p>
                No checkout você informa
                quanto deseja contribuir e
                escolhe a forma de pagamento.
              </p>

              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escolher valor e contribuir

                <span aria-hidden="true">
                  →
                </span>
              </a>

              <div className="commerce-support__payment-methods">
                <span>Pix</span>
                <span>
                  Cartão de crédito
                </span>
                <span>Boleto</span>
              </div>

              <small>
                O checkout será exibido em
                nome da Guiropa World,
                responsável pela operação de
                pagamento da AgroNexus.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FECHAMENTO
          ====================================================== */}

      <section className="commerce-final">
        <div className="commerce-container">
          <div className="commerce-final__panel">
            <div>
              <span className="commerce-kicker">
                Marketplace AgroNexus™
              </span>

              <h2>
                Ainda não encontrou?
              </h2>

              <p>
                Continue pesquisando no
                Marketplace. O catálogo cresce
                conforme novos produtos,
                espécies e fornecedores são
                integrados.
              </p>
            </div>

            <a href="#/marketplace">
              Pesquisar no Marketplace

              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="commerce-final__institution">
            AgroNexus™ · Marketplace de
            biodiversidade · Uma iniciativa da
            Guiropa World
          </p>
        </div>
      </section>
    </main>
  )
}
