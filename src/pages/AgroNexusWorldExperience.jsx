import WorldPage from './WorldPage'
import AgroNexusProductCatalog from '../components/AgroNexusProductCatalog'
import AgroNexusSpeciesGallery from '../components/AgroNexusSpeciesGallery'
import { getOffersByWorld, getOffersByCategory } from '../data/marketCatalog'
import { FISH_NATURE_PRODUCTS } from '../data/fishNature/products'

function firstMedia(items = []) {
  for (const item of items) {
    const src = item?.image || item?.primaryImage || item?.images?.find(Boolean)
    if (src) return src
  }
  return ''
}

function inventoryFor(slug, departmentSlug) {
  const worldItems = getOffersByWorld(slug)
  if (!departmentSlug) return worldItems.length ? worldItems : getOffersByCategory(slug)
  const exact = worldItems.filter((item) => item.categories?.includes(departmentSlug) || item.type === departmentSlug)
  if (exact.length) return exact
  const departmentItems = getOffersByCategory(departmentSlug)
  if (departmentItems.length) return departmentItems
  return getOffersByCategory(slug)
}

function getSourceHero(world, departmentSlug) {
  const fish = FISH_NATURE_PRODUCTS.filter((item) => {
    const tags = [item.world, item.category, ...(item.categories || [])].filter(Boolean)
    return tags.includes(world) && (!departmentSlug || tags.includes(departmentSlug))
  })
  const fishMedia = firstMedia(fish)
  if (fishMedia) return fishMedia
  return firstMedia(inventoryFor(world, departmentSlug))
}

export default function AgroNexusWorldExperience({ slug, departmentSlug = null }) {
  const inventory = inventoryFor(slug, departmentSlug)
  const sourceHero = getSourceHero(slug, departmentSlug)
  const catalogScope = departmentSlug || slug
  const showBirdArchive = slug === 'aves' && (!departmentSlug || ['psitacideos','agapornis','araras','cacatuas','calopsitas','kakarikis','loris','papagaios','periquitos','ringneck','roselas'].includes(departmentSlug))

  return (
    <>
      {sourceHero ? (
        <style>{`
          .world-page--${slug} .world-hero {
            background-image:linear-gradient(90deg,rgba(5,18,13,.94) 0%,rgba(5,18,13,.70) 44%,rgba(5,18,13,.12) 100%),url("${sourceHero}") !important;
            background-size:cover !important;background-position:center !important;background-repeat:no-repeat !important;
          }
        `}</style>
      ) : null}

      <WorldPage slug={slug} departmentSlug={departmentSlug} />

      {showBirdArchive ? <AgroNexusSpeciesGallery category={departmentSlug || null} /> : null}

      {inventory.length ? <AgroNexusProductCatalog category={catalogScope} /> : null}
    </>
  )
}
