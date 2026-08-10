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

const CATEGORIES = [
  { id: 'periquitos', name: 'Periquitos Australianos', line: 'Cor · mutações · pequeno porte', image: budgerigarPhoto2 },
  { id: 'ringnecks', name: 'Ring Necks', line: 'Verde · azul · cobalto · turquesa', image: ringNeckPhoto2 },
  { id: 'agapornis', name: 'Agapornis', line: 'Fischeri · Roseicollis · Personata', image: agapornisPhoto2 },
  { id: 'rosellas', name: 'Roselas', line: 'Penant · Oriental · multicolor', image: rosellaPhoto1 },
]

const PRODUCTS = [
  { id:'periquito-color', category:'periquitos', badge:'ENTRADA', name:'Periquito Australiano Color', description:'Cores clássicas e mutações selecionadas para quem quer começar com impacto visual.', price:89.9, reference:90, installments:3, image:budgerigarPhoto1, variants:['Azul','Verde','Amarelo','Branco'] },
  { id:'periquito-rainbow', category:'periquitos', badge:'RAINBOW', name:'Periquito Australiano Rainbow', description:'Combinação multicolorida de alto impacto em uma das aves mais populares do mundo.', price:149.9, reference:150, installments:5, image:budgerigarPhoto2, variants:['Rainbow','Opalino','Spangle'] },
  { id:'periquito-hagoromo', category:'periquitos', badge:'RARO', name:'Periquito Australiano Hagoromo', description:'Padrão ornamental incomum para quem procura algo realmente diferente.', price:299.9, reference:300, installments:6, image:budgerigarPhoto3, variants:['Hagoromo','Azul','Verde'] },
  { id:'periquito-selecao', category:'periquitos', badge:'SELEÇÃO', name:'Periquito Australiano Seleção', description:'Seleção visual com contraste forte, plumagem marcante e presença de coleção.', price:199.9, reference:200, installments:5, image:budgerigarPhoto4, variants:['Cobalto','Violeta','Opalino'] },

  { id:'ringneck-verde', category:'ringnecks', badge:'CLÁSSICO', name:'Ring Neck Verde', description:'A coloração clássica da espécie em uma ave que domina qualquer ambiente.', price:1799.9, reference:1800, installments:12, image:ringNeckPhoto1, variants:['Verde'] },
  { id:'ringneck-azul', category:'ringnecks', badge:'AZUL', name:'Ring Neck Azul', description:'Azul intenso e cauda longa em uma das mutações mais procuradas da espécie.', price:2999.9, reference:3000, installments:12, image:ringNeckPhoto2, variants:['Azul','Turquesa'] },
  { id:'ringneck-selecao', category:'ringnecks', badge:'DESEJO', name:'Ring Neck Seleção', description:'Presença, cor e proporção para quem procura um psitacídeo de alto impacto.', price:3999.9, reference:4000, installments:12, image:ringNeckPhoto3, variants:['Cobalto','Violeta'] },

  { id:'agapornis-fischeri', category:'agapornis', badge:'COR', name:'Agapornis Fischeri', description:'Máscara intensa, corpo multicolorido e tamanho perfeito para espaços compactos.', price:349.9, reference:350, installments:8, image:agapornisPhoto1, variants:['Fischeri','Verde'] },
  { id:'agapornis-personata', category:'agapornis', badge:'CONTRASTE', name:'Agapornis Personata', description:'Máscara escura e plumagem vibrante em uma combinação visual instantânea.', price:399.9, reference:400, installments:8, image:agapornisPhoto2, variants:['Personata','Blue'] },
  { id:'agapornis-roseicollis', category:'agapornis', badge:'POPULAR', name:'Agapornis Roseicollis', description:'Pequeno, vibrante e disponível em uma grande família de mutações.', price:449.9, reference:450, installments:10, image:agapornisPhoto3, variants:['Roseicollis','Lutino'] },
  { id:'agapornis-color', category:'agapornis', badge:'MIX', name:'Agapornis Color', description:'Seleção cromática para quem quer transformar cor em protagonista.', price:399.9, reference:400, installments:8, image:agapornisPhoto4, variants:['Blue','Green','Pastel'] },

  { id:'rosela-oriental', category:'rosellas', badge:'COR EXTREMA', name:'Rosela Oriental', description:'Vermelho, amarelo, azul e preto em uma composição natural de alto impacto.', price:699.9, reference:700, installments:10, image:rosellaPhoto1, variants:['Oriental','Multicolor'] },
  { id:'rosela-selecao', category:'rosellas', badge:'SELEÇÃO', name:'Rosela Multicolor', description:'Cauda longa, desenho de plumagem e saturação que chamam atenção à primeira vista.', price:799.9, reference:800, installments:10, image:rosellaPhoto2, variants:['Multicolor'] },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(value)
}

