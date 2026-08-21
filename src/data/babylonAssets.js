/**
 * AgroNexus — Babylon Master Registry
 * PROJECT BABYLON
 *
 * Registro mestre do ecossistema AgroNexus.
 *
 * NÃO é uma lista de cards.
 * NÃO é um catálogo linear.
 *
 * É a camada estrutural que permite relacionar:
 * mundos → categorias → espécies → produtos → serviços →
 * procedência → fornecedores → recorrência → conteúdo.
 */

export const BABYLON_ENTITY_TYPES = {
  SPECIES: "species",
  BREED: "breed",
  VARIETY: "variety",
  PRODUCT: "product",
  FOOD: "food",
  SUPPLEMENT: "supplement",
  EQUIPMENT: "equipment",
  HABITAT: "habitat",
  HEALTH: "health",
  SERVICE: "service",
  PRODUCER: "producer",
  BREEDER: "breeder",
  STORE: "store",
  PROFESSIONAL: "professional",
  ORGANIZATION: "organization",
  CONTENT: "content",
};

/* ============================================================
   GRANDES MUNDOS
   ============================================================ */

export const BABYLON_WORLDS = [
  "aves",
  "caes",
  "gatos",
  "peixes",
  "corais",
  "repteis",
  "pequenos-mamiferos",
  "plantas",
  "flores",
  "orquideas",
  "bonsais",
  "plantas-aquaticas",
  "aquarismo",
  "terrarios",
  "alimentacao",
  "saude",
  "equipamentos",
  "servicos",
];

/* ============================================================
   AVES
   ============================================================ */

export const BIRDS = [
  "calopsitas",
  "periquitos-australianos",
  "periquitos-ingleses",
  "hagoromo",
  "ring-necks",
  "alexandrinos",
  "mustache-parakeets",
  "derbyan-parakeets",
  "port-lincoln-parrots",
  "roselas",
  "princess-parrots",
  "bourkes",
  "turquoisines",
  "kakarikis",
  "agapornis",
  "forpus",
  "conures",
  "tiribas",
  "jandaias",
  "maritacas",
  "loris",
  "loris-molucanos",
  "amazonas",
  "papagaios-africanos",
  "poicephalus",
  "pionus",
  "caiques",
  "eclectus",
  "vasa-parrots",
  "araras",
  "canarios",
  "diamantes",
  "mandarins",
  "manons",
];

/* ============================================================
   CÃES
   ============================================================ */

export const DOGS = [
  "companhia",
  "pequeno-porte",
  "medio-porte",
  "grande-porte",
  "filhotes",
  "adultos",
  "seniores",
  "criadores",
  "adocao",
  "alimentacao",
  "petiscos",
  "higiene",
  "saude",
  "brinquedos",
  "camas",
  "coleiras",
  "guias",
  "transporte",
  "adestramento",
];

/* ============================================================
   GATOS
   ============================================================ */

export const CATS = [
  "filhotes",
  "adultos",
  "seniores",
  "criadores",
  "adocao",
  "alimentacao",
  "saches",
  "petiscos",
  "areias",
  "higiene",
  "saude",
  "arranhadores",
  "brinquedos",
  "camas",
  "fontes",
  "transporte",
];

/* ============================================================
   AQUARISMO
   ============================================================ */

export const AQUATICS = [
  "agua-doce",
  "marinho",
  "peixes-tropicais",
  "peixes-ornamentais",
  "peixes-marinhos",
  "invertebrados",
  "camaroes",
  "caracois",
  "corais-moles",
  "lps",
  "sps",
  "anemonas",
  "rochas",
  "substratos",
  "plantas-aquaticas",
  "aquarios",
  "nano-aquarios",
  "filtros",
  "bombas",
  "skimmers",
  "iluminacao",
  "aquecimento",
  "refrigeracao",
  "co2",
  "testes",
  "condicionadores",
  "suplementos",
  "alimentacao",
  "manutencao",
];

/* ============================================================
   RÉPTEIS & TERRÁRIOS
   ============================================================ */

