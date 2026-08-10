import { useMemo, useState } from 'react'

import budgerigarPhoto1 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-1.jpg'
import budgerigarPhoto2 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-2.jpg'
import budgerigarPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-editor_cZCwtWtagronexus-australian-budgerigars-editorial-guid-3.jpg'
import budgerigarPhoto4 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-4.jpg'

import '../styles/Aves.css'

const BASE = '/images/aves/categories/products/psitacideos'
const bird = (file) => encodeURI(`${BASE}/${file}`)

const CATEGORIES = [
  { id: 'periquitos', name: 'Periquitos Australianos', line: 'Rainbow · Opalino · Cobalto · Hagoromo', image: budgerigarPhoto2 },
  { id: 'calopsitas', name: 'Calopsitas', line: 'Ancestral · Lutina · Cara Branca', image: bird('calopsita-lutina.png') },
  { id: 'ringnecks', name: 'Ring Necks', line: 'Verde · Azul · Cobalto · Violeta · Cremino', image: bird('ringneck-violeta.png') },
  { id: 'agapornis', name: 'Agapornis', line: 'Fischeri · Personata · Roseicollis', image: bird('agaporni-ficheri.png') },
  { id: 'roselas', name: 'Roselas e Cauda Longa', line: 'Penant · Rubina · Bourke · Red Rumped', image: bird('rosela-rubina.png') },
  { id: 'loris', name: 'Lóris', line: 'Arco-Íris · Molucanos · Bailarino', image: bird('lóris-arco-Íris.png') },
  { id: 'grandes', name: 'Cacatuas e Araras', line: 'Alba · Galah · Galerita · Azul · Macau · Vermelha', image: bird('cacatua-galerita.png') },
  { id: 'papagaios', name: 'Papagaios e Asiáticos', line: 'Congo · Eclectus · Grande Alexandre', image: bird('papagaio-ecletus.png') },
  { id: 'outros', name: 'Outros Psitacídeos', line: 'Ararajuba · Caturrita · Kakariki · Mustache · Cabeça-de-Ameixa', image: bird('ararajuba.png') },
]

