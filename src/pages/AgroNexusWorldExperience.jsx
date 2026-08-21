/**
 * AgroNexus™ — World Experience Bridge
 *
 * Liga os mundos públicos ao acervo real ingerido.
 *
 * Primeira implementação:
 * - Aquarismo
 * - Corais & Reef
 *
 * Usa diretamente:
 * - WorldPage
 * - Fish Nature
 * - AgroNexusProductCatalog
 *
 * Disponibilidade da fonte NÃO remove registros.
 */

import WorldPage from './WorldPage'

import AgroNexusProductCatalog from '../components/AgroNexusProductCatalog'

import {
  FISH_NATURE_PRODUCTS,
} from '../data/fishNature/products'

/* ============================================================
   SOURCE MEDIA
   ============================================================ */

function getSourceHero(
  world
) {
  const product =
    FISH_NATURE_PRODUCTS.find(
      (item) =>
        item.world === world &&
        (
          item.primaryImage ||
          item.images?.length
        )
    )

  return (
    product?.primaryImage ||
    product?.images?.[
      product.images.length - 1
    ] ||
    ''
  )
}

/* ============================================================
   WORLD EXPERIENCE
   ============================================================ */

export default function AgroNexusWorldExperience({
  slug,
  departmentSlug = null,
}) {
  const supportsRealCatalog =
    slug === 'aquarismo' ||
    slug === 'corais'

  const sourceHero =
    supportsRealCatalog
      ? getSourceHero(slug)
      : ''

  return (
    <>
      {
        sourceHero && (
          <style>
            {`
              .world-page--${slug}
              .world-hero {
                background-image:
                  linear-gradient(
                    90deg,
                    rgba(
                      5,
                      18,
                      13,
                      0.94
                    )
                    0%,
                    rgba(
                      5,
                      18,
                      13,
                      0.72
                    )
                    46%,
                    rgba(
                      5,
                      18,
                      13,
                      0.18
                    )
                    100%
                  ),
                  url("${sourceHero}")
                  !important;

                background-size:
                  cover !important;

                background-position:
                  center !important;

                background-repeat:
                  no-repeat !important;
              }
            `}
          </style>
        )
      }

      <WorldPage
        slug={slug}
        departmentSlug={
          departmentSlug
        }
      />

      {
        supportsRealCatalog && (
          <AgroNexusProductCatalog
            world={slug}
          />
        )
      }
    </>
  )
}
