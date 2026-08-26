import WorldPage from './WorldPage'
import AgroNexusProductCatalog from '../components/AgroNexusProductCatalog'
import { getOffersByWorld } from '../data/marketCatalog'
import { FISH_NATURE_PRODUCTS } from '../data/fishNature/products'

function firstMedia(items = []) {
  for (const item of items) {
    const src = item?.image || item?.primaryImage || item?.images?.find(Boolean)
    if (src) return src
  }
  return ''
}

function getSourceHero(world, departmentSlug) {
  const fish = FISH_NATURE_PRODUCTS.filter((item) => {
    const matchesWorld = item.world === world
    const matchesDepartment = !departmentSlug || item.category === departmentSlug || item.categories?.includes?.(departmentSlug)
    return matchesWorld && matchesDepartment
  })
  if (fish.length) return firstMedia(fish)

  const offers = getOffersByWorld(world).filter((item) => !departmentSlug || item.categories?.includes(departmentSlug) || item.type === departmentSlug)
  return firstMedia(offers)
}

export default function AgroNexusWorldExperience({ slug, departmentSlug = null }) {
  const worldOffers = getOffersByWorld(slug)
  const departmentOffers = departmentSlug
    ? worldOffers.filter((item) => item.categories?.includes(departmentSlug) || item.type === departmentSlug)
    : worldOffers
  const hasCatalog = departmentOffers.length > 0
  const sourceHero = getSourceHero(slug, departmentSlug)

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

      {hasCatalog ? (
        <AgroNexusProductCatalog world={slug} category={departmentSlug || null} />
      ) : null}
    </>
  )
}
