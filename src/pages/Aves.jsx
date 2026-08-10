import { useMemo, useState } from 'react'

import budgerigarPhoto1 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-1.jpg'
import budgerigarPhoto2 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-2.jpg'
import budgerigarPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-editor_cZCwtWtagronexus-australian-budgerigars-editorial-guid-3.jpg'
import budgerigarPhoto4 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-4.jpg'

import agapornisPhoto1 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-1.jpg'
import agapornisPhoto2 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-2.jpg'
import agapornisPhoto3 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-3.jpg'
import agapornisPhoto4 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-4.jpg'

import ringNeckPhoto1 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-1.jpg'
import ringNeckPhoto2 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-2.jpg'
import ringNeckPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-3.jpg'

import rosellaPhoto1 from '../assets/images/editorial/agronexus-rosellas-editorial-guide-1.jpg'
import rosellaPhoto2 from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'

import '../styles/Aves.css'

const COMMONS = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    filename
  )}?width=1400`

const CATEGORIES = [
  {
    id: 'periquitos',
    name: 'Periquitos Australianos',
    description:
      'Rainbow, azul, verde, violeta, cobalto, lutino, albino, opalino, spangle, arlequim, Hagoromo e topete.',
    image: budgerigarPhoto3,
  },
  {
    id: 'calopsitas',
    name: 'Calopsitas',
    description:
      'Cinza, lutino, pérola, cara branca, arlequim, canela, albina e combinações de mutações.',
    image: COMMONS('Lutino-pearl.jpg'),
  },
  {
    id: 'ringnecks',
    name: 'Ring Necks',
    description:
      'Verde, azul, turquesa, lutino, violeta e outras mutações de uma das aves mais desejadas.',
    image: ringNeckPhoto2,
  },
  {
    id: 'agapornis',
    name: 'Agapornis',
    description:
      'Roseicollis, Personata, Fischer e mutações azul, violeta, lutino, pastel, pied e turquoise.',
    image: agapornisPhoto2,
  },
  {
    id: 'exoticos',
    name: 'Canários e Exóticos',
    description:
      'Canários de cor e canto, Diamante Gould e outras aves pequenas de altíssimo impacto visual.',
    image: COMMONS('Gouldian Finch. (8065423804).jpg'),
  },
  {
    id: 'rosellas',
    name: 'Roselas e Cauda Longa',
    description:
      'Roselas, Bourkes e outras espécies australianas de cores e padrões marcantes.',
    image: rosellaPhoto1,
  },
  {
    id: 'habitats',
    name: 'Gaiolas e Viveiros',
    description:
      'Gaiolas, viveiros, criadeiras e estruturas vendidas separadamente.',
    image: COMMONS('Parrot cage.jpg'),
  },
  {
    id: 'alimentacao',
    name: 'Alimentação',
    description:
      'Extrusadas, sementes, farinhadas, suplementos e alimentação específica para cada ave.',
    image: COMMONS('BirdSeeds.jpg'),
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    description:
      'Ninhos, poleiros, brinquedos, playgrounds, banheiras, bebedouros e comedouros.',
    image: COMMONS('Parrot toys.jpg'),
  },
]

const PRODUCTS = [
  {
    id: 'periquito-australiano-color',
    category: 'periquitos',
    badge: 'Preço agressivo',
    name: 'Periquito Australiano Color',
    description:
      'Filhote de Periquito Australiano em variedades cromáticas selecionadas.',
    price: 89.9,
    benchmark: 90.25,
    installments: 3,
    image: budgerigarPhoto1,
    variants: ['Azul', 'Verde', 'Amarelo', 'Branco', 'Violeta'],
  },
  {
    id: 'periquito-australiano-rainbow',
    category: 'periquitos',
    badge: 'Cor',
    name: 'Periquito Australiano Rainbow',
    description:
      'Combinação visual multicolorida para quem procura um periquito de presença forte.',
    price: 149.9,
    benchmark: 150,
    installments: 5,
    image: budgerigarPhoto2,
    variants: ['Rainbow', 'Opalino', 'Spangle', 'Arlequim'],
  },
  {
    id: 'dupla-periquitos',
    category: 'periquitos',
    badge: 'Dupla',
    name: 'Dupla de Periquitos Australianos',
    description:
      'Duas aves vendidas juntas, com combinações de cores distintas.',
    price: 265.9,
    benchmark: 266,
    installments: 6,
    image: budgerigarPhoto4,
    variants: ['Azul + Verde', 'Amarelo + Azul', 'Mix'],
  },
  {
    id: 'calopsita-filhote',
    category: 'calopsitas',
    badge: 'Preço agressivo',
    name: 'Calopsita Filhote',
    description:
      'Calopsita jovem em variedade de cores e padrões.',
    price: 239.9,
    benchmark: 240,
    installments: 6,
    image: COMMONS('Lutino Cockatiel.jpg'),
    variants: ['Cinza', 'Lutino', 'Canela', 'Cara Branca'],
  },
  {
    id: 'calopsita-lutino',
    category: 'calopsitas',
    badge: 'Lutino',
    name: 'Calopsita Lutino',
    description:
      'Plumagem clara com amarelo intenso e bochechas alaranjadas.',
    price: 249.9,
    benchmark: 250,
    installments: 6,
    image: COMMONS('Lutino Cockatiel.jpg'),
    variants: ['Lutino', 'Olhos vermelhos'],
  },
  {
    id: 'calopsita-perola',
    category: 'calopsitas',
    badge: 'Pérola',
    name: 'Calopsita Lutino Pérola',
    description:
      'Mutação com desenho perolado e forte apelo visual.',
    price: 295.9,
    benchmark: 295.99,
    installments: 6,
    image: COMMONS('Lutino-pearl.jpg'),
    variants: ['Pérola', 'Lutino', 'Opalino'],
  },
  {
    id: 'agapornis-personata',
    category: 'agapornis',
    badge: 'Colorido',
    name: 'Agapornis Personata',
    description:
      'Agapornis de máscara marcada, corpo compacto e grande diversidade de cores.',
    price: 99.9,
    benchmark: 100,
    installments: 3,
    image: agapornisPhoto1,
    variants: ['Verde', 'Azul', 'Violeta', 'Pastel'],
  },
  {
    id: 'agapornis-roseicollis',
    category: 'agapornis',
    badge: 'Popular',
    name: 'Agapornis Roseicollis',
    description:
      'Uma das espécies mais procuradas do gênero, com ampla variedade cromática.',
    price: 109.9,
    benchmark: 110,
    installments: 3,
    image: agapornisPhoto3,
    variants: ['Green', 'Turquoise', 'Lutino', 'Pied'],
  },
  {
    id: 'agapornis-blue',
    category: 'agapornis',
    badge: 'Blue',
    name: 'Agapornis Personata Blue',
    description:
      'Mutação azul de alto contraste com máscara escura.',
    price: 219.9,
    benchmark: 219.99,
    installments: 6,
    image: COMMONS('Masked Lovebird (blue mutant).jpg'),
    variants: ['Blue', 'Dark Mask'],
  },
  {
    id: 'ring-neck-green',
    category: 'ringnecks',
    badge: 'Origem legal',
    name: 'Ring Neck',
    description:
      'Psittacula krameri com documentação de origem conforme exigências aplicáveis.',
    price: 3489.9,
    benchmark: 3490,
    installments: 10,
    image: ringNeckPhoto1,
    variants: ['Verde', 'Azul', 'Lutino'],
  },
  {
    id: 'ring-neck-blue',
    category: 'ringnecks',
    badge: 'Blue',
    name: 'Ring Neck Blue',
    description:
      'Mutação azul de uma das aves mais desejadas do mercado de psitacídeos.',
    price: 3489.9,
    benchmark: 3490,
    installments: 10,
    image: ringNeckPhoto3,
    variants: ['Blue', 'Powder Blue'],
  },
  {
    id: 'diamante-gould',
    category: 'exoticos',
    badge: 'Surreal',
    name: 'Diamante Gould',
    description:
      'Uma explosão natural de verde, azul, amarelo, vermelho, preto e violeta.',
    price: 396.9,
    benchmark: 397,
    installments: 8,
    image: COMMONS('Gouldian Finch. (8065423804).jpg'),
    variants: ['Cabeça Vermelha', 'Cabeça Preta', 'Peito Violeta'],
  },
  {
    id: 'diamante-gould-yellow',
    category: 'exoticos',
    badge: 'Amarelo',
    name: 'Diamante Gould Yellow',
    description:
      'Variação amarela de altíssimo impacto visual.',
    price: 396.9,
    benchmark: 397,
    installments: 8,
    image: COMMONS('Yellow Gouldian Finch.jpg'),
    variants: ['Yellow', 'White Breast', 'Black Head'],
  },
  {
    id: 'canario-vermelho-mosaico',
    category: 'exoticos',
    badge: 'Cor',
    name: 'Canário Vermelho Mosaico',
    description:
      'Canário de cor com contraste vermelho e branco.',
    price: 279.9,
    benchmark: 280,
    installments: 6,
    image: COMMONS('Canary Bird.jpg'),
    variants: ['Vermelho', 'Mosaico'],
  },
  {
    id: 'canario-timbrado',
    category: 'exoticos',
    badge: 'Canto',
    name: 'Canário Timbrado Espanhol',
    description:
      'Canário selecionado para canto, com visual clássico e forte procura.',
    price: 505.9,
    benchmark: 506,
    installments: 10,
    image: COMMONS('Canary.jpg'),
    variants: ['Canto', 'Amarelo'],
  },
  {
    id: 'rosela-eastern',
    category: 'rosellas',
    badge: 'Cor extrema',
    name: 'Rosela Oriental',
    description:
      'Vermelho, azul, amarelo e preto em uma das combinações naturais mais chamativas entre psitacídeos.',
    price: 699.9,
    benchmark: null,
    installments: 10,
    image: rosellaPhoto2,
    variants: ['Eastern Rosella', 'Multicolor'],
  },
  {
    id: 'gaiola-calopsita',
    category: 'habitats',
    badge: 'Preço agressivo',
    name: 'Gaiola para Calopsita',
    description:
      'Gaiola vendida individualmente para aves de porte compatível.',
    price: 125.8,
    benchmark: 125.9,
    installments: 4,
    image: COMMONS('Parrot cage.jpg'),
    variants: ['Branca', 'Preta', 'Colorida'],
  },
  {
    id: 'gaiola-slim',
    category: 'habitats',
    badge: 'Oferta',
    name: 'Viveiro Slim para Aves',
    description:
      'Estrutura vertical para Calopsitas, Agapornis e aves de porte compatível.',
    price: 213.4,
    benchmark: 213.5,
    installments: 8,
    image: COMMONS('Birds in cage.jpg'),
    variants: ['Slim', 'Vertical'],
  },
  {
    id: 'viveiro-triplex',
    category: 'habitats',
    badge: 'Grande',
    name: 'Viveiro Triplex com Playground',
    description:
      'Viveiro com área superior de interação e estrutura em múltiplos níveis.',
    price: 397.8,
    benchmark: 397.9,
    installments: 10,
    image: COMMONS('Parrots in a cage.jpg'),
    variants: ['Triplex', 'Playground'],
  },
  {
    id: 'racao-calopsita',
    category: 'alimentacao',
    badge: 'Mais vendido',
    name: 'Ração Extrusada para Calopsita 300 g',
    description:
      'Alimento extrusado completo para Calopsitas.',
    price: 33.89,
    benchmark: 33.9,
    installments: null,
    image: COMMONS('BirdSeeds.jpg'),
    variants: ['300 g', 'Extrusada'],
  },
  {
    id: 'mistura-periquito',
    category: 'alimentacao',
    badge: 'Sementes',
    name: 'Mistura para Periquitos 10 kg',
    description:
      'Mistura de sementes para alimentação complementar de Periquitos.',
    price: 123.3,
    benchmark: 123.4,
    installments: 4,
    image: COMMONS('Birdseed.jpg'),
    variants: ['10 kg', 'Mix'],
  },
  {
    id: 'playground-calopsita',
    category: 'acessorios',
    badge: 'Diversão',
    name: 'Playground para Calopsita',
    description:
      'Estrutura de interação com poleiros e pontos de atividade.',
    price: 170.9,
    benchmark: 170.91,
    installments: 6,
    image: COMMONS('Parrot toys.jpg'),
    variants: ['Playground', 'Poleiros'],
  },
  {
    id: 'ninho-bourke',
    category: 'acessorios',
    badge: 'Ninho',
    name: 'Ninho de Madeira para Bourke',
    description:
      'Ninho de madeira em dimensão própria para Periquito Bourke.',
    price: 68.8,
    benchmark: 68.82,
    installments: 2,
    image: COMMONS('Bird Nest Box 1.jpg'),
    variants: ['Madeira', 'Bourke'],
  },
  {
    id: 'poleiro-parquinho',
    category: 'acessorios',
    badge: 'Poleiro',
    name: 'Poleiro Parquinho',
    description:
      'Área elevada para interação e enriquecimento ambiental.',
    price: 144.5,
    benchmark: 144.55,
    installments: 5,
    image: COMMONS('Parrot in cage.jpg'),
    variants: ['Grande', 'Parquinho'],
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function Aves() {
  const [activeCategory, setActiveCategory] =
    useState('todos')
  const [searchTerm, setSearchTerm] =
    useState('')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch =
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

      const searchMatch =
        !normalizedSearch ||
        searchable.includes(normalizedSearch)

      return categoryMatch && searchMatch
    })
  }, [activeCategory, normalizedSearch])

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

  function resetFilters() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="birds-store">
      <section className="birds-store__hero">
        <img
          src={budgerigarPhoto3}
          alt="Periquitos Australianos intensamente coloridos"
          className="birds-store__hero-image"
        />

        <div className="birds-store__hero-shade" />

        <div className="birds-store__container birds-store__hero-inner">
          <span>Marketplace AgroNexus™</span>

          <h1>
            Aves.
            <br />
            Cor.
            <br />
            <strong>Desejo.</strong>
          </h1>

          <p>
            Periquitos, Calopsitas, Ring Necks,
            Agapornis, Canários, Diamantes Gould,
            Roselas, habitats, alimentação e
            acessórios.
          </p>

          <a href="#aves-produtos">
            Comprar
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div className="birds-store__container">
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
              placeholder="Periquito violeta, Calopsita Lutino, Ring Neck, Gould, gaiola, ração..."
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

        <section className="birds-store__categories">
          <header className="birds-store__section-head">
            <span>Comprar por categoria</span>
            <h2>Escolha a próxima obsessão.</h2>
          </header>

          <div className="birds-store__category-grid">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category.id}
                className={
                  activeCategory === category.id
                    ? 'bird-category is-active'
                    : 'bird-category'
                }
                onClick={() =>
                  selectCategory(category.id)
                }
              >
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                />

                <span className="bird-category__shade" />

                <span className="bird-category__copy">
                  <strong>{category.name}</strong>
                  <small>{category.description}</small>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          id="aves-produtos"
          className="birds-store__products"
        >
          <header className="birds-store__section-head">
            <span>Preço na tela</span>
            <h2>Olhou. Gostou. Comprou.</h2>
          </header>

          <div className="birds-store__product-grid">
            {filteredProducts.map((product) => (
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

                  <span>{product.badge}</span>
                </div>

                <div className="bird-product__body">
                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="bird-product__variants">
                    {product.variants.map((variant) => (
                      <span key={variant}>
                        {variant}
                      </span>
                    ))}
                  </div>

                  <div className="bird-product__price">
                    {product.benchmark ? (
                      <del>
                        Referência{' '}
                        {formatBRL(
                          product.benchmark
                        )}
                      </del>
                    ) : null}

                    <strong>
                      {formatBRL(product.price)}
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
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="birds-store__empty">
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

        <div className="birds-store__note">
          <strong>Animais vivos:</strong>{' '}
          comercialização condicionada à origem
          regular e à documentação exigida para
          cada espécie.
        </div>

        <footer className="birds-store__footer">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
