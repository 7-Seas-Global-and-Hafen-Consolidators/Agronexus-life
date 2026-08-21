/**
 * AgroNexus — Babylon / Fish Nature Navigation
 * Project Babylon Rebuild
 *
 * Navegação, categorias, subcategorias e rotas
 * extraídas do snapshot Fish Nature.
 *
 * REGRA:
 * preservar a arquitetura descoberta na fonte.
 *
 * A presença da rota no snapshot NÃO significa
 * que o conteúdo completo daquela página já foi minerado.
 *
 * Esta camada serve como mapa para:
 *
 * - descoberta;
 * - mineração futura;
 * - organização taxonômica;
 * - navegação Babylon;
 * - geração de coleções;
 * - relacionamento com produtos;
 * - relacionamento com organismos vivos;
 * - relacionamento com mídia.
 */

import {
  FISH_NATURE_SOURCE_ID,
  FISH_NATURE_SOURCE_NAME,
  FISH_NATURE_SOURCE_URL,
  FISH_NATURE_SNAPSHOT_DATE,
  createFishNatureProvenance,
} from './source'

/* ============================================================
   HELPERS
   ============================================================ */

const route = ({
  id,
  name,
  url,
  world = 'aquarismo',
  category = null,
  parent = null,
  type = 'category',
  tags = [],
}) => ({
  id,

  type,

  world,

  name,

  url,

  source:
    FISH_NATURE_SOURCE_ID,

  sourceName:
    FISH_NATURE_SOURCE_NAME,

  sourceUrl:
    FISH_NATURE_SOURCE_URL,

  snapshotDate:
    FISH_NATURE_SNAPSHOT_DATE,

  category,

  parent,

  tags,

  provenance:
    createFishNatureProvenance({
      sourcePage: url,
    }),
})

/* ============================================================
   AQUAPAISAGISMO
   ============================================================ */

export const FISH_NATURE_AQUASCAPING_ROUTES = [
  route({
    id: 'fish-nature-aquapaisagismo',
    name: 'Aquapaisagismo',
    url:
      'https://www.fishnature.com.br/aquapaisagismo/',
    category:
      'aquapaisagismo',
  }),

  route({
    id: 'fish-nature-aquapaisagismo-fertilizantes',
    name: 'Fertilizantes',
    url:
      'https://www.fishnature.com.br/aquapaisagismo/fertilizantes/',
    category:
      'fertilizantes',
    parent:
      'fish-nature-aquapaisagismo',
  }),

  route({
    id: 'fish-nature-aquapaisagismo-hardscape',
    name: 'Hardscape',
    url:
      'https://www.fishnature.com.br/aquapaisagismo/hardscape/',
    category:
      'hardscape',
    parent:
      'fish-nature-aquapaisagismo',
  }),

  route({
    id: 'fish-nature-aquapaisagismo-substratos-ferteis',
    name: 'Substratos Férteis',
    url:
      'https://www.fishnature.com.br/aquapaisagismo/substratos-ferteis/',
    category:
      'substratos-ferteis',
    parent:
      'fish-nature-aquapaisagismo',
  }),

  route({
    id: 'fish-nature-aquapaisagismo-tesouras-pincas',
    name: 'Tesouras e Pinças',
    url:
      'https://www.fishnature.com.br/aquapaisagismo/tesouras-e-pincas/',
    category:
      'tesouras-e-pincas',
    parent:
      'fish-nature-aquapaisagismo',
  }),
]

/* ============================================================
   CONDICIONADORES & TESTES
   ============================================================ */

export const FISH_NATURE_WATER_CARE_ROUTES = [
  route({
    id: 'fish-nature-condicionadores-testes',
    name: 'Condicionadores e Testes',
    url:
      'https://www.fishnature.com.br/condicionadores-testes/',
    category:
      'condicionadores-e-testes',
  }),
]

/* ============================================================
   EQUIPAMENTOS
   ============================================================ */

