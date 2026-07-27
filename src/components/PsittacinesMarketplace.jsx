import { useMemo, useState } from 'react'
import Reveal from './Reveal'

const PSITTACINE_GROUPS = [
  {
    id: 'budgerigars',
    title: 'Periquitos-australianos',
    scientificName: 'Melopsittacus undulatus',
    description:
      'Periquitos australianos comuns, ingleses de exposição, linhagens selecionadas, cores, desenhos e combinações genéticas.',
    image:
      '/images/marketplace/psitacideos/agronexus-periquitos-australianos-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para periquitos-australianos',
    species: [
      'Periquito-australiano comum',
      'Periquito inglês de exposição',
      'Periquito inglês continental',
      'Periquito australiano Hagoromo',
      'Periquito australiano de topete',
    ],
    mutations: [
      'Verde-claro',
      'Verde-escuro',
      'Oliva',
      'Azul-celeste',
      'Cobalto',
      'Malva',
      'Cinza',
      'Cinza-verde',
      'Violeta',
      'Lutino',
      'Albino',
      'Canela',
      'Opalino',
      'Spangle fator simples',
      'Spangle duplo fator',
      'Arlequim dominante',
      'Arlequim recessivo',
      'Asa-clara',
      'Asa-cinza',
      'Asa-rendada',
      'Clearwing',
      'Dilute',
      'Fallow',
      'Face-amarela tipo I',
      'Face-amarela tipo II',
      'Face-dourada',
      'Corpo-claro',
      'Ino',
      'Crested',
      'Texas Clearbody',
      'Slate',
      'Antracite',
      'Blackface',
      'Saddleback',
      'Rainbow',
    ],
  },
  {
    id: 'ringnecks',
    title: 'Ring Necks',
    scientificName: 'Psittacula krameri',
    description:
      'Ring Necks ancestrais, séries azul e verde, fatores escuros, diluições, padrões e combinações de alto valor genético.',
    image:
      '/images/marketplace/psitacideos/agronexus-ring-necks-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Ring Necks',
    species: [
      'Ring Neck indiano',
      'Ring Neck africano',
      'Ring Neck de Abissínia',
      'Ring Neck de Borealis',
    ],
    mutations: [
      'Verde',
      'Verde-escuro',
      'Oliva',
      'Azul',
      'Cobalto',
      'Malva',
      'Turquesa',
      'Azul-turquesa',
      'Aqua',
      'Emerald',
      'Violeta',
      'Cinza',
      'Cinza-verde',
      'Lutino',
      'Albino',
      'Cremino',
      'Canela',
      'Opalino',
      'Pallid',
      'Pallidino',
      'Cleartail',
      'Clearhead Fallow',
      'Bronze Fallow',
      'Buttercup',
      'Misty',
      'Pied dominante',
      'Pied recessivo',
      'Slaty',
      'Khaki',
      'Diluído',
      'Ino',
    ],
  },
  {
    id: 'asiatic-parakeets',
    title: 'Periquitos asiáticos',
    scientificName: 'Psittacula e gêneros relacionados',
    description:
      'Grandes periquitos asiáticos reconhecidos pela elegância, inteligência, caudas longas e ampla variedade de coloração.',
    species: [
      'Periquito-alexandrino',
      'Periquito-cabeça-de-ameixa',
      'Periquito-mustache',
      'Periquito-de-peito-vermelho',
      'Periquito-de-cabeça-ardósia',
      'Periquito-malabar',
      'Periquito-derbyan',
      'Periquito-de-cabeça-cinza',
      'Periquito-de-cauda-longa',
      'Periquito-nicobar',
      'Periquito-de-Layard',
      'Periquito-echo',
      'Periquito-de-Finsch',
      'Periquito-de-Himalaya',
      'Periquito-de-Maurício',
    ],
    mutations: [
      'Ancestral',
      'Azul',
      'Turquesa',
      'Verde-escuro',
      'Oliva',
      'Lutino',
      'Albino',
      'Canela',
      'Pied',
      'Opalino',
      'Diluído',
      'Violeta',
    ],
  },
  {
    id: 'cockatiels',
    title: 'Calopsitas',
    scientificName: 'Nymphicus hollandicus',
    description:
      'Calopsitas domésticas, linhagens de exposição, mutações simples e combinações de cores e desenhos.',
    image:
      '/images/marketplace/psitacideos/agronexus-calopsitas-marketplace-definitive.png',
    imageAlt:
      'Guia visual definitivo do Marketplace AgroNexus para calopsitas',
    species: ['Calopsita australiana', 'Calopsita inglesa de exposição'],
    mutations: [
      'Cinza ancestral',
      'Pérola',
      'Canela',
      'Cara-branca',
      'Lutino',
      'Albina',
      'Arlequim',
      'Cara-amarela',
      'Bochecha-amarela',
      'Fallow',
      'Bronze Fallow',
      'Prata dominante',
      'Prata recessiva',
      'Platina',
      'Pastel face',
      'Oliva',
      'Esmeralda',
      'Whiteface Pearl',
      'Whiteface Cinnamon',
      'Whiteface Pied',
      'Lutino Pearl',
      'Lutino Cinnamon',
      'Cinnamon Pearl',
      'Pied Pearl',
      'Pied Cinnamon',
      'Pérola cara-branca',
      'Canela cara-branca',
      'Arlequim cara-branca',
      'INO',
    ],
  },
  {
    id: 'lovebirds',
    title: 'Agapornis',
    scientificName: 'Agapornis spp.',
    description:
      'Espécies com e sem anel perioftálmico, linhagens puras e amplo universo de mutações e combinações.',
    image:
      '/images/marketplace/psitacideos/agronexus-agapornis-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Agapornis',
    species: [
      'Agapornis roseicollis',
      'Agapornis fischeri',
      'Agapornis personatus',
      'Agapornis lilianae',
      'Agapornis nigrigenis',
      'Agapornis taranta',
      'Agapornis canus',
      'Agapornis pullarius',
      'Agapornis swindernianus',
    ],
    mutations: [
      'Verde ancestral',
      'Verde-escuro',
      'Oliva',
      'Azul',
      'Turquesa',
      'Aqua',
      'Cobalto',
      'Malva',
      'Violeta',
      'Lutino',
      'Albino',
      'Cremino',
      'Canela',
      'Opalino',
      'Pallid',
      'Pallidino',
      'Ino',
      'Arlequim dominante',
      'Arlequim recessivo',
      'Diluído',
      'Edged',
      'Fallow',
      'Cara-laranja',
      'Máscara-negra',
      'Euwing',
      'Misty',
      'Bronze Fallow',
      'Decino',
      'Marbled',
    ],
  },
  {
    id: 'rosellas',
    title: 'Roselas',
    scientificName: 'Platycercus spp.',
    description:
      'Roselas australianas por espécie, subespécie, linhagem, cor ancestral e mutações selecionadas.',
    image:
      '/images/marketplace/psitacideos/agronexus-roselas-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Roselas',
    species: [
      'Rosela-crimson',
      'Rosela-pennant',
      'Rosela-eastern',
      'Rosela-cabeça-pálida',
      'Rosela-northern',
      'Rosela-adelaide',
      'Rosela-green',
      'Rosela-yellow',
      'Rosela-western',
    ],
    mutations: [
      'Ancestral',
      'Rubina',
      'Lutina',
      'Albina',
      'Azul',
      'Canela',
      'Pastel',
      'Opalina',
      'Pied',
      'Amarela',
      'Prateada',
      'Diluída',
      'Fallow',
      'Cinnamon Pallid',
    ],
  },
  {
    id: 'australian-grass-parakeets',
    title: 'Periquitos australianos de cauda longa',
    scientificName: 'Psephotus, Neophema e gêneros relacionados',
    description:
      'Periquitos de campo, cauda longa e grande diversidade de cores naturais e mutações domésticas.',
    species: [
      'Red-rumped',
      'Bourke',
      'Princess Parrot',
      'Regent Parrot',
      'Mulga Parrot',
      'Hooded Parrot',
      'Golden-shouldered Parrot',
      'Bluebonnet',
      'Turquoisine',
      'Scarlet-chested',
      'Elegant Parrot',
      'Rock Parrot',
      'Blue-winged Parrot',
      'Orange-bellied Parrot',
    ],
    mutations: [
      'Ancestral',
      'Rosa',
      'Opalino',
      'Lutino',
      'Albino',
      'Azul',
      'Canela',
      'Pallid',
      'Pied',
      'Fallow',
      'Amarelo',
      'Prata',
      'Diluído',
    ],
  },
  {
    id: 'kakarikis',
    title: 'Kakarikis',
    scientificName: 'Cyanoramphus spp.',
    description:
      'Periquitos neozelandeses ativos e curiosos, com espécies e mutações mantidas por criadores especializados.',
    image:
      '/images/marketplace/psitacideos/agronexus-kakarikis-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Kakarikis',
    species: [
      'Kakariki-de-fronte-vermelha',
      'Kakariki-de-fronte-amarela',
      'Kakariki-de-fronte-laranja',
      'Kakariki-das-Antípodas',
    ],
    mutations: [
      'Verde ancestral',
      'Lutino',
      'Canela',
      'Pied',
      'Misty',
      'Azul',
      'Turquesa',
      'Gold Checked',
      'Fallow',
      'Diluído',
    ],
  },
  {
    id: 'conures',
    title: 'Conures, jandaias, tiribas e maritacas',
    scientificName: 'Aratinga, Pyrrhura, Eupsittula e outros',
    description:
      'Psitacídeos americanos de pequeno e médio porte, incluindo espécies brasileiras e mutações desenvolvidas em criação.',
    image:
      '/images/marketplace/psitacideos/agronexus-conures-jandaias-tiribas-maritacas-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para conures, jandaias, tiribas e maritacas',
    species: [
      'Jandaia-sol',
      'Jandaia-verdadeira',
      'Jandaia-de-testa-vermelha',
      'Jandaia-coquinho',
      'Nanday',
      'Conure-de-cabeça-azul',
      'Conure-de-cabeça-preta',
      'Conure-patagônica',
      'Tiriba-de-barriga-vermelha',
      'Tiriba-de-bochecha-verde',
      'Tiriba-de-testa-vermelha',
      'Tiriba-pérola',
      'Tiriba-fogo',
      'Maritaca',
      'Maracanã-nobre',
      'Maracanã-verdadeira',
      'Periquitão-maracanã',
    ],
    mutations: [
      'Ancestral',
      'Turquesa',
      'Pineapple',
      'Canela',
      'Yellow-sided',
      'Suncheek',
      'Mooncheek',
      'Mint',
      'Dilute',
      'Opamint',
      'Violeta',
      'Lutino',
      'Pied',
      'Red Factor',
      'High Red',
    ],
  },
  {
    id: 'forpus',
    title: 'Forpus e pequenos periquitos americanos',
    scientificName: 'Forpus spp.',
    description:
      'Pequenos psitacídeos americanos com personalidade marcante e grande variedade de mutações domésticas.',
    image:
      '/images/marketplace/psitacideos/agronexus-forpus-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Forpus',
    species: [
      'Forpus-coelestis',
      'Forpus-passarinus',
      'Forpus-conspicillatus',
      'Forpus-xanthops',
      'Forpus-cyanopygius',
      'Forpus-sclateri',
      'Forpus-xanthopterygius',
    ],
    mutations: [
      'Verde ancestral',
      'Azul',
      'Cobalto',
      'Malva',
      'Turquesa',
      'Violeta',
      'Lutino',
      'Albino',
      'Pastel',
      'Canela',
      'Fallow',
      'Pied',
      'Misty',
      'Diluído',
      'American Yellow',
      'American White',
    ],
  },
  {
    id: 'lorikeets',
    title: 'Lóris e loriquitos',
    scientificName: 'Loriini',
    description:
      'Psitacídeos nectarívoros de cores intensas, necessidades nutricionais específicas e comportamento altamente ativo.',
    image:
      '/images/marketplace/psitacideos/agronexus-loris-e-loriquitos-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Lóris e loriquitos',
    species: [
      'Lóris-moluccano',
      'Lóris-arco-íris',
      'Lóris-vermelho',
      'Lóris-de-cabeça-negra',
      'Lóris-dusky',
      'Lóris-chattering',
      'Lóris-de-pescoço-violeta',
      'Lóris-de-asas-negras',
      'Loriquito-de-Goldie',
      'Loriquito-de-Stella',
      'Loriquito-de-cabeça-azul',
      'Loriquito-de-listras-azuis',
      'Loriquito-de-colar-vermelho',
      'Loriquito-de-peito-escamoso',
    ],
    mutations: [
      'Ancestral',
      'Azul',
      'Lutino',
      'Oliva',
      'Canela',
      'Pied',
      'Diluído',
      'Albino',
    ],
  },
  {
    id: 'amazons',
    title: 'Papagaios Amazona',
    scientificName: 'Amazona spp.',
    description:
      'Papagaios americanos reconhecidos pela inteligência, vocalização e longevidade, sempre com procedência legal.',
    image:
      '/images/marketplace/psitacideos/agronexus-papagaios-amazonicos-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para papagaios amazônicos',
    species: [
      'Papagaio-verdadeiro',
      'Papagaio-do-mangue',
      'Papagaio-charão',
      'Papagaio-de-peito-roxo',
      'Papagaio-galego',
      'Papagaio-de-cara-roxa',
      'Papagaio-moleiro',
      'Papagaio-cubano',
      'Papagaio-de-fronte-branca',
      'Papagaio-de-nuca-amarela',
      'Papagaio-de-cabeça-amarela',
      'Papagaio-de-asa-laranja',
    ],
    mutations: ['Ancestral', 'Azul', 'Lutino', 'Canela', 'Pied', 'Diluído'],
  },
  {
    id: 'african-parrots',
    title: 'Papagaios africanos',
    scientificName: 'Psittacus e Poicephalus',
    description:
      'Papagaios africanos inteligentes e longevos, incluindo cinzentos, senegais e espécies do gênero Poicephalus.',
    image:
      '/images/marketplace/psitacideos/agronexus-papagaios-africanos-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para papagaios africanos',
    species: [
      'Papagaio-cinzento-do-Congo',
      'Papagaio-cinzento-de-Timneh',
      'Papagaio-do-Senegal',
      'Papagaio-de-Jardine',
      'Papagaio-de-Meyer',
      'Papagaio-de-barriga-vermelha',
      'Papagaio-de-cabeça-marrom',
      'Papagaio-de-Rüppell',
      'Papagaio-de-cabeça-amarela',
    ],
    mutations: [
      'Ancestral',
      'Red Factor',
      'Pied',
      'Lutino',
      'Canela',
      'Diluído',
    ],
  },
  {
    id: 'pionus',
    title: 'Pionus',
    scientificName: 'Pionus spp.',
    description:
      'Papagaios neotropicais reconhecidos pelo temperamento equilibrado, beleza discreta e vocalização moderada.',
    image:
      '/images/marketplace/psitacideos/agronexus-pionus-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Pionus',
    species: [
      'Pionus-maximiliani',
      'Pionus-menstruus',
      'Pionus-senilis',
      'Pionus-fuscus',
      'Pionus-chalcopterus',
      'Pionus-sordidus',
      'Pionus-tumultuosus',
    ],
    mutations: [
      'Ancestral',
      'Azul',
      'Lutino',
      'Canela',
      'Pied',
      'Diluído',
    ],
  },
  {
    id: 'caiques',
    title: 'Caiques',
    scientificName: 'Pionites spp.',
    description:
      'Psitacídeos atléticos, curiosos e intensamente brincalhões, com manejo orientado ao enriquecimento e bem-estar.',
    image:
      '/images/marketplace/psitacideos/agronexus-caiques-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para caiques',
    species: [
      'Caique-de-cabeça-preta',
      'Caique-de-barriga-branca',
      'Caique-de-coxa-verde',
      'Caique-de-cauda-amarela',
    ],
    mutations: [
      'Ancestral',
      'Canela',
      'Pied',
      'Diluído',
      'Lutino',
    ],
  },
  {
    id: 'eclectus',
    title: 'Eclectus',
    scientificName: 'Eclectus spp.',
    description:
      'Papagaios de dimorfismo sexual marcante, elegância singular e necessidades nutricionais e comportamentais específicas.',
    image:
      '/images/marketplace/psitacideos/agronexus-eclectus-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para Eclectus',
    species: [
      'Eclectus-de-Nova-Guiné',
      'Eclectus-das-Ilhas Salomão',
      'Eclectus-de-Aru',
      'Eclectus-vosmaeri',
      'Eclectus-cornelia',
      'Eclectus-maclura',
    ],
    mutations: [
      'Ancestral',
      'Red-sided',
      'Vosmaeri',
      'Azul',
      'Lutino',
      'Canela',
      'Pied',
    ],
  },
  {
    id: 'vasa',
    title: 'Papagaios Vasa',
    scientificName: 'Coracopsis spp.',
    description:
      'Psitacídeos malgaxes singulares, reunidos em uma área própria para pesquisa, conservação e criação responsável.',
    species: [
      'Vasa-maior',
      'Vasa-menor',
      'Vasa-das-Comores',
      'Vasa-de-Seychelles',
    ],
    mutations: [
      'Ancestral',
      'Variações naturais de plumagem',
    ],
  },
  {
    id: 'macaws',
    title: 'Araras e mini-araras',
    scientificName: 'Ara, Anodorhynchus, Primolius e Diopsittaca',
    description:
      'Araras de grande e pequeno porte, espécies puras, linhagens legalizadas e conteúdo educativo de conservação.',
    image:
      '/images/marketplace/psitacideos/agronexus-araras-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para araras e mini-araras',
    species: [
      'Arara-canindé',
      'Arara-vermelha-grande',
      'Arara-verde',
      'Arara-militar',
      'Arara-severa',
      'Arara-de-Illiger',
      'Arara-de-colar',
      'Maracanã-nobre',
      'Arara-azul-grande',
      'Arara-azul-de-Lear',
      'Ararinha-azul',
      'Arara-azul-pequena',
    ],
    mutations: [
      'Ancestral',
      'Lutino',
      'Pied',
      'Canela',
      'Diluído',
      'Híbridos identificados separadamente',
    ],
  },
  {
    id: 'cockatoos',
    title: 'Cacatuas',
    scientificName: 'Cacatuidae',
    description:
      'Cacatuas brancas, rosas e negras, com conteúdo especializado sobre comportamento, alojamento e bem-estar.',
    image:
      '/images/marketplace/psitacideos/agronexus-cacatuas-marketplace.png',
    imageAlt:
      'Guia visual completo do Marketplace AgroNexus para cacatuas',
    species: [
      'Cacatua-galerita',
      'Cacatua-alba',
      'Cacatua-de-Goffin',
      'Cacatua-moluccana',
      'Cacatua-rosa',
      'Cacatua-de-Major Mitchell',
      'Corella-pequena',
      'Corella-de-bico-longo',
      'Cacatua-das-palmeiras',
      'Cacatua-negra-de-cauda-vermelha',
      'Cacatua-negra-de-cauda-amarela',
      'Gang-gang',
    ],
    mutations: [
      'Ancestral',
      'Lutino',
      'Pied',
      'Canela',
      'Diluído',
      'Silver',
    ],
  },
]


