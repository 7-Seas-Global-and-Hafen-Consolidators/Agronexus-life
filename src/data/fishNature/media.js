/**
 * AgroNexus — Babylon / Fish Nature Media Archive
 * Project Babylon Rebuild
 *
 * COMPLETE MEDIA INGESTION
 * FROM PROVIDED FISH NATURE SNAPSHOT
 *
 * SNAPSHOT:
 * 2026-08-21
 *
 * RAW CDN URL OCCURRENCES:
 * 228
 *
 * UNIQUE RECOVERED CDN URLS:
 * 201
 *
 * NORMALIZED MEDIA IDENTITIES:
 * 33
 *
 * RULES:
 *
 * - preserve EVERY recovered unique CDN URL;
 * - preserve EVERY responsive variant;
 * - preserve media from available products;
 * - preserve media from unavailable / OutOfStock products;
 * - preserve organism photography;
 * - preserve product photography;
 * - preserve theme / source imagery;
 * - group only resolution variants of the SAME asset;
 * - keep distinct photographs as distinct media identities;
 * - use highest recovered resolution as primary;
 * - never discard media during ingestion;
 * - curate only after archive construction.
 */

import {
  FISH_NATURE_SOURCE_ID,
  FISH_NATURE_SOURCE_NAME,
  FISH_NATURE_SOURCE_URL,
  FISH_NATURE_SNAPSHOT_DATE,
  createFishNatureMediaMetadata,
} from './source'

/* ============================================================
   CDN ROOTS
   ============================================================ */

const STORE_CDN =
  'https://dcdn-us.mitiendanube.com/stores/003/036/865'

const PRODUCT_CDN =
  `${STORE_CDN}/products`

const THEME_CDN =
  `${STORE_CDN}/themes`

/* ============================================================
   RESPONSIVE VARIANTS
   ============================================================ */

const PRODUCT_RESPONSIVE_SUFFIXES = [
  '-50-0',
  '-100-0',
  '-240-0',
  '-320-0',
  '-480-0',
  '-640-0',
  '-1024-1024',
]

const HERO_RESPONSIVE_SUFFIXES = [
  '-480-0',
  '-640-0',
  '-1024-1024',
  '-1920-1920',
]

/* ============================================================
   HELPERS
   ============================================================ */

const buildVariants = ({
  base,
  extension = 'webp',
  suffixes = PRODUCT_RESPONSIVE_SUFFIXES,
  query = '',
}) =>
  suffixes.map(
    (suffix) =>
      `${base}${suffix}.${extension}${query}`
  )

const buildPrimary = ({
  base,
  extension = 'webp',
  suffix = '-1024-1024',
  query = '',
}) =>
  `${base}${suffix}.${extension}${query}`

const createProductMedia = ({
  id,
  filename,
  extension = 'webp',
}) => {
  const base =
    `${PRODUCT_CDN}/${filename}`

  const variants =
    buildVariants({
      base,
      extension,
    })

  return {
    id,

    kind:
      'product',

    identity:
      `${base}.${extension}`,

    primary:
      buildPrimary({
        base,
        extension,
      }),

    variants,

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,

    preserveAllVariants:
      true,
  }
}

const createHeroMedia = ({
  id,
  filename,
  query =
    '?1278437625761491239',
}) => {
  const base =
    `${THEME_CDN}/amazonas/${filename}`

  const variants =
    buildVariants({
      base,
      extension: 'webp',
      suffixes:
        HERO_RESPONSIVE_SUFFIXES,
      query,
    })

  return {
    id,

    kind:
      'theme',

    identity:
      `${base}.webp`,

    primary:
      buildPrimary({
        base,
        extension:
          'webp',
        suffix:
          '-1920-1920',
        query,
      }),

    variants,

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,

    preserveAllVariants:
      true,
  }
}

/* ============================================================
   THEME / SOURCE MEDIA
   ============================================================ */