export const FISH_NATURE_EQUIPMENT_ROUTES = [
  route({
    id: 'fish-nature-equipamentos',
    name: 'Equipamentos',
    url:
      'https://www.fishnature.com.br/equipamentos/',
    category:
      'equipamentos',
  }),

  route({
    id: 'fish-nature-equipamentos-bombas-submersas',
    name: 'Bombas Submersas',
    url:
      'https://www.fishnature.com.br/equipamentos/bombas-submersas/',
    category:
      'bombas-submersas',
    parent:
      'fish-nature-equipamentos',
  }),

  route({
    id: 'fish-nature-equipamentos-filtros-externos',
    name: 'Filtros Externos',
    url:
      'https://www.fishnature.com.br/equipamentos/filtros-externos/',
    category:
      'filtros-externos',
    parent:
      'fish-nature-equipamentos',
  }),

  route({
    id: 'fish-nature-equipamentos-luminarias',
    name: 'Luminárias',
    url:
      'https://www.fishnature.com.br/equipamentos/luminaria/',
    category:
      'luminarias',
    parent:
      'fish-nature-equipamentos',
  }),

  route({
    id: 'fish-nature-equipamentos-midias-filtrantes',
    name: 'Mídias Filtrantes',
    url:
      'https://www.fishnature.com.br/equipamentos/midias-filtrantes/',
    category:
      'midias-filtrantes',
    parent:
      'fish-nature-equipamentos',
  }),

  route({
    id: 'fish-nature-equipamentos-termostato',
    name: 'Termostato',
    url:
      'https://www.fishnature.com.br/equipamentos/termostato/',
    category:
      'termostatos',
    parent:
      'fish-nature-equipamentos',
  }),
]

/* ============================================================
   MARINHO — EQUIPAMENTOS & CONSUMÍVEIS
   ============================================================ */

export const FISH_NATURE_MARINE_COMMERCE_ROUTES = [
  route({
    id: 'fish-nature-marinho',
    name: 'Marinho',
    url:
      'https://www.fishnature.com.br/marinho/',
    category:
      'marinho',
  }),

  route({
    id: 'fish-nature-marinho-acessorios',
    name: 'Acessórios',
    url:
      'https://www.fishnature.com.br/marinho/acessorios/',
    category:
      'acessorios',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-condicionadores',
    name: 'Condicionadores e Suplementos',
    url:
      'https://www.fishnature.com.br/marinho/condicionadores/',
    category:
      'condicionadores-e-suplementos',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-luminarias',
    name: 'Luminárias',
    url:
      'https://www.fishnature.com.br/marinho/luminarias/',
    category:
      'luminarias',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-rochas',
    name: 'Rochas',
    url:
      'https://www.fishnature.com.br/marinho/rochas/',
    category:
      'rochas',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-sal',
    name: 'Sal',
    url:
      'https://www.fishnature.com.br/marinho/sal/',
    category:
      'sal-marinho',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-skimmer',
    name: 'Skimmer',
    url:
      'https://www.fishnature.com.br/marinho/skimmer/',
    category:
      'skimmer',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-substratos',
    name: 'Substratos',
    url:
      'https://www.fishnature.com.br/marinho/substratos/',
    category:
      'substratos',
    parent:
      'fish-nature-marinho',
  }),

  route({
    id: 'fish-nature-marinho-testes',
    name: 'Testes',
    url:
      'https://www.fishnature.com.br/marinho/testes/',
    category:
      'testes',
    parent:
      'fish-nature-marinho',
  }),
]

/* ============================================================
   RAÇÕES
   ============================================================ */

export const FISH_NATURE_FOOD_ROUTES = [
  route({
    id: 'fish-nature-racoes',
    name: 'Rações',
    url:
      'https://www.fishnature.com.br/racoes-tropical/',
    category:
      'racoes',
  }),

  route({
    id: 'fish-nature-racoes-tropical',
    name: 'Rações Tropical',
    url:
      'https://www.fishnature.com.br/racoes-tropical/racoes-tropical1/',
    category:
      'tropical',
    parent:
      'fish-nature-racoes',
  }),

  route({
    id: 'fish-nature-racoes-seachem',
    name: 'Rações Seachem',
    url:
      'https://www.fishnature.com.br/racoes-tropical/racoes-seachem/',
    category:
      'seachem',
    parent:
      'fish-nature-racoes',
  }),

  route({
    id: 'fish-nature-racoes-dr-bassleer',
    name: 'Rações Dr. Bassleer',
    url:
      'https://www.fishnature.com.br/racoes-tropical/racoes-dr-bassleer/',
    category:
      'dr-bassleer',
    parent:
      'fish-nature-racoes',
  }),

  route({
    id: 'fish-nature-racoes-new-life-spectrum',
    name: 'New Life Spectrum',
    url:
      'https://www.fishnature.com.br/racoes-tropical/new-life-spectrum/',
    category:
      'new-life-spectrum',
    parent:
      'fish-nature-racoes',
  }),

  route({
    id: 'fish-nature-racoes-oceantech',
    name: 'Rações Oceantech',
    url:
      'https://www.fishnature.com.br/racoes-tropical/racoes-oceantech/',
    category:
      'oceantech',
    parent:
      'fish-nature-racoes',
  }),
]

