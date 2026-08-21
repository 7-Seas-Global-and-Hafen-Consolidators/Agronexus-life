/**
 * AgroNexus — Babylon Registry
 * Project Babylon Rebuild
 *
 * Registro bruto central do Living Ecosystem.
 *
 * Esta camada existe entre:
 *
 * FONTES / ACERVO / DADOS
 *          ↓
 *   babylonRegistry
 *          ↓
 * babylonCollections
 *          ↓
 * Home / Worlds / Marketplace / Busca / Vitrines / Conteúdo
 *
 * REGRA BABYLON:
 *
 * Este arquivo NÃO renderiza componentes.
 * Este arquivo NÃO define aparência.
 * Este arquivo NÃO substitui taxonomia.
 * Este arquivo NÃO decide curadoria visual.
 *
 * Ele recebe e normaliza registros reais do ecossistema.
 */

import {
  BABYLON_ENTITY_TYPES,
  BABYLON_REFERENCE_SOURCES,
} from './babylonAssets'

import {
  BABYLON_RECORD_TYPES,
  BABYLON_RELATIONS,
  normalizeBabylonSlug,
} from './babylonTaxonomy'

import {
  AQUARISMO_SEEDS,
} from './babylonSeeds/aquarismo'

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

const asArray = (value) =>
  Array.isArray(value) ? value : []

const unique = (items = []) =>
  [...new Set(asArray(items).filter(Boolean))]

const cleanString = (value) => {
  if (
    value === null ||
    value === undefined
  ) {
    return null
  }

  const normalized =
    String(value).trim()

  return normalized || null
}

const makeId = (...parts) =>
  normalizeBabylonSlug(
    parts
      .filter(Boolean)
      .join('-')
  )

/* ============================================================
   FONTES BABYLON
   ============================================================ */

export const babylonSources =
  BABYLON_REFERENCE_SOURCES.map(
    (source) => ({
      id: source.id,

      type: 'source',

      worlds:
        asArray(source.worlds),

      active: true,
    })
  )

export const getBabylonSource = (
  sourceId
) =>
  babylonSources.find(
    (source) =>
      source.id === sourceId
  ) || null

/* ============================================================
   NORMALIZAÇÃO DE MÍDIA
   ============================================================ */

export function normalizeBabylonMedia(
  media,
  context = {}
) {
  if (!media) {
    return null
  }

  if (typeof media === 'string') {
    return {
      id: makeId(
        context.id,
        'media',
        media
      ),

      src: media,

      alt:
        context.name ||
        context.title ||
        '',

      type: 'image',

      world:
        context.world || null,

      category:
        context.category || null,

      entity:
        context.id || null,

      role: null,

      source:
        context.source || null,

      sourceUrl: null,

      originalUrl: null,

      localAsset:
        media.startsWith('/')
          ? media
          : null,

      width: null,

      height: null,

      tags: [],
    }
  }

  const src =
    media.src ||
    media.url ||
    media.localAsset ||
    media.originalUrl ||
    null

  if (!src) {
    return null
  }

  return {
    id:
      media.id ||
      makeId(
        context.id,
        media.role || 'media',
        src
      ),

    src,

    alt:
      media.alt ||
      context.name ||
      context.title ||
      '',

    type:
      media.type || 'image',

    world:
      media.world ||
      context.world ||
      null,

    category:
      media.category ||
      context.category ||
      null,

    entity:
      media.entity ||
      context.id ||
      null,

    role:
      media.role || null,

    source:
      media.source ||
      context.source ||
      null,

    sourceUrl:
      media.sourceUrl || null,

    originalUrl:
      media.originalUrl || null,

    localAsset:
      media.localAsset ||
      (
        typeof src === 'string' &&
        src.startsWith('/')
          ? src
          : null
      ),

    width:
      media.width || null,

    height:
      media.height || null,

    tags:
      unique(media.tags),
  }
}

/* ============================================================
   NORMALIZAÇÃO DE PROCEDÊNCIA
   ============================================================ */

