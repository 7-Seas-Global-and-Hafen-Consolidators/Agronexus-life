/**
 * AgroNexus — Babylon Collections
 * Babylon Rebuild
 *
 * Camada de organização do grande acervo AgroNexus.
 *
 * NÃO contém componentes React.
 * NÃO renderiza páginas.
 * NÃO altera rotas.
 *
 * Sua função é transformar o registro bruto Babylon em coleções
 * navegáveis e reutilizáveis por Home, Worlds, Marketplace,
 * busca, vitrines, recomendações e páginas editoriais.
 */

import { babylonRegistry } from './babylonRegistry'

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

const normalize = (value = '') =>
  String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const asArray = (value) =>
  Array.isArray(value) ? value : []

const unique = (items = []) =>
  [...new Set(items.filter(Boolean))]

const getText = (item = {}) =>
  normalize(
    [
      item.name,
      item.title,
      item.subtitle,
      item.description,
      item.brand,
      item.species,
      item.scientificName,
      item.category,
      item.subcategory,
      item.world,
      item.type,
      ...(item.tags || []),
    ]
      .filter(Boolean)
      .join(' ')
  )

const matches = (value, expected) =>
  normalize(value) === normalize(expected)

const contains = (value, expected) =>
  normalize(value).includes(normalize(expected))

/* ============================================================
   REGISTRO SEGURO
   ============================================================ */

export const babylonItems = asArray(babylonRegistry)

/* ============================================================
   TIPOS ESTRUTURAIS
   ============================================================ */

export const livingItems = babylonItems.filter((item) =>
  [
    'animal',
    'bird',
    'fish',
    'coral',
    'reptile',
    'mammal',
    'dog',
    'cat',
    'plant',
    'flower',
    'orchid',
    'bonsai',
    'aquatic-plant',
  ].some((type) => matches(item.type, type))
)

export const commercialItems = babylonItems.filter((item) =>
  [
    'product',
    'food',
    'equipment',
    'health',
    'habitat',
    'accessory',
    'service',
    'subscription',
    'plan',
  ].some((type) => matches(item.type, type))
)

/* ============================================================
   GRANDES MUNDOS BABYLON
   ============================================================ */

const WORLD_ALIASES = {
  aves: [
    'aves',
    'ave',
    'bird',
    'birds',
    'psitacideos',
    'psittacines',
    'canarios',
    'ornamentais',
  ],

  caes: [
    'caes',
    'cao',
    'dog',
    'dogs',
    'canino',
    'caninos',
  ],

  gatos: [
    'gatos',
    'gato',
    'cat',
    'cats',
    'felino',
    'felinos',
  ],

  aquarismo: [
    'aquarismo',
    'aquario',
    'aquatic',
    'fish',
    'peixe',
    'peixes',
    'coral',
    'corais',
    'reef',
    'marinho',
    'dulcicola',
  ],

  repteis: [
    'repteis',
    'reptil',
    'reptile',
    'reptiles',
    'terrario',
    'terrarios',
  ],

  pequenosMamiferos: [
    'pequenos mamiferos',
    'small mammals',
    'hamster',
    'hamsters',
    'coelho',
    'coelhos',
    'rabbit',
    'rabbits',
    'roedores',
  ],

  plantas: [
    'plantas',
    'planta',
    'plants',
    'plant',
    'flores',
    'flor',
    'flowers',
    'flower',
    'orquideas',
    'orchids',
    'bonsai',
    'bonsais',
    'aquatic plants',
    'plantas aquaticas',
  ],

  alimentacao: [
    'alimentacao',
    'food',
    'racao',
    'racoes',
    'nutrition',
    'nutricao',
    'sementes',
    'petiscos',
    'suplementos',
  ],

  equipamentos: [
    'equipamentos',
    'equipment',
    'acessorios',
    'accessories',
    'habitat',
    'gaiola',
    'gaiolas',
    'viveiro',
    'viveiros',
    'aquario',
    'filtro',
    'iluminacao',
    'terrario',
  ],

  saude: [
    'saude',
    'health',
    'veterinario',
    'veterinarios',
    'veterinary',
    'medicamentos',
    'higiene',
    'bem-estar',
    'wellness',
  ],
}

const belongsToWorld = (item, aliases = []) => {
  const fields = [
    item.world,
    item.category,
    item.subcategory,
    item.type,
    ...(item.tags || []),
  ]

  return aliases.some((alias) =>
    fields.some((field) =>
      contains(field, alias)
    )
  )
}