/* ============================================================
   PEIXES DE ÁGUA DOCE
   ============================================================ */

export const FISH_NATURE_FRESHWATER_ROUTES = [
  route({
    id: 'fish-nature-peixes-agua-doce',
    name: 'Peixes Água Doce',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/',
    category:
      'peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-bandeiras',
    name: 'Bandeiras',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/bandeiras/',
    category:
      'bandeiras',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-discos-selvagens',
    name: 'Discos Selvagens',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/discos-selvagens/',
    category:
      'discos-selvagens',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-tetras',
    name: 'Tetras',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/tetras/',
    category:
      'tetras',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-cascudos',
    name: 'Cascudos',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/cascudos/',
    category:
      'cascudos',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-coridoras',
    name: 'Coridoras',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/coridoras/',
    category:
      'coridoras',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-invertebrados',
    name: 'Invertebrados de Água Doce',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/invertebrados-de-agua-doce/',
    category:
      'invertebrados-agua-doce',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-agua-doce-carpas-nishikigoi',
    name: 'Carpas Nishikigoi',
    url:
      'https://www.fishnature.com.br/peixes-agua-doce/carpas-nishikigoi/',
    category:
      'carpas-nishikigoi',
    parent:
      'fish-nature-peixes-agua-doce',
    type:
      'living-category',
  }),
]

/* ============================================================
   PEIXES MARINHOS
   ============================================================ */

export const FISH_NATURE_MARINE_FISH_ROUTES = [
  route({
    id: 'fish-nature-peixes-marinhos',
    name: 'Peixes Marinhos',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/',
    category:
      'peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-anjos',
    name: 'Anjos',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/anjos1/',
    category:
      'anjos',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-anthias',
    name: 'Anthias',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/anthias/',
    category:
      'anthias',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-borboletas',
    name: 'Borboletas',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/borboletas/',
    category:
      'borboletas',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-centropyge',
    name: 'Centropyge',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/anjos/',
    category:
      'centropyge',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-diversos',
    name: 'Diversos',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/diversos/',
    category:
      'diversos',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-donzelas',
    name: 'Donzelas',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/donzelas/',
    category:
      'donzelas',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-gobies-blennies',
    name: 'Gobies e Blennies',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/gobies-e-blennies/',
    category:
      'gobies-e-blennies',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-palhacos',
    name: 'Palhaços',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/palhacos/',
    category:
      'palhacos',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-puffers',
    name: 'Puffers',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/puffers/',
    category:
      'puffers',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-rabbits-foxface',
    name: 'Rabbits - FoxFace',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/rabbits-foxface/',
    category:
      'rabbits-foxface',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-tangs',
    name: 'Tangs',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/tangs/',
    category:
      'tangs',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-trigger',
    name: 'Trigger',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/trigger/',
    category:
      'trigger',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-marinhos-wrasses',
    name: 'Wrasses',
    url:
      'https://www.fishnature.com.br/peixes-marinhos/wrasses/',
    category:
      'wrasses',
    parent:
      'fish-nature-peixes-marinhos',
    type:
      'living-category',
  }),
]

/* ============================================================
   CORAIS & INVERTEBRADOS
   ============================================================ */

