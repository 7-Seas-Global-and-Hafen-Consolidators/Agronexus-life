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

const IMAGES = {
  cockatielLutino: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lutino_Cockatiel.jpg/1200px-Lutino_Cockatiel.jpg',
  cockatielPearl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lutino-pearl.jpg/1200px-Lutino-pearl.jpg',
  cockatielTriple: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/TripleMutationCockatiel.jpg/1200px-TripleMutationCockatiel.jpg',
  ringBlue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Rose-ringedParakeetBlueMut.JPG/1200px-Rose-ringedParakeetBlueMut.JPG',
  ringBlue2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Rose-ringed_Parakeet_(Psittacula_krameri)_-blue_mutation2.jpg/1200px-Rose-ringed_Parakeet_(Psittacula_krameri)_-blue_mutation2.jpg',
  ringBlue3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rose-ringed_Parakeet_(Psittacula_krameri)_-blue_mutation_on_perch.jpg/1200px-Rose-ringed_Parakeet_(Psittacula_krameri)_-blue_mutation_on_perch.jpg',
  lorikeet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/RainbowLorikeet.jpg/1200px-RainbowLorikeet.jpg',
  cockatoo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sulphur_Crested_Cockatoo.jpg/1200px-Sulphur_Crested_Cockatoo.jpg',
  macaw: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Blue_and_Yellow_Macaw.jpg/1200px-Blue_and_Yellow_Macaw.jpg',
  mandarin: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mandarin_duck_male.jpg/1200px-Mandarin_duck_male.jpg',
  mandarin2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mandarin_Duck_males.jpg/1200px-Mandarin_Duck_males.jpg',
  gould: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gouldian_Finch._(8065423804).jpg/1200px-Gouldian_Finch._(8065423804).jpg',
}

const CATEGORIES = [
  { id: 'periquitos', name: 'Periquitos Australianos', line: 'Rainbow · Cobalto · Lutino · Hagoromo', image: budgerigarPhoto3 },
  { id: 'calopsitas', name: 'Calopsitas', line: 'Lutino · Pérola · Arlequim · Cara Branca', image: IMAGES.cockatielLutino },
  { id: 'ringnecks', name: 'Ring Necks', line: 'Azul · Cobalto · Turquesa · Verde', image: IMAGES.ringBlue },
  { id: 'agapornis', name: 'Agapornis', line: 'Fischeri · Personata · Roseicollis · Blue', image: agapornisPhoto2 },
  { id: 'rosellas', name: 'Roselas e Cauda Longa', line: 'Roselas · Bourkes · mutações', image: rosellaPhoto1 },
  { id: 'loris', name: 'Lóris e Jandaias', line: 'Arco-Íris · Molucano · Jandaias', image: IMAGES.lorikeet },
  { id: 'grandes', name: 'Cacatuas e Araras', line: 'Galerita · Alba · Canindé', image: IMAGES.cockatoo },
  { id: 'exoticos', name: 'Aves de Canto e Exóticos', line: 'Gould · Canários · pequenos exóticos', image: IMAGES.gould },
  { id: 'aquaticos', name: 'Aquáticos Ornamentais', line: 'Mandarim · Carolina · lagos ornamentais', image: IMAGES.mandarin },
]

