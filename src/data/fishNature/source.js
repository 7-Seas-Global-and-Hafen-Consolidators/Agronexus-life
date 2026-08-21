/**
 * AgroNexus — Babylon / Fish Nature Source Registry
 * Project Babylon Rebuild
 *
 * Fonte-base:
 * Fish Nature
 *
 * Snapshot minerado:
 * 21/08/2026
 *
 * REGRA BABYLON:
 *
 * - preservar TODO dado útil encontrado no source;
 * - preservar produtos disponíveis e indisponíveis;
 * - preservar organismos vivos mesmo quando OutOfStock;
 * - preservar todas as imagens recuperadas;
 * - preservar TODAS as variantes responsivas encontradas;
 * - preservar rotas, categorias, subcategorias, preços, estoque,
 *   descrições, marcas, pesos, URLs e procedência;
 * - fazer curadoria somente depois da ingestão.
 *
 * DISPONIBILIDADE DA FONTE NÃO DEFINE DISPONIBILIDADE BABYLON.
 */

export const FISH_NATURE_SOURCE_ID =
  'fish-nature'

export const FISH_NATURE_SOURCE_NAME =
  'Fish Nature'

export const FISH_NATURE_SOURCE_URL =
  'https://www.fishnature.com.br/'

export const FISH_NATURE_SNAPSHOT_DATE =
  '2026-08-21'

/* ============================================================
   POLÍTICA DE INGESTÃO
   ============================================================ */

export const FISH_NATURE_ARCHIVE_POLICY = {
  preserveAllUsefulSourceData: true,

  preserveAvailableProducts: true,

  preserveUnavailableProducts: true,

  preserveOutOfStockProducts: true,

  preserveLivingOrganisms: true,

  preserveCommercialProducts: true,

  preserveSourceNavigation: true,

  preserveCategories: true,

  preserveSubcategories: true,

  preserveBrands: true,

  preserveDescriptions: true,

  preservePrices: true,

  preservePreviousPrices: true,

  preserveInventory: true,

  preserveAvailabilityMetadata: true,

  preserveWeights: true,

  preserveVariants: true,

  preserveProductUrls: true,

  preserveSourceUrls: true,

  preserveOriginalUrls: true,

  preserveProvenance: true,

  preserveAllRecoveredMedia: true,

  preserveAllRecoveredResponsiveVariants: true,

  useHighestRecoveredResolutionAsPrimary: true,

  curateOnlyAfterIngestion: true,

  sourceAvailabilityControlsBabylonAvailability: false,
}

/* ============================================================
   ESTATÍSTICAS DO SNAPSHOT FORNECIDO
   ============================================================ */

/**
 * Estes números descrevem especificamente o HTML/source bruto
 * fornecido para mineração nesta etapa.
 *
 * Eles NÃO representam o tamanho total da loja Fish Nature.
 *
 * As 137 rotas internas descobertas servirão como mapa para
 * expansão da mineração nas páginas individuais.
 *
 * MÍDIA:
 *
 * rawCdnUrlOccurrences = número bruto de ocorrências no HTML.
 * uniqueRecoveredCdnUrls = URLs CDN únicas após normalização.
 * recoveredMediaIdentities = identidades fotográficas/visuais
 * distintas após agrupar variantes responsivas da mesma mídia.
 */

export const FISH_NATURE_SNAPSHOT_STATS = {
  rawSourceCharacters:
    1058045,

  navigationEntries:
    95,

  internalRoutes:
    137,

  completeProductCards:
    27,

  availableProductCards:
    20,

  unavailableProductCards:
    7,

  rawCdnUrlOccurrences:
    228,

  uniqueRecoveredCdnUrls:
    201,

  recoveredMediaIdentities:
    33,

  detectedBrands:
    4,
}

/* ============================================================
   MARCAS DETECTADAS NO SNAPSHOT
   ============================================================ */

export const FISH_NATURE_SOURCE_BRANDS = [
  {
    id:
      'aquamedic',

    name:
      'AQUAMEDIC',

    source:
      FISH_NATURE_SOURCE_ID,
  },

  {
    id:
      'caribsea',

    name:
      'CARIBSEA',

    source:
      FISH_NATURE_SOURCE_ID,
  },

  {
    id:
      'dr-bassleer',

    name:
      'Dr. Bassleer',

    source:
      FISH_NATURE_SOURCE_ID,
  },

  {
    id:
      'oceantech',

    name:
      'OCEANTECH',

    source:
      FISH_NATURE_SOURCE_ID,
  },
]

/* ============================================================
   UNIVERSOS BABYLON RELACIONADOS
   ============================================================ */

export const FISH_NATURE_WORLDS = [
  'aquarismo',
  'corais',
]

/* ============================================================
   DOMÍNIOS DE CONTEÚDO IDENTIFICADOS
   ============================================================ */

export const FISH_NATURE_CONTENT_DOMAINS = [
  'aquapaisagismo',

  'condicionadores-e-testes',

  'equipamentos',

  'marinho',

  'racoes',

  'peixes-agua-doce',

  'peixes-marinhos',

  'corais-e-invertebrados',

  'servicos',

  'conhecimento',
]

/* ============================================================
   GRUPOS BIOLÓGICOS IDENTIFICADOS
   ============================================================ */

