// AgroNexus — Plants merge: own wave + tunnel imagery
// Casa cada item do PLANT_WAVE com a foto do túnel (se existir).
// Nenhum item próprio fica sem card: sem foto = placeholder da marca.

import { PLANT_WAVE } from './specialistCatalog/plantWave'
import PLANTS_CATALOG from './plantsCatalog.generated'

const norm = (v = '') =>
  String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '')

const isMatch = (waveName, tunnelName) => {
  const a = norm(waveName)
  const b = norm(tunnelName)
  if (!a || !b) return false
  return b.includes(a) || a.includes(b)
}

const fromWave = PLANT_WAVE.map((w) => {
  const match = PLANTS_CATALOG.find((p) => isMatch(w.name, p.name)) || null
  return {
    id: w.id,
    name: w.name,
    group: w.highlights?.[0] || '',
    scientificName: w.highlights?.[1] || '',
    categories: (w.categories || []).join(' '),
    price: w.referencePrice,
    image: match ? match.image : '',
    origin: match ? 'tunnel' : 'own',
  }
})

const waveCovers = (p) => PLANT_WAVE.some((w) => isMatch(w.name, p.name))

const tunnelOnly = PLANTS_CATALOG.filter((p) => !waveCovers(p)).map((p) => ({
  id: p.id,
  name: p.name,
  group: (p.categories || []).slice(1).join(' ') || 'Ornamentais',
  scientificName: '',
  categories: (p.categories || []).join(' '),
  price: p.price,
  image: p.image || '',
  origin: 'tunnel',
}))

export const PLANTS_MERGED = [...fromWave, ...tunnelOnly]
export default PLANTS_MERGED