const MARKETPLACE_IMAGE_ROOT = '/images/marketplace'

const PSITTACINE_EDITORIAL_SLUGS = {
  budgerigars: 'periquitos-australianos',
  ringnecks: 'ring-necks',
  'asiatic-parakeets': 'periquitos-asiaticos',
  cockatiels: 'calopsitas-definitive',
  lovebirds: 'agapornis',
  rosellas: 'roselas',
  'australian-grass-parakeets': 'periquitos-australianos-cauda-longa',
  kakarikis: 'kakarikis',
  conures: 'conures-jandaias-tiribas-maritacas',
  forpus: 'forpus',
  lorikeets: 'loris-e-loriquitos',
  amazons: 'papagaios-amazonicos',
  'african-parrots': 'papagaios-africanos',
  pionus: 'pionus',
  caiques: 'caiques',
  eclectus: 'eclectus',
  vasa: 'papagaios-vasa',
  macaws: 'araras',
  cockatoos: 'cacatuas',
}

function buildMarketplaceImagePath(category, slug) {
  return `${MARKETPLACE_IMAGE_ROOT}/${category}/agronexus-${slug}-marketplace.png`
}

const PSITTACINE_CATALOG = PSITTACINE_GROUPS.map((group) => {
  const editorialSlug = PSITTACINE_EDITORIAL_SLUGS[group.id]

  return {
    ...group,
    image:
      group.image ||
      (editorialSlug
        ? buildMarketplaceImagePath('psitacideos', editorialSlug)
        : null),
    imageAlt:
      group.imageAlt ||
      `Guia visual completo do Marketplace AgroNexus para ${group.title}`,
  }
})