export const REPTILES = [
  "geckos",
  "pogonas",
  "iguanas",
  "camaleoes",
  "serpentes",
  "quelonios",
  "terrarios",
  "substratos",
  "aquecimento",
  "uvb",
  "iluminacao",
  "decoracao",
  "alimentacao",
  "suplementacao",
  "controle-ambiental",
];

/* ============================================================
   PEQUENOS MAMÍFEROS
   ============================================================ */

export const SMALL_MAMMALS = [
  "hamsters",
  "hamster-sirio",
  "hamster-anao",
  "hamster-chines",
  "gerbils",
  "porquinhos-da-india",
  "coelhos",
  "chinchilas",
  "ratos-domesticos",
  "camundongos",
  "alimentacao",
  "feno",
  "substratos",
  "habitats",
  "rodas",
  "tocas",
  "brinquedos",
  "enriquecimento",
  "higiene",
  "saude",
];

/* ============================================================
   BOTÂNICA
   ============================================================ */

export const BOTANICAL = [
  "plantas",
  "flores",
  "orquideas",
  "bonsais",
  "suculentas",
  "cactos",
  "folhagens",
  "plantas-tropicais",
  "plantas-aquaticas",
  "plantas-de-interior",
  "plantas-de-jardim",
  "mudas",
  "sementes",
  "vasos",
  "substratos",
  "fertilizantes",
  "nutricao",
  "ferramentas",
  "irrigacao",
  "controle-de-pragas",
  "jardinagem",
];

/* ============================================================
   UNIVERSO COMERCIAL
   ============================================================ */

export const COMMERCE = [
  "racoes",
  "alimentacao-natural",
  "petiscos",
  "suplementos",
  "vitaminas",
  "medicamentos-e-cuidados",
  "higiene",
  "substratos",
  "gaiolas",
  "viveiros",
  "aquarios",
  "terrarios",
  "filtros",
  "bombas",
  "iluminacao",
  "aquecimento",
  "climatizacao",
  "brinquedos",
  "enriquecimento",
  "comedouros",
  "bebedouros",
  "fontes",
  "camas",
  "tocas",
  "transportadoras",
  "coleiras-e-guias",
  "decoracao",
  "ferramentas",
  "jardinagem",
];

/* ============================================================
   SAÚDE & SERVIÇOS
   ============================================================ */

export const CARE_AND_SERVICES = [
  "veterinarios",
  "clinicas",
  "especialistas",
  "biologos",
  "nutricao",
  "diagnostico",
  "bem-estar",
  "planos-de-saude",
  "banho-e-tosa",
  "adestramento",
  "manutencao-de-aquarios",
  "paisagismo",
  "jardinagem",
  "consultoria",
  "criadores",
  "produtores",
  "lojas",
  "ongs",
  "adocao",
];

/* ============================================================
   MECÂNICAS COMERCIAIS BABYLON
   ============================================================ */

export const BABYLON_COMMERCE_FEATURES = {
  marketplace: true,

  provenance: true,

  sellerProfiles: true,

  breederProfiles: true,

  producerProfiles: true,

  professionalProfiles: true,

  recurringPurchase: true,

  subscriptions: true,

  clubBenefits: true,

  loyalty: true,

  healthPlans: true,

  adoption: true,

  ngoNetwork: true,

  educationalContent: true,

  relatedProducts: true,

  relatedSpecies: true,

  relatedServices: true,

  ecosystemCrossSell: true,
};

/* ============================================================
   PROCEDÊNCIA
   ============================================================ */

export const BABYLON_PROVENANCE_SCHEMA = {
  source: null,

  responsibleParty: null,

  breeder: null,

  producer: null,

  seller: null,

  scientificName: null,

  commonName: null,

  variety: null,

  originCountry: null,

  locality: null,

  birthOrProductionDate: null,

  documentation: [],

  identification: [],

  traceability: [],

  healthRecords: [],

  certifications: [],

  history: [],

  notes: [],
};

/* ============================================================
   PRODUTO
   ============================================================ */

