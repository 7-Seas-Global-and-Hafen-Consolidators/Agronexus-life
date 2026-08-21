/**
 * AgroNexus — Babylon Aquarismo Seeds
 * Project Babylon Rebuild
 *
 * Aggregation layer for the Aquarism world.
 *
 * Fish Nature source modules:
 * - source
 * - navigation
 * - products
 * - media
 *
 * RULE:
 * This file aggregates structured Babylon data.
 * It does not duplicate raw source payloads.
 */

import {
  FISH_NATURE_SOURCE,
  FISH_NATURE_SOURCE_BRANDS,
} from '../fishNature/source'

import {
  FISH_NATURE_NAVIGATION,
  FISH_NATURE_FRESHWATER_ROUTES,
  FISH_NATURE_MARINE_FISH_ROUTES,
  FISH_NATURE_CORAL_ROUTES,
  FISH_NATURE_AQUASCAPING_ROUTES,
  FISH_NATURE_WATER_CARE_ROUTES,
  FISH_NATURE_EQUIPMENT_ROUTES,
  FISH_NATURE_MARINE_COMMERCE_ROUTES,
  FISH_NATURE_FOOD_ROUTES,
  FISH_NATURE_SUPPORT_ROUTES,
  FISH_NATURE_MINING_QUEUE,
} from '../fishNature/navigation'

import {
  FISH_NATURE_PRODUCTS,
  FISH_NATURE_LIVING_PRODUCTS,
  FISH_NATURE_FOOD_PRODUCTS,
  FISH_NATURE_HABITAT_PRODUCTS,
  FISH_NATURE_WATER_CARE_PRODUCTS,
  FISH_NATURE_OTHER_PRODUCTS,
  FISH_NATURE_AVAILABLE_PRODUCTS,
  FISH_NATURE_UNAVAILABLE_PRODUCTS,
  FISH_NATURE_PRODUCT_MEDIA,
} from '../fishNature/products'

import {
  FISH_NATURE_MEDIA_ARCHIVE,
  FISH_NATURE_PRODUCT_MEDIA as FISH_NATURE_ARCHIVE_PRODUCT_MEDIA,
  FISH_NATURE_THEME_MEDIA,
  FISH_NATURE_ALL_MEDIA_URLS,
  FISH_NATURE_PRIMARY_MEDIA_URLS,
  FISH_NATURE_MEDIA_STATS,
  FISH_NATURE_MEDIA_VALIDATION,
} from '../fishNature/media'

/* ============================================================
   PEIXES
   ============================================================ */

export const AQUARISMO_FISH_SEEDS =
  FISH_NATURE_LIVING_PRODUCTS.filter(
    (item) =>
      item.type === 'fish' ||
      item.world === 'aquarismo'
  )

/* ============================================================
   CORAIS & INVERTEBRADOS
   ============================================================ */

export const AQUARISMO_CORAL_SEEDS =
  FISH_NATURE_LIVING_PRODUCTS.filter(
    (item) =>
      item.world === 'corais'
  )

/* ============================================================
   PLANTAS AQUÁTICAS
   ============================================================ */

export const AQUARISMO_PLANT_SEEDS = []

/* ============================================================
   AQUÁRIOS & HABITATS
   ============================================================ */

export const AQUARISMO_HABITAT_SEEDS =
  FISH_NATURE_HABITAT_PRODUCTS

/* ============================================================
   FILTRAGEM
   ============================================================ */

export const AQUARISMO_FILTER_SEEDS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      /skimmer|filtro|filtr|m[ií]dia/i.test(
        `${item.name || ''} ${item.description || ''}`
      )
  )

/* ============================================================
   BOMBAS & CIRCULAÇÃO
   ============================================================ */

export const AQUARISMO_PUMP_SEEDS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      /bomba|recalque|pump/i.test(
        `${item.name || ''} ${item.description || ''}`
      )
  )

/* ============================================================
   ILUMINAÇÃO
   ============================================================ */

export const AQUARISMO_LIGHTING_SEEDS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      /lumin[aá]ria|led|keloray|artika/i.test(
        `${item.name || ''} ${item.description || ''}`
      )
  )

/* ============================================================
   AQUECIMENTO & REFRIGERAÇÃO
   ============================================================ */

export const AQUARISMO_TEMPERATURE_SEEDS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      /termost|aquec|chiller|temperatura/i.test(
        `${item.name || ''} ${item.description || ''}`
      )
  )

/* ============================================================
   QUÍMICA, TESTES & CONDICIONAMENTO
   ============================================================ */

export const AQUARISMO_WATER_CARE_SEEDS =
  FISH_NATURE_WATER_CARE_PRODUCTS

/* ============================================================
   ALIMENTAÇÃO
   ============================================================ */

export const AQUARISMO_FOOD_SEEDS =
  FISH_NATURE_FOOD_PRODUCTS

/* ============================================================
   SUBSTRATOS & DECORAÇÃO
   ============================================================ */

export const AQUARISMO_SUBSTRATE_SEEDS =
  FISH_NATURE_HABITAT_PRODUCTS

/* ============================================================
   CO2 & AQUAPAISAGISMO
   ============================================================ */

export const AQUARISMO_AQUASCAPING_SEEDS =
  FISH_NATURE_PRODUCTS.filter(
    (item) =>
      /aquapaisag|aquascap|hardscape|tesoura|pin[cç]a|fertiliz/i.test(
        `${item.name || ''} ${item.description || ''} ${item.sourceUrl || ''}`
      )
  )

/* ============================================================
   SERVIÇOS
   ============================================================ */

export const AQUARISMO_SERVICE_SEEDS = []

/* ============================================================
   CONHECIMENTO / GUIAS
   ============================================================ */