export const getWorldCollection = (world) => {
  const aliases =
    WORLD_ALIASES[world] || [world]

  return babylonItems.filter((item) =>
    belongsToWorld(item, aliases)
  )
}

export const avesCollection =
  getWorldCollection('aves')

export const caesCollection =
  getWorldCollection('caes')

export const gatosCollection =
  getWorldCollection('gatos')

export const aquarismoCollection =
  getWorldCollection('aquarismo')

export const repteisCollection =
  getWorldCollection('repteis')

export const pequenosMamiferosCollection =
  getWorldCollection('pequenosMamiferos')

export const plantasCollection =
  getWorldCollection('plantas')

export const alimentacaoCollection =
  getWorldCollection('alimentacao')

export const equipamentosCollection =
  getWorldCollection('equipamentos')

export const saudeCollection =
  getWorldCollection('saude')

/* ============================================================
   MARKETPLACE
   ============================================================ */

export const marketplaceCollection =
  babylonItems.filter((item) =>
    item.commercial === true ||
    item.forSale === true ||
    [
      'product',
      'food',
      'equipment',
      'health',
      'accessory',
      'habitat',
      'service',
    ].some((type) =>
      matches(item.type, type)
    )
  )

export const productsCollection =
  marketplaceCollection.filter((item) =>
    matches(item.type, 'product')
  )

export const foodCollection =
  marketplaceCollection.filter((item) =>
    [
      'food',
      'nutrition',
      'racao',
    ].some((type) =>
      matches(item.type, type)
    )
  )

export const equipmentCollection =
  marketplaceCollection.filter((item) =>
    [
      'equipment',
      'accessory',
      'habitat',
    ].some((type) =>
      matches(item.type, type)
    )
  )

export const healthCollection =
  marketplaceCollection.filter((item) =>
    [
      'health',
      'wellness',
      'hygiene',
    ].some((type) =>
      matches(item.type, type)
    )
  )

/* ============================================================
   PROCEDÊNCIA & CONFIANÇA
   ============================================================ */

export const provenanceCollection =
  babylonItems.filter((item) =>
    Boolean(
      item.origin ||
      item.provenance ||
      item.breeder ||
      item.producer ||
      item.seller ||
      item.documents ||
      item.certification ||
      item.traceability
    )
  )

export const verifiedCollection =
  babylonItems.filter((item) =>
    item.verified === true ||
    item.trusted === true ||
    item.certified === true
  )

/* ============================================================
   RECORRÊNCIA
   Compra Programada / assinaturas / planos
   ============================================================ */

export const recurringCollection =
  babylonItems.filter((item) =>
    item.recurring === true ||
    item.subscription === true ||
    item.programmablePurchase === true ||
    [
      'subscription',
      'plan',
    ].some((type) =>
      matches(item.type, type)
    )
  )

export const programmablePurchaseCollection =
  recurringCollection.filter((item) =>
    item.programmablePurchase === true
  )

export const subscriptionCollection =
  recurringCollection.filter((item) =>
    item.subscription === true ||
    matches(item.type, 'subscription')
  )

export const plansCollection =
  recurringCollection.filter((item) =>
    matches(item.type, 'plan')
  )

/* ============================================================
   SERVIÇOS
   ============================================================ */

export const servicesCollection =
  babylonItems.filter((item) =>
    matches(item.type, 'service') ||
    Boolean(item.service)
  )

export const veterinaryCollection =
  servicesCollection.filter((item) => {
    const text = getText(item)

    return (
      text.includes('veterin') ||
      text.includes('health') ||
      text.includes('saude')
    )
  })

/* ============================================================
   ADOÇÃO / PROTEÇÃO / ONGs
   ============================================================ */

export const adoptionCollection =
  babylonItems.filter((item) =>
    item.adoption === true ||
    [
      'adoption',
      'ngo',
      'ong',
      'protection',
    ].some((type) =>
      matches(item.type, type)
    )
  )

/* ============================================================
   CONTEÚDO & CONHECIMENTO
   ============================================================ */

export const knowledgeCollection =
  babylonItems.filter((item) =>
    [
      'guide',
      'article',
      'editorial',
      'species-guide',
      'care-guide',
    ].some((type) =>
      matches(item.type, type)
    )
  )

/* ============================================================
   VITRINES
   ============================================================ */

export const featuredCollection =
  babylonItems.filter((item) =>
    item.featured === true
  )