const PRODUCTS = [
  { id:'budgie-color', category:'periquitos', badge:'Entrada', name:'Periquito Australiano Color', description:'Cores clássicas e mutações selecionadas.', price:89.90, benchmark:90.25, installments:3, image:budgerigarPhoto1, variants:['Azul','Verde','Amarelo','Branco'] },
  { id:'budgie-rainbow', category:'periquitos', badge:'Rainbow', name:'Periquito Australiano Rainbow', description:'Combinação multicolorida de alto impacto.', price:149.90, benchmark:150, installments:5, image:budgerigarPhoto2, variants:['Rainbow','Opalino','Spangle'] },
  { id:'budgie-hagoromo', category:'periquitos', badge:'Raro', name:'Periquito Hagoromo', description:'Penas reversas e aparência ornamental incomum.', price:299.90, installments:6, image:budgerigarPhoto4, variants:['Hagoromo','Azul','Verde'] },

  { id:'cockatiel-lutino', category:'calopsitas', badge:'Lutino', name:'Calopsita Lutino', description:'Amarelo claro e bochechas laranja.', price:139.90, benchmark:140, installments:4, image:IMAGES.cockatielLutino, credit:'Kroon78 / Wikimedia Commons · CC BY-SA 3.0', variants:['Lutino'] },
  { id:'cockatiel-pearl', category:'calopsitas', badge:'Pérola', name:'Calopsita Lutino Pérola', description:'Desenho perolado bem marcado.', price:159.90, benchmark:160, installments:4, image:IMAGES.cockatielPearl, credit:'SecondFatBudgie / Wikimedia Commons', variants:['Pérola','Lutino'] },
  { id:'cockatiel-triple', category:'calopsitas', badge:'Tripla mutação', name:'Calopsita Tripla Mutação', description:'Padrões combinados para quem procura algo realmente diferente.', price:199.90, installments:5, image:IMAGES.cockatielTriple, credit:'Wikimedia Commons · Public domain', variants:['Lutino','Pied','Pearl'] },

  { id:'ring-verde', category:'ringnecks', badge:'Clássico', name:'Ring Neck Verde', description:'A coloração clássica da espécie.', price:1799.90, benchmark:1800, installments:12, image:ringNeckPhoto1, variants:['Verde'] },
  { id:'ring-blue', category:'ringnecks', badge:'Blue', name:'Ring Neck Blue', description:'Azul intenso em mutação comprovadamente fotogênica.', price:2999.90, benchmark:3000, installments:12, image:IMAGES.ringBlue, credit:'Lauren Tibert Wells / Wikimedia Commons · CC BY-SA 3.0', variants:['Blue'] },
  { id:'ring-blue2', category:'ringnecks', badge:'Cobalto', name:'Ring Neck Cobalto', description:'Azul profundo com enorme apelo visual.', price:3999.90, benchmark:4000, installments:12, image:IMAGES.ringBlue2, credit:'Tanya Dropbear / Wikimedia Commons · CC BY 2.0', variants:['Cobalto'] },
  { id:'ring-blue3', category:'ringnecks', badge:'Azul', name:'Ring Neck Azul em Poleiro', description:'Outra apresentação real da mutação azul.', price:2999.90, benchmark:3000, installments:12, image:IMAGES.ringBlue3, credit:'Tanya Dropbear / Wikimedia Commons · CC BY 2.0', variants:['Azul'] },

  { id:'agap-fischeri', category:'agapornis', badge:'Cor', name:'Agapornis Fischeri', description:'Máscara intensa e corpo multicolorido.', price:349.90, benchmark:350, installments:8, image:agapornisPhoto1, variants:['Fischeri'] },
  { id:'agap-rosei', category:'agapornis', badge:'Popular', name:'Agapornis Roseicollis', description:'Pequeno, vibrante e cheio de mutações.', price:449.90, benchmark:450, installments:10, image:agapornisPhoto3, variants:['Roseicollis'] },
  { id:'agap-color', category:'agapornis', badge:'Mix', name:'Agapornis Color', description:'Seleção cromática de forte impacto.', price:399.90, installments:9, image:agapornisPhoto4, variants:['Blue','Green','Pastel'] },

  { id:'rosella-1', category:'rosellas', badge:'Cor extrema', name:'Rosela Oriental', description:'Vermelho, amarelo, azul e preto em contraste natural.', price:699.90, installments:10, image:rosellaPhoto1, variants:['Eastern Rosella'] },
  { id:'rosella-2', category:'rosellas', badge:'Rosela', name:'Rosela Multicolor', description:'Outra apresentação da linha de Roselas.', price:799.90, installments:10, image:rosellaPhoto2, variants:['Multicolor'] },

  { id:'lori-rainbow', category:'loris', badge:'Arco-íris', name:'Lóris Arco-Íris', description:'Azul, vermelho, laranja e verde extremamente saturados.', price:3499.90, benchmark:3500, installments:12, image:IMAGES.lorikeet, credit:'Zarni02 / Wikimedia Commons · Public domain', variants:['Arco-Íris'] },

  { id:'cockatoo-galerita', category:'grandes', badge:'Impacto', name:'Cacatua Galerita', description:'Branca, grande e com crista amarela monumental.', price:37999.90, benchmark:38000, installments:12, image:IMAGES.cockatoo, credit:'Ffyfejam / Wikimedia Commons · CC BY-SA 4.0', variants:['Galerita'] },
  { id:'macaw-caninde', category:'grandes', badge:'Azul + ouro', name:'Arara Canindé', description:'Azul ultramarino e amarelo dourado em grande escala.', price:14999.90, installments:12, image:IMAGES.macaw, credit:'Swapnil Srivastav / Wikimedia Commons', variants:['Azul','Amarelo'] },

  { id:'gould', category:'exoticos', badge:'Surreal', name:'Diamante Gould', description:'Uma das combinações de cor mais absurdas da natureza.', price:396.90, benchmark:397, installments:8, image:IMAGES.gould, variants:['Vermelho','Preto','Violeta'] },

  { id:'mandarin', category:'aquaticos', badge:'Chácara', name:'Marreco Mandarim', description:'Laranja, azul, verde e branco em plumagem ornamental.', price:749.90, benchmark:750, installments:12, image:IMAGES.mandarin, credit:'Wikimedia Commons', variants:['Macho','Fêmea'] },
  { id:'mandarin-pair', category:'aquaticos', badge:'Dupla', name:'Marrecos Mandarim', description:'Dois machos em fotografia real da espécie.', price:1499.90, installments:12, image:IMAGES.mandarin2, credit:'Wikimedia Commons', variants:['Mandarim'] },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(value)
}