export const FISH_NATURE_LIVING_GROUPS = [
  'peixes-agua-doce',

  'peixes-marinhos',

  'carpas-nishikigoi',

  'tetras',

  'bandeiras',

  'discos-selvagens',

  'cascudos',

  'coridoras',

  'invertebrados-agua-doce',

  'anjos',

  'anthias',

  'borboletas',

  'centropyge',

  'donzelas',

  'gobies-e-blennies',

  'palhacos',

  'puffers',

  'rabbits-foxface',

  'tangs',

  'trigger',

  'wrasses',

  'corais',

  'lps',

  'sps',

  'softs',

  'anemonas',

  'tridacnas',

  'estrelas',

  'ouricos',

  'pepinos',

  'camaroes',

  'invertebrados-marinhos',
]

/* ============================================================
   GRUPOS COMERCIAIS IDENTIFICADOS
   ============================================================ */

export const FISH_NATURE_COMMERCE_GROUPS = [
  'racoes',

  'suplementos',

  'condicionadores',

  'testes',

  'sal-marinho',

  'substratos',

  'rochas',

  'hardscape',

  'fertilizantes',

  'tesouras-e-pincas',

  'bombas-submersas',

  'filtros-externos',

  'midias-filtrantes',

  'skimmers',

  'luminarias',

  'termostatos',

  'acessorios',
]

/* ============================================================
   POLÍTICA DE MÍDIA
   ============================================================ */

export const FISH_NATURE_MEDIA_POLICY = {
  preserveEveryRecoveredPhotograph:
    true,

  preserveEveryRecoveredVariant:
    true,

  deduplicateSamePhotographAcrossResolutions:
    true,

  preserveDistinctGalleryImages:
    true,

  primaryImageStrategy:
    'highest-recovered-resolution',

  preserveSourceCdnUrl:
    true,

  preserveSourcePage:
    true,

  preserveResponsiveVariants:
    true,

  preserveThemeAssets:
    true,

  preserveProductAssets:
    true,

  preserveOrganismAssets:
    true,
}

/* ============================================================
   PROCEDÊNCIA PADRÃO
   ============================================================ */

export const FISH_NATURE_PROVENANCE = {
  source:
    FISH_NATURE_SOURCE_ID,

  sourceName:
    FISH_NATURE_SOURCE_NAME,

  sourceUrl:
    FISH_NATURE_SOURCE_URL,

  sourceType:
    'raw-html-snapshot',

  snapshotDate:
    FISH_NATURE_SNAPSHOT_DATE,
}

/* ============================================================
   REGISTRO CENTRAL DA FONTE
   ============================================================ */

export const FISH_NATURE_SOURCE = {
  id:
    FISH_NATURE_SOURCE_ID,

  name:
    FISH_NATURE_SOURCE_NAME,

  url:
    FISH_NATURE_SOURCE_URL,

  snapshotDate:
    FISH_NATURE_SNAPSHOT_DATE,

  worlds:
    FISH_NATURE_WORLDS,

  contentDomains:
    FISH_NATURE_CONTENT_DOMAINS,

  livingGroups:
    FISH_NATURE_LIVING_GROUPS,

  commerceGroups:
    FISH_NATURE_COMMERCE_GROUPS,

  brands:
    FISH_NATURE_SOURCE_BRANDS,

  stats:
    FISH_NATURE_SNAPSHOT_STATS,

  archivePolicy:
    FISH_NATURE_ARCHIVE_POLICY,

  mediaPolicy:
    FISH_NATURE_MEDIA_POLICY,

  provenance:
    FISH_NATURE_PROVENANCE,

  active:
    true,
}

/* ============================================================
   HELPERS
   ============================================================ */

export function createFishNatureProvenance(
  overrides = {}
) {
  return {
    ...FISH_NATURE_PROVENANCE,
    ...overrides,
  }
}

export function createFishNatureMetadata(
  metadata = {}
) {
  return {
    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    archivePolicy:
      'retain-regardless-of-source-availability',

    ...metadata,
  }
}

export function createFishNatureMediaMetadata(
  metadata = {}
) {
  return {
    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserveAllVariants:
      true,

    primaryImageStrategy:
      'highest-recovered-resolution',

    ...metadata,
  }
}

/* ============================================================
   API DA FONTE
   ============================================================ */

export const fishNatureSourceRegistry = {
  source:
    FISH_NATURE_SOURCE,

  policy:
    FISH_NATURE_ARCHIVE_POLICY,

  mediaPolicy:
    FISH_NATURE_MEDIA_POLICY,

  stats:
    FISH_NATURE_SNAPSHOT_STATS,

  brands:
    FISH_NATURE_SOURCE_BRANDS,

  worlds:
    FISH_NATURE_WORLDS,

  contentDomains:
    FISH_NATURE_CONTENT_DOMAINS,

  livingGroups:
    FISH_NATURE_LIVING_GROUPS,

  commerceGroups:
    FISH_NATURE_COMMERCE_GROUPS,

  provenance:
    FISH_NATURE_PROVENANCE,

  createProvenance:
    createFishNatureProvenance,

  createMetadata:
    createFishNatureMetadata,

  createMediaMetadata:
    createFishNatureMediaMetadata,
}

export default FISH_NATURE_SOURCE
