import { useMemo, useState } from 'react'

import '../styles/Aves.css'

/* ============================================================
   AGRONEXUS™ — MARKETPLACE AVES
   V6 · 100% IMAGENS LOCAIS JÁ EXISTENTES
   ============================================================ */

const IMG = '/images/marketplace/psitacideos'

const IMAGES = {
  periquitos:
    `${IMG}/agronexus-periquitos-australianos-marketplace.png`,

  calopsitas:
    `${IMG}/agronexus-calopsitas-marketplace-definitive.png`,

  calopsitasAlt:
    `${IMG}/agronexus-calopsitas-marketplace.png`,

  ringNecks:
    `${IMG}/agronexus-ring-necks-marketplace.png`,

  agapornis:
    `${IMG}/agronexus-agapornis-marketplace.png`,

  rosellas:
    `${IMG}/agronexus-roselas-marketplace.png`,

  kakarikis:
    `${IMG}/agronexus-kakarikis-marketplace.png`,

  loris:
    `${IMG}/agronexus-loris-e-loriquitos-marketplace.png`,

  cacatuas:
    `${IMG}/agronexus-cacatuas-marketplace.png`,

  araras:
    `${IMG}/agronexus-araras-marketplace.png`,

  caiques:
    `${IMG}/agronexus-caiques-marketplace.png`,

  eclectus:
    `${IMG}/agronexus-eclectus-marketplace.png`,

  forpus:
    `${IMG}/agronexus-forpus-marketplace.png`,

  papagaiosAfricanos:
    `${IMG}/agronexus-papagaios-africanos-marketplace.png`,

  papagaiosAmazonicos:
    `${IMG}/agronexus-papagaios-amazonicos-marketplace.png`,

  papagaiosVasa:
    `${IMG}/agronexus-papagaios-vasa-marketplace.png`,

  periquitosAsiaticos:
    `${IMG}/agronexus-periquitos-asiaticos-marketplace.png`,

  pionus:
    `${IMG}/agronexus-pionus-marketplace.png`,
}

/* ============================================================
   CATEGORIAS
   ============================================================ */

const CATEGORIES = [
  {
    id: 'todos',
    name: 'Todos',
  },
  {
    id: 'periquitos',
    name: 'Periquitos Australianos',
    line: 'Rainbow · Opalino · Spangle · Cobalto',
    image: IMAGES.periquitos,
  },
  {
    id: 'calopsitas',
    name: 'Calopsitas',
    line: 'Cinza · Lutino · Pérola · Arlequim',
    image: IMAGES.calopsitas,
  },
  {
    id: 'ringnecks',
    name: 'Ring Necks',
    line: 'Verde · Azul · Turquesa · Cobalto',
    image: IMAGES.ringNecks,
  },
  {
    id: 'agapornis',
    name: 'Agapornis',
    line: 'Fischeri · Personata · Roseicollis',
    image: IMAGES.agapornis,
  },
  {
    id: 'rosellas',
    name: 'Roselas',
    line: 'Penant · Oriental · Rubina · Mutações',
    image: IMAGES.rosellas,
  },
  {
    id: 'kakarikis',
    name: 'Kakarikis',
    line: 'Verde · Lutino · Ornamentais',
    image: IMAGES.kakarikis,
  },
  {
    id: 'loris',
    name: 'Lóris e Loriquitos',
    line: 'Arco-Íris · Molucanos · Coloridos',
    image: IMAGES.loris,
  },
  {
    id: 'grandes',
    name: 'Cacatuas e Araras',
    line: 'Cacatuas · Araras · Grandes Psitacídeos',
    image: IMAGES.cacatuas,
  },
  {
    id: 'papagaios',
    name: 'Papagaios',
    line: 'Amazônicos · Africanos · Vasa · Pionus',
    image: IMAGES.papagaiosAmazonicos,
  },
  {
    id: 'outros',
    name: 'Outros Psitacídeos',
    line: 'Caiques · Eclectus · Forpus · Asiáticos',
    image: IMAGES.eclectus,
  },
]