export const BABYLON_PRODUCT_SCHEMA = {
  id: null,

  type: "product",

  name: null,

  brand: null,

  world: null,

  category: null,

  subcategory: null,

  species: [],

  description: null,

  images: [],

  price: null,

  previousPrice: null,

  installments: null,

  availability: null,

  seller: null,

  provenance: null,

  recurringPurchase: false,

  subscriptionEligible: false,

  clubEligible: false,

  relatedProducts: [],

  relatedContent: [],
};

/* ============================================================
   REGISTRO DE ORGANISMO / ESPÉCIE
   ============================================================ */

export const BABYLON_LIVING_SCHEMA = {
  id: null,

  type: "species",

  world: null,

  group: null,

  commonName: null,

  scientificName: null,

  variety: null,

  description: null,

  images: [],

  origin: null,

  distribution: [],

  behavior: null,

  habitat: null,

  nutrition: null,

  care: null,

  health: null,

  enrichment: null,

  conservation: null,

  provenance: null,

  availableOffers: [],

  relatedProducts: [],

  relatedServices: [],

  relatedContent: [],
};

/* ============================================================
   REGISTRO DE MÍDIA
   ============================================================ */

export const BABYLON_MEDIA_SCHEMA = {
  id: null,

  src: null,

  alt: null,

  type: "image",

  world: null,

  category: null,

  entity: null,

  role: null,

  source: null,

  sourceUrl: null,

  originalUrl: null,

  localAsset: null,

  width: null,

  height: null,

  tags: [],
};

/* ============================================================
   FONTES DE REFERÊNCIA DO ACERVO BABYLON
   ============================================================ */

export const BABYLON_REFERENCE_SOURCES = [
  {
    id: "reef-aquarios",
    worlds: [
      "peixes",
      "corais",
      "aquarismo",
      "equipamentos",
      "alimentacao",
    ],
  },

  {
    id: "fish-nature",
    worlds: [
      "peixes",
      "aquarismo",
      "plantas-aquaticas",
      "equipamentos",
      "alimentacao",
    ],
  },

  {
    id: "aves-ornamentais-jj",
    worlds: [
      "aves",
      "alimentacao",
      "equipamentos",
      "criadores",
    ],
  },

  {
    id: "vaso-flor",
    worlds: [
      "plantas",
      "flores",
      "orquideas",
      "bonsais",
      "equipamentos",
    ],
  },

  {
    id: "petz",
    worlds: [
      "caes",
      "gatos",
      "aves",
      "peixes",
      "repteis",
      "pequenos-mamiferos",
      "alimentacao",
      "saude",
      "equipamentos",
      "servicos",
    ],
  },

  {
    id: "canil-delboux",
    worlds: [
      "caes",
      "criadores",
      "procedencia",
    ],
  },

  {
    id: "mercado-livre",
    worlds: [
      "marketplace",
      "produtos",
      "equipamentos",
    ],
  },

  {
    id: "mf-rural",
    worlds: [
      "animais",
      "plantas",
      "produtores",
      "criadores",
      "marketplace",
    ],
  },

  {
    id: "cobasi",
    worlds: [
      "caes",
      "gatos",
      "aves",
      "peixes",
      "repteis",
      "pequenos-mamiferos",
      "alimentacao",
      "saude",
      "equipamentos",
      "servicos",
      "recorrencia",
      "beneficios",
    ],
  },
];

/* ============================================================
   ÍNDICE MESTRE
   ============================================================ */

export const babylonMasterRegistry = {
  worlds: BABYLON_WORLDS,

  living: {
    birds: BIRDS,
    dogs: DOGS,
    cats: CATS,
    aquatics: AQUATICS,
    reptiles: REPTILES,
    smallMammals: SMALL_MAMMALS,
    botanical: BOTANICAL,
  },

  commerce: COMMERCE,

  careAndServices: CARE_AND_SERVICES,

  features: BABYLON_COMMERCE_FEATURES,

  schemas: {
    provenance:
      BABYLON_PROVENANCE_SCHEMA,

    product:
      BABYLON_PRODUCT_SCHEMA,

    living:
      BABYLON_LIVING_SCHEMA,

    media:
      BABYLON_MEDIA_SCHEMA,
  },

  referenceSources:
    BABYLON_REFERENCE_SOURCES,
};

export default babylonMasterRegistry;
