/**
 * AgroNexus — Universal World Page
 * Babylon Rebuild
 *
 * Página universal dos grandes mundos AgroNexus.
 *
 * Compatível exclusivamente com o sistema nativo
 * de hash routing já utilizado pela aplicação.
 *
 * Suporta:
 * /mundo/:slug
 * /mundo/:slug/:department
 */

import React from 'react'

import {
  getWorldById,
} from '../data/worldCatalog'

import {
  getWorldMedia,
} from '../data/worldMedia'

/* ============================================================
   NAVIGATION
   ============================================================ */

function navigateTo(path) {
  window.location.hash =
    `#${path}`
}

/* ============================================================
   SLUG
   ============================================================ */

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(/&/g, 'e')
    .replace(
      /[^a-z0-9]+/g,
      '-'
    )
    .replace(
      /^-+|-+$/g,
      ''
    )
}

/* ============================================================
   DEPARTMENT NORMALIZATION
   ============================================================ */

function normalizeDepartment(
  department,
  index
) {
  if (
    typeof department ===
    'string'
  ) {
    return {
      id:
        slugify(
          department
        ),

      name:
        department,

      description:
        '',

      image:
        '',

      path:
        null,

      index,
    }
  }

  const name =
    department?.name ||
    department?.title ||
    department?.label ||
    `Categoria ${index + 1}`

  return {
    id:
      department?.id ||
      department?.slug ||
      slugify(name),

    name,

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

    products:
      department?.products ||
      [],

    services:
      department?.services ||
      [],

    species:
      department?.species ||
      [],

    content:
      department?.content ||
      [],

    index,
  }
}

/* ============================================================
   DEPARTMENT LOOKUP
   ============================================================ */

function findDepartment(
  departments,
  departmentSlug
) {
  if (!departmentSlug) {
    return null
  }

  return (
    departments.find(
      (department) =>
        department.id ===
        departmentSlug
    ) || null
  )
}

/* ============================================================
   WORLD NOT FOUND
   ============================================================ */

function MissingWorld() {
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
          Esta área ainda não
          faz parte da nova
          arquitetura navegável
          da AgroNexus.
        </p>

        <button
          type="button"
          className="world-button"
          onClick={() =>
            navigateTo('/')
          }
        >
          Voltar para AgroNexus
        </button>
      </section>
    </main>
  )
}

/* ============================================================
   DEPARTMENT NOT FOUND
   ============================================================ */

function MissingDepartment({
  world,
  slug,
}) {
  return (
    <main className="world-page world-page--missing">
      <section className="world-missing">
        <p className="world-eyebrow">
          {world.eyebrow ||
            'AGRONEXUS WORLD'}
        </p>

        <h1>
          Área não encontrada.
        </h1>

        <p>
          Este departamento ainda
          não está disponível dentro
          do mundo {world.title}.
        </p>

        <button
          type="button"
          className="world-button"
          onClick={() =>
            navigateTo(
              `/mundo/${slug}`
            )
          }
        >
          Voltar para {world.title}
        </button>
      </section>
    </main>
  )
}

/* ============================================================
   DEPARTMENT PAGE
   ============================================================ */