export function normalizeProvenance(
  provenance = {},
  item = {}
) {
  const source =
    provenance.source ||
    item.source ||
    null

  return {
    source,

    sourceName:
      provenance.sourceName ||
      source ||
      null,

    sourceType:
      provenance.sourceType ||
      null,

    responsibleParty:
      provenance.responsibleParty ||
      item.responsibleParty ||
      null,

    breeder:
      provenance.breeder ||
      item.breeder ||
      null,

    producer:
      provenance.producer ||
      item.producer ||
      null,

    seller:
      provenance.seller ||
      item.seller ||
      null,

    scientificName:
      provenance.scientificName ||
      item.scientificName ||
      null,

    commonName:
      provenance.commonName ||
      item.commonName ||
      item.name ||
      null,

    breed:
      provenance.breed ||
      item.breed ||
      null,

    variety:
      provenance.variety ||
      item.variety ||
      null,

    origin:
      provenance.origin ||
      item.origin ||
      null,

    originCountry:
      provenance.originCountry ||
      item.originCountry ||
      null,

    locality:
      provenance.locality ||
      item.locality ||
      item.location ||
      null,

    documentation:
      unique(
        provenance.documentation ||
        item.documentation ||
        item.documents
      ),

    identification:
      unique(
        provenance.identification ||
        item.identification
      ),

    traceability:
      unique(
        provenance.traceability ||
        item.traceability
      ),

    healthRecords:
      unique(
        provenance.healthRecords ||
        item.healthRecords
      ),

    certifications:
      unique(
        provenance.certifications ||
        item.certifications
      ),

    history:
      unique(
        provenance.history
      ),

    notes:
      unique(
        provenance.notes
      ),
  }
}

/* ============================================================
   REGISTRO BASE
   ============================================================ */

export function createBabylonRecord(
  input = {}
) {
  const name =
    cleanString(
      input.name ||
      input.commonName ||
      input.title
    )

  const world =
    cleanString(input.world)

  const category =
    cleanString(input.category)

  const type =
    cleanString(input.type) ||
    BABYLON_RECORD_TYPES.ARTICLE

  const id =
    cleanString(input.id) ||
    makeId(
      world,
      category,
      name ||
      input.scientificName ||
      type
    )

  const source =
    cleanString(input.source)

  const mediaInput = [
    ...asArray(input.images),
    ...asArray(input.media),
  ]

  const images =
    mediaInput
      .map((media) =>
        normalizeBabylonMedia(
          media,
          {
            id,
            name,
            title: input.title,
            world,
            category,
            source,
          }
        )
      )
      .filter(Boolean)

  return {
    id,

    type,

    entityType:
      input.entityType ||
      null,

    world,

    category,

    subcategory:
      cleanString(
        input.subcategory
      ),

    group:
      cleanString(input.group),

    name,

    title:
      cleanString(input.title),

    subtitle:
      cleanString(
        input.subtitle
      ),

    commonName:
      cleanString(
        input.commonName
      ),

    scientificName:
      cleanString(
        input.scientificName
      ),

    breed:
      cleanString(input.breed),

    variety:
      cleanString(
        input.variety
      ),

    brand:
      cleanString(input.brand),

    description:
      cleanString(
        input.description
      ),

    source,

    sourceUrl:
      cleanString(
        input.sourceUrl
      ),

    originalUrl:
      cleanString(
        input.originalUrl
      ),

    images,

    tags:
      unique(input.tags),

    relations:
      asArray(input.relations),

    provenance:
      normalizeProvenance(
        input.provenance,
        {
          ...input,
          id,
          name,
          world,
          category,
          source,
        }
      ),

    origin:
      cleanString(input.origin),

    location:
      cleanString(
        input.location
      ),

    seller:
      input.seller || null,

    breeder:
      input.breeder || null,

    producer:
      input.producer || null,

    responsibleParty:
      input.responsibleParty ||
      null,

    documentation:
      unique(
        input.documentation ||
        input.documents
      ),

    certification:
      input.certification ||
      null,

    traceability:
      unique(
        input.traceability
      ),

    healthInformation:
      input.healthInformation ||
      null,

    price:
      input.price ?? null,

    previousPrice:
      input.previousPrice ??
      null,

    installments:
      input.installments ??
      null,

    availability:
      input.availability ??
      null,

    commercial:
      input.commercial === true,

    forSale:
      input.forSale === true,

    recurring:
      input.recurring === true,

    subscription:
      input.subscription === true,

    programmablePurchase:
      input.programmablePurchase ===
      true,

    clubEligible:
      input.clubEligible === true,

    verified:
      input.verified === true,

    trusted:
      input.trusted === true,

    certified:
      input.certified === true,

    adoption:
      input.adoption === true,

    featured:
      input.featured === true,

    hero:
      input.hero === true,

    heroImage:
      input.heroImage === true,

    recommended:
      input.recommended === true,

    new:
      input.new === true,

    isNew:
      input.isNew === true,

    service:
      input.service || null,

    relatedProducts:
      unique(
        input.relatedProducts
      ),

    relatedSpecies:
      unique(
        input.relatedSpecies
      ),

    relatedServices:
      unique(
        input.relatedServices
      ),

    relatedContent:
      unique(
        input.relatedContent
      ),

    metadata: {
      importedFrom:
        input.importedFrom ||
        source ||
        null,

      legacyAsset:
        input.legacyAsset ||
        null,

      createdAt:
        input.createdAt ||
        null,

      updatedAt:
        input.updatedAt ||
        null,

      ...(input.metadata || {}),
    },
  }
}

