/**
 * AgroNexus — Babylon Taxonomy
 * Project Babylon Rebuild
 *
 * Taxonomia central do Living Ecosystem.
 *
 * Esta camada organiza o acervo Babylon independentemente
 * da origem do conteúdo, permitindo que animais, plantas,
 * produtos, serviços, saúde, habitats, especialistas e
 * conteúdos sejam conectados aos mundos AgroNexus.
 *
 * NÃO contém componentes React.
 * NÃO contém regras visuais.
 * NÃO substitui worldCatalog.
 * NÃO substitui worldMedia.
 */

/* ============================================================
   GRANDES MUNDOS
   ============================================================ */

export const BABYLON_WORLDS = {
  AVES: "aves",
  CAES: "caes",
  GATOS: "gatos",
  PEIXES: "peixes",
  CORAIS: "corais",
  REPTEIS: "repteis",
  PEQUENOS_MAMIFEROS: "pequenos-mamiferos",
  PLANTAS: "plantas",
  AQUATICAS: "plantas-aquaticas",
  BONSAIS: "bonsais",
  ORQUIDEAS: "orquideas",
  EQUIPAMENTOS: "equipamentos",
  ALIMENTACAO: "alimentacao",
  SAUDE: "saude",
  SERVICOS: "servicos",
  ADOCAO: "adocao",
  CRIADORES: "criadores",
  CONHECIMENTO: "conhecimento",
};

/* ============================================================
   TIPOS DE REGISTRO
   ============================================================ */

export const BABYLON_RECORD_TYPES = {
  ANIMAL: "animal",
  PLANT: "plant",
  CORAL: "coral",

  FOOD: "food",
  PRODUCT: "product",
  EQUIPMENT: "equipment",
  HABITAT: "habitat",
  HEALTH: "health",

  SERVICE: "service",
  SPECIALIST: "specialist",

  BREEDER: "breeder",
  PRODUCER: "producer",
  STORE: "store",
  PARTNER: "partner",
  NGO: "ngo",

  ADOPTION: "adoption",

  GUIDE: "guide",
  ARTICLE: "article",
  COLLECTION: "collection",

  MEMBERSHIP: "membership",
  SUBSCRIPTION: "subscription",
  BENEFIT: "benefit",
  HEALTH_PLAN: "health-plan",
};

/* ============================================================
   DEPARTAMENTOS COMERCIAIS
   ============================================================ */

export const BABYLON_DEPARTMENTS = [
  {
    id: "animais",
    name: "Animais",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "corais",
      "repteis",
      "pequenos-mamiferos",
    ],
  },

  {
    id: "plantas",
    name: "Plantas",
    worlds: [
      "plantas",
      "plantas-aquaticas",
      "bonsais",
      "orquideas",
    ],
  },

  {
    id: "alimentacao",
    name: "Alimentação",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "repteis",
      "pequenos-mamiferos",
    ],
  },

  {
    id: "habitats",
    name: "Habitats",
    worlds: [
      "aves",
      "peixes",
      "corais",
      "repteis",
      "pequenos-mamiferos",
      "plantas",
      "plantas-aquaticas",
    ],
  },

  {
    id: "equipamentos",
    name: "Equipamentos",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "corais",
      "repteis",
      "pequenos-mamiferos",
      "plantas",
      "plantas-aquaticas",
      "bonsais",
      "orquideas",
    ],
  },

  {
    id: "saude",
    name: "Saúde & Bem-estar",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "repteis",
      "pequenos-mamiferos",
    ],
  },

  {
    id: "servicos",
    name: "Serviços",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "corais",
      "repteis",
      "pequenos-mamiferos",
      "plantas",
    ],
  },

  {
    id: "criadores-produtores",
    name: "Criadores & Produtores",
    worlds: [
      "aves",
      "caes",
      "gatos",
      "peixes",
      "repteis",
      "pequenos-mamiferos",
      "plantas",
      "bonsais",
      "orquideas",
    ],
  },

  {
    id: "adocao",
    name: "Adoção & Proteção",
    worlds: [
      "caes",
      "gatos",
      "aves",
      "pequenos-mamiferos",
    ],
  },
];

/* ============================================================
   TAXONOMIA — AVES
   ============================================================ */