export default function Aves() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLocaleLowerCase('pt-BR')
    return PRODUCTS.filter((product) => {
      const categoryMatches = activeCategory === 'todos' || product.category === activeCategory
      const text = [product.name, product.description, product.badge, ...product.variants].join(' ').toLocaleLowerCase('pt-BR')
      return categoryMatches && (!search || text.includes(search))
    })
  }, [activeCategory, searchTerm])

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId)
    setSearchTerm('')
    requestAnimationFrame(() => {
      document.querySelector('#aves-produtos')?.scrollIntoView({ behavior:'smooth', block:'start' })
    })
  }

  const clearFilters = () => {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="birds-store">
      <section className="birds-store__hero">
        <img className="birds-store__hero-image" src={budgerigarPhoto3} alt="Periquitos australianos coloridos" />
        <div className="birds-store__hero-overlay" />
        <div className="birds-store__hero-content">
          <span>Marketplace AgroNexus™</span>
          <h1>Aves.<br />Cor.<br /><strong>Desejo.</strong></h1>
          <p>Espécies e mutações que transformam cor, movimento e personalidade em parte da casa.</p>
          <a href="#aves-categorias">Explorar <span>→</span></a>
        </div>
      </section>

      <div className="birds-store__container">
        <section className="birds-store__search">
          <div>
            <span>BUSCAR NO MARKETPLACE DE AVES</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Periquito, Ring Neck, Agapornis, Rosela..."
            />
          </div>
          {(activeCategory !== 'todos' || searchTerm) && (
            <button type="button" onClick={clearFilters}>Limpar</button>
          )}
        </section>

        <section id="aves-categorias" className="birds-store__categories">
          <header className="birds-store__section-head">
            <span>COMPRAR POR CATEGORIA</span>
            <h2>Escolha o que você não consegue esquecer.</h2>
          </header>

          <div className="birds-store__category-grid">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? 'bird-category is-active' : 'bird-category'}
                onClick={() => selectCategory(category.id)}
              >
                <img src={category.image} alt="" />
                <span className="bird-category__overlay" />
                <span className="bird-category__copy">
                  <strong>{category.name}</strong>
                  <em>{category.line}</em>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="aves-produtos" className="birds-store__products">
          <header className="birds-store__section-head birds-store__section-head--products">
            <div>
              <span>PREÇO NA TELA · COMPRA DIRETA</span>
              <h2>Viu. Quis. Comprou.</h2>
            </div>
            <p>{filteredProducts.length} produtos nesta seleção</p>
          </header>

          <div className="birds-store__product-grid">
            {filteredProducts.map((product) => (
              <article className="bird-product" key={product.id}>
                <div className="bird-product__media">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span>{product.badge}</span>
                </div>
                <div className="bird-product__body">
                  <div className="bird-product__top">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <div className="bird-product__variants">
                      {product.variants.map((variant) => <span key={variant}>{variant}</span>)}
                    </div>
                  </div>
                  <div className="bird-product__bottom">
                    <div className="bird-product__price">
                      <del>Referência {formatBRL(product.reference)}</del>
                      <strong>{formatBRL(product.price)}</strong>
                      <span>até {product.installments}x de {formatBRL(product.price / product.installments)}</span>
                    </div>
                    <a href={`#/marketplace?produto=${product.id}`}>Comprar <span>→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="birds-store__empty">
              <strong>Nenhum produto encontrado.</strong>
              <p>Tente outro termo ou volte ao catálogo completo.</p>
              <button type="button" onClick={clearFilters}>Ver todos</button>
            </div>
          )}
        </section>

        <section className="birds-store__manifesto">
          <span>AGRONEXUS™</span>
          <strong>Menos catálogo genérico. Mais desejo real.</strong>
          <p>Fotografia grande, produto claro, preço visível e nenhuma arte de guia ocupando o lugar de fotografia comercial.</p>
        </section>

        <div className="birds-store__note">
          <strong>Animais vivos:</strong> comercialização somente com origem regular e documentação aplicável.
        </div>

        <footer className="birds-store__footer">AgroNexus™ · Uma iniciativa da Guiropa World</footer>
      </div>
    </main>
  )
}