/* ============================================================
   VALIDAÇÃO
   ============================================================ */

export function validateBabylonRecord(
  record
) {
  const errors = []

  if (!record) {
    errors.push(
      'Registro inexistente.'
    )

    return errors
  }

  if (!record.id) {
    errors.push(
      'Registro sem id.'
    )
  }

  if (!record.type) {
    errors.push(
      `Registro ${record.id || '?'} sem type.`
    )
  }

  if (!record.world) {
    errors.push(
      `Registro ${record.id || '?'} sem world.`
    )
  }

  return errors
}

/* ============================================================
   RELAÇÕES
   ============================================================ */

export function createBabylonRelation({
  type =
    BABYLON_RELATIONS.RELATED_TO,

  from,

  to,

  metadata = {},
} = {}) {
  if (!from || !to) {
    return null
  }

  return {
    id: makeId(
      from,
      type,
      to
    ),

    type,

    from,

    to,

    metadata,
  }
}

/* ============================================================
   REGISTROS BABYLON
   ============================================================ */

/**
 * IMPORTANTE
 *
 * A população real começa aqui.
 *
 * NÃO colocar registros fictícios apenas
 * para encher a interface.
 *
 * Entrarão nesta camada registros extraídos:
 *
 * 1. do patrimônio legado AgroNexus;
 * 2. do material externo inspecionado;
 * 3. de futuras fontes/fornecedores/parceiros.
 *
 * Cada item deve preservar source/originalUrl/localAsset
 * sempre que esses dados estiverem disponíveis.
 */

export const BABYLON_RAW_RECORDS = [
  ...AQUARISMO_SEEDS,
]

/* ============================================================
   REGISTRO NORMALIZADO
   ============================================================ */

export const babylonRegistry =
  BABYLON_RAW_RECORDS
    .map(createBabylonRecord)
    .filter((record) => {
      const errors =
        validateBabylonRecord(
          record
        )

      if (
        import.meta.env.DEV &&
        errors.length
      ) {
        console.warn(
          '[Babylon Registry]',
          errors,
          record
        )
      }

      return errors.length === 0
    })

/* ============================================================
   ÍNDICES
   ============================================================ */

export const babylonRegistryById =
  Object.fromEntries(
    babylonRegistry.map(
      (item) => [
        item.id,
        item,
      ]
    )
  )

export const getBabylonRecordById = (
  id
) =>
  babylonRegistryById[id] ||
  null

export const getBabylonRecordsBySource =
  (sourceId) =>
    babylonRegistry.filter(
      (item) =>
        item.source === sourceId
    )

export const getBabylonRecordsByType =
  (type) =>
    babylonRegistry.filter(
      (item) =>
        item.type === type
    )

export const getBabylonRecordsByWorld =
  (world) =>
    babylonRegistry.filter(
      (item) =>
        item.world === world
    )

/* ============================================================
   CATÁLOGO DE TIPOS ACEITOS
   ============================================================ */

export const babylonRegistryTypes = {
  entities:
    BABYLON_ENTITY_TYPES,

  records:
    BABYLON_RECORD_TYPES,

  relations:
    BABYLON_RELATIONS,
}

/* ============================================================
   API CENTRAL
   ============================================================ */

export const babylonData = {
  items:
    babylonRegistry,

  byId:
    babylonRegistryById,

  sources:
    babylonSources,

  types:
    babylonRegistryTypes,

  createRecord:
    createBabylonRecord,

  createRelation:
    createBabylonRelation,

  validateRecord:
    validateBabylonRecord,

  getById:
    getBabylonRecordById,

  getBySource:
    getBabylonRecordsBySource,

  getByType:
    getBabylonRecordsByType,

  getByWorld:
    getBabylonRecordsByWorld,
}

export default babylonRegistry