function DepartmentView({
  world,
  department,
  slug,
  media,
}) {
  const departmentImage =
    department.image ||
    media?.card ||
    media?.hero ||
    ''

  const hasProducts =
    department.products
      .length > 0

  const hasSpecies =
    department.species
      .length > 0

  const hasServices =
    department.services
      .length > 0

  const hasContent =
    department.content
      .length > 0

  return (
    <main
      className={
        `world-page world-page--${slug} world-page--department`
      }
    >
      {/* ======================================================
          DEPARTMENT HERO
          ====================================================== */}

      <section
        className="world-hero"
        style={
          departmentImage
            ? {
                backgroundImage: `
                  linear-gradient(
                    90deg,
                    rgba(5, 18, 13, 0.95) 0%,
                    rgba(5, 18, 13, 0.72) 48%,
                    rgba(5, 18, 13, 0.20) 100%
                  ),
                  url("${departmentImage}")
                `,
              }
            : undefined
        }
      >
        <div className="world-hero__content">
          <button
            type="button"
            className="world-back"
            onClick={() =>
              navigateTo(
                `/mundo/${slug}`
              )
            }
          >
            ← Voltar para {world.title}
          </button>

          <p className="world-eyebrow">
            {world.title}
          </p>

          <h1>
            {department.name}
          </h1>

          <p className="world-hero__description">
            {department.description ||
              `Explore ${department.name} dentro do universo ${world.title} da AgroNexus.`}
          </p>

          <div className="world-hero__actions">
            <a
              href="#departamento-conteudo"
              className="world-button"
            >
              Explorar
            </a>

            <button
              type="button"
              className="world-button world-button--secondary"
              onClick={() =>
                navigateTo(
                  '/marketplace'
                )
              }
            >
              Ver Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================
          DEPARTMENT CONTENT
          ====================================================== */}

      <section
        id="departamento-conteudo"
        className="world-section"
      >
        <div className="world-section__heading">
          <p className="world-eyebrow">
            {world.title}
          </p>

          <h2>
            {department.name}
          </h2>

          <p>
            Espécies, produtos,
            serviços, conhecimento
            e conexões relacionadas
            a este departamento.
          </p>
        </div>

        <div className="world-highlight-grid">
          <article className="world-highlight">
            <span>
              01
            </span>

            <h3>
              Espécies
            </h3>

            <p>
              Descubra espécies,
              variedades, raças,
              mutações e grupos
              relacionados.
            </p>

            {hasSpecies && (
              <strong>
                {
                  department
                    .species
                    .length
                }{' '}
                registros
              </strong>
            )}
          </article>

          <article className="world-highlight">
            <span>
              02
            </span>

            <h3>
              Produtos
            </h3>

            <p>
              Produtos, alimentação,
              habitats, equipamentos
              e soluções relacionadas.
            </p>

            {hasProducts && (
              <strong>
                {
                  department
                    .products
                    .length
                }{' '}
                ofertas
              </strong>
            )}
          </article>

          <article className="world-highlight">
            <span>
              03
            </span>

            <h3>
              Serviços
            </h3>

            <p>
              Especialistas,
              profissionais e
              serviços conectados
              a este universo.
            </p>

            {hasServices && (
              <strong>
                {
                  department
                    .services
                    .length
                }{' '}
                serviços
              </strong>
            )}
          </article>

          <article className="world-highlight">
            <span>
              04
            </span>

            <h3>
              Conhecimento
            </h3>

            <p>
              Guias, manejo,
              ciência, cuidados,
              origem e conteúdo
              especializado.
            </p>

            {hasContent && (
              <strong>
                {
                  department
                    .content
                    .length
                }{' '}
                conteúdos
              </strong>
            )}
          </article>
        </div>
      </section>

      {/* ======================================================
          DISCOVERY PLACEHOLDER
          ====================================================== */}

      <section className="world-trust">
        <div className="world-trust__intro">
          <p className="world-eyebrow">
            BABYLON · DEPARTMENT
          </p>

          <h2>
            Este departamento
            agora tem endereço próprio.
          </h2>

          <p>
            A partir daqui,
            espécies, exemplares,
            produtos, serviços,
            especialistas e conteúdo
            poderão ser conectados
            sem transformar a Home
            em uma página infinita.
          </p>
        </div>

        <div className="world-trust__grid">
          <article>
            <span>
              01
            </span>

            <h3>
              Descoberta
            </h3>

            <p>
              Navegação própria
              dentro do universo
              selecionado.
            </p>
          </article>

          <article>
            <span>
              02
            </span>

            <h3>
              Catálogo
            </h3>

            <p>
              Produtos e ofertas
              podem ser ligados
              diretamente ao
              departamento.
            </p>
          </article>

          <article>
            <span>
              03
            </span>

            <h3>
              Conteúdo
            </h3>

            <p>
              Conhecimento e
              informações deixam
              de ficar separados
              do comércio.
            </p>
          </article>

          <article>
            <span>
              04
            </span>

            <h3>
              Serviços
            </h3>

            <p>
              Profissionais e
              serviços especializados
              podem aparecer no
              contexto correto.
            </p>
          </article>
        </div>
      </section>

      {/* ======================================================
          DEPARTMENT CLOSE
          ====================================================== */}

      <section className="world-commerce">
        <div>
          <p className="world-eyebrow">
            AGRONEXUS
          </p>

          <h2>
            Um departamento.
            Um mundo dentro
            de outro mundo.
          </h2>

          <p>
            A arquitetura Babylon
            conecta biodiversidade,
            marketplace, serviços
            e conhecimento sem
            duplicar páginas e
            registros.
          </p>
        </div>

        <button
          type="button"
          className="world-button"
          onClick={() =>
            navigateTo(
              `/mundo/${slug}`
            )
          }
        >
          Voltar para {world.title}
        </button>
      </section>
    </main>
  )
}

/* ============================================================
   WORLD PAGE
   ============================================================ */

