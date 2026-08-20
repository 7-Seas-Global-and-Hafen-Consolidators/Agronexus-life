/**
 * AgroNexus — Universal World Page
 * Babylon Rebuild
 *
 * Página universal para todos os grandes mundos AgroNexus.
 * Compatível com o sistema de hash routing nativo do projeto.
 *
 * NÃO depende de react-router-dom.
 */

import React from 'react'

import {
  getWorldById,
} from '../data/worldCatalog'

import {
  getWorldMedia,
} from '../data/worldMedia'

function navigateTo(path) {
  window.location.hash = `#${path}`
}

function normalizeDepartment(department, index) {
  if (typeof department === 'string') {
    return {
      id: department
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/&/g, 'e')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
      name: department,
      description: '',
      image: '',
      index,
    }
  }

  return {
    id:
      department?.id ||
      department?.slug ||
      `department-${index + 1}`,

    name:
      department?.name ||
      department?.title ||
      department?.label ||
      `Categoria ${index + 1}`,

    description:
      department?.description ||
      department?.subtitle ||
      '',

    image:
      department?.image ||
      department?.hero ||
      '',

    path:
      department?.path ||
      department?.href ||
      null,

    index,
  }
}

export default function WorldPage({
  slug,
}) {
  const world =
    getWorldById(slug)

  if (!world) {
    return (
      <main className="world-page world-page--missing">
        <section className="world-missing">
          <p className="world-eyebrow">
            AGRONEXUS · LIVING ECOSYSTEM
          </p>

          <h1>
            Mundo não encontrado.
          </h1>

          <p>
            Esta área ainda não faz parte da nova
            arquitetura navegável da AgroNexus.
          </p>

          <button
            type="button"
            className="world-button"
            onClick={() => navigateTo('/')}
          >
            Voltar para AgroNexus
          </button>
        </section>
      </main>
    )
  }

  const media =
    getWorldMedia(slug)

  const hero =
    world.hero || {}

  const title =
    world.title ||
    world.name ||
    slug

  const eyebrow =
    world.eyebrow ||
    'AGRONEXUS · LIVING ECOSYSTEM'

  const heroTitle =
    hero.title ||
    title

  const heroSubtitle =
    hero.subtitle ||
    world.description ||
    'Biodiversidade, conhecimento, mercado e conexão.'

  const departments = (
    world.departments ||
    world.categories ||
    world.sections ||
    world.children ||
    []
  ).map(normalizeDepartment)

  const highlights =
    world.highlights ||
    world.features ||
    []

  const heroImage =
    media?.hero || ''

  return (
    <main
      className={`world-page world-page--${slug}`}
    >
      {/* ========================================================
          HERO
          ======================================================== */}

      <section
        className="world-hero"
        style={
          heroImage
            ? {
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(5, 18, 13, 0.94) 0%,
                    rgba(5, 18, 13, 0.72) 46%,
                    rgba(5, 18, 13, 0.20) 100%
                  ),
                  url("${heroImage}")
                `,
              }
            : undefined
        }
      >
        <div className="world-hero__content">
          <button
            type="button"
            className="world-back"
            onClick={() => navigateTo('/')}
          >
            ← Explorar AgroNexus
          </button>

          <p className="world-eyebrow">
            {eyebrow}
          </p>

          <h1>
            {heroTitle}
          </h1>

          <p className="world-hero__description">
            {heroSubtitle}
          </p>

          <div className="world-hero__actions">
            <a
              href="#explorar"
              className="world-button"
            >
              Explorar este mundo
            </a>

            <a
              href="#procedencia"
              className="world-button world-button--secondary"
            >
              Origem & procedência
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          DEPARTAMENTOS
          ======================================================== */}

      <section
        id="explorar"
        className="world-section"
      >
        <div className="world-section__heading">
          <p className="world-eyebrow">
            EXPLORE ESTE MUNDO
          </p>

          <h2>
            Entre mais fundo.
          </h2>

          <p>
            Cada área conecta descoberta,
            conhecimento, produtos, serviços
            e especialistas.
          </p>
        </div>

        <div className="world-category-grid">
          {departments.map(
            (department, index) => {
              const destination =
                department.path ||
                `/mundo/${slug}/${department.id}`

              return (
                <button
                  type="button"
                  className="world-category-card"
                  key={department.id}
                  onClick={() =>
                    navigateTo(destination)
                  }
                >
                  {department.image && (
                    <img
                      src={department.image}
                      alt={department.name}
                      loading="lazy"
                    />
                  )}

                  <div className="world-category-card__content">
                    <span>
                      {String(index + 1).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    <h3>
                      {department.name}
                    </h3>

                    {department.description && (
                      <p>
                        {department.description}
                      </p>
                    )}

                    <strong>
                      Explorar →
                    </strong>
                  </div>
                </button>
              )
            }
          )}
        </div>
      </section>

      {/* ========================================================
          DESTAQUES
          ======================================================== */}

      {highlights.length > 0 && (
        <section className="world-section world-section--highlights">
          <div className="world-section__heading">
            <p className="world-eyebrow">
              DESCOBRIR
            </p>

            <h2>
              Muito além de comprar.
            </h2>
          </div>

          <div className="world-highlight-grid">
            {highlights.map(
              (item, index) => (
                <article
                  className="world-highlight"
                  key={
                    item.id ||
                    item.title ||
                    item.name ||
                    index
                  }
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      '0'
                    )}
                  </span>

                  <h3>
                    {item.title ||
                      item.name}
                  </h3>

                  {item.description && (
                    <p>
                      {item.description}
                    </p>
                  )}
                </article>
              )
            )}
          </div>
        </section>
      )}

      {/* ========================================================
          PROCEDÊNCIA
          ======================================================== */}

      <section
        id="procedencia"
        className="world-trust"
      >
        <div className="world-trust__intro">
          <p className="world-eyebrow">
            ORIGEM · PROCEDÊNCIA · CONHECIMENTO
          </p>

          <h2>
            Saber de onde vem faz parte
            da escolha.
          </h2>

          <p>
            Na AgroNexus, origem e procedência
            fazem parte da própria arquitetura
            dos registros, ofertas, parceiros
            e conexões do ecossistema.
          </p>
        </div>

        <div className="world-trust__grid">
          <article>
            <span>01</span>

            <h3>
              Origem
            </h3>

            <p>
              Informações associadas à origem
              e ao contexto do registro.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>
              Responsável
            </h3>

            <p>
              Criadores, produtores,
              especialistas, lojas e parceiros
              ligados ao que oferecem.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>
              Documentação
            </h3>

            <p>
              Documentos e identificações
              aplicáveis podem acompanhar
              cada registro.
            </p>
          </article>

          <article>
            <span>04</span>

            <h3>
              Histórico
            </h3>

            <p>
              Conhecimento e contexto
              acompanham a jornada dentro
              do ecossistema.
            </p>
          </article>
        </div>
      </section>

      {/* ========================================================
          ECOSSISTEMA
          ======================================================== */}

      <section className="world-commerce">
        <div>
          <p className="world-eyebrow">
            AGRONEXUS LIVING ECOSYSTEM
          </p>

          <h2>
            Descobrir. Conhecer.
            Adquirir. Cuidar. Permanecer.
          </h2>

          <p>
            Biodiversidade, marketplace,
            saúde, alimentação, habitats,
            equipamentos, serviços,
            conhecimento, comunidade,
            recorrência e benefícios
            conectados em um único sistema.
          </p>
        </div>

        <button
          type="button"
          className="world-button"
          onClick={() => navigateTo('/')}
        >
          Continuar explorando
        </button>
      </section>
    </main>
  )
}
