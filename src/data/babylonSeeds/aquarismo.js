/**
 * AgroNexus — Babylon Aquarismo Seeds
 * Project Babylon Rebuild
 *
 * Primeira camada de ingestão real do universo Aquarismo.
 *
 * FONTES-BASE:
 * - Reef Aquários
 * - Fish Nature
 * - patrimônio legado AgroNexus
 *
 * REGRA:
 *
 * NÃO inventar registros.
 * NÃO preencher apenas para decorar a interface.
 *
 * Este arquivo recebe exclusivamente material que tenha sido
 * identificado nas fontes Babylon ou no acervo legado existente.
 *
 * Cada registro poderá preservar:
 *
 * source
 * sourceUrl
 * originalUrl
 * localAsset
 * world
 * category
 * subcategory
 * type
 * brand
 * species
 * tags
 * commercial
 * provenance
 */

/* ============================================================
   PEIXES
   ============================================================ */

export const AQUARISMO_FISH_SEEDS = []

/* ============================================================
   CORAIS & INVERTEBRADOS
   ============================================================ */

export const AQUARISMO_CORAL_SEEDS = []

/* ============================================================
   PLANTAS AQUÁTICAS
   ============================================================ */

export const AQUARISMO_PLANT_SEEDS = []

/* ============================================================
   AQUÁRIOS & HABITATS
   ============================================================ */

export const AQUARISMO_HABITAT_SEEDS = []

/* ============================================================
   FILTRAGEM
   ============================================================ */

export const AQUARISMO_FILTER_SEEDS = []

/* ============================================================
   BOMBAS & CIRCULAÇÃO
   ============================================================ */

export const AQUARISMO_PUMP_SEEDS = []

/* ============================================================
   ILUMINAÇÃO
   ============================================================ */

export const AQUARISMO_LIGHTING_SEEDS = []

/* ============================================================
   AQUECIMENTO & REFRIGERAÇÃO
   ============================================================ */

export const AQUARISMO_TEMPERATURE_SEEDS = []

/* ============================================================
   QUÍMICA, TESTES & CONDICIONAMENTO
   ============================================================ */

export const AQUARISMO_WATER_CARE_SEEDS = []

/* ============================================================
   ALIMENTAÇÃO
   ============================================================ */

export const AQUARISMO_FOOD_SEEDS = []

/* ============================================================
   SUBSTRATOS & DECORAÇÃO
   ============================================================ */

export const AQUARISMO_SUBSTRATE_SEEDS = []

/* ============================================================
   CO2 & AQUAPaisagismo
   ============================================================ */

export const AQUARISMO_AQUASCAPING_SEEDS = []

/* ============================================================
   SERVIÇOS
   ============================================================ */

export const AQUARISMO_SERVICE_SEEDS = []

/* ============================================================
   CONHECIMENTO / GUIAS
   ============================================================ */

export const AQUARISMO_KNOWLEDGE_SEEDS = []

/* ============================================================
   ACERVO LEGADO AGRONEXUS
   ============================================================ */

export const AQUARISMO_LEGACY_SEEDS = []

/* ============================================================
   REGISTRO COMPLETO DO MUNDO AQUARISMO
   ============================================================ */

export const AQUARISMO_SEEDS = [
  ...AQUARISMO_FISH_SEEDS,
  ...AQUARISMO_CORAL_SEEDS,
  ...AQUARISMO_PLANT_SEEDS,

  ...AQUARISMO_HABITAT_SEEDS,
  ...AQUARISMO_FILTER_SEEDS,
  ...AQUARISMO_PUMP_SEEDS,
  ...AQUARISMO_LIGHTING_SEEDS,
  ...AQUARISMO_TEMPERATURE_SEEDS,

  ...AQUARISMO_WATER_CARE_SEEDS,
  ...AQUARISMO_FOOD_SEEDS,
  ...AQUARISMO_SUBSTRATE_SEEDS,
  ...AQUARISMO_AQUASCAPING_SEEDS,

  ...AQUARISMO_SERVICE_SEEDS,
  ...AQUARISMO_KNOWLEDGE_SEEDS,

  ...AQUARISMO_LEGACY_SEEDS,
]

/* ============================================================
   API DO SEED
   ============================================================ */

export const babylonAquarismoSeeds = {
  all: AQUARISMO_SEEDS,

  living: {
    fish: AQUARISMO_FISH_SEEDS,
    corals: AQUARISMO_CORAL_SEEDS,
    plants: AQUARISMO_PLANT_SEEDS,
  },

  commerce: {
    habitats: AQUARISMO_HABITAT_SEEDS,
    filters: AQUARISMO_FILTER_SEEDS,
    pumps: AQUARISMO_PUMP_SEEDS,
    lighting: AQUARISMO_LIGHTING_SEEDS,
    temperature: AQUARISMO_TEMPERATURE_SEEDS,
    waterCare: AQUARISMO_WATER_CARE_SEEDS,
    food: AQUARISMO_FOOD_SEEDS,
    substrates: AQUARISMO_SUBSTRATE_SEEDS,
    aquascaping: AQUARISMO_AQUASCAPING_SEEDS,
  },

  services:
    AQUARISMO_SERVICE_SEEDS,

  knowledge:
    AQUARISMO_KNOWLEDGE_SEEDS,

  legacy:
    AQUARISMO_LEGACY_SEEDS,
}

export default AQUARISMO_SEEDS