export const heroCollection =
  babylonItems.filter((item) =>
    item.hero === true ||
    item.heroImage === true
  )

export const newCollection =
  babylonItems.filter((item) =>
    item.new === true ||
    item.isNew === true
  )

export const recommendedCollection =
  babylonItems.filter((item) =>
    item.recommended === true
  )

/* ============================================================
   MARCAS
   ============================================================ */

export const getBrands = () =>
  unique(
    babylonItems.map((item) =>
      item.brand
    )
  ).sort()

export const getItemsByBrand = (brand) =>
  babylonItems.filter((item) =>
    matches(item.brand, brand)
  )

/* ============================================================
   BUSCA GLOBAL BABYLON
   ============================================================ */

export const searchBabylon = (query) => {
  const term = normalize(query)

  if (!term) {
    return babylonItems
  }

  return babylonItems.filter((item) =>
    getText(item).includes(term)
  )
}

/* ============================================================
   FILTROS COMBINÁVEIS
   ============================================================ */

export const filterBabylon = ({
  world,
  type,
  category,
  brand,
  featured,
  verified,
  recurring,
  commercial,
  query,
} = {}) => {
  let result = [...babylonItems]

  if (world) {
    const allowed =
      new Set(
        getWorldCollection(world).map(
          (item) => item.id
        )
      )

    result = result.filter((item) =>
      allowed.has(item.id)
    )
  }

  if (type) {
    result = result.filter((item) =>
      matches(item.type, type)
    )
  }

  if (category) {
    result = result.filter((item) =>
      matches(
        item.category,
        category
      )
    )
  }

  if (brand) {
    result = result.filter((item) =>
      matches(item.brand, brand)
    )
  }

  if (featured === true) {
    result = result.filter(
      (item) =>
        item.featured === true
    )
  }

  if (verified === true) {
    result = result.filter(
      (item) =>
        item.verified === true ||
        item.trusted === true ||
        item.certified === true
    )
  }

  if (recurring === true) {
    result = result.filter(
      (item) =>
        item.recurring === true ||
        item.subscription === true ||
        item.programmablePurchase === true
    )
  }

  if (commercial === true) {
    result = result.filter(
      (item) =>
        item.commercial === true ||
        item.forSale === true
    )
  }

  if (query) {
    const term = normalize(query)

    result = result.filter((item) =>
      getText(item).includes(term)
    )
  }

  return result
}

/* ============================================================
   ÍNDICE POR MUNDO
   ============================================================ */

export const babylonWorldCollections = {
  aves: avesCollection,
  caes: caesCollection,
  gatos: gatosCollection,
  aquarismo: aquarismoCollection,
  repteis: repteisCollection,
  pequenosMamiferos:
    pequenosMamiferosCollection,
  plantas: plantasCollection,
  alimentacao:
    alimentacaoCollection,
  equipamentos:
    equipamentosCollection,
  saude: saudeCollection,
}

/* ============================================================
   ESTATÍSTICAS DO ACERVO
   ============================================================ */

export const babylonStats = {
  total: babylonItems.length,

  living:
    livingItems.length,

  marketplace:
    marketplaceCollection.length,

  products:
    productsCollection.length,

  provenance:
    provenanceCollection.length,

  verified:
    verifiedCollection.length,

  recurring:
    recurringCollection.length,

  services:
    servicesCollection.length,

  adoption:
    adoptionCollection.length,

  knowledge:
    knowledgeCollection.length,

  brands:
    getBrands().length,
}

/* ============================================================
   API CENTRAL BABYLON
   ============================================================ */

export const babylonCollections = {
  all: babylonItems,

  worlds:
    babylonWorldCollections,

  living:
    livingItems,

  marketplace:
    marketplaceCollection,

  products:
    productsCollection,

  food:
    foodCollection,

  equipment:
    equipmentCollection,

  health:
    healthCollection,

  provenance:
    provenanceCollection,

  verified:
    verifiedCollection,

  recurring:
    recurringCollection,

  programmablePurchase:
    programmablePurchaseCollection,

  subscriptions:
    subscriptionCollection,

  plans:
    plansCollection,

  services:
    servicesCollection,

  veterinary:
    veterinaryCollection,

  adoption:
    adoptionCollection,

  knowledge:
    knowledgeCollection,

  featured:
    featuredCollection,

  hero:
    heroCollection,

  new:
    newCollection,

  recommended:
    recommendedCollection,
}

export default babylonCollections
