import { useMemo, useState } from 'react'
import '../styles/MarketplaceWarPlan.css'

const PRODUCTS = [
  {
    id: 'guia-periquito-australiano',
    category: 'publicacoes',
    categoryLabel: 'Guias Oficiais',
    name: 'Guia Oficial AgroNexus — Periquito Australiano',
    description:
      'Publicação digital completa com 369 páginas sobre comportamento, alimentação, manejo, genética, saúde, reprodução, mutações, bem-estar e criação responsável.',
    price: 19.59,
    oldPrice: null,
    checkout:
      'https://www.asaas.com/c/bzsxz4qaps5glfm4',
    badge: 'Preço de lançamento',
    delivery: 'Produto digital',
  },

  {
    id: 'guia-calopsitas',
    category: 'publicacoes',
    categoryLabel: 'Guias Oficiais',
    name: 'Guia Oficial AgroNexus — Calopsitas',
    description:
      'Publicação digital aprofundada sobre comportamento, alimentação, manejo, saúde, mutações, reprodução, ambiente, linguagem corporal e bem-estar.',
    price: 19.59,
    oldPrice: null,
    checkout:
      'https://www.asaas.com/c/x17xj6s0gmqrhgnm',
    badge: 'Preço de lançamento',
    delivery: 'Produto digital',
  },
]