export const BIRD_TAXONOMY = [
  {
    id: "psitacideos",
    name: "Psitacídeos",
    children: [
      "araras",
      "cacatuas",
      "calopsitas",
      "ring-necks",
      "alexandrinos",
      "mustache",
      "derbyan",
      "princess-parrot",
      "port-lincoln",
      "roselas",
      "agapornis",
      "forpus",
      "conures",
      "tiribas",
      "jandaias",
      "maritacas",
      "amazonas",
      "pionus",
      "caiques",
      "eclectus",
      "loris",
      "africanos",
      "poicephalus",
      "vasa",
    ],
  },

  {
    id: "passeriformes",
    name: "Passeriformes",
    children: [
      "canarios",
      "diamantes",
      "mandarins",
      "manons",
      "pintassilgos",
      "tentilhoes",
    ],
  },

  {
    id: "ornamentais",
    name: "Aves Ornamentais",
    children: [
      "faisoes",
      "pavoes",
      "codornas",
      "galinhas-ornamentais",
    ],
  },
];

/* ============================================================
   TAXONOMIA — CÃES
   ============================================================ */

export const DOG_TAXONOMY = [
  "filhotes",
  "adultos",
  "pequeno-porte",
  "medio-porte",
  "grande-porte",
  "racas",
  "criadores",
  "adocao",
  "alimentacao",
  "petiscos",
  "higiene",
  "saude",
  "brinquedos",
  "camas",
  "coleiras",
  "roupas",
  "transporte",
  "adestramento",
  "veterinarios",
  "planos-de-saude",
];

/* ============================================================
   TAXONOMIA — GATOS
   ============================================================ */

export const CAT_TAXONOMY = [
  "filhotes",
  "adultos",
  "racas",
  "criadores",
  "adocao",
  "alimentacao",
  "petiscos",
  "areias",
  "higiene",
  "saude",
  "arranhadores",
  "brinquedos",
  "camas",
  "fontes",
  "caixas-de-transporte",
  "veterinarios",
  "planos-de-saude",
];

/* ============================================================
   TAXONOMIA — AQUARISMO
   ============================================================ */

export const AQUATIC_TAXONOMY = {
  freshwater: {
    name: "Água Doce",
    children: [
      "peixes-tropicais",
      "ciclideos",
      "discos",
      "bettas",
      "kinguios",
      "carpas",
      "cascudos",
      "coridoras",
      "camaroes",
      "caracois",
    ],
  },

  marine: {
    name: "Marinho",
    children: [
      "peixes-marinhos",
      "corais-moles",
      "lps",
      "sps",
      "anemonas",
      "crustaceos",
      "moluscos",
      "equipe-de-limpeza",
    ],
  },

  planted: {
    name: "Aquários Plantados",
    children: [
      "plantas-low-tech",
      "plantas-high-tech",
      "musgos",
      "carpetes",
      "epifitas",
      "plantas-de-caule",
      "fertilizacao",
      "co2",
      "substratos",
    ],
  },

  equipment: {
    name: "Equipamentos",
    children: [
      "aquarios",
      "filtros",
      "bombas",
      "skimmers",
      "iluminacao",
      "aquecedores",
      "chillers",
      "dosadores",
      "testes",
      "refratometros",
      "controladores",
      "midias-filtrantes",
      "substratos",
      "sais",
    ],
  },
};

/* ============================================================
   TAXONOMIA — RÉPTEIS
   ============================================================ */

export const REPTILE_TAXONOMY = [
  "geckos",
  "pogonas",
  "iguanas",
  "camaleoes",
  "serpentes",
  "quelonios",
  "terrarios",
  "substratos",
  "aquecimento",
  "iluminacao-uvb",
  "alimentacao",
  "suplementacao",
  "enriquecimento",
  "saude",
  "criadores",
];

/* ============================================================
   TAXONOMIA — PEQUENOS MAMÍFEROS
   ============================================================ */

export const SMALL_MAMMAL_TAXONOMY = [
  "hamsters",
  "hamster-sirio",
  "hamster-chines",
  "hamster-roborovski",
  "gerbils",
  "porquinhos-da-india",
  "coelhos",
  "chinchilas",
  "ratos-domesticos",
  "camundongos",
  "alimentacao",
  "substratos",
  "recintos",
  "rodas",
  "tocas",
  "enriquecimento",
  "saude",
  "criadores",
];

/* ============================================================
   TAXONOMIA — BOTÂNICA
   ============================================================ */

