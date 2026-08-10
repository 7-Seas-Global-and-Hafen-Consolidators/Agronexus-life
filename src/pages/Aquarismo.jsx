import { useMemo, useState } from 'react'
import '../styles/Aquarismo.css'

const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop`

const AQUARISMO_CATEGORIES = [
  {
    id: 'agua-doce',
    name: 'Água Doce',
    description:
      'Bettas, Kinguios, Tetras, Guppies, Molinésias, Platis, Espadas, Corydoras, Cascudos, Ciclídeos e outras espécies.',
    image: PEXELS(4742439),
  },
  {
    id: 'kinguios',
    name: 'Kinguios',
    description:
      'Oranda, Ranchu, Ryukin, Telescópio, Red Cap, Calico, Black Moor e outras variedades.',
    image: PEXELS(26756414),
  },
  {
    id: 'marinho',
    name: 'Marinho e Reef',
    description:
      'Ocellaris, peixes marinhos, invertebrados, corais, anêmonas, nano reef, mini reef e reef.',
    image: PEXELS(29216700),
  },
  {
    id: 'aquarios',
    name: 'Aquários',
    description:
      'Aquários de vidro, cubos, nanos e diferentes volumes para água doce, plantados, marinhos e reef.',
    image: PEXELS(3234841),
  },
  {
    id: 'equipamentos',
    name: 'Equipamentos',
    description:
      'Filtros, bombas, skimmers, termostatos, luminárias, circulação, controladores e acessórios.',
    image: PEXELS(8915250),
  },
  {
    id: 'consumo',
    name: 'Água, Substratos e Alimentação',
    description:
      'Sal, areia, substratos, condicionadores, testes, suplementos, mídias e alimentação.',
    image: PEXELS(2564494),
  },
]

const PRODUCTS = [
  {
    id: 'betta-dragon-blue',
    category: 'agua-doce',
    badge: 'Em alta',
    name: 'Betta Dragon Blue',
    description:
      'Betta ornamental de coloração azul intensa e padrão Dragon.',
    price: 59.9,
    installments: 2,
    image: PEXELS(36571081),
    imageAlt: 'Betta colorido em aquário',
    variants: ['Blue', 'Red', 'White', 'Pink', 'Yellow'],
  },
  {
    id: 'betta-halfmoon',
    category: 'agua-doce',
    badge: 'Cores',
    name: 'Betta Halfmoon',
    description:
      'Betta ornamental de nadadeiras amplas, disponível em diferentes padrões e cores.',
    price: 49.9,
    installments: 2,
    image: PEXELS(942296),
    imageAlt: 'Betta roxo e azul fotografado de perto',
    variants: ['Blue', 'Red', 'Multicolor', 'Black', 'White'],
  },
  {
    id: 'guppy-color',
    category: 'agua-doce',
    badge: 'Popular',
    name: 'Guppy Color',
    description:
      'Peixe ornamental pequeno, ativo e disponível em grande variedade de cores e caudas.',
    price: 12.9,
    installments: null,
    image: PEXELS(4742439),
    imageAlt: 'Peixe ornamental colorido em aquário',
    variants: ['Blue', 'Red', 'Yellow', 'Mosaic', 'Multicolor'],
  },
  {
    id: 'kinguio-oranda-red-cap',
    category: 'kinguios',
    badge: 'Kinguio',
    name: 'Kinguio Oranda Red Cap',
    description:
      'Uma das variedades mais reconhecidas de Kinguio ornamental.',
    price: 19.9,
    installments: null,
    image: PEXELS(26756414),
    imageAlt: 'Kinguio ornamental em aquário',
    variants: ['Pequeno', 'Médio', 'Grande'],
  },
  {
    id: 'kinguio-telescopio',
    category: 'kinguios',
    badge: 'Kinguio',
    name: 'Kinguio Telescópio',
    description:
      'Variedade ornamental clássica, inclusive em versões Black Moor, Calico e Albino.',
    price: 14.9,
    installments: null,
    image: PEXELS(26756414),
    imageAlt: 'Kinguio em aquário',
    variants: ['Preto', 'Calico', 'Albino'],
  },
  {
    id: 'kinguio-ranchu',
    category: 'kinguios',
    badge: 'Seleção',
    name: 'Kinguio Ranchu',
    description:
      'Variedade ornamental de corpo arredondado e perfil característico.',
    price: 69.9,
    installments: 2,
    image: PEXELS(26756414),
    imageAlt: 'Kinguio ornamental',
    variants: ['Red', 'Red White', 'Calico', 'Black'],
  },
  {
    id: 'ocellaris',
    category: 'marinho',
    badge: 'Reef',
    name: 'Ocellaris',
    description:
      'Peixe-palhaço ornamental para sistemas marinhos compatíveis.',
    price: 119.9,
    installments: 3,
    image: PEXELS(3626111),
    imageAlt: 'Peixe-palhaço Ocellaris em aquário com coral',
    variants: ['Orange', 'Black', 'Designer'],
  },
  {
    id: 'coral-soft',
    category: 'marinho',
    badge: 'Coral',
    name: 'Coral Soft',
    description:
      'Corais ornamentais para sistemas reef, vendidos individualmente.',
    price: 89.9,
    installments: 3,
    image: PEXELS(29216700),
    imageAlt: 'Corais coloridos em aquário reef',
    variants: ['Green', 'Orange', 'Pink', 'Multicolor'],
  },
  {
    id: 'aquario-nano-20',
    category: 'aquarios',
    badge: 'Apartamento',
    name: 'Aquário Nano 20 L',
    description:
      'Aquário de vidro compacto para pequenos espaços e projetos de aquarismo.',
    price: 169.9,
    installments: 5,
    image: PEXELS(3234841),
    imageAlt: 'Aquário compacto com água e vida aquática',
    variants: ['20 L', '30 L', '40 L'],
  },
  {
    id: 'aquario-cubo',
    category: 'aquarios',
    badge: 'Vidro',
    name: 'Aquário Cubo de Vidro',
    description:
      'Aquário vazio em vidro para montagem personalizada.',
    price: 129.9,
    installments: 4,
    image: PEXELS(3234841),
    imageAlt: 'Aquário de vidro',
    variants: ['20 cm', '25 cm', '30 cm', '40 cm'],
  },
  {
    id: 'skimmer-nano',
    category: 'equipamentos',
    badge: 'Nano Reef',
    name: 'Skimmer Nano Reef',
    description:
      'Skimmer compacto para sistemas marinhos e nano reef.',
    price: 269.9,
    installments: 6,
    image: PEXELS(8915250),
    imageAlt: 'Aquário marinho com equipamentos e corais',
    variants: ['Até 60 L', 'Até 100 L', 'Até 150 L'],
  },
  {
    id: 'bomba-circulacao',
    category: 'equipamentos',
    badge: 'Equipamento',
    name: 'Bomba de Circulação',
    description:
      'Circulação de água para aquários de água doce e sistemas marinhos.',
    price: 79.9,
    installments: 2,
    image: PEXELS(8915250),
    imageAlt: 'Aquário com circulação de água',
    variants: ['2.000 L/h', '3.000 L/h', '5.000 L/h'],
  },
  {
    id: 'termostato',
    category: 'equipamentos',
    badge: 'Controle',
    name: 'Termostato para Aquário',
    description:
      'Controle de temperatura para aquários em diferentes volumes.',
    price: 69.9,
    installments: 2,
    image: PEXELS(3234841),
    imageAlt: 'Aquário doméstico',
    variants: ['25 W', '50 W', '100 W', '200 W'],
  },
  {
    id: 'luminaria-reef',
    category: 'equipamentos',
    badge: 'Reef',
    name: 'Luminária LED Reef',
    description:
      'Iluminação LED para aquários marinhos e manutenção de corais compatíveis.',
    price: 289.9,
    installments: 6,
    image: PEXELS(29216700),
    imageAlt: 'Aquário reef iluminado',
    variants: ['Nano', '40 cm', '60 cm'],
  },
  {
    id: 'areia-reef',
    category: 'consumo',
    badge: 'Substrato',
    name: 'Areia para Reef',
    description:
      'Substrato para sistemas marinhos e reef em diferentes granulometrias.',
    price: 49.9,
    installments: null,
    image: PEXELS(29216700),
    imageAlt: 'Aquário reef com substrato de areia',
    variants: ['2 kg', '5 kg', '10 kg'],
  },
  {
    id: 'racao-kinguio',
    category: 'consumo',
    badge: 'Alimentação',
    name: 'Alimentação para Kinguios',
    description:
      'Alimento específico para Kinguios e variedades ornamentais.',
    price: 19.9,
    installments: null,
    image: PEXELS(26756414),
    imageAlt: 'Kinguio ornamental em aquário',
    variants: ['30 g', '100 g', '300 g'],
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function Aquarismo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] =
    useState('todos')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' ||
        product.category === activeCategory

      const searchable = [
        product.name,
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

  function chooseCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector('#aquarismo-produtos')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  function resetFilters() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="aqua-store">
      <section className="aqua-store__hero">
        <div className="aqua-store__hero-media">
          <img
            src={PEXELS(29216700)}
            alt="Aquário reef com peixes-palhaço e corais coloridos"
          />
          <div className="aqua-store__hero-shade" />
        </div>

        <div className="aqua-store__container aqua-store__hero-inner">
          <span>Marketplace AgroNexus™</span>

          <h1>Aquarismo</h1>

          <p>
            Água doce, Kinguios, Bettas, plantados,
            marinho, Nano Reef, Mini Reef, corais,
            aquários, equipamentos, alimentação e
            manutenção.
          </p>

          <a href="#aquarismo-produtos">
            Comprar
            <strong aria-hidden="true">→</strong>
          </a>
        </div>
      </section>

      <div className="aqua-store__container">
        <section className="aqua-store__search">
          <label htmlFor="aquarismo-search">
            O que você procura?
          </label>

          <div>
            <input
              id="aquarismo-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Betta Dragon, Oranda, Ocellaris, skimmer, termostato, areia..."
              autoComplete="off"
            />

            {(searchTerm ||
              activeCategory !== 'todos') && (
              <button
                type="button"
                onClick={resetFilters}
              >
                Limpar
              </button>
            )}
          </div>
        </section>

        <section className="aqua-store__categories">
          <header className="aqua-store__section-head">
            <span>Comprar por categoria</span>
            <h2>Escolha o que quer.</h2>
          </header>

          <div className="aqua-store__category-grid">
            {AQUARISMO_CATEGORIES.map(
              (category) => (
                <button
                  type="button"
                  key={category.id}
                  className={
                    activeCategory === category.id
                      ? 'aqua-category is-active'
                      : 'aqua-category'
                  }
                  onClick={() =>
                    chooseCategory(category.id)
                  }
                >
                  <img
                    src={category.image}
                    alt=""
                    loading="lazy"
                  />

                  <span className="aqua-category__shade" />

                  <span className="aqua-category__copy">
                    <strong>
                      {category.name}
                    </strong>

                    <small>
                      {category.description}
                    </small>
                  </span>
                </button>
              )
            )}
          </div>
        </section>

        <section
          className="aqua-store__products"
          id="aquarismo-produtos"
        >
          <header className="aqua-store__section-head">
            <span>Preço na tela</span>

            <h2>
              Produto. Preço. Compra.
            </h2>
          </header>

          <div className="aqua-store__product-grid">
            {filteredProducts.map(
              (product) => (
                <article
                  className="aqua-product"
                  key={product.id}
                >
                  <div className="aqua-product__media">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                    />

                    <span>
                      {product.badge}
                    </span>
                  </div>

                  <div className="aqua-product__body">
                    <h3>{product.name}</h3>

                    <p>
                      {product.description}
                    </p>

                    <div className="aqua-product__variants">
                      {product.variants.map(
                        (variant) => (
                          <span key={variant}>
                            {variant}
                          </span>
                        )
                      )}
                    </div>

                    <div className="aqua-product__price">
                      <strong>
                        {formatBRL(
                          product.price
                        )}
                      </strong>

                      {product.installments ? (
                        <span>
                          {product.installments}x de{' '}
                          {formatBRL(
                            product.price /
                              product.installments
                          )}
                        </span>
                      ) : (
                        <span>
                          Pagamento no checkout
                        </span>
                      )}
                    </div>

                    <a
                      href={`#/marketplace?produto=${product.id}`}
                    >
                      Comprar
                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              )
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="aqua-store__empty">
              <strong>
                Nenhum produto encontrado.
              </strong>

              <button
                type="button"
                onClick={resetFilters}
              >
                Ver todos
              </button>
            </div>
          ) : null}
        </section>

        <footer className="aqua-store__footer">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