const COMPLEMENTARY_CATEGORIES = [
  {
    title: 'Viveiros e gaiolas',
    items: [
      'Viveiros internos',
      'Viveiros externos',
      'Voadeiras',
      'Gaiolas para pequenos psitacídeos',
      'Gaiolas para grandes psitacídeos',
      'Divisórias',
      'Telas',
      'Pedestais',
      'Capas',
      'Bandejas',
    ],
  },
  {
    title: 'Poleiros e enriquecimento',
    items: [
      'Poleiros naturais',
      'Poleiros terapêuticos',
      'Poleiros de cálcio',
      'Cordas',
      'Escadas',
      'Balanços',
      'Brinquedos destrutivos',
      'Brinquedos cognitivos',
      'Forrageamento',
      'Playgrounds',
    ],
  },
  {
    title: 'Alimentação',
    items: [
      'Rações extrusadas',
      'Misturas de sementes',
      'Farinhadas',
      'Papinhas',
      'Néctares para lóris',
      'Frutas desidratadas',
      'Suplementos',
      'Probióticos',
      'Minerais',
      'Petiscos',
    ],
  },
  {
    title: 'Reprodução e manejo',
    items: [
      'Ninhos verticais',
      'Ninhos horizontais',
      'Criadeiras',
      'Incubadoras',
      'Ovoscópios',
      'Anilhas',
      'Identificação',
      'Comedouros',
      'Bebedouros',
      'Banheiras',
    ],
  },
  {
    title: 'Saúde e bem-estar',
    items: [
      'Veterinários especializados',
      'Laboratórios',
      'Testes genéticos',
      'Sexagem',
      'Exames',
      'Higiene',
      'Desinfecção',
      'Transporte adequado',
      'Consultoria nutricional',
      'Orientação comportamental',
    ],
  },
]

