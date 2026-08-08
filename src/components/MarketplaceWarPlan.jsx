import { useMemo, useState } from 'react'
import '../styles/MarketplaceWarPlan.css'

const WHATSAPP_NUMBER = '5547991353900'

const PRODUCTS = [
  {
    id: 'guia-periquito-australiano',
    category: 'Publicações',
    name: 'Guia Oficial AgroNexus — Periquito Australiano',
    description:
      'Guia digital completo com mais de 200 páginas sobre comportamento, alimentação, manejo, saúde, genética e bem-estar.',
    price: 9.9,
    installments: null,
    checkout:
      'https://www.asaas.com/c/bzsxz4qaps5glfm4',
    badge: 'Guia Oficial',
  },
  {
    id: 'guia-calopsitas',
    category: 'Publicações',
    name: 'Guia Oficial AgroNexus — Calopsitas',
    description:
      'Publicação digital AgroNexus dedicada a comportamento, manejo, alimentação, saúde, bem-estar e criação responsável.',
    price: 9.9,
    installments: null,
    checkout:
      'https://www.asaas.com/c/x17xj6s0gmqrhgnm',
    badge: 'Guia Oficial',
  },
  {
    id: 'combo-guias',
    category: 'Publicações',
    name: 'Combo AgroNexus — Periquito Australiano + Calopsitas',
    description:
      'Os dois Guias Oficiais AgroNexus reunidos em uma única compra digital.',
    price: 19.9,
    installments: null,
    checkout:
      'https://www.asaas.com/c/lkx8ivjw04c01a1w',
    badge: 'Combo',
  },
]

const CATEGORIES = [
  {
    id: 'aves',
    name: 'Aves',
    description:
      'Periquitos, calopsitas, Ring Necks, Agapornis, Lóris, canários, psitacídeos, passeriformes, alimentação, viveiros e acessórios.',
    href: '#/aves',
    keywords:
      'periquito calopsita ring neck agapornis loris canario psitacideo ave',
  },
  {
    id: 'aquarismo',
    name: 'Aquarismo',
    description:
      'Água doce, marinho, reef, plantado, ciclídeos, Bettas, Kinguios, filtros, bombas, iluminação, substratos e alimentação.',
    href: '#/aquarismo',
    keywords:
      'aquario betta kinguio reef marinho ciclideos filtro skimmer bomba',
  },
  {
    id: 'mamiferos',
    name: 'Pequenos Mamíferos',
    description:
      'Hamsters, chinchilas, porquinhos-da-índia, coelhos, furões, habitats, substratos, alimentação e enriquecimento.',
    href: '#/mamiferos',
    keywords:
      'hamster chinchila coelho furao porquinho da india mamifero',
  },
  {
    id: 'caes',
    name: 'Cães',
    description:
      'Raças, alimentação, higiene, transporte, acessórios, enriquecimento, saúde e produtos especializados.',
    href: createWhatsAppLink('Marketplace de Cães'),
    external: true,
    keywords:
      'cachorro cao labrador golden border collie spitz bulldog pinscher cane corso',
  },
  {
    id: 'gatos',
    name: 'Gatos',
    description:
      'Raças, alimentação, fontes, areia sanitária, caixas, arranhadores, transporte, higiene e acessórios.',
    href: createWhatsAppLink('Marketplace de Gatos'),
    external: true,
    keywords:
      'gato persa sphynx maine coon siames ragdoll areia arranhador',
  },
  {
    id: 'repteis',
    name: 'Répteis e Terrários',
    description:
      'Terrários, iluminação UVB, aquecimento, substratos, acessórios e espécies comercializadas dentro das exigências legais.',
    href: createWhatsAppLink(
      'Marketplace de Répteis e Terrários'
    ),
    external: true,
    keywords:
      'reptil terrario jabuti gecko iguana cobra serpente uvb substrato',
  },
  {
    id: 'botanica',
    name: 'Botânica',
    description:
      'Bonsais, mini árvores frutíferas, orquídeas, plantas ornamentais, vasos, substratos, fertilizantes e ferramentas.',
    href: createWhatsAppLink(
      'Marketplace de Plantas e Botânica'
    ),
    external: true,
    keywords:
      'bonsai jabuticaba planta orquidea arvore frutifera adubo substrato vaso',
  },
  {
    id: 'alimentacao',
    name: 'Alimentação',
    description:
      'Rações, extrusadas, farinhadas, sementes, néctares, alimentos especializados e suplementos por espécie.',
    href: createWhatsAppLink(
      'Marketplace de Alimentação Animal'
    ),
    external: true,
    keywords:
      'racao alimento extrusada farinhada semente nectar suplemento vitamina',
  },
  {
    id: 'habitats',
    name: 'Habitats',
    description:
      'Gaiolas, viveiros, aquários, terrários, alojamentos, poleiros, tocas, ninhos e estruturas adequadas.',
    href: createWhatsAppLink(
      'Marketplace de Habitats'
    ),
    external: true,
    keywords:
      'gaiola viveiro aquario terrario habitat poleiro toca ninho',
  },
  {
    id: 'equipamentos',
    name: 'Equipamentos',
    description:
      'Filtros, bombas, skimmers, iluminação, aquecimento, incubação, climatização e equipamentos especializados.',
    href: createWhatsAppLink(
      'Marketplace de Equipamentos'
    ),
    external: true,
    keywords:
      'filtro bomba skimmer iluminacao aquecimento chocadeira incubadora equipamento',
  },
  {
    id: 'publicacoes',
    name: 'Guias Oficiais',
    description:
      'Publicações digitais AgroNexus com compra imediata e acesso aos conteúdos especializados.',
    href: '#produtos-disponiveis',
    keywords:
      'guia livro ebook publicacao periquito calopsita manual',
  },
]

