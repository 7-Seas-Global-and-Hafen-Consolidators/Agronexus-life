import { useMemo, useState } from 'react'
import '../styles/MarketplaceWarPlan.css'

const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop`

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
    installments: null,
    checkout:
      'https://www.asaas.com/c/bzsxz4qaps5glfm4',
    badge: 'Preço de lançamento',
    delivery: 'Produto digital',
    image: PEXELS(34039458),
    imageAlt:
      'Periquitos australianos coloridos pousados em um galho',
    variants: [
      'Verde',
      'Azul',
      'Amarelo',
      'Branco',
      'Violeta',
      'Cobalto',
    ],
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
    installments: null,
    checkout:
      'https://www.asaas.com/c/x17xj6s0gmqrhgnm',
    badge: 'Preço de lançamento',
    delivery: 'Produto digital',
    image: PEXELS(12181403),
    imageAlt:
      'Aves coloridas em ambiente de criação doméstica',
    variants: [
      'Cinza',
      'Lutino',
      'Pérola',
      'Arlequim',
      'Cara branca',
      'Canela',
    ],
  },
]

const CATEGORIES = [
  {
    id: 'aves',
    name: 'Aves',
    shortName: 'Aves',
    description:
      'Periquitos, calopsitas, canários, Ring Necks, Agapornis, Forpus, Roselas, Kakarikis, Lóris e muito mais.',
    keywords:
      'periquito calopsita ring neck agapornis loris canario forpus rosela kakariki bourke ave',
    route: '#/aves',
    image: PEXELS(36133129),
    imageAlt:
      'Periquitos australianos de plumagem colorida',
    highlight: 'Cores, mutações e espécies',
    chips: [
      'Periquitos',
      'Calopsitas',
      'Canários',
      'Ring Neck',
      'Agapornis',
      'Forpus',
    ],
  },

  {
    id: 'aquarismo',
    name: 'Aquarismo',
    shortName: 'Aquarismo',
    description:
      'Bettas, kinguios, camarões, plantados, nano aquários, Ocellaris, marinho, nano reef, mini reef, reef e corais.',
    keywords:
      'aquario betta kinguio oranda ranchu reef marinho ocellaris coral camarao plantado nano mini',
    route: '#/aquarismo',
    image: PEXELS(29216700),
    imageAlt:
      'Peixes-palhaço em aquário marinho com corais coloridos',
    highlight: 'Nano Reef · Kinguios · Bettas',
    chips: [
      'Betta',
      'Kinguios',
      'Nano Reef',
      'Ocellaris',
      'Corais',
      'Plantados',
    ],
  },

  {
    id: 'mamiferos',
    name: 'Pequenos Mamíferos',
    shortName: 'Mamíferos',
    description:
      'Hamsters, chinchilas, mini coelhos, porquinhos-da-índia, gerbilos, habitats, alimentação e acessórios.',
    keywords:
      'hamster chinchila coelho mini lop netherland gerbilo porquinho india mamifero',
    route: '#/mamiferos',
    image: PEXELS(4520480),
    imageAlt:
      'Hamster pequeno e fofo fotografado de perto',
    highlight: 'Pequenos espaços',
    chips: [
      'Hamster',
      'Chinchila',
      'Mini Coelho',
      'Gerbilo',
      'Porquinho-da-índia',
    ],
  },

  {
    id: 'caes',
    name: 'Cães',
    shortName: 'Cães',
    description:
      'Raças pequenas e procuradas para a vida urbana, além de alimentação, higiene, camas, transporte e brinquedos.',
    keywords:
      'cachorro cao spitz pomeranian shih tzu yorkshire dachshund bulldog frances chihuahua schnauzer pug',
    image: PEXELS(17880515),
    imageAlt:
      'Spitz Alemão branco fotografado em estúdio',
    highlight: 'Pequenos para apartamento',
    chips: [
      'Spitz Alemão',
      'Shih Tzu',
      'Dachshund',
      'Bulldog Francês',
      'Yorkshire',
      'Schnauzer Mini',
    ],
  },

  {
    id: 'gatos',
    name: 'Gatos',
    shortName: 'Gatos',
    description:
      'Siamês, Persa, Ragdoll e outras raças, além de alimentação, areia, fontes, caixas, arranhadores e brinquedos.',
    keywords:
      'gato siames persa ragdoll british shorthair maine coon areia arranhador fonte caixa',
    image: PEXELS(9916903),
    imageAlt:
      'Gato siamês de olhos azuis fotografado de perto',
    highlight: 'Siamês · Persa · Ragdoll',
    chips: [
      'Siamês',
      'Persa',
      'Ragdoll',
      'British Shorthair',
      'Maine Coon',
    ],
  },

  {
    id: 'repteis',
    name: 'Répteis e Terrários',
    shortName: 'Répteis',
    description:
      'Iguanas, geckos e outras espécies comercializáveis, terrários, iluminação UVB, aquecimento, substratos e alimentação.',
    keywords:
      'reptil terrario jabuti gecko iguana serpente cobra uvb substrato aquecimento',
    image: PEXELS(18118236),
    imageAlt:
      'Gecko em terrário com ambiente naturalizado',
    highlight: 'Terrários e espécies',
    chips: [
      'Iguana',
      'Gecko',
      'Terrários',
      'UVB',
      'Aquecimento',
      'Substratos',
    ],
  },

  {
    id: 'botanica',
    name: 'Plantas, Flores e Bonsais',
    shortName: 'Plantas',
    description:
      'Carnívoras, orquídeas, violetas, mini rosas, bonsais, mini frutíferas, vasos, substratos, adubos e ferramentas.',
    keywords:
      'dionaea nepenthes drosera carnivora bonsai jabuticaba pitanga acerola roma planta orquidea violeta mini rosa vaso adubo',
    image: PEXELS(3691258),
    imageAlt:
      'Planta carnívora Dionaea muscipula em macro',
    highlight: 'Carnívoras · Flores · Mini frutíferas',
    chips: [
      'Dionaea',
      'Nepenthes',
      'Orquídeas',
      'Violetas',
      'Bonsais',
      'Mini Frutíferas',
    ],
  },

  {
    id: 'alimentacao',
    name: 'Alimentação',
    shortName: 'Alimentação',
    description:
      'Rações, extrusadas, farinhadas, sementes, néctares, fenos, pellets, alimentos vivos e alimentação especializada.',
    keywords:
      'racao alimento extrusada farinhada semente nectar feno pellet artemia tenebrio comida pet',
    image: PEXELS(12928244),
    imageAlt:
      'Ração seca em pote para alimentação de animais',
    highlight: 'Compra recorrente',
    chips: [
      'Cães',
      'Gatos',
      'Aves',
      'Peixes',
      'Roedores',
      'Répteis',
    ],
  },

  {
    id: 'habitats',
    name: 'Habitats',
    shortName: 'Habitats',
    description:
      'Aquários, gaiolas, viveiros, terrários, cercados, ninhos, tocas, poleiros e estruturas para cada espécie.',
    keywords:
      'gaiola viveiro aquario terrario cercado habitat poleiro toca ninho vidro',
    image: PEXELS(6364370),
    imageAlt:
      'Aves em viveiro com poleiros e ambiente preparado',
    highlight: 'Do aquário ao viveiro',
    chips: [
      'Aquários',
      'Viveiros',
      'Gaiolas',
      'Terrários',
      'Cercados',
      'Poleiros',
    ],
  },

  {
    id: 'equipamentos',
    name: 'Equipamentos',
    shortName: 'Equipamentos',
    description:
      'Filtros, bombas, skimmers, termostatos, iluminação, climatização, incubação, automação e equipamentos especializados.',
    keywords:
      'filtro bomba skimmer iluminacao termostato aquecimento chocadeira incubadora equipamento automacao reef',
    image: PEXELS(8915250),
    imageAlt:
      'Aquário marinho iluminado com peixes e corais',
    highlight: 'Aquarismo, aves e cultivo',
    chips: [
      'Bombas',
      'Filtros',
      'Skimmers',
      'Termostatos',
      'Iluminação',
      'Automação',
    ],
  },

  {
    id: 'publicacoes',
    name: 'Guias Oficiais',
    shortName: 'Guias',
    description:
      'Publicações digitais AgroNexus com conteúdo aprofundado, preço visível e checkout direto.',
    keywords:
      'guia livro ebook publicacao periquito calopsita manual',
    image: PEXELS(34039458),
    imageAlt:
      'Periquitos australianos coloridos',
    highlight: 'A partir de R$ 19,59',
    chips: [
      'Periquitos',
      'Calopsitas',
      'Aquarismo',
      'Plantas',
      'Cuidados',
    ],
  },
]

const TRENDING = [
  {
    category: 'caes',
    label: 'Em alta',
    title: 'Spitz Alemão',
    subtitle: 'Branco · Creme · Laranja · Preto · Sable',
    image: PEXELS(17880515),
  },
  {
    category: 'gatos',
    label: 'Para apartamento',
    title: 'Siamês',
    subtitle: 'Seal Point · Blue Point · Chocolate Point',
    image: PEXELS(9916903),
  },
  {
    category: 'mamiferos',
    label: 'Pequenos espaços',
    title: 'Hamsters',
    subtitle: 'Sírio · Anão · Pelo longo · Várias cores',
    image: PEXELS(3586056),
  },
  {
    category: 'aves',
    label: 'Muitas cores',
    title: 'Periquitos Australianos',
    subtitle: 'Azul · Verde · Amarelo · Branco · Violeta',
    image: PEXELS(36133129),
  },
  {
    category: 'aquarismo',
    label: 'Em alta',
    title: 'Nano Reef',
    subtitle: 'Ocellaris · Corais · Iluminação · Skimmer',
    image: PEXELS(29216700),
  },
  {
    category: 'aquarismo',
    label: 'Clássico',
    title: 'Kinguios',
    subtitle: 'Oranda · Ranchu · Ryukin · Telescópio',
    image: PEXELS(26756414),
  },
  {
    category: 'botanica',
    label: 'Modinha',
    title: 'Plantas Carnívoras',
    subtitle: 'Dionaea · Nepenthes · Drosera',
    image: PEXELS(3691258),
  },
  {
    category: 'botanica',
    label: 'Apartamento',
    title: 'Flores e Mini Frutíferas',
    subtitle: 'Orquídeas · Violetas · Bonsais · Jabuticaba',
    image: PEXELS(4090814),
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function getInstallmentText(product) {
  if (!product.installments) {
    return null
  }

  return `${product.installments.count}x de ${formatBRL(
    product.price / product.installments.count
  )}`
}

export default function MarketplaceWarPlan() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] =
    useState('todos')

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
        category.highlight,
        ...category.chips,
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
        ...product.variants,
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
              Escolha.
              <br />
              Veja o preço.
              <br />
              <strong>Compre.</strong>
            </h1>

            <p>
              Animais, aves, peixes, plantas,
              flores, alimentação, habitats,
              equipamentos, acessórios e
              publicações. Produto publicado
              entra para ser comprado.
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
                placeholder="Spitz, Siamês, Calopsita, Kinguio, Nano Reef, Dionaea, ração, skimmer..."
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

        <section className="marketplace-war__trend">
          <header className="marketplace-war__section-head">
            <div>
              <span>Em alta</span>

              <h2>
                O que chama atenção agora.
              </h2>
            </div>

            <p>
              Apartamento, cor, variedade,
              hobbies e produtos que fazem a
              pessoa parar, olhar e querer.
            </p>
          </header>

          <div className="marketplace-war__trend-grid">
            {TRENDING.map((item) => (
              <button
                type="button"
                key={`${item.category}-${item.title}`}
                className="marketplace-war__trend-card"
                onClick={() =>
                  selectCategory(item.category)
                }
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                />

                <span className="marketplace-war__trend-shade" />

                <span className="marketplace-war__trend-copy">
                  <small>{item.label}</small>

                  <strong>{item.title}</strong>

                  <span>{item.subtitle}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

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
              Escolha uma área ou use a busca
              para encontrar exatamente o que
              procura.
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
                    <div className="marketplace-war__category-image">
                      <img
                        src={category.image}
                        alt={category.imageAlt}
                        loading="lazy"
                      />

                      <span>
                        {category.highlight}
                      </span>
                    </div>

                    <div className="marketplace-war__category-body">
                      <span className="marketplace-war__category-label">
                        {category.shortName}
                      </span>

                      <h3>{category.name}</h3>

                      <p>
                        {category.description}
                      </p>

                      <div className="marketplace-war__chips">
                        {category.chips.map(
                          (chip) => (
                            <span key={chip}>
                              {chip}
                            </span>
                          )
                        )}
                      </div>

                      {category.route ? (
                        <a href={category.route}>
                          Ver produtos
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
                          Ver produtos
                          <span aria-hidden="true">
                            →
                          </span>
                        </button>
                      )}
                    </div>
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="marketplace-war__no-results">
              <strong>
                Nenhuma categoria corresponde
                à busca.
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
              Fotografia, variação, preço e
              checkout. Sem consulta para
              descobrir quanto custa.
            </p>
          </header>

          {hasProductResults ? (
            <div className="marketplace-war__products">
              {filteredProducts.map(
                (product) => {
                  const installmentText =
                    getInstallmentText(product)

                  return (
                    <article
                      className="marketplace-war__product"
                      key={product.id}
                    >
                      <div className="marketplace-war__product-image">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          loading="lazy"
                        />

                        <span className="marketplace-war__badge">
                          {product.badge}
                        </span>
                      </div>

                      <div className="marketplace-war__product-top">
                        <span>
                          {product.categoryLabel}
                        </span>

                        <span>
                          {product.delivery}
                        </span>
                      </div>

                      <div className="marketplace-war__product-copy">
                        <h3>
                          {product.name}
                        </h3>

                        <p>
                          {product.description}
                        </p>

                        <div className="marketplace-war__variants">
                          {product.variants.map(
                            (variant) => (
                              <span key={variant}>
                                {variant}
                              </span>
                            )
                          )}
                        </div>
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

                        {installmentText ? (
                          <span>
                            {installmentText}
                          </span>
                        ) : (
                          <span>
                            Pagamento no checkout
                          </span>
                        )}
                      </div>

                      <a
                        href={product.checkout}
                        className="marketplace-war__buy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Comprar

                        <span aria-hidden="true">
                          →
                        </span>
                      </a>

                      <small>
                        Checkout processado pela
                        Guiropa World.
                      </small>
                    </article>
                  )
                }
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
                Produtos entram aqui com
                preço e checkout.
              </h3>

              <p>
                Esta categoria já está pronta
                para receber os produtos
                cadastrados. Nenhum item entra
                como produto sem preço e
                checkout direto.
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
            <strong>Preço na tela</strong>
            <span>
              O cliente vê quanto custa antes
              de clicar.
            </span>
          </div>

          <div>
            <strong>Parcelamento visível</strong>
            <span>
              Quando houver parcelamento, ele
              aparece junto do preço.
            </span>
          </div>

          <div>
            <strong>Compra unitária</strong>
            <span>
              Cada produto pode ser comprado
              separadamente.
            </span>
          </div>

          <div>
            <strong>Guiropa World</strong>
            <span>
              Operação financeira claramente
              identificada no checkout.
            </span>
          </div>
        </section>

        <footer className="marketplace-war__footer-note">
          AgroNexus™ · Uma iniciativa da
          Guiropa World
        </footer>
      </div>
    </main>
  )
}