export default function WorldPage({
  slug,
  departmentSlug = null,
}) {
  const world =
    getWorldById(slug)

  if (!world) {
    return <MissingWorld />
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
  ).map(
    normalizeDepartment
  )

  const department =
    findDepartment(
      departments,
      departmentSlug
    )

  if (
    departmentSlug &&
    !department
  ) {
    return (
      <MissingDepartment
        world={world}
        slug={slug}
      />
    )
  }

  if (
    departmentSlug &&
    department
  ) {
    return (
      <DepartmentView
        world={world}
        department={
          department
        }
        slug={slug}
        media={media}
      />
    )
  }

  const highlights =
    world.highlights ||
    world.features ||
    []

  const heroImage =
    media?.hero ||
    ''

  return (
    <main
      className={
        `world-page world-page--${slug}`
      }
    >
      {/* ======================================================
          HERO DO MUNDO
          ====================================================== */}

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
            onClick={() =>
              navigateTo('/')
            }
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

      {/* ======================================================
          DEPARTAMENTOS
          ====================================================== */}

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
            Cada área abre
            seu próprio universo
            de descoberta,
            conhecimento,
            produtos, serviços
            e especialistas.
          </p>
        </div>

        <div className="world-category-grid">
          {departments.map(
            (
              departmentItem,
              index
            ) => {
              const destination =
                departmentItem.path ||
                `/mundo/${slug}/${departmentItem.id}`

              return (
                <button
                  type="button"
                  className="world-category-card"
                  key={
                    departmentItem.id
                  }
                  onClick={() =>
                    navigateTo(
                      destination
                    )
                  }
                >
                  {departmentItem.image && (
                    <img
                      src={
                        departmentItem
                          .image
                      }
                      alt={
                        departmentItem
                          .name
                      }
                      loading="lazy"
                    />
                  )}

                  <div className="world-category-card__content">
                    <span>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    <h3>
                      {
                        departmentItem
                          .name
                      }
                    </h3>

                    {departmentItem.description && (
                      <p>
                        {
                          departmentItem
                            .description
                        }
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

      {/* ======================================================
          DESTAQUES
          ====================================================== */}

      {highlights.length > 0 && (
        <section className="world-section world-section--highlights">
          <div className="world-section__heading">
            <p className="world-eyebrow">
              DESCOBRIR
            </p>

            <h2>
              Muito além
              de comprar.
            </h2>
          </div>

          <div className="world-highlight-grid">
            {highlights.map(
              (
                item,
                index
              ) => (
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
                    {String(
                      index + 1
                    ).padStart(
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
                      {
                        item.description
                      }
                    </p>
                  )}
                </article>
              )
            )}
          </div>
        </section>
      )}

      {/* ======================================================
          ORIGEM / PROCEDÊNCIA
          ====================================================== */}

      <section
        id="procedencia"
        className="world-trust"
      >
        <div className="world-trust__intro">
          <p className="world-eyebrow">
            ORIGEM · PROCEDÊNCIA · CONHECIMENTO
          </p>

          <h2>
            Saber de onde
            vem faz parte
            da escolha.
          </h2>

          <p>
            Na AgroNexus,
            origem e procedência
            fazem parte da própria
            arquitetura dos registros,
            ofertas, parceiros e
            conexões do ecossistema.
          </p>
        </div>

        <div className="world-trust__grid">
          <article>
            <span>
              01
            </span>

            <h3>
              Origem
            </h3>

            <p>
              Informações associadas
              à origem e ao contexto
              do registro.
            </p>
          </article>

          <article>
            <span>
              02
            </span>

            <h3>
              Responsável
            </h3>

            <p>
              Criadores, produtores,
              especialistas, lojas
              e parceiros ligados
              ao que oferecem.
            </p>
          </article>

          <article>
            <span>
              03
            </span>

            <h3>
              Documentação
            </h3>

            <p>
              Documentos e
              identificações
              aplicáveis podem
              acompanhar cada
              registro.
            </p>
          </article>

          <article>
            <span>
              04
            </span>

            <h3>
              Histórico
            </h3>

            <p>
              Conhecimento e
              contexto acompanham
              a jornada dentro
              do ecossistema.
            </p>
          </article>
        </div>
      </section>

      {/* ======================================================
          ECOSSISTEMA
          ====================================================== */}

      <section className="world-commerce">
        <div>
          <p className="world-eyebrow">
            AGRONEXUS LIVING ECOSYSTEM
          </p>

          <h2>
            Descobrir.
            Conhecer.
            Adquirir.
            Cuidar.
            Permanecer.
          </h2>

          <p>
            Biodiversidade,
            marketplace, saúde,
            alimentação, habitats,
            equipamentos, serviços,
            conhecimento,
            comunidade, recorrência
            e benefícios conectados
            em um único sistema.
          </p>
        </div>

        <button
          type="button"
          className="world-button"
          onClick={() =>
            navigateTo('/')
          }
        >
          Continuar explorando
        </button>
      </section>
    </main>
  )
}