export const BOTANICAL_TAXONOMY = {
  plants: [
    "plantas-internas",
    "plantas-externas",
    "folhagens",
    "suculentas",
    "cactos",
    "frutiferas",
    "ervas",
    "sementes",
    "mudas",
  ],

  flowers: [
    "flores",
    "flores-de-corte",
    "flores-em-vaso",
    "arranjos",
  ],

  orchids: [
    "phalaenopsis",
    "cattleya",
    "dendrobium",
    "oncidium",
    "vanda",
    "paphiopedilum",
    "orquideas-especiais",
  ],

  bonsai: [
    "bonsais",
    "pre-bonsai",
    "mudas",
    "vasos",
    "substratos",
    "ferramentas",
    "adubacao",
  ],

  aquatic: [
    "plantas-aquaticas",
    "plantas-flutuantes",
    "plantas-palustres",
    "musgos-aquaticos",
    "plantas-para-lagos",
  ],

  supplies: [
    "vasos",
    "cachepots",
    "substratos",
    "fertilizantes",
    "adubos",
    "ferramentas",
    "irrigacao",
    "iluminacao",
    "controle-de-pragas",
  ],
};

/* ============================================================
   ALIMENTAÇÃO
   ============================================================ */

export const FOOD_TAXONOMY = {
  aves: [
    "racoes-extrusadas",
    "sementes",
    "farinhadas",
    "papas",
    "frutas",
    "petiscos",
    "suplementos",
  ],

  caes: [
    "racao-seca",
    "racao-umida",
    "natural",
    "petiscos",
    "suplementos",
    "dietas-especiais",
  ],

  gatos: [
    "racao-seca",
    "racao-umida",
    "saches",
    "petiscos",
    "suplementos",
    "dietas-especiais",
  ],

  peixes: [
    "flocos",
    "granulados",
    "pellets",
    "congelados",
    "vivos",
    "suplementos",
  ],

  repteis: [
    "alimentos-vivos",
    "alimentos-preparados",
    "suplementos",
    "calcio",
    "vitaminas",
  ],

  pequenosMamiferos: [
    "racoes",
    "fenos",
    "sementes",
    "petiscos",
    "suplementos",
  ],
};

/* ============================================================
   SAÚDE & BEM-ESTAR
   ============================================================ */

export const HEALTH_TAXONOMY = [
  "veterinarios",
  "clinicas",
  "hospitais",
  "especialistas",
  "exames",
  "diagnostico",
  "medicamentos",
  "suplementos",
  "higiene",
  "prevencao",
  "bem-estar",
  "planos-de-saude",
  "teleorientacao",
];

/* ============================================================
   SERVIÇOS
   ============================================================ */

export const SERVICE_TAXONOMY = [
  "veterinaria",
  "banho-e-tosa",
  "adestramento",
  "pet-sitter",
  "hotel",
  "creche",
  "transporte",
  "aquarismo",
  "manutencao-de-aquarios",
  "paisagismo",
  "jardinagem",
  "consultoria",
  "criadores",
  "produtores",
  "especialistas",
];

/* ============================================================
   COMÉRCIO RECORRENTE
   ============================================================ */

export const RECURRING_COMMERCE = [
  {
    id: "compra-programada",
    name: "Compra Programada",
    description:
      "Reposição automática de itens de consumo recorrente.",
    appliesTo: [
      "alimentacao",
      "substratos",
      "areias",
      "suplementos",
      "higiene",
      "fertilizantes",
      "midias-filtrantes",
    ],
  },

  {
    id: "agronexus-club",
    name: "AgroNexus Club",
    description:
      "Benefícios, vantagens, conteúdo e relacionamento dentro do ecossistema.",
    appliesTo: ["all"],
  },

  {
    id: "assinaturas",
    name: "Assinaturas",
    description:
      "Produtos, conteúdos e serviços disponibilizados de forma recorrente.",
    appliesTo: ["all"],
  },

  {
    id: "planos-saude",
    name: "Planos de Saúde",
    description:
      "Conexão com soluções de assistência e cuidado animal.",
    appliesTo: [
      "caes",
      "gatos",
      "aves",
      "repteis",
      "pequenos-mamiferos",
    ],
  },
];

/* ============================================================
   PROCEDÊNCIA & CONFIANÇA
   ============================================================ */

export const TRUST_FIELDS = [
  "sourceName",
  "sourceType",
  "seller",
  "breeder",
  "producer",
  "responsibleParty",
  "origin",
  "location",
  "scientificName",
  "breed",
  "species",
  "variety",
  "documentation",
  "registration",
  "certificate",
  "legalStatus",
  "healthInformation",
  "availability",
  "updatedAt",
];

/* ============================================================
   RELAÇÕES ENTRE REGISTROS

   Essa é uma das peças fundamentais do Babylon:
   um registro não vive isolado.
   ============================================================ */