export const FISH_NATURE_CORAL_ROUTES = [
  route({
    id: 'fish-nature-corais-invertebrados',
    name: 'Corais e Invertebrados',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/',
    world:
      'corais',
    category:
      'corais-e-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-lps',
    name: 'LPS',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/',
    world:
      'corais',
    category:
      'lps',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-acanthastreas-micromussas',
    name: 'Acanthastreas e Micromussas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/acanthastreas-e-micromussas/',
    world:
      'corais',
    category:
      'acanthastreas-e-micromussas',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-acanthophyllia-cynarina-scolymia',
    name: 'Acanthophyllia, Cynarina e Scolymia',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/acanthophyllia-e-scolymia/',
    world:
      'corais',
    category:
      'acanthophyllia-cynarina-scolymia',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-alveopora-goniopora',
    name: 'Alveopora e Goniopora',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/alveopora-e-goniopora/',
    world:
      'corais',
    category:
      'alveopora-e-goniopora',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-balis-open-brains',
    name: 'Balis e Open Brains',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/balis-e-open-brains/',
    world:
      'corais',
    category:
      'balis-e-open-brains',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-blastomussas',
    name: 'Blastomussas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/blastomussas/',
    world:
      'corais',
    category:
      'blastomussas',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-cyphastreas-leptastreas-chalices',
    name: 'Cyphastreas, Leptastreas e Chalices',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/cyphastreas-e-leptastreas/',
    world:
      'corais',
    category:
      'cyphastreas-leptastreas-chalices',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-duncans-trumpets',
    name: 'Duncans e Trumpets',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/duncans-e-trumpets/',
    world:
      'corais',
    category:
      'duncans-e-trumpets',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-elegans-bubble',
    name: 'Elegans e Bubble',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/elegans/',
    world:
      'corais',
    category:
      'elegans-e-bubble',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-favia-favites-montastrea',
    name: 'Favia, Favites e Montastrea',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/favia-favites-e-montastrea/',
    world:
      'corais',
    category:
      'favia-favites-montastrea',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-hammers-frogs-torchs',
    name: 'Hammers, Frogs e Torchs',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/hammers-e-frogs/',
    world:
      'corais',
    category:
      'hammers-frogs-torchs',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-lps-lobophyllia-symphyllia',
    name: 'Lobophyllia e Symphyllia',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/lps/lobophyllia-e-symphyllia/',
    world:
      'corais',
    category:
      'lobophyllia-e-symphyllia',
    parent:
      'fish-nature-corais-lps',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-softs',
    name: 'Softs',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/softs/',
    world:
      'corais',
    category:
      'softs',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-softs-mushrooms-ricordeas',
    name: 'Mushrooms e Ricordeas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/softs/mushrooms-e-ricordeas/',
    world:
      'corais',
    category:
      'mushrooms-e-ricordeas',
    parent:
      'fish-nature-corais-softs',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-softs-zoanthus-palythoas',
    name: 'Zoanthus e Palythoas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/softs/zoanthus-e-palythoas/',
    world:
      'corais',
    category:
      'zoanthus-e-palythoas',
    parent:
      'fish-nature-corais-softs',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-sps',
    name: 'SPS',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/sps/',
    world:
      'corais',
    category:
      'sps',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-anemonas',
    name: 'Anêmonas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/anemonas/',
    world:
      'corais',
    category:
      'anemonas',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-estrelas-ouricos-pepinos',
    name: 'Estrelas, Ouriços e Pepinos',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/estrelas/',
    world:
      'corais',
    category:
      'estrelas-ouricos-pepinos',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-tridacnas',
    name: 'Tridacnas',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/tridacnas/',
    world:
      'corais',
    category:
      'tridacnas',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),

  route({
    id: 'fish-nature-corais-camaroes',
    name: 'Camarões',
    url:
      'https://www.fishnature.com.br/corais-e-invertebrados/camaroes/',
    world:
      'corais',
    category:
      'camaroes',
    parent:
      'fish-nature-corais-invertebrados',
    type:
      'living-category',
  }),
]

/* ============================================================
   ROTAS INSTITUCIONAIS / SUPORTE
   ============================================================ */

export const FISH_NATURE_SUPPORT_ROUTES = [
  route({
    id: 'fish-nature-produtos',
    name: 'Produtos',
    url:
      'https://www.fishnature.com.br/produtos/',
    category:
      'produtos',
    type:
      'source-index',
  }),

  route({
    id: 'fish-nature-quem-somos',
    name: 'Quem Somos',
    url:
      'https://www.fishnature.com.br/quem-somos/',
    category:
      'institucional',
    type:
      'source-page',
  }),

  route({
    id: 'fish-nature-antes-de-comprar',
    name: 'Antes de Comprar',
    url:
      'https://www.fishnature.com.br/antes-de-comprar/',
    category:
      'institucional',
    type:
      'source-page',
  }),

  route({
    id: 'fish-nature-contato',
    name: 'Contato',
    url:
      'https://www.fishnature.com.br/contato/',
    category:
      'institucional',
    type:
      'source-page',
  }),
]

/* ============================================================
   REGISTRO TOTAL DE ROTAS ÚTEIS
   ============================================================ */

export const FISH_NATURE_NAVIGATION = [
  ...FISH_NATURE_AQUASCAPING_ROUTES,

  ...FISH_NATURE_WATER_CARE_ROUTES,

  ...FISH_NATURE_EQUIPMENT_ROUTES,

  ...FISH_NATURE_MARINE_COMMERCE_ROUTES,

  ...FISH_NATURE_FOOD_ROUTES,

  ...FISH_NATURE_FRESHWATER_ROUTES,

  ...FISH_NATURE_MARINE_FISH_ROUTES,

  ...FISH_NATURE_CORAL_ROUTES,

  ...FISH_NATURE_SUPPORT_ROUTES,
]

/* ============================================================
   ÍNDICES
   ============================================================ */

export const FISH_NATURE_NAVIGATION_BY_ID =
  Object.fromEntries(
    FISH_NATURE_NAVIGATION.map(
      (item) => [
        item.id,
        item,
      ]
    )
  )

export const FISH_NATURE_NAVIGATION_BY_URL =
  Object.fromEntries(
    FISH_NATURE_NAVIGATION.map(
      (item) => [
        item.url,
        item,
      ]
    )
  )

export const getFishNatureRouteById = (
  id
) =>
  FISH_NATURE_NAVIGATION_BY_ID[id] ||
  null

export const getFishNatureRouteByUrl = (
  url
) =>
  FISH_NATURE_NAVIGATION_BY_URL[url] ||
  null

export const getFishNatureRoutesByWorld =
  (world) =>
    FISH_NATURE_NAVIGATION.filter(
      (item) =>
        item.world === world
    )

export const getFishNatureRoutesByParent =
  (parent) =>
    FISH_NATURE_NAVIGATION.filter(
      (item) =>
        item.parent === parent
    )

export const getFishNatureRoutesByType =
  (type) =>
    FISH_NATURE_NAVIGATION.filter(
      (item) =>
        item.type === type
    )

/* ============================================================
   FILAS DE MINERAÇÃO
   ============================================================ */

/**
 * Essas filas NÃO significam ausência de conteúdo.
 *
 * Elas representam páginas descobertas no snapshot
 * que poderão ser abertas individualmente para minerar:
 *
 * - todos os produtos;
 * - todos os organismos;
 * - todas as imagens;
 * - todas as galerias;
 * - todos os preços;
 * - todas as variantes;
 * - todos os dados adicionais.
 */

export const FISH_NATURE_MINING_QUEUE =
  FISH_NATURE_NAVIGATION
    .filter(
      (item) =>
        item.url &&
        item.url.startsWith(
          'https://www.fishnature.com.br/'
        )
    )
    .map(
      (item) => ({
        id:
          item.id,

        url:
          item.url,

        world:
          item.world,

        category:
          item.category,

        source:
          FISH_NATURE_SOURCE_ID,

        status:
          'discovered',

        preserveEverything:
          true,
      })
    )

/* ============================================================
   API
   ============================================================ */

export const fishNatureNavigation = {
  all:
    FISH_NATURE_NAVIGATION,

  byId:
    FISH_NATURE_NAVIGATION_BY_ID,

  byUrl:
    FISH_NATURE_NAVIGATION_BY_URL,

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

  freshwater:
    FISH_NATURE_FRESHWATER_ROUTES,

  marineFish:
    FISH_NATURE_MARINE_FISH_ROUTES,

  corals:
    FISH_NATURE_CORAL_ROUTES,

  support:
    FISH_NATURE_SUPPORT_ROUTES,

  miningQueue:
    FISH_NATURE_MINING_QUEUE,

  getById:
    getFishNatureRouteById,

  getByUrl:
    getFishNatureRouteByUrl,

  getByWorld:
    getFishNatureRoutesByWorld,

  getByParent:
    getFishNatureRoutesByParent,

  getByType:
    getFishNatureRoutesByType,
}

export default FISH_NATURE_NAVIGATION