export default function Aves() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const s = searchTerm.trim().toLocaleLowerCase('pt-BR')
    return PRODUCTS.filter((p) => {
      const cat = activeCategory === 'todos' || p.category === activeCategory
      const haystack = [p.name,p.description,p.badge,...p.variants].join(' ').toLocaleLowerCase('pt-BR')
      return cat && (!s || haystack.includes(s))
    })
  }, [activeCategory, searchTerm])

  const choose = (id) => {
    setActiveCategory(id)
    setSearchTerm('')
    requestAnimationFrame(() => document.querySelector('#aves-produtos')?.scrollIntoView({ behavior:'smooth', block:'start' }))
  }

  return (
    <main className="birds-store">
      <section className="birds-store__hero">
        <img src={budgerigarPhoto3} alt="Periquitos Australianos coloridos" className="birds-store__hero-image" />
        <div className="birds-store__hero-shade" />
        <div className="birds-store__container birds-store__hero-inner">
          <span>Marketplace AgroNexus™</span>
          <h1>Aves.<br/>Cor.<br/><strong>Desejo.</strong></h1>
          <p>Psitacídeos, exóticos e aves ornamentais com fotografia forte, preço visível e compra direta.</p>
          <a href="#aves-produtos">Comprar <span>→</span></a>
        </div>
      </section>

      <div className="birds-store__container">
        <section className="birds-store__search">
          <label htmlFor="aves-search">O que você procura?</label>
          <div>
            <input id="aves-search" type="search" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Calopsita Lutino, Ring Neck Blue, Lóris, Cacatua, Mandarim..." />
            {(searchTerm || activeCategory !== 'todos') && <button onClick={()=>{setActiveCategory('todos');setSearchTerm('')}}>Limpar</button>}
          </div>
        </section>

        <section className="birds-store__categories">
          <header className="birds-store__section-head"><span>Comprar por categoria</span><h2>Escolha a próxima obsessão.</h2></header>
          <div className="birds-store__category-grid">
            {CATEGORIES.map(c => (
              <button key={c.id} type="button" className={activeCategory===c.id?'bird-category is-active':'bird-category'} onClick={()=>choose(c.id)}>
                <img src={c.image} alt="" loading="lazy"/>
                <span className="bird-category__shade"/>
                <span className="bird-category__copy"><strong>{c.name}</strong><small>{c.line}</small></span>
              </button>
            ))}
          </div>
        </section>

        <section id="aves-produtos" className="birds-store__products">
          <header className="birds-store__section-head"><span>{filteredProducts.length} produtos nesta seleção</span><h2>Olhou. Gostou. Comprou.</h2></header>
          <div className="birds-store__product-grid">
            {filteredProducts.map(p => (
              <article className="bird-product" key={p.id}>
                <div className="bird-product__media">
                  <img src={p.image} alt={p.name} loading="lazy"/>
                  <span>{p.badge}</span>
                  {p.credit && <small className="bird-product__credit">{p.credit}</small>}
                </div>
                <div className="bird-product__body">
                  <h3>{p.name}</h3><p>{p.description}</p>
                  <div className="bird-product__variants">{p.variants.map(v=><span key={v}>{v}</span>)}</div>
                  <div className="bird-product__price">
                    {p.benchmark && <del>Ref. mercado {formatBRL(p.benchmark)}</del>}
                    <strong>{formatBRL(p.price)}</strong>
                    <span>{p.installments ? `até ${p.installments}x de ${formatBRL(p.price/p.installments)}` : 'Pagamento no checkout'}</span>
                  </div>
                  <a href={`#/marketplace?produto=${p.id}`}>Comprar <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="birds-store__note"><strong>Animais vivos:</strong> comercialização somente com origem regular e documentação aplicável.</div>
        <footer className="birds-store__footer">AgroNexus™ · Uma iniciativa da Guiropa World</footer>
      </div>
    </main>
  )
}
