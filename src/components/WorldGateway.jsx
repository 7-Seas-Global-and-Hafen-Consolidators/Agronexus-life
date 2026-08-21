/**
 * AgroNexus — World Gateway
 * Babylon Rebuild
 *
 * Portal visual principal para os grandes mundos AgroNexus.
 *
 * Cada universo possui:
 * - rota Babylon própria
 * - identidade visual própria
 * - fotografia editorial própria
 * - experiência independente
 *
 * Rotas:
 * /mundo/:slug
 *
 * O componente utiliza exclusivamente
 * o hash routing nativo da AgroNexus.
 */

import {
  agronexusWorlds,
} from '../data/agronexusCatalog'

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
   DESTINATION
   ============================================================ */

function getWorldDestination(
  world
) {
  return `/mundo/${world.id}`
}

/* ============================================================
   PUBLIC ASSET
   ============================================================ */

function resolvePublicAsset(
  assetPath
) {
  if (!assetPath) {
    return ''
  }

  if (
    assetPath.startsWith(
      'http://'
    ) ||
    assetPath.startsWith(
      'https://'
    ) ||
    assetPath.startsWith(
      'data:'
    )
  ) {
    return assetPath
  }

  const cleanPath =
    assetPath.replace(
      /^\/+/,
      ''
    )

  return `${import.meta.env.BASE_URL}${cleanPath}`
}

/* ============================================================
   WORLD LABELS
   ============================================================ */

function getWorldLabel(type) {
  const labels = {
    biodiversity:
      'Biodiversidade',

    animals:
      'Animais',

    aquatic:
      'Aquático',

    botanical:
      'Botânico',

    market:
      'Marketplace',

    care:
      'Saúde & Bem-estar',
  }

  return (
    labels[type] ||
    'AgroNexus'
  )
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function WorldGateway({
  onNavigate,
}) {
  const handleNavigate = (
    world
  ) => {
    const destination =
      getWorldDestination(
        world
      )

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

    navigateTo(
      destination
    )
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
          GRANDES MUNDOS
          ====================================================== */}

      <div className="agx-world-gateway__grid">
        {agronexusWorlds.map(
          (
            world,
            index
          ) => {
            const destination =
              getWorldDestination(
                world
              )

            const worldLabel =
              getWorldLabel(
                world.type
              )

            const media =
              getWorldMedia(
                world.id
              )

            const cardImage =
              resolvePublicAsset(
                media?.card ||
                media?.hero ||
                ''
              )

            const mediaStyle =
              cardImage
                ? {
                    backgroundImage: `
                      linear-gradient(
                        180deg,
                        rgba(7, 18, 13, 0.08) 0%,
                        rgba(7, 18, 13, 0.18) 48%,
                        rgba(7, 18, 13, 0.86) 100%
                      ),
                      url("${cardImage}")
                    `,

                    backgroundSize:
                      'cover',

                    backgroundPosition:
                      'center',
                  }
                : undefined

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
                    FOTOGRAFIA
                    ============================================ */}

                <div className="agx-world-card__media">
                  <div
                    className="agx-world-card__image-placeholder"
                    style={
                      mediaStyle
                    }
                  >
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
                    <span>
                      Explorar mundo
                    </span>

                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </div>
              </button>
            )
          }
        )}
      </div>

      {/* ======================================================
          ECOSSISTEMA
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

        <span>
          RECORRÊNCIA
        </span>

        <span>
          BENEFÍCIOS
        </span>
      </div>
    </section>
  )
}