const rawProducts = [
  ['periquito-color','periquitos','ENTRADA','Periquito Australiano Color',89.9,90,3,budgerigarPhoto1,['Azul','Verde','Amarelo','Branco']],
  ['periquito-rainbow','periquitos','RAINBOW','Periquito Australiano Rainbow',149.9,150,5,budgerigarPhoto2,['Rainbow','Opalino','Spangle']],
  ['periquito-hagoromo','periquitos','RARO','Periquito Australiano Hagoromo',299.9,300,6,budgerigarPhoto3,['Hagoromo','Azul','Verde']],
  ['periquito-selecao','periquitos','SELEÇÃO','Periquito Australiano Seleção',199.9,200,5,budgerigarPhoto4,['Cobalto','Violeta','Opalino']],

  ['calopsita-ancestral','calopsitas','ANCESTRAL','Calopsita Ancestral',139.9,140,4,bird('calopsita-ancestral.png'),['Ancestral','Cinza']],
  ['calopsita-lutina','calopsitas','LUTINA','Calopsita Lutina',159.9,160,4,bird('calopsita-lutina.png'),['Lutina']],
  ['calopsita-cara-branca','calopsitas','CARA BRANCA','Calopsita Cara Branca',199.9,200,5,bird('calopsita-cara-branca.png'),['Cara Branca']],

  ['ringneck-verde','ringnecks','CLÁSSICO','Ring Neck Verde',1799.9,1800,12,bird('ringneck-verde.png'),['Verde']],
  ['ringneck-azul','ringnecks','AZUL','Ring Neck Azul',2999.9,3000,12,bird('ringneck-azul.png'),['Azul']],
  ['ringneck-azul-turquesa','ringnecks','TURQUESA','Ring Neck Azul Turquesa',2999.9,3000,12,bird('ringneck-azul-turquesa.png'),['Turquesa','Azul']],
  ['ringneck-cobalto','ringnecks','COBALTO','Ring Neck Cobalto',3999.9,4000,12,bird('ringneck-cobalto.png'),['Cobalto']],
  ['ringneck-violeta','ringnecks','VIOLETA','Ring Neck Violeta',3999.9,4000,12,bird('ringneck-violeta.png'),['Violeta']],
  ['ringneck-cremino','ringnecks','CREMINO','Ring Neck Cremino',3999.9,4000,12,bird('ringneck-cremino.png'),['Cremino']],
  ['ringneck-albino','ringnecks','ALBINO','Ring Neck Albino',3999.9,4000,12,bird('ringneck-albino.png'),['Albino']],
  ['ringneck-sky-blue','ringnecks','SKY BLUE','Ring Neck Sky Blue',3499.9,3500,12,bird('ringneck-sky-blue.png'),['Sky Blue']],

  ['agapornis-fischeri','agapornis','FISCHERI','Agapornis Fischeri',349.9,350,8,bird('agaporni-ficheri.png'),['Fischeri']],
  ['agapornis-personata','agapornis','PERSONATA','Agapornis Personata',399.9,400,8,bird('agaporni-personata.png'),['Personata']],
  ['agapornis-roseicollis','agapornis','ROSEICOLLIS','Agapornis Roseicollis',449.9,450,10,bird('agaporni-roseicollis.png'),['Roseicollis']],

  ['rosela-penant','roselas','PENANT','Rosela Penant',4999.9,5000,12,bird('rosela-penant.png'),['Penant']],
  ['rosela-rubina','roselas','RUBINA','Rosela Rubina',4999.9,5000,12,bird('rosela-rubina.png'),['Rubina']],
  ['rosela-ancestral','roselas','ANCESTRAL','Rosela Ancestral',2499.9,2500,12,bird('rosela-ancestral.png'),['Ancestral']],
  ['rosela-adscitus','roselas','ADSCITUS','Rosela Adscitus',2999.9,3000,12,bird('rosela-adscitus.png'),['Adscitus']],
  ['bourke-rosa','roselas','ROSA','Bourke Rosa',699.9,700,10,bird('bourke-rosa.png'),['Rosa']],
  ['red-rumped','roselas','RED RUMPED','Red Rumped',699.9,700,10,bird('red-rumped.png'),['Red Rumped']],

  ['loris-arco-iris','loris','ARCO-ÍRIS','Lóris Arco-Íris',3499.9,3500,12,bird('lóris-arco-Íris.png'),['Arco-Íris']],
  ['loris-molucanos','loris','MOLUCANO','Lóris Molucano',3799.9,3800,12,bird('lóris-molucanos.png'),['Molucano']],
  ['loris-bailarino','loris','BAILARINO','Lóris Bailarino',3799.9,3800,12,bird('lóris-bailarino.png'),['Bailarino']],

  ['cacatua-alba','grandes','ALBA','Cacatua Alba',37999.9,38000,12,bird('cacatua-alba.png'),['Alba']],
  ['cacatua-galah','grandes','GALAH','Cacatua Galah',37999.9,38000,12,bird('cacatua-galah.png'),['Galah']],
  ['cacatua-galerita','grandes','GALERITA','Cacatua Galerita',37999.9,38000,12,bird('cacatua-galerita.png'),['Galerita']],
  ['arara-azul','grandes','AZUL','Arara Azul',14999.9,15000,12,bird('arara-azul.png'),['Azul']],
  ['arara-macau','grandes','MACAU','Arara Macau',14999.9,15000,12,bird('arara-macau.png'),['Macau']],
  ['arara-vermelha','grandes','VERMELHA','Arara Vermelha',14999.9,15000,12,bird('arara-vermelha.png'),['Vermelha']],

  ['papagaio-congo','papagaios','CONGO','Papagaio do Congo',6999.9,7000,12,bird('papagaio-do-congo.png'),['Congo']],
  ['papagaio-eclectus','papagaios','ECLECTUS','Papagaio Eclectus',8999.9,9000,12,bird('papagaio-ecletus.png'),['Eclectus']],
  ['grande-alexandre','papagaios','ALEXANDRE','Grande Alexandre',4999.9,5000,12,bird('papagaio-grande-alexandre.png'),['Grande Alexandre']],

  ['ararajuba','outros','BRASIL','Ararajuba',9999.9,10000,12,bird('ararajuba.png'),['Ararajuba']],
  ['caturrita','outros','CATURRITA','Caturrita',899.9,900,10,bird('caturrita.png'),['Caturrita']],
  ['kakariki-lutino','outros','LUTINO','Kakariki Lutino',1499.9,1500,12,bird('kakariki-lutino.png'),['Lutino']],
  ['periquito-mustache','outros','MUSTACHE','Periquito Mustache',2999.9,3000,12,bird('periquito-mustache.png'),['Mustache']],
  ['cabeca-de-ameixa','outros','CABEÇA-DE-AMEIXA','Periquito Cabeça-de-Ameixa',2499.9,2500,12,bird('periquito-cabeça-de-ameixa.png'),['Cabeça-de-Ameixa']],
]

