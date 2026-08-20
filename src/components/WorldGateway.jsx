/**
 * AgroNexus — World Gateway
 * Babylon Rebuild
 *
 * Porta visual principal para os grandes mundos AgroNexus.
 *
 * Cada universo possui uma rota Babylon própria:
 * /mundo/:slug
 *
 * O componente não depende de React Router.
 * A navegação utiliza o hash routing nativo já existente
 * na aplicação AgroNexus.
 */

import {
  agronexusWorlds,
} from '../data/agronexusCatalog'

function navigateTo(path) {
  window.location.hash = `#${path}`
}

function getWorldDestination(world) {
  return `/mundo/${world.id}`
}

function getWorldLabel(type) {
  const labels = {
    biodiversity: 'Biodiversidade',
    animals: 'Animais',
    aquatic: 'Aquático',
    botanical: 'Botânico',
    market: 'Marketplace',
    care: 'Saúde & Bem-estar',
  }

  return (
    labels[type] ||
    'AgroNexus'
  )
}

export default function WorldGateway({
  onNavigate,
}) {
  const handleNavigate = (
    world
  ) => {
    const destination =
      getWorldDestination(world)

    if (
      typeof onNavigate ===
      'function'
    ) {
      onNavigate(
        destination,
        world
      )

      return
    }

    navigateTo(destination)
  }

  return (
    <section
      className="agx-world-gateway"
      id="agronexus-worlds"
      aria-labelledby="agronexus-worlds-title"
    >
      {/* ======================================================
          CABEÇALHO
          ====================================================== */}

      <div className="agx-world-gateway__header">
        <span className="agx-world-gateway__eyebrow">
          AGRONEXUS · LIVING ECOSYSTEM
        </span>

        <h2
          id="agronexus-worlds-title"
        >
          Cada universo abre
          um mundo.
        </h2>

        <p>
          Animais, biodiversidade,
          plantas, aquarismo,
          alimentação, saúde,
          habitats, equipamentos,
          serviços e conhecimento
          conectados em um único
          ecossistema.
        </p>
      </div>

      {/* ======================================================
          GRID DE MUNDOS
          ====================================================== */}

      <div className="agx-world-gateway__grid">
        {agronexusWorlds.map(
          (world, index) => {
            const destination =
              getWorldDestination(
                world
              )

            const worldLabel =
              getWorldLabel(
                world.type
              )

            return (
              <button
                key={world.id}
                type="button"
                className={
                  `agx-world-card agx-world-card--${world.type}`
                }
                onClick={() =>
                  handleNavigate(
                    world
                  )
                }
                aria-label={
                  `Explorar ${world.name}`
                }
                data-world={
                  world.id
                }
                data-destination={
                  destination
                }
              >
                {/* ============================================
                    ÁREA VISUAL

                    O placeholder permanece somente enquanto
                    os novos assets Babylon ainda não foram
                    associados ao worldMedia.
                    ============================================ */}

                <div className="agx-world-card__media">
                  <div className="agx-world-card__image-placeholder">
                    <span className="agx-world-card__index">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    <span className="agx-world-card__media-name">
                      {world.name}
                    </span>
                  </div>
                </div>

                {/* ============================================
                    CONTEÚDO
                    ============================================ */}

                <div className="agx-world-card__content">
                  <span className="agx-world-card__type">
                    {worldLabel}
                  </span>

                  <h3>
                    {world.name}
                  </h3>

                  <p>
                    {
                      world.description
                    }
                  </p>

                  <span className="agx-world-card__cta">
                    Explorar mundo
                    <span
                      aria-hidden="true"
                    >
                      {' '}→
                    </span>
                  </span>
                </div>
              </button>
            )
          }
        )}
      </div>

      {/* ======================================================
          CONEXÃO DO ECOSSISTEMA
          ====================================================== */}

      <div className="agx-world-gateway__footer">
        <span>
          BIODIVERSIDADE
        </span>

        <span>
          CONHECIMENTO
        </span>

        <span>
          MERCADO
        </span>

        <span>
          SAÚDE
        </span>

        <span>
          SERVIÇOS
        </span>

        <span>
          CONEXÃO
        </span>
      </div>
    </section>
  )
}