function normaliseText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export default function PsittacinesMarketplace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeGroup, setActiveGroup] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [failedImages, setFailedImages] = useState(() => new Set())

  const markImageUnavailable = (groupId) => {
    setFailedImages((current) => {
      if (current.has(groupId)) {
        return current
      }

      const next = new Set(current)
      next.add(groupId)
      return next
    })
  }

  const filteredGroups = useMemo(() => {
    const query = normaliseText(searchTerm.trim())

    return PSITTACINE_CATALOG.filter((group) => {
      const matchesGroup = activeGroup === 'all' || group.id === activeGroup

      if (!matchesGroup) {
        return false
      }

      if (!query) {
        return true
      }

      const searchableContent = normaliseText(
        [
          group.title,
          group.scientificName,
          group.description,
          ...group.species,
          ...group.mutations,
        ].join(' ')
      )

      return searchableContent.includes(query)
    })
  }, [activeGroup, searchTerm])

  const totalSpecies = PSITTACINE_CATALOG.reduce(
    (total, group) => total + group.species.length,
    0
  )

  const totalMutations = PSITTACINE_CATALOG.reduce(
    (total, group) => total + group.mutations.length,
    0
  )

  return (
    <>
      <style>{`
        .psitta-marketplace {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(35, 211, 230, 0.10),
              transparent 34%
            ),
            radial-gradient(
              circle at 88% 20%,
              rgba(212, 175, 55, 0.08),
              transparent 30%
            ),
            linear-gradient(180deg, #07101e 0%, #050b15 100%);
        }

        .psitta-marketplace::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 78%);
        }

        .psitta-container {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .psitta-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
          gap: 34px;
          align-items: stretch;
          margin-bottom: 42px;
        }

        .psitta-intro,
        .psitta-summary,
        .psitta-group-card,
        .psitta-commerce-card {
          border: 1px solid rgba(35, 211, 230, 0.18);
          background:
            linear-gradient(
              145deg,
              rgba(15, 31, 54, 0.96),
              rgba(7, 16, 30, 0.97)
            );
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
        }

        .psitta-intro {
          padding: clamp(30px, 5vw, 58px);
          border-radius: 28px;
        }

        .psitta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #23d3e6;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .psitta-eyebrow::before {
          content: '';
          width: 30px;
          height: 2px;
          background: #23d3e6;
        }

        .psitta-title {
          max-width: 850px;
          margin: 22px 0 0;
          color: #f5f7fb;
          font-size: clamp(2.35rem, 6vw, 5.2rem);
          line-height: 0.96;
          letter-spacing: -0.045em;
          text-transform: uppercase;
        }

        .psitta-title strong {
          color: #23d3e6;
          font-weight: inherit;
        }

        .psitta-lead {
          max-width: 760px;
          margin: 28px 0 0;
          color: #aeb9cb;
          font-size: 1.04rem;
          line-height: 1.85;
        }

        .psitta-summary {
          display: grid;
          gap: 1px;
          overflow: hidden;
          border-radius: 28px;
          background-color: rgba(35, 211, 230, 0.16);
        }

        .psitta-summary-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 126px;
          padding: 24px 28px;
          background: #0b1729;
        }

        .psitta-summary-number {
          color: #23d3e6;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1;
        }

        .psitta-summary-label {
          margin-top: 9px;
          color: #9aa8bc;
          font-size: 0.78rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .psitta-toolbar {
          display: grid;
          grid-template-columns: minmax(240px, 1fr) auto;
          gap: 20px;
          align-items: center;
          margin-bottom: 28px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          background: rgba(7, 16, 30, 0.84);
          backdrop-filter: blur(14px);
        }

        .psitta-search {
          width: 100%;
          min-height: 52px;
          padding: 0 19px;
          border: 1px solid rgba(35, 211, 230, 0.25);
          border-radius: 14px;
          outline: none;
          background: #091526;
          color: #f5f7fb;
          font: inherit;
        }

        .psitta-search:focus {
          border-color: #23d3e6;
          box-shadow: 0 0 0 3px rgba(35, 211, 230, 0.11);
        }

        .psitta-results {
          color: #9aa8bc;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .psitta-group-nav {
          display: flex;
          gap: 10px;
          margin-bottom: 34px;
          padding-bottom: 8px;
          overflow-x: auto;
          scrollbar-width: thin;
        }

        .psitta-filter-button {
          flex: 0 0 auto;
          min-height: 42px;
          padding: 0 17px;
          border: 1px solid rgba(35, 211, 230, 0.2);
          border-radius: 999px;
          background: rgba(11, 23, 41, 0.9);
          color: #b7c2d2;
          cursor: pointer;
          font: inherit;
          font-size: 0.78rem;
          font-weight: 750;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .psitta-filter-button:hover,
        .psitta-filter-button.is-active {
          border-color: #23d3e6;
          background: #23d3e6;
          color: #031019;
          transform: translateY(-2px);
        }

        .psitta-groups {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .psitta-group-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: clamp(24px, 4vw, 34px);
          border-radius: 24px;
        }

        .psitta-group-heading {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
        }

        .psitta-group-number {
          display: grid;
          flex: 0 0 48px;
          width: 48px;
          height: 48px;
          place-items: center;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 50%;
          color: #d4af37;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .psitta-group-title {
          margin: 0;
          color: #f4f6fa;
          font-size: clamp(1.45rem, 3vw, 2rem);
          line-height: 1.1;
          text-transform: uppercase;
        }

        .psitta-scientific-name {
          display: block;
          margin-top: 9px;
          color: #d4af37;
          font-family: Georgia, serif;
          font-size: 0.92rem;
          font-style: italic;
        }

        .psitta-description {
          margin: 20px 0 0;
          color: #9eacc0;
          line-height: 1.7;
        }

        .psitta-subsection {
          margin-top: 25px;
        }

        .psitta-subsection-title {
          margin: 0 0 13px;
          color: #23d3e6;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .psitta-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .psitta-tag {
          padding: 8px 11px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.025);
          color: #cad2de;
          font-size: 0.78rem;
          line-height: 1.3;
        }

        .psitta-card-visual {
          position: relative;
          overflow: hidden;
          margin: -10px -10px 26px;
          padding: 0;
          border: 1px solid rgba(212, 175, 55, 0.28);
          border-radius: 18px;
          background: #050b15;
          aspect-ratio: 16 / 10;
          cursor: pointer;
        }

        .psitta-card-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            transparent 55%,
            rgba(3, 10, 18, 0.88) 100%
          );
        }

        .psitta-card-visual img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 360ms ease, filter 360ms ease;
        }

        .psitta-card-visual:hover img {
          transform: scale(1.035);
          filter: brightness(1.08);
        }

        .psitta-card-visual-label {
          position: absolute;
          z-index: 1;
          right: 14px;
          bottom: 13px;
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 13px;
          border: 1px solid rgba(212, 175, 55, 0.5);
          border-radius: 999px;
          background: rgba(4, 12, 21, 0.84);
          color: #f3d77a;
          font-size: 0.69rem;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }

        .psitta-card-placeholder {
          display: grid;
          min-height: 100%;
          place-items: center;
          padding: 28px;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(35, 211, 230, 0.12),
              transparent 42%
            ),
            linear-gradient(145deg, #0a1728, #050b15);
        }

        .psitta-card-placeholder strong {
          display: block;
          color: #f3d77a;
          font-size: 0.78rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .psitta-card-placeholder span {
          display: block;
          max-width: 280px;
          margin-top: 10px;
          color: #8f9db0;
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .psitta-lightbox {
          position: fixed;
          z-index: 9999;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(1, 5, 10, 0.94);
          backdrop-filter: blur(14px);
        }

        .psitta-lightbox-dialog {
          position: relative;
          width: min(1180px, 100%);
          max-height: calc(100vh - 48px);
          overflow: auto;
          border: 1px solid rgba(212, 175, 55, 0.38);
          border-radius: 22px;
          background: #050b15;
          box-shadow: 0 35px 110px rgba(0, 0, 0, 0.68);
        }

        .psitta-lightbox-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .psitta-lightbox-close {
          position: sticky;
          z-index: 2;
          top: 14px;
          float: right;
          display: grid;
          width: 46px;
          height: 46px;
          margin: 14px 14px -60px 0;
          place-items: center;
          border: 1px solid rgba(35, 211, 230, 0.46);
          border-radius: 50%;
          background: rgba(3, 16, 25, 0.9);
          color: #23d3e6;
          cursor: pointer;
          font: inherit;
          font-size: 1.4rem;
          line-height: 1;
          backdrop-filter: blur(12px);
        }

        .psitta-lightbox-close:hover {
          background: #23d3e6;
          color: #031019;
        }

        .psitta-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
          padding-top: 28px;
        }

        .psitta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          border: 1px solid #23d3e6;
          border-radius: 999px;
          color: #23d3e6;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-decoration: none;
          text-transform: uppercase;
          transition:
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .psitta-button:hover {
          background: #23d3e6;
          color: #031019;
          transform: translateY(-2px);
        }

        .psitta-button.is-primary {
          background: #23d3e6;
          color: #031019;
        }

        .psitta-commerce {
          margin-top: 74px;
        }

        .psitta-section-heading {
          max-width: 850px;
          margin-bottom: 30px;
        }

        .psitta-section-title {
          margin: 14px 0 0;
          color: #f5f7fb;
          font-size: clamp(2rem, 5vw, 3.7rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .psitta-section-copy {
          max-width: 720px;
          margin: 20px 0 0;
          color: #9eacc0;
          line-height: 1.75;
        }

        .psitta-commerce-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .psitta-commerce-card {
          padding: 24px;
          border-radius: 20px;
        }

        .psitta-commerce-title {
          margin: 0;
          color: #f5f7fb;
          font-size: 1.02rem;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .psitta-commerce-list {
          display: grid;
          gap: 9px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .psitta-commerce-list li {
          position: relative;
          padding-left: 15px;
          color: #9eacc0;
          font-size: 0.84rem;
          line-height: 1.45;
        }

        .psitta-commerce-list li::before {
          content: '+';
          position: absolute;
          left: 0;
          color: #23d3e6;
        }

        .psitta-cta {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 30px;
          align-items: center;
          margin-top: 74px;
          padding: clamp(28px, 5vw, 48px);
          border: 1px solid rgba(212, 175, 55, 0.28);
          border-radius: 28px;
          background:
            linear-gradient(
              135deg,
              rgba(212, 175, 55, 0.09),
              rgba(35, 211, 230, 0.07)
            ),
            #091526;
        }

        .psitta-cta-title {
          margin: 0;
          color: #f5f7fb;
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1.05;
          text-transform: uppercase;
        }

        .psitta-cta-copy {
          max-width: 760px;
          margin: 15px 0 0;
          color: #a5b1c3;
          line-height: 1.75;
        }

        .psitta-empty {
          grid-column: 1 / -1;
          padding: 50px 24px;
          border: 1px dashed rgba(35, 211, 230, 0.28);
          border-radius: 22px;
          color: #aeb9cb;
          text-align: center;
        }

        @media (max-width: 1050px) {
          .psitta-commerce-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 820px) {
          .psitta-hero,
          .psitta-cta {
            grid-template-columns: 1fr;
          }

          .psitta-summary {
            grid-template-columns: repeat(3, 1fr);
          }

          .psitta-summary-item {
            min-height: 110px;
          }

          .psitta-groups {
            grid-template-columns: 1fr;
          }

          .psitta-toolbar {
            grid-template-columns: 1fr;
          }

          .psitta-results {
            white-space: normal;
          }
        }

        @media (max-width: 680px) {
          .psitta-marketplace {
            padding: 82px 0;
          }

          .psitta-container {
            width: min(100% - 24px, 1180px);
          }

          .psitta-summary {
            grid-template-columns: 1fr;
          }

          .psitta-commerce-grid {
            grid-template-columns: 1fr;
          }

          .psitta-group-heading {
            flex-direction: column-reverse;
          }

          .psitta-cta .psitta-button {
            width: 100%;
          }
        }
      `}</style>

      <section id="psitacideos-marketplace" className="psitta-marketplace">
        <div className="psitta-container">
          <div className="psitta-hero">
            <Reveal className="psitta-intro">
              <span className="psitta-eyebrow">
                Marketplace AgroNexus · Psitacídeos
              </span>

              <h2 className="psitta-title">
                Cada espécie, cada mutação, <strong>todo o ecossistema.</strong>
              </h2>

              <p className="psitta-lead">
                Uma área especializada para encontrar aves de procedência
                responsável, estudar espécies e mutações e montar tudo o que
                cada animal precisa: viveiro, alimentação, poleiros,
                brinquedos, manejo, saúde e suporte profissional.
              </p>
            </Reveal>

            <Reveal className="psitta-summary" delay={100}>
              <div className="psitta-summary-item">
                <span className="psitta-summary-number">
                  {PSITTACINE_CATALOG.length}
                </span>
                <span className="psitta-summary-label">
                  Grandes grupos
                </span>
              </div>

              <div className="psitta-summary-item">
                <span className="psitta-summary-number">{totalSpecies}+</span>
                <span className="psitta-summary-label">
                  Espécies e linhagens
                </span>
              </div>

              <div className="psitta-summary-item">
                <span className="psitta-summary-number">
                  {totalMutations}+
                </span>
                <span className="psitta-summary-label">
                  Mutações catalogadas
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal className="psitta-toolbar">
            <input
              className="psitta-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Pesquise: periquito inglês, Red-rumped, Ring Neck violeta, calopsita pérola..."
              aria-label="Pesquisar espécies e mutações de psitacídeos"
            />

            <span className="psitta-results">
              {filteredGroups.length}{' '}
              {filteredGroups.length === 1
                ? 'grupo encontrado'
                : 'grupos encontrados'}
            </span>
          </Reveal>

          <Reveal className="psitta-group-nav" delay={80}>
            <button
              type="button"
              className={`psitta-filter-button ${
                activeGroup === 'all' ? 'is-active' : ''
              }`}
              onClick={() => setActiveGroup('all')}
            >
              Ver todos
            </button>

            {PSITTACINE_CATALOG.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`psitta-filter-button ${
                  activeGroup === group.id ? 'is-active' : ''
                }`}
                onClick={() => setActiveGroup(group.id)}
              >
                {group.title}
              </button>
            ))}
          </Reveal>

          <div className="psitta-groups">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group, index) => (
                <Reveal
                  key={group.id}
                  className="psitta-group-card"
                  delay={(index % 4) * 70}
                >
                  {group.image && !failedImages.has(group.id) ? (
                    <button
                      type="button"
                      className="psitta-card-visual"
                      onClick={() =>
                        setSelectedImage({
                          groupId: group.id,
                          src: group.image,
                          alt: group.imageAlt || group.title,
                        })
                      }
                      aria-label={`Abrir guia visual completo de ${group.title}`}
                    >
                      <img
                        src={group.image}
                        alt={group.imageAlt || group.title}
                        loading="lazy"
                        onError={() => markImageUnavailable(group.id)}
                      />
                      <span className="psitta-card-visual-label">
                        Abrir guia visual
                      </span>
                    </button>
                  ) : (
                    <div
                      className="psitta-card-visual psitta-card-placeholder"
                      aria-label={`Guia editorial de ${group.title} em produção`}
                    >
                      <div>
                        <strong>Guia editorial em produção</strong>
                        <span>
                          O card permanece ativo e a imagem aparecerá
                          automaticamente assim que o arquivo for publicado.
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="psitta-group-heading">
                    <div>
                      <h3 className="psitta-group-title">{group.title}</h3>

                      <span className="psitta-scientific-name">
                        {group.scientificName}
                      </span>
                    </div>

                    <span className="psitta-group-number">
                      {String(
                        PSITTACINE_CATALOG.findIndex(
                          (item) => item.id === group.id
                        ) + 1
                      ).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="psitta-description">{group.description}</p>

                  <div className="psitta-subsection">
                    <h4 className="psitta-subsection-title">
                      Espécies e linhagens
                    </h4>

                    <ul className="psitta-tags">
                      {group.species.map((species) => (
                        <li key={species} className="psitta-tag">
                          {species}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="psitta-subsection">
                    <h4 className="psitta-subsection-title">
                      Mutações e variedades
                    </h4>

                    <ul className="psitta-tags">
                      {group.mutations.map((mutation) => (
                        <li key={mutation} className="psitta-tag">
                          {mutation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="psitta-card-actions">
                    {group.image && !failedImages.has(group.id) && (
                      <button
                        type="button"
                        className="psitta-button is-primary"
                        onClick={() =>
                          setSelectedImage({
                            groupId: group.id,
                            src: group.image,
                            alt: group.imageAlt || group.title,
                          })
                        }
                      >
                        Ver guia visual
                      </button>
                    )}

                    <a
                      className={`psitta-button ${
                        group.image && !failedImages.has(group.id)
                          ? ''
                          : 'is-primary'
                      }`}
                      href="#contact"
                    >
                      Consultar disponibilidade
                    </a>

                    <a className="psitta-button" href="#contact">
                      Montar pacote completo
                    </a>
                  </div>
                </Reveal>
              ))
            ) : (
              <div className="psitta-empty">
                Nenhuma espécie ou mutação foi encontrada para essa pesquisa.
              </div>
            )}
          </div>

          <div className="psitta-commerce">
            <Reveal className="psitta-section-heading">
              <span className="psitta-eyebrow">Compra conectada</span>

              <h3 className="psitta-section-title">
                A ave é apenas o começo.
              </h3>

              <p className="psitta-section-copy">
                Cada consulta pode ser transformada em uma solução completa,
                reunindo animal, alojamento, alimentação, enriquecimento,
                manejo e suporte especializado no mesmo atendimento.
              </p>
            </Reveal>

            <div className="psitta-commerce-grid">
              {COMPLEMENTARY_CATEGORIES.map((category, index) => (
                <Reveal
                  key={category.title}
                  className="psitta-commerce-card"
                  delay={index * 70}
                >
                  <h4 className="psitta-commerce-title">
                    {category.title}
                  </h4>

                  <ul className="psitta-commerce-list">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="psitta-cta">
            <div>
              <h3 className="psitta-cta-title">
                Encontrou a espécie que procura?
              </h3>

              <p className="psitta-cta-copy">
                Consulte disponibilidade, procedência, documentação e produtos
                compatíveis. A AgroNexus organiza a solução completa conforme a
                espécie, o espaço disponível e as necessidades do comprador.
              </p>
            </div>

            <a className="psitta-button is-primary" href="#contact">
              Falar com a AgroNexus
            </a>
          </Reveal>
        </div>
      </section>

      {selectedImage && (
        <div
          className="psitta-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Guia visual de psitacídeos"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="psitta-lightbox-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="psitta-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar guia visual"
            >
              ×
            </button>

            <img
              className="psitta-lightbox-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
              onError={() => {
                markImageUnavailable(selectedImage.groupId)
                setSelectedImage(null)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