const CATEGORIES = [
  {
    id: 'aves',
    name: 'Aves',
    shortName: 'Aves',
    description:
      'Periquitos, calopsitas, Ring Necks, Agapornis, Lóris, canários, psitacídeos, passeriformes, alimentação, viveiros e acessórios.',
    keywords:
      'periquito calopsita ring neck agapornis loris canario psitacideo passeriforme ave',
    route: '#/aves',
  },

  {
    id: 'aquarismo',
    name: 'Aquarismo',
    shortName: 'Aquarismo',
    description:
      'Peixes de água doce e marinhos, reef, aquários, filtragem, bombas, iluminação, alimentação, plantas e manutenção.',
    keywords:
      'aquario betta kinguio reef marinho ciclideo filtro bomba skimmer planta',
    route: '#/aquarismo',
  },

  {
    id: 'mamiferos',
    name: 'Pequenos Mamíferos',
    shortName: 'Mamíferos',
    description:
      'Hamsters, chinchilas, coelhos, porquinhos-da-índia, gerbilos, pequenos roedores, habitats, alimentação e acessórios.',
    keywords:
      'hamster chinchila coelho gerbilo rato porquinho india mamifero',
    route: '#/mamiferos',
  },

  {
    id: 'caes',
    name: 'Cães',
    shortName: 'Cães',
    description:
      'Raças, alimentação, higiene, camas, transporte, brinquedos, enriquecimento, tecnologia e acessórios.',
    keywords:
      'cachorro cao labrador golden border collie spitz bulldog pinscher cane corso racao cama brinquedo',
  },

  {
    id: 'gatos',
    name: 'Gatos',
    shortName: 'Gatos',
    description:
      'Raças, alimentação, fontes, caixas sanitárias, areia, arranhadores, brinquedos, transporte e acessórios.',
    keywords:
      'gato persa sphynx maine coon siames ragdoll areia arranhador fonte caixa',
  },

  {
    id: 'repteis',
    name: 'Répteis e Terrários',
    shortName: 'Répteis',
    description:
      'Espécies comercializáveis, terrários, UVB, aquecimento, substratos, alimentação, decoração e equipamentos.',
    keywords:
      'reptil terrario jabuti gecko iguana serpente cobra uvb substrato aquecimento',
  },

  {
    id: 'botanica',
    name: 'Plantas e Botânica',
    shortName: 'Plantas',
    description:
      'Bonsais, árvores frutíferas, orquídeas, plantas ornamentais, vasos, substratos, fertilizantes e ferramentas.',
    keywords:
      'bonsai jabuticaba planta orquidea arvore frutifera vaso substrato adubo fertilizante',
  },

  {
    id: 'alimentacao',
    name: 'Alimentação',
    shortName: 'Alimentação',
    description:
      'Rações, extrusadas, farinhadas, sementes, néctares, fenos, pellets, alimentos vivos e produtos especializados.',
    keywords:
      'racao alimento extrusada farinhada semente nectar feno pellet artemia tenebrio',
  },

  {
    id: 'habitats',
    name: 'Habitats',
    shortName: 'Habitats',
    description:
      'Gaiolas, viveiros, aquários, terrários, cercados, ninhos, tocas, poleiros e estruturas.',
    keywords:
      'gaiola viveiro aquario terrario cercado habitat poleiro toca ninho',
  },

  {
    id: 'equipamentos',
    name: 'Equipamentos',
    shortName: 'Equipamentos',
    description:
      'Filtros, bombas, iluminação, climatização, aquecimento, incubação, automação e equipamentos especializados.',
    keywords:
      'filtro bomba skimmer iluminacao aquecimento chocadeira incubadora equipamento automacao',
  },

  {
    id: 'publicacoes',
    name: 'Guias Oficiais AgroNexus',
    shortName: 'Guias',
    description:
      'Publicações digitais AgroNexus com compra imediata, conteúdo aprofundado e checkout direto.',
    keywords:
      'guia livro ebook publicacao periquito calopsita manual',
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function MarketplaceWarPlan() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('todos')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((category) => {
      const matchesCategory =
        activeCategory === 'todos' ||
        category.id === activeCategory

      const searchable = [
        category.name,
        category.shortName,
        category.description,
        category.keywords,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const matchesSearch =
        !normalizedSearch ||
        searchable.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, normalizedSearch])

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' ||
        product.category === activeCategory

      const searchable = [
        product.name,
        product.categoryLabel,
        product.description,
        product.badge,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const matchesSearch =
        !normalizedSearch ||
        searchable.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, normalizedSearch])

  function selectCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector('#catalogo-marketplace')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  function resetMarketplace() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  const hasCategoryResults =
    filteredCategories.length > 0

  const hasProductResults =
    filteredProducts.length > 0

  return (
    <main
      id="marketplace"
      className="marketplace-war"
    >
      <div className="marketplace-war__container">

        <header className="marketplace-war__hero">
          <div className="marketplace-war__hero-copy">
            <span className="marketplace-war__eyebrow">
              Marketplace AgroNexus™
            </span>

            <h1>
              Encontre o que
              <strong> procura.</strong>
            </h1>

            <p>
              Animais, aves, peixes, plantas,
              alimentação, habitats, equipamentos,
              acessórios e publicações em um único
              ecossistema comercial.
            </p>
          </div>

          <div className="marketplace-war__search">
            <label htmlFor="marketplace-search">
              O que você procura?
            </label>

            <div className="marketplace-war__search-row">
              <input
                id="marketplace-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Betta, Calopsita, hamster, ração, filtro, bonsai..."
                autoComplete="off"
              />

              {(searchTerm ||
                activeCategory !== 'todos') && (
                <button
                  type="button"
                  onClick={resetMarketplace}
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </header>

        <nav
          className="marketplace-war__category-strip"
          aria-label="Categorias do Marketplace"
        >
          <button
            type="button"
            className={
              activeCategory === 'todos'
                ? 'is-active'
                : ''
            }
            onClick={() =>
              setActiveCategory('todos')
            }
          >
            Todos
          </button>

          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category.id}
              className={
                activeCategory === category.id
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                selectCategory(category.id)
              }
            >
              {category.shortName}
            </button>
          ))}
        </nav>

        <section
          id="catalogo-marketplace"
          className="marketplace-war__section"
        >
          <header className="marketplace-war__section-head">
            <div>
              <span>Comprar por categoria</span>

              <h2>
                Explore o Marketplace
              </h2>
            </div>

            <p>
              Escolha uma área ou use a busca para
              encontrar exatamente o que procura.
            </p>
          </header>

          {hasCategoryResults ? (
            <div className="marketplace-war__category-grid">
              {filteredCategories.map(
                (category) => (
                  <article
                    className="marketplace-war__category"
                    key={category.id}
                  >
                    <div>
                      <span className="marketplace-war__category-label">
                        AgroNexus
                      </span>

                      <h3>{category.name}</h3>

                      <p>
                        {category.description}
                      </p>
                    </div>

                    {category.route ? (
                      <a href={category.route}>
                        Abrir categoria
                        <span aria-hidden="true">
                          →
                        </span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          selectCategory(
                            category.id
                          )
                        }
                      >
                        Ver categoria
                        <span aria-hidden="true">
                          →
                        </span>
                      </button>
                    )}
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="marketplace-war__no-results">
              <strong>
                Nenhuma categoria corresponde à busca.
              </strong>

              <button
                type="button"
                onClick={resetMarketplace}
              >
                Ver Marketplace completo
              </button>
            </div>
          )}
        </section>

        <section
          id="produtos-disponiveis"
          className="marketplace-war__section marketplace-war__section--products"
        >
          <header className="marketplace-war__section-head">
            <div>
              <span>Compra direta</span>

              <h2>
                Produtos disponíveis
              </h2>
            </div>

            <p>
              Preço visível, checkout direto e
              pagamento processado pela Guiropa World.
            </p>
          </header>

          {hasProductResults ? (
            <div className="marketplace-war__products">
              {filteredProducts.map(
                (product) => (
                  <article
                    className="marketplace-war__product"
                    key={product.id}
                  >
                    <div className="marketplace-war__product-top">
                      <span className="marketplace-war__badge">
                        {product.badge}
                      </span>

                      <span>
                        {product.delivery}
                      </span>
                    </div>

                    <div className="marketplace-war__product-copy">
                      <span className="marketplace-war__product-category">
                        {product.categoryLabel}
                      </span>

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.description}
                      </p>
                    </div>

                    <div className="marketplace-war__price-block">
                      {product.oldPrice ? (
                        <del>
                          {formatBRL(
                            product.oldPrice
                          )}
                        </del>
                      ) : null}

                      <strong>
                        {formatBRL(
                          product.price
                        )}
                      </strong>

                      <span>
                        Preço de lançamento
                      </span>
                    </div>

                    <a
                      href={product.checkout}
                      className="marketplace-war__buy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Comprar agora

                      <span aria-hidden="true">
                        →
                      </span>
                    </a>

                    <small>
                      Checkout seguro processado pela
                      Guiropa World.
                    </small>
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="marketplace-war__category-focus">
              <span>
                {
                  CATEGORIES.find(
                    (category) =>
                      category.id ===
                      activeCategory
                  )?.name
                }
              </span>

              <h3>
                Catálogo desta categoria
              </h3>

              <p>
                Esta área já está integrada ao novo
                Marketplace AgroNexus e receberá os
                produtos publicados para esta
                categoria sem depender de atendimento
                externo ou redirecionamento para
                WhatsApp.
              </p>

              <button
                type="button"
                onClick={resetMarketplace}
              >
                Ver produtos disponíveis
              </button>
            </div>
          )}
        </section>

        <section className="marketplace-war__principles">
          <div>
            <strong>Preço visível</strong>
            <span>
              Sem consulta para descobrir quanto custa.
            </span>
          </div>

          <div>
            <strong>Compra direta</strong>
            <span>
              Produto publicado entra para ser comprado.
            </span>
          </div>

          <div>
            <strong>Catálogo independente</strong>
            <span>
              Cada item pode ser comprado separadamente.
            </span>
          </div>

          <div>
            <strong>Guiropa World</strong>
            <span>
              Operação financeira claramente identificada.
            </span>
          </div>
        </section>

        <footer className="marketplace-war__footer-note">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