export const BABYLON_RELATIONS = {
  BELONGS_TO: "belongs-to",
  RELATED_TO: "related-to",

  COMPATIBLE_WITH: "compatible-with",
  RECOMMENDED_FOR: "recommended-for",

  FOOD_FOR: "food-for",
  HABITAT_FOR: "habitat-for",
  EQUIPMENT_FOR: "equipment-for",
  HEALTH_FOR: "health-for",

  SOLD_BY: "sold-by",
  BRED_BY: "bred-by",
  PRODUCED_BY: "produced-by",

  TREATED_BY: "treated-by",
  SERVICED_BY: "serviced-by",

  AVAILABLE_FROM: "available-from",

  ADOPTED_THROUGH: "adopted-through",

  DOCUMENTED_BY: "documented-by",

  PART_OF_COLLECTION: "part-of-collection",
};

/* ============================================================
   FILTROS UNIVERSAIS
   ============================================================ */

export const BABYLON_FILTERS = [
  {
    id: "world",
    name: "Mundo",
  },

  {
    id: "category",
    name: "Categoria",
  },

  {
    id: "recordType",
    name: "Tipo",
  },

  {
    id: "species",
    name: "Espécie",
  },

  {
    id: "breed",
    name: "Raça / Variedade",
  },

  {
    id: "brand",
    name: "Marca",
  },

  {
    id: "seller",
    name: "Vendedor / Parceiro",
  },

  {
    id: "origin",
    name: "Origem",
  },

  {
    id: "location",
    name: "Localização",
  },

  {
    id: "availability",
    name: "Disponibilidade",
  },

  {
    id: "price",
    name: "Preço",
  },

  {
    id: "trust",
    name: "Procedência",
  },
];

/* ============================================================
   SEÇÕES PADRÃO DE UM MUNDO BABYLON
   ============================================================ */

export const BABYLON_WORLD_SECTIONS = [
  {
    id: "discover",
    name: "Descobrir",
  },

  {
    id: "species",
    name: "Espécies & Variedades",
  },

  {
    id: "marketplace",
    name: "Marketplace",
  },

  {
    id: "food",
    name: "Alimentação",
  },

  {
    id: "habitat",
    name: "Habitat & Equipamentos",
  },

  {
    id: "health",
    name: "Saúde & Bem-estar",
  },

  {
    id: "services",
    name: "Serviços & Especialistas",
  },

  {
    id: "provenance",
    name: "Procedência & Confiança",
  },

  {
    id: "knowledge",
    name: "Conhecimento",
  },

  {
    id: "community",
    name: "Comunidade",
  },

  {
    id: "recurring",
    name: "Compra Programada & Benefícios",
  },
];

/* ============================================================
   HELPERS
   ============================================================ */

export function getDepartmentById(id) {
  return (
    BABYLON_DEPARTMENTS.find(
      (department) =>
        department.id === id
    ) || null
  );
}

export function getDepartmentsForWorld(worldId) {
  return BABYLON_DEPARTMENTS.filter(
    (department) =>
      department.worlds.includes(
        worldId
      )
  );
}

export function getRecurringProgramsForWorld(
  worldId
) {
  return RECURRING_COMMERCE.filter(
    (program) =>
      program.appliesTo.includes(
        "all"
      ) ||
      program.appliesTo.includes(
        worldId
      )
  );
}

export function normalizeBabylonSlug(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

/* ============================================================
   EXPORT CENTRAL
   ============================================================ */

export const babylonTaxonomy = {
  worlds: BABYLON_WORLDS,
  recordTypes:
    BABYLON_RECORD_TYPES,
  departments:
    BABYLON_DEPARTMENTS,

  birds:
    BIRD_TAXONOMY,

  dogs:
    DOG_TAXONOMY,

  cats:
    CAT_TAXONOMY,

  aquatic:
    AQUATIC_TAXONOMY,

  reptiles:
    REPTILE_TAXONOMY,

  smallMammals:
    SMALL_MAMMAL_TAXONOMY,

  botanical:
    BOTANICAL_TAXONOMY,

  food:
    FOOD_TAXONOMY,

  health:
    HEALTH_TAXONOMY,

  services:
    SERVICE_TAXONOMY,

  recurringCommerce:
    RECURRING_COMMERCE,

  trustFields:
    TRUST_FIELDS,

  relations:
    BABYLON_RELATIONS,

  filters:
    BABYLON_FILTERS,

  worldSections:
    BABYLON_WORLD_SECTIONS,
};

export default babylonTaxonomy;
