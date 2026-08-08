import { useEffect, useMemo, useState } from 'react'
import '../styles/agro-hub.css'

import avesImage from '../assets/images/editorial/AgroNexus-Birds.png'
import avesCantantesImage from '../assets/images/editorial/agronexus-aves-cantantes-canarios-passeriformes-marketplace.jpg'
import mamiferosImage from '../assets/images/editorial/agronexus-hamsters-editorial-guide-1.jpg'
import repteisImage from '../assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg'

const WHATSAPP_NUMBER = '5547991353900'

const aquaImage =
  '/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png'

const CATEGORIES = [
  {
    id: 'aves',
    title: 'Aves',
    description:
      'Periquitos, Calopsitas, Ring Necks, Agapornis, Lóris, canários, psitacídeos, passeriformes, alimentação, viveiros e acessórios.',
    image: avesImage,
    href: '#/aves',
    searches: [
      'Comprar Ring Neck',
      'Comprar Calopsita',
      'Comprar Agapornis',
      'Comprar Periquito Australiano',
    ],
  },
  {
    id: 'canarios',
    title: 'Canários e Passeriformes',
    description:
      'Canários, aves cantantes, alimentação, sementes, gaiolas, viveiros e produtos especializados.',
    image: avesCantantesImage,
    href: createWhatsAppLink('Canários e passeriformes'),
    external: true,
    searches: [
      'Comprar Canário Belga',
      'Canário Gloster',
      'Canário Timbrado',
      'Viveiro para Canários',
    ],
  },
  {
    id: 'aquarismo',
    title: 'Aquarismo',
    description:
      'Peixes ornamentais, água doce, marinho, reef, ciclídeos, Bettas, Kinguios, filtros, bombas, aquários e alimentação.',
    image: aquaImage,
    href: '#/aquarismo',
    searches: [
      'Comprar Betta',
      'Comprar Kinguio',
      'Aquário plantado',
      'Montar Mini Reef',
    ],
  },
  {
    id: 'mamiferos',
    title: 'Pequenos Mamíferos',
    description:
      'Hamsters, porquinhos-da-índia, chinchilas, coelhos, furões, habitats, substratos, alimentação e acessórios.',
    image: mamiferosImage,
    href: '#/mamiferos',
    searches: [
      'Comprar Hamster Sírio',
      'Hamster Roborovski',
      'Habitat para Hamster',
      'Ração para Hamster',
    ],
  },
  {
    id: 'caes-gatos',
    title: 'Cães e Gatos',
    description:
      'Raças, filhotes, alimentação, higiene, enriquecimento, transporte, acessórios e produtos especializados.',
    image: repteisImage,
    href: createWhatsAppLink('Marketplace de cães e gatos'),
    external: true,
    searches: [
      'Comprar Labrador',
      'Comprar Border Collie',
      'Comprar Gato Persa',
      'Comprar Maine Coon',
    ],
  },
  {
    id: 'plantas',
    title: 'Plantas e Bonsais',
    description:
      'Bonsais, mini árvores frutíferas, orquídeas, plantas ornamentais, vasos, substratos, fertilizantes e ferramentas.',
    image: repteisImage,
    href: createWhatsAppLink('Marketplace de plantas e bonsais'),
    external: true,
    searches: [
      'Bonsai de Jabuticaba',
      'Mini Jabuticabeira',
      'Bonsai para apartamento',
      'Comprar Orquídea',
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

const SUPPORT_VALUES = [
  2,
  5,
  10,
  25,
  50,
  100,
]

function createWhatsAppLink(subject) {
  const message = [
    'Olá, AgroNexus!',
    '',
    `Tenho interesse em: ${subject}.`,
    '',
    'Gostaria de receber informações.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`
}

function createSupportWhatsAppLink(value) {
  const message = [
    'Olá, AgroNexus!',
    '',
    value === 'outro'
      ? 'Quero apoiar a AgroNexus com outro valor.'
      : `Quero apoiar a AgroNexus com R$ ${value}.`,
    '',
    'Pode me enviar o link de pagamento?',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`
}

export default function Home() {
  const [searchTerm, setSearchTerm] =
    useState('')

  useEffect(() => {
    document.title =
      'AgroNexus™ — Marketplace de Animais, Aquarismo, Plantas e Biodiversidade'
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
      const content = [
        category.title,
        category.description,
        ...category.searches,
      ]

      content.forEach((item) => {
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

    return [...results]
  }, [normalizedSearch])

  return (
    <main
      id="topo"
      className="commerce-home"
    >
      <section className="commerce-hero">
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
                <span aria-hidden="true">→</span>
              </a>

              <a
                href={createWhatsAppLink(
                  'Atendimento comercial AgroNexus'
                )}
                className="commerce-button commerce-button--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com especialista
              </a>
            </div>

            <span className="commerce-guiropa">
              AgroNexus™ · Uma iniciativa da
              Guiropa World
            </span>
          </div>
        </div>
      </section>

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
                  setSearchTerm(event.target.value)
                }
                placeholder="Ring Neck, Betta, hamster, ração, aquário, bonsai, alpaca..."
                autoComplete="off"
              />

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
                  searchResults.map((result) => (
                    <a
                      key={result}
                      href={createWhatsAppLink(
                        result
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{result}</span>
                      <strong>→</strong>
                    </a>
                  ))
                ) : (
                  <a
                    href={createWhatsAppLink(
                      searchTerm
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      Procurar “{searchTerm}”
                    </span>
                    <strong>→</strong>
                  </a>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="commerce-categories">
        <div className="commerce-container">
          <header className="commerce-section-head">
            <span>Comprar por categoria</span>

            <h2>
              Marketplace AgroNexus
            </h2>

            <p>
              Escolha uma categoria e vá
              diretamente ao que interessa.
            </p>
          </header>

          <div className="commerce-category-grid">
            {CATEGORIES.map((category) => (
              <article
                className="commerce-category"
                key={category.id}
              >
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
                  className="commerce-category__image"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                  />
                </a>

                <div className="commerce-category__body">
                  <h3>{category.title}</h3>

                  <p>
                    {category.description}
                  </p>

                  <div className="commerce-category__searches">
                    {category.searches.map(
                      (item) => (
                        <a
                          key={item}
                          href={createWhatsAppLink(
                            item
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item}
                        </a>
                      )
                    )}
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
                    className="commerce-category__action"
                  >
                    Ver categoria
                    <span aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commerce-popular">
        <div className="commerce-container">
          <header className="commerce-section-head">
            <span>
              Pesquisas populares
            </span>

            <h2>
              O que as pessoas procuram
            </h2>
          </header>

          <div className="commerce-popular__grid">
            {POPULAR_SEARCHES.map((item) => (
              <a
                key={item}
                href={createWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{item}</span>
                <strong>→</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="commerce-guides">
        <div className="commerce-container">
          <div className="commerce-guides__panel">
            <div>
              <span className="commerce-kicker">
                Guias Oficiais AgroNexus
              </span>

              <h2>
                Informação também é produto.
              </h2>

              <p>
                Guias digitais especializados
                com compra imediata e acesso
                direto ao conteúdo AgroNexus.
              </p>
            </div>

            <a
              href="#/marketplace"
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
                Sua contribuição ajuda a manter
                guias, conteúdos, pesquisa,
                educação e infraestrutura da
                AgroNexus.
              </p>

              <span className="commerce-support__guiropa">
                Pagamentos e operação:
                Guiropa World
              </span>
            </div>

            <div className="commerce-support__values">
              {SUPPORT_VALUES.map((value) => (
                <a
                  key={value}
                  href={createSupportWhatsAppLink(
                    value
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  R$ {value}
                </a>
              ))}

              <a
                href={createSupportWhatsAppLink(
                  'outro'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Outro valor
              </a>
            </div>
          </div>

          <p className="commerce-support__note">
            Os botões de apoio serão ligados
            diretamente aos respectivos checkouts
            assim que cada link de pagamento
            estiver configurado.
          </p>
        </div>
      </section>

      <section className="commerce-contact">
        <div className="commerce-container">
          <div className="commerce-contact__panel">
            <div>
              <span className="commerce-kicker">
                Atendimento AgroNexus
              </span>

              <h2>
                Não encontrou?
                <br />
                Fale conosco.
              </h2>

              <p>
                Produto, espécie, alimentação,
                equipamento, habitat, planta ou
                projeto especializado.
              </p>
            </div>

            <a
              href={createWhatsAppLink(
                'Atendimento comercial AgroNexus'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar agora
              <span aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="commerce-contact__institution">
            AgroNexus™ · Marketplace de
            biodiversidade · Uma iniciativa da
            Guiropa World
          </p>
        </div>
      </section>
    </main>
  )
}