export const AQUARISMO_KNOWLEDGE_SEEDS =
  FISH_NATURE_NAVIGATION

/* ============================================================
   ACERVO LEGADO AGRONEXUS
   ============================================================ */

export const AQUARISMO_LEGACY_SEEDS = []

/* ============================================================
   MÍDIA FISH NATURE
   ============================================================ */

export const AQUARISMO_MEDIA_SEEDS =
  FISH_NATURE_MEDIA_ARCHIVE

export const AQUARISMO_PRODUCT_MEDIA =
  FISH_NATURE_PRODUCT_MEDIA

export const AQUARISMO_ARCHIVE_PRODUCT_MEDIA =
  FISH_NATURE_ARCHIVE_PRODUCT_MEDIA

export const AQUARISMO_THEME_MEDIA =
  FISH_NATURE_THEME_MEDIA

export const AQUARISMO_ALL_MEDIA_URLS =
  FISH_NATURE_ALL_MEDIA_URLS

export const AQUARISMO_PRIMARY_MEDIA_URLS =
  FISH_NATURE_PRIMARY_MEDIA_URLS

/* ============================================================
   SOURCE / DISCOVERY
   ============================================================ */

export const AQUARISMO_SOURCE_SEEDS = [
  FISH_NATURE_SOURCE,
]

export const AQUARISMO_SOURCE_BRANDS =
  FISH_NATURE_SOURCE_BRANDS

export const AQUARISMO_NAVIGATION_SEEDS =
  FISH_NATURE_NAVIGATION

export const AQUARISMO_MINING_QUEUE =
  FISH_NATURE_MINING_QUEUE

/* ============================================================
   ROUTE GROUPS
   ============================================================ */

export const AQUARISMO_ROUTE_GROUPS = {
  freshwater:
    FISH_NATURE_FRESHWATER_ROUTES,

  marineFish:
    FISH_NATURE_MARINE_FISH_ROUTES,

  corals:
    FISH_NATURE_CORAL_ROUTES,

  aquascaping:
    FISH_NATURE_AQUASCAPING_ROUTES,

  waterCare:
    FISH_NATURE_WATER_CARE_ROUTES,

  equipment:
    FISH_NATURE_EQUIPMENT_ROUTES,

  marineCommerce:
    FISH_NATURE_MARINE_COMMERCE_ROUTES,

  food:
    FISH_NATURE_FOOD_ROUTES,

  support:
    FISH_NATURE_SUPPORT_ROUTES,
}

/* ============================================================
   PRODUCT STATUS
   ============================================================ */

export const AQUARISMO_AVAILABLE_PRODUCTS =
  FISH_NATURE_AVAILABLE_PRODUCTS

export const AQUARISMO_UNAVAILABLE_PRODUCTS =
  FISH_NATURE_UNAVAILABLE_PRODUCTS

export const AQUARISMO_OTHER_PRODUCTS =
  FISH_NATURE_OTHER_PRODUCTS

/* ============================================================
   REGISTRO COMPLETO DO MUNDO AQUARISMO
   ============================================================ */

export const AQUARISMO_SEEDS = [
  ...FISH_NATURE_PRODUCTS,
  ...AQUARISMO_KNOWLEDGE_SEEDS,
]

/* ============================================================
   API DO SEED
   ============================================================ */

export const babylonAquarismoSeeds = {
  all:
    AQUARISMO_SEEDS,

  source: {
    all:
      AQUARISMO_SOURCE_SEEDS,

    fishNature:
      FISH_NATURE_SOURCE,

    brands:
      AQUARISMO_SOURCE_BRANDS,

    navigation:
      AQUARISMO_NAVIGATION_SEEDS,

    miningQueue:
      AQUARISMO_MINING_QUEUE,
  },

  living: {
    fish:
      AQUARISMO_FISH_SEEDS,

    corals:
      AQUARISMO_CORAL_SEEDS,

    plants:
      AQUARISMO_PLANT_SEEDS,
  },

  commerce: {
    habitats:
      AQUARISMO_HABITAT_SEEDS,

    filters:
      AQUARISMO_FILTER_SEEDS,

    pumps:
      AQUARISMO_PUMP_SEEDS,

    lighting:
      AQUARISMO_LIGHTING_SEEDS,

    temperature:
      AQUARISMO_TEMPERATURE_SEEDS,

    waterCare:
      AQUARISMO_WATER_CARE_SEEDS,

    food:
      AQUARISMO_FOOD_SEEDS,

    substrates:
      AQUARISMO_SUBSTRATE_SEEDS,

    aquascaping:
      AQUARISMO_AQUASCAPING_SEEDS,

    available:
      AQUARISMO_AVAILABLE_PRODUCTS,

    unavailable:
      AQUARISMO_UNAVAILABLE_PRODUCTS,
  },

  media: {
    all:
      AQUARISMO_MEDIA_SEEDS,

    product:
      AQUARISMO_PRODUCT_MEDIA,

    archiveProduct:
      AQUARISMO_ARCHIVE_PRODUCT_MEDIA,

    theme:
      AQUARISMO_THEME_MEDIA,

    urls:
      AQUARISMO_ALL_MEDIA_URLS,

    primaryUrls:
      AQUARISMO_PRIMARY_MEDIA_URLS,

    stats:
      FISH_NATURE_MEDIA_STATS,

    validation:
      FISH_NATURE_MEDIA_VALIDATION,
  },

  routes:
    AQUARISMO_ROUTE_GROUPS,

  services:
    AQUARISMO_SERVICE_SEEDS,

  knowledge:
    AQUARISMO_KNOWLEDGE_SEEDS,

  legacy:
    AQUARISMO_LEGACY_SEEDS,
}

export default AQUARISMO_SEEDS