function createWhatsAppLink(subject) {
  const message = [
    'Olá, AgroNexus!',
    '',
    `Estou interessado em: ${subject}.`,
    '',
    'Gostaria de receber informações comerciais.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`
}

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function MarketplaceWarPlan() {
  const [searchTerm, setSearchTerm] = useState('')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredCategories = useMemo(() => {
    if (!normalizedSearch) {
      return CATEGORIES
    }

    return CATEGORIES.filter((category) => {
      const searchable = [
        category.name,
        category.description,
        category.keywords,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return searchable.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const filteredProducts = useMemo(() => {
    if (!normalizedSearch) {
      return PRODUCTS
    }

    return PRODUCTS.filter((product) => {
      const searchable = [
        product.name,
        product.category,
        product.description,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return searchable.includes(normalizedSearch)
    })
  }, [normalizedSearch])

  const hasResults =
    filteredCategories.length > 0 ||
    filteredProducts.length > 0

  return (
    <section
      id="marketplace"
      className="marketplace-war"
      aria-labelledby="marketplace-war-title"
    >
      <div className="container">
        <header className="marketplace-war__header">
          <span className="eyebrow">
            Marketplace AgroNexus™
          </span>

          <h1 id="marketplace-war-title">
            Produto.
            <br />
            Preço.
            <br />
            Compra.
          </h1>

          <p>
            Animais, plantas, alimentação, equipamentos,
            habitats, acessórios e publicações especializadas
            organizados em um marketplace direto e objetivo.
          </p>

          <span className="marketplace-war__institutional">
            AgroNexus™ · Uma iniciativa da Guiropa World
          </span>
        </header>

        <div className="marketplace-war__search">
          <label htmlFor="marketplace-search">
            Buscar no Marketplace
          </label>

          <div className="marketplace-war__search-row">
            <input
              id="marketplace-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Ex.: Ring Neck, Betta, hamster, ração, aquário, bonsai..."
              autoComplete="off"
            />

            {searchTerm ? (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
              >
                Limpar
              </button>
            ) : null}
          </div>
        </div>

        <nav
          className="marketplace-war__quick-nav"
          aria-label="Atalhos do marketplace"
        >
          <a href="#categorias-marketplace">
            Categorias
          </a>

          <a href="#produtos-disponiveis">
            Comprar agora
          </a>

          <a href="#/biblioteca">
            Biblioteca
          </a>

          <a href="#/contato">
            Atendimento
          </a>
        </nav>

        {hasResults ? (
          <>
            <section
              id="categorias-marketplace"
              className="marketplace-war__section"
            >
              <header className="marketplace-war__section-head">
                <span>01</span>

                <div>
                  <h2>Categorias</h2>

                  <p>
                    Entre diretamente na área que procura.
                  </p>
                </div>
              </header>

              <div className="marketplace-war__category-list">
                {filteredCategories.map((category) => (
                  <article
                    className="marketplace-war__category"
                    key={category.id}
                  >
                    <div className="marketplace-war__category-copy">
                      <h3>{category.name}</h3>

                      <p>{category.description}</p>
                    </div>

                    <a
                      href={category.href}
                      target={
                        category.external
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        category.external
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {category.external
                        ? 'Falar com especialista'
                        : 'Abrir categoria'}

                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            {filteredProducts.length > 0 ? (
              <section
                id="produtos-disponiveis"
                className="marketplace-war__section"
              >
                <header className="marketplace-war__section-head">
                  <span>02</span>

                  <div>
                    <h2>Compra imediata</h2>

                    <p>
                      Produtos com preço e checkout
                      disponíveis agora.
                    </p>
                  </div>
                </header>

                <div className="marketplace-war__products">
                  {filteredProducts.map((product) => (
                    <article
                      className="marketplace-war__product"
                      key={product.id}
                    >
                      <div className="marketplace-war__product-top">
                        <span className="marketplace-war__badge">
                          {product.badge}
                        </span>

                        <span>
                          {product.category}
                        </span>
                      </div>

                      <h3>{product.name}</h3>

                      <p>{product.description}</p>

                      <div className="marketplace-war__price-block">
                        <strong>
                          {formatBRL(product.price)}
                        </strong>

                        {product.installments ? (
                          <span>
                            ou {product.installments}x no cartão
                          </span>
                        ) : (
                          <span>
                            pagamento único
                          </span>
                        )}
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
                        Checkout processado pela
                        Guiropa World.
                      </small>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section className="marketplace-war__empty">
            <h2>
              Não encontrou “{searchTerm}”?
            </h2>

            <p>
              Fale diretamente com a AgroNexus.
              Nossa equipe verifica a categoria,
              produto ou espécie solicitada.
            </p>

            <a
              href={createWhatsAppLink(searchTerm)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar agora com especialista
              <span aria-hidden="true">→</span>
            </a>
          </section>
        )}

        <section className="marketplace-war__direct">
          <div>
            <span>
              Atendimento comercial
            </span>

            <h2>
              Precisa de algo específico?
            </h2>

            <p>
              Produto, espécie, equipamento,
              alimentação, habitat ou projeto:
              fale diretamente com a AgroNexus.
            </p>
          </div>

          <a
            href={createWhatsAppLink(
              'Atendimento comercial no Marketplace AgroNexus'
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar agora com especialista
            <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </section>
  )
}
