/**
 * AgroNexus™ — World Experience Bridge
 * Liga cada mundo ao catálogo universal AgroNexus.
 */

import WorldPage from './WorldPage'
import AgroNexusProductCatalog from '../components/AgroNexusProductCatalog'
import { getOffersByWorld } from '../data/marketCatalog'
import { FISH_NATURE_PRODUCTS } from '../data/fishNature/products'

function getSourceHero(world) {
  const product = FISH_NATURE_PRODUCTS.find(
    (item) => item.world === world && (item.primaryImage || item.images?.length)
  )

  return product?.primaryImage || product?.images?.[product.images.length - 1] || ''
}

export default function AgroNexusWorldExperience({ slug, departmentSlug = null }) {
  const catalogOffers = getOffersByWorld(slug)
  const hasCatalog = catalogOffers.length > 0
  const sourceHero = slug === 'aquarismo' || slug === 'corais' ? getSourceHero(slug) : ''

  return (
    <>
      {sourceHero ? (
        <style>{`
          .world-page--${slug} .world-hero {
            background-image:
              linear-gradient(90deg,rgba(5,18,13,.94) 0%,rgba(5,18,13,.72) 46%,rgba(5,18,13,.18) 100%),
              url("${sourceHero}") !important;
            background-size:cover !important;
            background-position:center !important;
            background-repeat:no-repeat !important;
          }
        `}</style>
      ) : null}

      <WorldPage slug={slug} departmentSlug={departmentSlug} />

      {hasCatalog && !departmentSlug ? (
        <AgroNexusProductCatalog world={slug} />
      ) : null}
    </>
  )
}