/* ============================================================
   PRODUTOS
   ============================================================ */

const PRODUCTS = [
  {
    id: 'periquito-australiano-color',
    category: 'periquitos',
    badge: 'MAIS PROCURADO',
    name: 'Periquito Australiano Color',
    description:
      'Seleção de cores e mutações para quem procura variedade, movimento e forte impacto visual.',
    price: 89.90,
    reference: 90,
    installments: 3,
    image: IMAGES.periquitos,
    variants: ['Azul', 'Verde', 'Amarelo', 'Branco'],
  },
  {
    id: 'periquito-australiano-rainbow',
    category: 'periquitos',
    badge: 'RAINBOW',
    name: 'Periquito Australiano Rainbow',
    description:
      'Combinações multicoloridas entre as mais desejadas na criação ornamental.',
    price: 149.90,
    reference: 150,
    installments: 5,
    image: IMAGES.periquitos,
    variants: ['Rainbow', 'Opalino', 'Spangle'],
  },
  {
    id: 'periquito-australiano-selecao',
    category: 'periquitos',
    badge: 'SELEÇÃO',
    name: 'Periquito Australiano Seleção',
    description:
      'Aves selecionadas por padrão visual, contraste e presença ornamental.',
    price: 199.90,
    reference: 200,
    installments: 5,
    image: IMAGES.periquitos,
    variants: ['Cobalto', 'Violeta', 'Opalino'],
  },

  {
    id: 'calopsita-cinza',
    category: 'calopsitas',
    badge: 'CLÁSSICA',
    name: 'Calopsita Cinza',
    description:
      'A coloração ancestral que transformou a Calopsita em uma das aves domésticas mais populares.',
    price: 139.90,
    reference: 140,
    installments: 4,
    image: IMAGES.calopsitasAlt,
    variants: ['Cinza', 'Ancestral'],
  },
  {
    id: 'calopsita-lutino',
    category: 'calopsitas',
    badge: 'LUTINO',
    name: 'Calopsita Lutino',
    description:
      'Plumagem clara com amarelo intenso e bochechas alaranjadas marcantes.',
    price: 159.90,
    reference: 160,
    installments: 4,
    image: IMAGES.calopsitas,
    variants: ['Lutino'],
  },
  {
    id: 'calopsita-mutacoes',
    category: 'calopsitas',
    badge: 'MUTAÇÕES',
    name: 'Calopsitas Selecionadas',
    description:
      'Pérola, Arlequim, Cara Branca e outras combinações de enorme apelo visual.',
    price: 239.90,
    reference: 240,
    installments: 6,
    image: IMAGES.calopsitas,
    variants: ['Pérola', 'Arlequim', 'Cara Branca'],
  },

  {
    id: 'ring-neck-verde',
    category: 'ringnecks',
    badge: 'CLÁSSICO',
    name: 'Ring Neck Verde',
    description:
      'A coloração clássica de uma das espécies mais desejadas entre os psitacídeos.',
    price: 1799.90,
    reference: 1800,
    installments: 12,
    image: IMAGES.ringNecks,
    variants: ['Verde'],
  },
  {
    id: 'ring-neck-azul',
    category: 'ringnecks',
    badge: 'BLUE',
    name: 'Ring Neck Azul',
    description:
      'Mutações azuis com forte contraste e presença ornamental.',
    price: 2999.90,
    reference: 3000,
    installments: 12,
    image: IMAGES.ringNecks,
    variants: ['Azul', 'Sky Blue'],
  },
  {
    id: 'ring-neck-cobalto',
    category: 'ringnecks',
    badge: 'COBALTO',
    name: 'Ring Neck Cobalto',
    description:
      'Azul profundo para quem procura uma das apresentações mais chamativas da espécie.',
    price: 3999.90,
    reference: 4000,
    installments: 12,
    image: IMAGES.ringNecks,
    variants: ['Cobalto'],
  },

  {
    id: 'agapornis-fischeri',
    category: 'agapornis',
    badge: 'COR',
    name: 'Agapornis Fischeri',
    description:
      'Máscara intensa e corpo multicolorido em uma ave pequena e visualmente marcante.',
    price: 349.90,
    reference: 350,
    installments: 8,
    image: IMAGES.agapornis,
    variants: ['Fischeri'],
  },
  {
    id: 'agapornis-personata',
    category: 'agapornis',
    badge: 'PERSONATA',
    name: 'Agapornis Personata',
    description:
      'Contraste forte na cabeça e plumagem colorida.',
    price: 399.90,
    reference: 400,
    installments: 8,
    image: IMAGES.agapornis,
    variants: ['Personata'],
  },
  {
    id: 'agapornis-roseicollis',
    category: 'agapornis',
    badge: 'POPULAR',
    name: 'Agapornis Roseicollis',
    description:
      'Uma das espécies mais conhecidas e procuradas do gênero.',
    price: 449.90,
    reference: 450,
    installments: 10,
    image: IMAGES.agapornis,
    variants: ['Roseicollis'],
  },

  {
    id: 'rosela-penant',
    category: 'rosellas',
    badge: 'IMPACTO',
    name: 'Rosela Penant',
    description:
      'Vermelho e azul em uma das combinações cromáticas mais impressionantes entre as Roselas.',
    price: 4999.90,
    reference: 5000,
    installments: 12,
    image: IMAGES.rosellas,
    variants: ['Penant'],
  },
  {
    id: 'rosela-oriental',
    category: 'rosellas',
    badge: 'MULTICOLOR',
    name: 'Rosela Oriental',
    description:
      'Vermelho, amarelo, azul e preto combinados naturalmente.',
    price: 2599.90,
    reference: 2600,
    installments: 12,
    image: IMAGES.rosellas,
    variants: ['Oriental'],
  },

  {
    id: 'kakariki',
    category: 'kakarikis',
    badge: 'ATIVO',
    name: 'Kakariki',
    description:
      'Psitacídeo ágil e curioso, conhecido pelo comportamento ativo e cores vivas.',
    price: 1499.90,
    reference: 1500,
    installments: 12,
    image: IMAGES.kakarikis,
    variants: ['Verde', 'Lutino'],
  },

  {
    id: 'loris-arco-iris',
    category: 'loris',
    badge: 'ARCO-ÍRIS',
    name: 'Lóris Arco-Íris',
    description:
      'Uma explosão natural de azul, verde, vermelho, amarelo e laranja.',
    price: 3499.90,
    reference: 3500,
    installments: 12,
    image: IMAGES.loris,
    variants: ['Arco-Íris'],
  },
  {
    id: 'loris-selecao',
    category: 'loris',
    badge: 'COR EXTREMA',
    name: 'Lóris e Loriquitos Selecionados',
    description:
      'Espécies e variações conhecidas pela saturação extrema das cores.',
    price: 3799.90,
    reference: 3800,
    installments: 12,
    image: IMAGES.loris,
    variants: ['Molucano', 'Loriquito'],
  },

  {
    id: 'cacatua',
    category: 'grandes',
    badge: 'ÍCONE',
    name: 'Cacatua',
    description:
      'Grande porte, personalidade marcante e uma das silhuetas mais reconhecidas entre psitacídeos.',
    price: 37999.90,
    reference: 38000,
    installments: 12,
    image: IMAGES.cacatuas,
    variants: ['Cacatua'],
  },
  {
    id: 'arara',
    category: 'grandes',
    badge: 'GRANDE PORTE',
    name: 'Araras',
    description:
      'Grandes psitacídeos de plumagem espetacular e presença monumental.',
    price: 14999.90,
    reference: 15000,
    installments: 12,
    image: IMAGES.araras,
    variants: ['Arara'],
  },

  {
    id: 'papagaio-amazonico',
    category: 'papagaios',
    badge: 'AMAZÔNICO',
    name: 'Papagaios Amazônicos',
    description:
      'Grupo clássico de papagaios sul-americanos com forte presença na avicultura.',
    price: 5999.90,
    reference: 6000,
    installments: 12,
    image: IMAGES.papagaiosAmazonicos,
    variants: ['Amazona'],
  },
  {
    id: 'papagaio-africano',
    category: 'papagaios',
    badge: 'AFRICANO',
    name: 'Papagaios Africanos',
    description:
      'Psitacídeos africanos conhecidos por inteligência, comportamento e aparência singular.',
    price: 6999.90,
    reference: 7000,
    installments: 12,
    image: IMAGES.papagaiosAfricanos,
    variants: ['Africano'],
  },
  {
    id: 'pionus',
    category: 'papagaios',
    badge: 'PIONUS',
    name: 'Pionus',
    description:
      'Psitacídeos de médio porte com coloração sofisticada e comportamento característico.',
    price: 4999.90,
    reference: 5000,
    installments: 12,
    image: IMAGES.pionus,
    variants: ['Pionus'],
  },
  {
    id: 'vasa',
    category: 'papagaios',
    badge: 'VASA',
    name: 'Papagaios Vasa',
    description:
      'Grupo incomum de psitacídeos com aparência singular e enorme interesse para colecionadores.',
    price: 7999.90,
    reference: 8000,
    installments: 12,
    image: IMAGES.papagaiosVasa,
    variants: ['Vasa'],
  },

  {
    id: 'eclectus',
    category: 'outros',
    badge: 'ECLECTUS',
    name: 'Eclectus',
    description:
      'Dimorfismo sexual extremamente marcante e cores de enorme impacto.',
    price: 8999.90,
    reference: 9000,
    installments: 12,
    image: IMAGES.eclectus,
    variants: ['Eclectus'],
  },
  {
    id: 'caique',
    category: 'outros',
    badge: 'CAIQUE',
    name: 'Caiques',
    description:
      'Aves compactas, coloridas e conhecidas por comportamento ativo.',
    price: 5999.90,
    reference: 6000,
    installments: 12,
    image: IMAGES.caiques,
    variants: ['Caique'],
  },
  {
    id: 'forpus',
    category: 'outros',
    badge: 'PEQUENO PORTE',
    name: 'Forpus',
    description:
      'Psitacídeo pequeno para quem procura cor e personalidade em pouco espaço.',
    price: 899.90,
    reference: 900,
    installments: 10,
    image: IMAGES.forpus,
    variants: ['Forpus'],
  },
  {
    id: 'periquitos-asiaticos',
    category: 'outros',
    badge: 'ASIÁTICOS',
    name: 'Periquitos Asiáticos',
    description:
      'Grupo diversificado que amplia o catálogo além das espécies mais conhecidas.',
    price: 2499.90,
    reference: 2500,
    installments: 12,
    image: IMAGES.periquitosAsiaticos,
    variants: ['Asiáticos'],
  },
]