const PRODUCTS = rawProducts.map(
  ([id, category, badge, name, price, reference, installments, image, variants]) => ({
    id,
    category,
    badge,
    name,
    price,
    reference,
    installments,
    image,
    variants,
    description: `${name} com fotografia individual no acervo local AgroNexus.`,
  })
)

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function Aves() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLocaleLowerCase('pt-BR')

    return PRODUCTS.filter((product) => {
      const categoryMatches =
        activeCategory === 'todos' ||
        product.category === activeCategory

      const text = [
        product.name,
        product.description,
        product.badge,
        ...product.variants,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return categoryMatches && (!search || text.includes(search))
    })
  }, [activeCategory, searchTerm])

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId)
    setSearchTerm('')

    requestAnimationFrame(() => {
      document.querySelector('#aves-produtos')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  const clearFilters = () => {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="birds-store">
      <section className="birds-store__hero">
        <img
          className="birds-store__hero-image"
          src={budgerigarPhoto3}
          alt="Periquitos australianos coloridos"
        />
        <div className="birds-store__hero-overlay" />

        <div className="birds-store__hero-content">
          <span>Marketplace AgroNexus™</span>

          <h1>
            Aves.
            <br />
            Cor.
            <br />
            <strong>Desejo.</strong>
          </h1>

          <p>
            Psitacídeos, mutações e espécies ornamentais com fotografia
            individual, preço visível e compra direta.
          </p>

          <a href="#aves-categorias">
            Explorar <span>→</span>
          </a>
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
              placeholder="Ring Neck Violeta, Calopsita, Lóris, Cacatua, Rosela..."
            />
          </div>

          {(activeCategory !== 'todos' || searchTerm) && (
            <button type="button" onClick={clearFilters}>
              Limpar
            </button>
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
                className={
                  activeCategory === category.id
                    ? 'bird-category is-active'
                    : 'bird-category'
                }
                onClick={() => selectCategory(category.id)}
              >
                <img src={category.image} alt={category.name} loading="lazy" />
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
                      {product.variants.map((variant) => (
                        <span key={variant}>{variant}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bird-product__bottom">
                    <div className="bird-product__price">
                      <del>Referência {formatBRL(product.reference)}</del>
                      <strong>{formatBRL(product.price)}</strong>
                      <span>
                        até {product.installments}x de{' '}
                        {formatBRL(product.price / product.installments)}
                      </span>
                    </div>

                    <a href={`#/marketplace?produto=${product.id}`}>
                      Comprar <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="birds-store__empty">
              <strong>Nenhum produto encontrado.</strong>
              <p>Tente outro termo ou volte ao catálogo completo.</p>
              <button type="button" onClick={clearFilters}>
                Ver todos
              </button>
            </div>
          )}
        </section>

        <section className="birds-store__manifesto">
          <span>AGRONEXUS™</span>
          <strong>Fotografia real. Espécie certa. Produto certo.</strong>
          <p>
            O catálogo agora usa o acervo local de imagens individuais,
            eliminando cards genéricos, imagens externas quebradas e
            repetições aleatórias.
          </p>
        </section>

        <div className="birds-store__note">
          <strong>Animais vivos:</strong> comercialização somente com origem
          regular e documentação aplicável.
        </div>

        <footer className="birds-store__footer">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