export const FISH_NATURE_THEME_MEDIA = [
  createHeroMedia({
    id:
      'fish-nature-media-0001',

    filename:
      '2-slide-1709852920085-607154095-7a682c6c07da38f45e9e78c5c140d6ca1709852922',
  }),

  {
    id:
      'fish-nature-media-0002',

    kind:
      'theme',

    identity:
      `${THEME_CDN}/common/ogimage-325660635-1742386958-47fa1fed2b8b77eec0667193601796a61742386958.png`,

    primary:
      `${THEME_CDN}/common/ogimage-325660635-1742386958-47fa1fed2b8b77eec0667193601796a61742386958.png?0`,

    variants: [
      `${THEME_CDN}/common/ogimage-325660635-1742386958-47fa1fed2b8b77eec0667193601796a61742386958.png?0`,
    ],

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,
  },

  {
    id:
      'fish-nature-media-0003',

    kind:
      'theme',

    identity:
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969.png`,

    primary:
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969.png?0`,

    variants: [
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969.png?0`,
    ],

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,
  },

  {
    id:
      'fish-nature-media-0004',

    kind:
      'theme',

    identity:
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969.webp`,

    primary:
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969-640-0.webp`,

    variants: [
      `${THEME_CDN}/common/logo-1666845665-1709497968-f7685e97a901f09b338c7f25e0320f841709497969-640-0.webp`,
    ],

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,
  },

  createHeroMedia({
    id:
      'fish-nature-media-0005',

    filename:
      '2-slide-1740529536907-7127822830-b83e3178de69efc2ce52dd06553f1a701740529539',
  }),

  {
    id:
      'fish-nature-media-0033',

    kind:
      'theme',

    identity:
      'https://dcdn-us.mitiendanube.com/assets/themes/amazonas/static/images/empty-placeholder.png',

    primary:
      'https://dcdn-us.mitiendanube.com/assets/themes/amazonas/static/images/empty-placeholder.png',

    variants: [
      'https://dcdn-us.mitiendanube.com/assets/themes/amazonas/static/images/empty-placeholder.png',
    ],

    source:
      FISH_NATURE_SOURCE_ID,

    sourceName:
      FISH_NATURE_SOURCE_NAME,

    sourceUrl:
      FISH_NATURE_SOURCE_URL,

    snapshotDate:
      FISH_NATURE_SNAPSHOT_DATE,

    preserve:
      true,
  },
]

/* ============================================================
   PRODUCT / ORGANISM MEDIA
   ============================================================ */

export const FISH_NATURE_PRODUCT_MEDIA = [
  createProductMedia({
    id:
      'fish-nature-media-0006',

    filename:
      'garlic-f35f61c5c868022afb17317930704803',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0007',

    filename:
      'garlic-334ac98b8dff572e1d17317923726958',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0008',

    filename:
      'aloe-3b1a44364f1cd3b2f017317921581138',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0009',

    filename:
      'acai-m-2c07776be838a4035b17317918392287',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0010',

    filename:
      'forte-e72ce1eaa2ac1d511817096610007606',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0011',

    filename:
      'acai-l-268a048bc45254f99517096608009751',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0012',

    filename:
      'acai-l-3dacef86fe86567d8017408357136477',

    extension:
      'png',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0013',

    filename:
      'regular-63aceda10abea9b23f17597957710247',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0014',

    filename:
      'regular-3127df97056a0b67d417597958298200',

    extension:
      'png',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0015',

    filename:
      'chlorela-14f8b046516ed2456117597966501593',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0016',

    filename:
      'chlorela-4c1e94220562cff66017597967110208',

    extension:
      'png',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0017',

    filename:
      'aloe-f508fdf8a2a221645217597968593135',

    extension:
      'png',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0018',

    filename:
      '1000227717-f16aa2543d2b5a0e4c17858616800064',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0019',

    filename:
      'anemona-carpet-green-metalic-stichodactyla-gigantea-55872e70429b222dac17413001943420',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0020',

    filename:
      'bali_sand_10kg_3-4mm-db2827333c89f9de0817345681734803',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0021',

    filename:
      'bali_sand_10kg_2-3mm-49895be4273b6053f517345683213127',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0022',

    filename:
      'reef-salt-20kg-287f0852deaf311f5817346539558760',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0023',

    filename:
      'reef-salt-4kg-9d551227e83c8e52c217346543466974',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0024',

    filename:
      'reef-salt-coral_20kg-ba1619af7181575ef517346549289458',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0025',

    filename:
      'algae-flakes-21dc6beee536377f3217503718255496',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0026',

    filename:
      'pleco-wafers-ed6618b48cf0efcd8717503713136523',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0027',

    filename:
      '207428-carbisea-hawaiian-black-sand-4805013fa2bae928cf17619397640102',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0028',

    filename:
      'anemona-rock-ultra-17d4fb084f4e8f185917306746214114',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0029',

    filename:
      'tonga-pearls-2-7c9333be09912e2c3d17345675860321',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0030',

    filename:
      'color-flakes-04f24e4ea8b04d0bba17503720414254',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0031',

    filename:
      'pond-natural-sticks-bag-15kg-e5e0e17efd9705d22b17503706996447',
  }),

  createProductMedia({
    id:
      'fish-nature-media-0032',

    filename:
      'image-ca84cdb9e578f4dc4117619409234168',
  }),
]

/* ============================================================
   COMPLETE MEDIA ARCHIVE
   ============================================================ */

export const FISH_NATURE_MEDIA_ARCHIVE = [
  ...FISH_NATURE_THEME_MEDIA,
  ...FISH_NATURE_PRODUCT_MEDIA,
]

/* ============================================================
   RAW / UNIQUE COUNTS
   ============================================================ */

export const FISH_NATURE_MEDIA_STATS = {
  rawCdnUrlOccurrences:
    228,

  uniqueRecoveredCdnUrls:
    201,

  normalizedMediaIdentities:
    33,

  themeMediaIdentities:
    FISH_NATURE_THEME_MEDIA.length,

  productMediaIdentities:
    FISH_NATURE_PRODUCT_MEDIA.length,
}

/* ============================================================
   INDEXES
   ============================================================ */

export const FISH_NATURE_MEDIA_BY_ID =
  Object.fromEntries(
    FISH_NATURE_MEDIA_ARCHIVE.map(
      (item) => [
        item.id,
        item,
      ]
    )
  )

export const FISH_NATURE_MEDIA_BY_IDENTITY =
  Object.fromEntries(
    FISH_NATURE_MEDIA_ARCHIVE.map(
      (item) => [
        item.identity,
        item,
      ]
    )
  )

/* ============================================================
   COMPLETE URL ARCHIVE
   ============================================================ */

export const FISH_NATURE_ALL_MEDIA_URLS =
  [
    ...new Set(
      FISH_NATURE_MEDIA_ARCHIVE.flatMap(
        (item) =>
          item.variants || []
      )
    ),
  ]

export const FISH_NATURE_PRIMARY_MEDIA_URLS =
  FISH_NATURE_MEDIA_ARCHIVE.map(
    (item) =>
      item.primary
  )

/* ============================================================
   VALIDATION
   ============================================================ */

export const FISH_NATURE_MEDIA_VALIDATION = {
  expectedUniqueUrls:
    201,

  actualUniqueUrls:
    FISH_NATURE_ALL_MEDIA_URLS.length,

  expectedMediaIdentities:
    33,

  actualMediaIdentities:
    FISH_NATURE_MEDIA_ARCHIVE.length,

  complete:
    FISH_NATURE_ALL_MEDIA_URLS.length ===
      201 &&
    FISH_NATURE_MEDIA_ARCHIVE.length ===
      33,
}

/* ============================================================
   LOOKUPS
   ============================================================ */

export function getFishNatureMediaById(
  id
) {
  return (
    FISH_NATURE_MEDIA_BY_ID[id] ||
    null
  )
}

export function getFishNatureMediaByIdentity(
  identity
) {
  return (
    FISH_NATURE_MEDIA_BY_IDENTITY[
      identity
    ] ||
    null
  )
}

export function getFishNatureMediaByKind(
  kind
) {
  return (
    FISH_NATURE_MEDIA_ARCHIVE.filter(
      (item) =>
        item.kind === kind
    )
  )
}

/* ============================================================
   MEDIA REGISTRY
   ============================================================ */

export const fishNatureMediaRegistry = {
  all:
    FISH_NATURE_MEDIA_ARCHIVE,

  product:
    FISH_NATURE_PRODUCT_MEDIA,

  theme:
    FISH_NATURE_THEME_MEDIA,

  allUrls:
    FISH_NATURE_ALL_MEDIA_URLS,

  primaryUrls:
    FISH_NATURE_PRIMARY_MEDIA_URLS,

  byId:
    FISH_NATURE_MEDIA_BY_ID,

  byIdentity:
    FISH_NATURE_MEDIA_BY_IDENTITY,

  stats:
    FISH_NATURE_MEDIA_STATS,

  validation:
    FISH_NATURE_MEDIA_VALIDATION,

  getById:
    getFishNatureMediaById,

  getByIdentity:
    getFishNatureMediaByIdentity,

  getByKind:
    getFishNatureMediaByKind,

  metadata:
    createFishNatureMediaMetadata({
      rawCdnUrlOccurrences:
        228,

      recoveredUniqueCdnUrls:
        FISH_NATURE_ALL_MEDIA_URLS.length,

      recoveredMediaIdentities:
        FISH_NATURE_MEDIA_ARCHIVE.length,

      preserveEveryRecoveredVariant:
        true,

      preserveUnavailableProductMedia:
        true,

      preserveOrganismMedia:
        true,

      source:
        FISH_NATURE_SOURCE_ID,

      sourceName:
        FISH_NATURE_SOURCE_NAME,

      sourceUrl:
        FISH_NATURE_SOURCE_URL,

      snapshotDate:
        FISH_NATURE_SNAPSHOT_DATE,
    }),
}

export default FISH_NATURE_MEDIA_ARCHIVE