/* ============================================================
   HELPERS
   ============================================================ */

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/* ============================================================
   PAGE
   ============================================================ */

export default function Aves() {
  const [activeCategory, setActiveCategory] =
    useState('todos')

  const [searchTerm, setSearchTerm] =
    useState('')

  const filteredProducts = useMemo(() => {
    const search =
      searchTerm
        .trim()
        .toLocaleLowerCase('pt-BR')

    return PRODUCTS.filter((product) => {
      const categoryMatches =
        activeCategory === 'todos' ||
        product.category === activeCategory

      const searchableContent = [
        product.name,
        product.description,
        product.badge,
        product.category,
        ...product.variants,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const searchMatches =
        !search ||
        searchableContent.includes(search)

      return categoryMatches && searchMatches
    })
  }, [activeCategory, searchTerm])

  function selectCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector('#aves-produtos')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  function clearFilters() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="birds-store">

      {/* HERO */}

      <section className="birds-store__hero">
        <img
          src={IMAGES.periquitos}
          alt="Periquitos Australianos coloridos"
          className="birds-store__hero-image"
        />

        <div className="birds-store__hero-shade" />

        <div className="birds-store__container birds-store__hero-inner">
          <span>
            Marketplace AgroNexus™
          </span>

          <h1>
            Aves.
            <br />
            Cor.
            <br />
            <strong>
              Desejo.
            </strong>
          </h1>

          <p>
            Psitacídeos, espécies ornamentais,
            mutações, alimentação, habitats e
            produtos especializados com preço
            visível e compra direta.
          </p>

          <a href="#aves-categorias">
            Explorar
            <span>→</span>
          </a>
        </div>
      </section>

      <div className="birds-store__container">

        {/* BUSCA */}

        <section className="birds-store__search">
          <label htmlFor="aves-search">
            O que você procura?
          </label>

          <div>
            <input
              id="aves-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Calopsita, Ring Neck, Lóris, Cacatua, Arara, Rosela..."
            />

            {(searchTerm ||
              activeCategory !== 'todos') && (
              <button
                type="button"
                onClick={clearFilters}
              >
                Limpar
              </button>
            )}
          </div>
        </section>

        {/* CATEGORIAS */}

        <section
          id="aves-categorias"
          className="birds-store__categories"
        >
          <header className="birds-store__section-head">
            <span>
              Comprar por categoria
            </span>

            <h2>
              Escolha a próxima obsessão.
            </h2>
          </header>

          <div className="birds-store__category-grid">
            {CATEGORIES
              .filter(
                (category) =>
                  category.id !== 'todos'
              )
              .map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={
                    activeCategory ===
                    category.id
                      ? 'bird-category is-active'
                      : 'bird-category'
                  }
                  onClick={() =>
                    selectCategory(
                      category.id
                    )
                  }
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />

                  <span className="bird-category__shade" />

                  <span className="bird-category__copy">
                    <strong>
                      {category.name}
                    </strong>

                    <small>
                      {category.line}
                    </small>
                  </span>
                </button>
              ))}
          </div>
        </section>

        {/* PRODUCTS */}

        <section
          id="aves-produtos"
          className="birds-store__products"
        >
          <header className="birds-store__section-head">
            <span>
              {filteredProducts.length}
              {' '}
              produtos nesta seleção
            </span>

            <h2>
              Olhou. Gostou. Comprou.
            </h2>
          </header>

          <div className="birds-store__product-grid">
            {filteredProducts.map(
              (product) => (
                <article
                  className="bird-product"
                  key={product.id}
                >
                  <div className="bird-product__media">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                    <span>
                      {product.badge}
                    </span>
                  </div>

                  <div className="bird-product__body">
                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.description}
                    </p>

                    <div className="bird-product__variants">
                      {product.variants.map(
                        (variant) => (
                          <span key={variant}>
                            {variant}
                          </span>
                        )
                      )}
                    </div>

                    <div className="bird-product__price">
                      {product.reference && (
                        <del>
                          Ref. mercado{' '}
                          {formatBRL(
                            product.reference
                          )}
                        </del>
                      )}

                      <strong>
                        {formatBRL(
                          product.price
                        )}
                      </strong>

                      <span>
                        até{' '}
                        {product.installments}
                        x de{' '}
                        {formatBRL(
                          product.price /
                          product.installments
                        )}
                      </span>
                    </div>

                    <a
                      href={
                        `#/marketplace?produto=${product.id}`
                      }
                    >
                      Comprar
                      <span>→</span>
                    </a>
                  </div>
                </article>
              )
            )}
          </div>

          {filteredProducts.length === 0 && (
            <div className="birds-store__empty">
              <strong>
                Nenhum item encontrado.
              </strong>

              <p>
                Tente outro termo ou volte
                ao catálogo completo.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Ver todos
              </button>
            </div>
          )}
        </section>

        {/* LEGAL */}

        <div className="birds-store__note">
          <strong>
            Animais vivos:
          </strong>{' '}
          comercialização somente com origem
          regular e documentação aplicável.
        </div>

        <footer className="birds-store__footer">
          AgroNexus™ · Uma iniciativa da
          Guiropa World
        </footer>
      </div>
    </main>
  )
}
