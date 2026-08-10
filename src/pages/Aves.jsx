import { useMemo, useState } from 'react'

import budgerigarPhoto1 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-1.jpg'
import budgerigarPhoto2 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-2.jpg'
import budgerigarPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-editor_cZCwtWtagronexus-australian-budgerigars-editorial-guid-3.jpg'
import budgerigarPhoto4 from '../assets/images/editorial/agronexus-australian-budgerigars-editorial-guid-4.jpg'

import agapornisPhoto1 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-1.jpg'
import agapornisPhoto2 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-2.jpg'
import agapornisPhoto3 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-3.jpg'
import agapornisPhoto4 from '../assets/images/editorial/study-the-attached-agronexus-agapornis-agronexus-lovebirds-editorial-guide-4.jpg'

import ringNeckPhoto1 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-1.jpg'
import ringNeckPhoto2 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-2.jpg'
import ringNeckPhoto3 from '../assets/images/editorial/high-level-description-a-vertical-agronexus-ring-neck-parakeets-editorial-guide-3.jpg'

import rosellaPhoto1 from '../assets/images/editorial/agronexus-rosellas-editorial-guide-1.jpg'
import rosellaPhoto2 from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'

import '../styles/Aves.css'

const COMMONS = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=1400`

const SAFE_FALLBACKS = {
  periquitos: budgerigarPhoto3,
  calopsitas: COMMONS('Parrot Cockatiel lutino.jpg'),
  ringnecks: ringNeckPhoto2,
  agapornis: agapornisPhoto2,
  rosellas: rosellaPhoto1,
  loris: COMMONS('RainbowLorikeet.jpg'),
  grandes: COMMONS('Sulphur-crested Cockatoo 2010.JPG'),
  canto: COMMONS('Gouldian Finch. (8065423804).jpg'),
  aquaticos: COMMONS('Mandarin duck (male).jpg'),
  nutropica: COMMONS('BirdSeeds.jpg'),
  habitats: COMMONS('A cage for birds.jpg'),
  equipamentos: COMMONS('Small Chicken Egg Incubator.jpg'),
}

function applyFallback(event, category) {
  const image = event.currentTarget

  if (image.dataset.fallbackApplied === 'true') {
    return
  }

  image.dataset.fallbackApplied = 'true'
  image.src =
    SAFE_FALLBACKS[category] ||
    budgerigarPhoto3
}

const CATEGORIES = [
  {
    id: 'periquitos',
    name: 'Periquitos Australianos',
    line: 'Rainbow · Violeta · Cobalto · Hagoromo',
    image: budgerigarPhoto3,
  },
  {
    id: 'calopsitas',
    name: 'Calopsitas',
    line: 'Lutino · Pérola · Cara Branca · Arlequim',
    image: COMMONS('Parrot Cockatiel lutino.jpg'),
  },
  {
    id: 'ringnecks',
    name: 'Ring Necks',
    line: 'Cobalto · Cremino · Turquesa · Lutino',
    image: ringNeckPhoto2,
  },
  {
    id: 'agapornis',
    name: 'Agapornis',
    line: 'Roseicollis · Fischer · Personata · Blue',
    image: agapornisPhoto2,
  },
  {
    id: 'rosellas',
    name: 'Roselas, Kakarikis e Bourkes',
    line: 'Pennant · Rubina · Lutina · Rosa',
    image: rosellaPhoto1,
  },
  {
    id: 'loris',
    name: 'Lóris e Jandaias',
    line: 'Molucano · Arco-Íris · Borneo · Jandaia Sol',
    image: COMMONS('RainbowLorikeet.jpg'),
  },
  {
    id: 'grandes',
    name: 'Cacatuas, Papagaios e Araras',
    line: 'Alba · Galerita · Moluca · Verdadeiro · Canindé',
    image: COMMONS('Sulphur-crested Cockatoo 2010.JPG'),
  },
  {
    id: 'canto',
    name: 'Aves de Canto e Exóticos',
    line: 'Canários · Gould · Trinca Ferro · Curió',
    image: COMMONS('Gouldian Finch. (8065423804).jpg'),
  },
  {
    id: 'aquaticos',
    name: 'Aquáticos Ornamentais',
    line: 'Mandarim · Carolina · Cayuga · Rouen · Mini',
    image: COMMONS('Mandarin duck (male).jpg'),
  },
  {
    id: 'nutropica',
    name: 'Linha Nutrópica',
    line: 'Extrusadas · Papinhas · Néctar · Farinhadas',
    image: COMMONS('Bird food pellets.JPG'),
  },
  {
    id: 'habitats',
    name: 'Gaiolas e Viveiros',
    line: 'Voadeiras · Rodízios · Malha fina · Grande porte',
    image: COMMONS('A cage for birds.jpg'),
  },
  {
    id: 'equipamentos',
    name: 'Criação e Equipamentos',
    line: 'Chocadeiras · Criadeiras · Nascedeiras · Ninhos',
    image: COMMONS('Small Chicken Egg Incubator.jpg'),
  },
]

const PRODUCTS = [
  // PERIQUITOS
  {
    id: 'periquito-color',
    category: 'periquitos',
    badge: 'Entrada',
    name: 'Periquito Australiano Color',
    description: 'Azul, verde, amarelo, branco e violeta em uma das aves de companhia mais populares.',
    price: 89.9,
    benchmark: 90.25,
    installments: 3,
    image: budgerigarPhoto1,
    variants: ['Azul', 'Verde', 'Amarelo', 'Branco', 'Violeta'],
  },
  {
    id: 'periquito-rainbow',
    category: 'periquitos',
    badge: 'Rainbow',
    name: 'Periquito Australiano Rainbow',
    description: 'Combinações de cor e padrão que transformam cada ave em uma peça visual única.',
    price: 149.9,
    benchmark: 150,
    installments: 5,
    image: budgerigarPhoto2,
    variants: ['Rainbow', 'Opalino', 'Spangle', 'Arlequim'],
  },
  {
    id: 'periquito-hagoromo',
    category: 'periquitos',
    badge: 'Raro',
    name: 'Periquito Hagoromo',
    description: 'Mutação ornamental de penas reversas nas asas e visual incomum.',
    price: 299.9,
    benchmark: null,
    installments: 6,
    image: budgerigarPhoto4,
    variants: ['Hagoromo', 'Azul', 'Verde'],
  },

  // CALOPSITAS
  {
    id: 'calopsita-lutino',
    category: 'calopsitas',
    badge: 'Lutino',
    name: 'Calopsita Lutino',
    description: 'Amarelo claro, bochechas laranja e forte presença visual.',
    price: 239.9,
    benchmark: 240,
    installments: 6,
    image: COMMONS('Parrot Cockatiel lutino.jpg'),
    variants: ['Lutino', 'Cara Laranja'],
  },
  {
    id: 'calopsita-perola',
    category: 'calopsitas',
    badge: 'Pérola',
    name: 'Calopsita Pérola',
    description: 'Desenho perolado nas asas e dorso com alto contraste.',
    price: 295.9,
    benchmark: 295.99,
    installments: 6,
    image: COMMONS('Pearl Cockatiel.jpg'),
    variants: ['Pérola', 'Cinza', 'Lutino Pérola'],
  },
  {
    id: 'calopsita-cara-branca',
    category: 'calopsitas',
    badge: 'Cara Branca',
    name: 'Calopsita Cara Branca',
    description: 'Visual monocromático elegante sem a típica mancha laranja.',
    price: 319.9,
    benchmark: null,
    installments: 6,
    image: COMMONS('White-faced cockatiel.jpg'),
    variants: ['Cara Branca', 'Cinza', 'Pérola'],
  },

  // RING NECKS
  {
    id: 'ringneck-verde',
    category: 'ringnecks',
    badge: 'Legalizado',
    name: 'Ring Neck Verde',
    description: 'A cor clássica da espécie com silhueta longa e anel cervical característico.',
    price: 1799.9,
    benchmark: 1800,
    installments: 12,
    image: ringNeckPhoto1,
    variants: ['Verde', 'Macho', 'Fêmea'],
  },
  {
    id: 'ringneck-lutino',
    category: 'ringnecks',
    badge: 'Lutino',
    name: 'Ring Neck Lutino',
    description: 'Amarelo intenso e bico vermelho em uma das mutações mais chamativas.',
    price: 2199.9,
    benchmark: 2200,
    installments: 12,
    image: COMMONS('Rose-ringed Parakeet (Psittacula krameri) yellow mutation.jpg'),
    variants: ['Lutino', 'Amarelo'],
  },
  {
    id: 'ringneck-cobalto',
    category: 'ringnecks',
    badge: 'Cobalto',
    name: 'Ring Neck Cobalto',
    description: 'Azul profundo e saturado para quem procura impacto imediato.',
    price: 3999.9,
    benchmark: 4000,
    installments: 12,
    image: ringNeckPhoto3,
    variants: ['Cobalto', 'Blue'],
  },
  {
    id: 'ringneck-cremino',
    category: 'ringnecks',
    badge: 'Cremino',
    name: 'Ring Neck Cremino',
    description: 'Mutação clara e sofisticada com aparência quase iridescente.',
    price: 2999.9,
    benchmark: 3000,
    installments: 12,
    image: ringNeckPhoto2,
    variants: ['Cremino', 'Pastel'],
  },
  {
    id: 'ringneck-turquesa',
    category: 'ringnecks',
    badge: 'Turquesa',
    name: 'Ring Neck Azul Turquesa',
    description: 'Azul e verde em uma combinação que parece artificial de tão intensa.',
    price: 2999.9,
    benchmark: 3000,
    installments: 12,
    image: COMMONS('Psittacula krameri - blue mutation.jpg'),
    variants: ['Turquesa', 'Azul'],
  },

  // AGAPORNIS
  {
    id: 'agapornis-fischeri',
    category: 'agapornis',
    badge: 'Cor',
    name: 'Agapornis Fischeri',
    description: 'Máscara laranja, cabeça intensa e corpo verde com personalidade forte.',
    price: 349.9,
    benchmark: 350,
    installments: 8,
    image: agapornisPhoto1,
    variants: ['Verde', 'Laranja', 'Blue'],
  },
  {
    id: 'agapornis-roseicollis',
    category: 'agapornis',
    badge: 'Popular',
    name: 'Agapornis Roseicollis',
    description: 'Pequeno, vibrante e disponível em ampla diversidade de mutações.',
    price: 449.9,
    benchmark: 450,
    installments: 10,
    image: agapornisPhoto3,
    variants: ['Green', 'Turquoise', 'Lutino', 'Pied'],
  },
  {
    id: 'agapornis-personata-blue',
    category: 'agapornis',
    badge: 'Blue',
    name: 'Agapornis Personata Blue',
    description: 'Máscara escura, peito claro e corpo azul em contraste muito forte.',
    price: 219.9,
    benchmark: null,
    installments: 6,
    image: COMMONS('Masked Lovebird (blue mutant).jpg'),
    variants: ['Blue', 'Dark Mask'],
  },

  // ROSELAS / KAKARIKIS / BOURKES
  {
    id: 'rosela-pennant',
    category: 'rosellas',
    badge: 'Pennant',
    name: 'Rosela Pennant',
    description: 'Vermelho profundo e azul cobalto em plumagem de altíssimo impacto.',
    price: 4999.9,
    benchmark: 5000,
    installments: 12,
    image: rosellaPhoto1,
    variants: ['Pennant', 'Crimson'],
  },
  {
    id: 'rosela-rubina',
    category: 'rosellas',
    badge: 'Rubina',
    name: 'Rosela Rubina',
    description: 'Variação intensamente avermelhada para quem quer uma ave que domina o ambiente.',
    price: 2599.9,
    benchmark: 2600,
    installments: 12,
    image: rosellaPhoto2,
    variants: ['Rubina', 'Red'],
  },
  {
    id: 'rosela-lutina',
    category: 'rosellas',
    badge: 'Lutina',
    name: 'Rosela Lutina',
    description: 'Amarelo e vermelho em contraste limpo e extremamente chamativo.',
    price: 1999.9,
    benchmark: 2000,
    installments: 12,
    image: COMMONS('Eastern Rosella yellow mutation.jpg'),
    variants: ['Lutina', 'Amarela'],
  },
  {
    id: 'kakariki-lutino',
    category: 'rosellas',
    badge: 'Lutino',
    name: 'Kakariki Lutino',
    description: 'Amarelo luminoso com máscara frontal colorida e comportamento ativo.',
    price: 2499.9,
    benchmark: 2500,
    installments: 12,
    image: COMMONS('Yellow crowned kakariki mutation.jpg'),
    variants: ['Lutino', 'Amarelo'],
  },
  {
    id: 'kakariki-verde',
    category: 'rosellas',
    badge: 'Verde',
    name: 'Kakariki Verde',
    description: 'Verde vivo, testa vermelha e altíssima energia visual.',
    price: 1499.9,
    benchmark: 1500,
    installments: 12,
    image: COMMONS('Red-crowned Parakeet.jpg'),
    variants: ['Verde', 'Red Crown'],
  },
  {
    id: 'bourke-rosa',
    category: 'rosellas',
    badge: 'Rosa',
    name: 'Bourke Rosa',
    description: 'Tons rosados e delicados em uma ave pequena com aparência muito diferente.',
    price: 499.9,
    benchmark: 500,
    installments: 10,
    image: COMMONS('Bourke Parrot.jpg'),
    variants: ['Rosa', 'Opalino'],
  },

  // LÓRIS E JANDAIAS
  {
    id: 'loris-molucano',
    category: 'loris',
    badge: 'Arco-íris',
    name: 'Lóris Molucano',
    description: 'Verde, azul, vermelho, amarelo e laranja reunidos em uma única ave.',
    price: 3799.9,
    benchmark: 3800,
    installments: 12,
    image: COMMONS('RainbowLorikeet.jpg'),
    variants: ['Molucano', 'Multicolor'],
  },
  {
    id: 'loris-arco-iris',
    category: 'loris',
    badge: 'Surreal',
    name: 'Lóris Arco-Íris',
    description: 'Uma das plumagens mais saturadas entre aves de companhia.',
    price: 3499.9,
    benchmark: 3500,
    installments: 12,
    image: COMMONS('Rainbow Lorikeet - Trichoglossus haematodus.jpg'),
    variants: ['Blue Head', 'Red Chest', 'Green'],
  },
  {
    id: 'loris-borneo',
    category: 'loris',
    badge: 'Borneo',
    name: 'Lóris Borneo',
    description: 'Mistura vibrante de verde, azul, vermelho e roxo.',
    price: 5999.9,
    benchmark: 6000,
    installments: 12,
    image: COMMONS('Trichoglossus capistratus.jpg'),
    variants: ['Borneo', 'Multicolor'],
  },
  {
    id: 'jandaia-sol',
    category: 'loris',
    badge: 'Sol',
    name: 'Jandaia Sol',
    description: 'Amarelo-laranja intenso com asas verdes e azuis.',
    price: 3799.9,
    benchmark: 3800,
    installments: 12,
    image: COMMONS('Sun conure.jpg'),
    variants: ['Orange', 'Yellow', 'Green'],
  },
  {
    id: 'jandaia-coquinho',
    category: 'loris',
    badge: 'Jandaia',
    name: 'Jandaia Coquinho',
    description: 'Psitacídeo brasileiro de visual marcante e personalidade ativa.',
    price: 1999.9,
    benchmark: 2000,
    installments: 12,
    image: COMMONS('Eupsittula aurea.jpg'),
    variants: ['Verde', 'Amarelo'],
  },

  // GRANDES PSITACÍDEOS
  {
    id: 'cacatua-alba',
    category: 'grandes',
    badge: 'Impacto',
    name: 'Cacatua Alba',
    description: 'Branca, imponente e expressiva, com crista móvel e presença impossível de ignorar.',
    price: 37999.9,
    benchmark: 38000,
    installments: 12,
    image: COMMONS('Sulphur-crested Cockatoo 2010.JPG'),
    variants: ['Alba', 'Branca'],
  },
  {
    id: 'cacatua-galerita',
    category: 'grandes',
    badge: 'Crista amarela',
    name: 'Cacatua Galerita',
    description: 'Plumagem branca com crista amarela enorme e extremamente fotogênica.',
    price: 37999.9,
    benchmark: 38000,
    installments: 12,
    image: COMMONS('Sulphur-crested Cockatoo.jpg'),
    variants: ['Galerita', 'White', 'Yellow Crest'],
  },
  {
    id: 'cacatua-moluca',
    category: 'grandes',
    badge: 'Rosa',
    name: 'Cacatua Moluca',
    description: 'Branco-rosada com crista em leque e porte robusto.',
    price: 37999.9,
    benchmark: null,
    installments: 12,
    image: COMMONS('Moluccan Cockatoo.jpg'),
    variants: ['Moluca', 'Salmon Crest'],
  },
  {
    id: 'papagaio-verdadeiro',
    category: 'grandes',
    badge: 'Brasil',
    name: 'Papagaio Verdadeiro',
    description: 'Verde, amarelo e azul em um dos psitacídeos brasileiros mais conhecidos.',
    price: 6999.9,
    benchmark: 7000,
    installments: 12,
    image: COMMONS('Amazona aestiva -Brazil-8.jpg'),
    variants: ['Amazona', 'Legalizado'],
  },
  {
    id: 'arara-caninde',
    category: 'grandes',
    badge: 'Azul + ouro',
    name: 'Arara Canindé',
    description: 'Azul ultramarino e amarelo-dourado em escala monumental.',
    price: 14999.9,
    benchmark: null,
    installments: 12,
    image: COMMONS('Ara ararauna -two in tree-8a.jpg'),
    variants: ['Azul', 'Amarelo'],
  },
  {
    id: 'arara-vermelha',
    category: 'grandes',
    badge: 'Vermelha',
    name: 'Arara Vermelha',
    description: 'Vermelho vivo, verde e azul em uma ave de quase um metro.',
    price: 15999.9,
    benchmark: null,
    installments: 12,
    image: COMMONS('Green-winged Macaw.jpg'),
    variants: ['Red', 'Green', 'Blue'],
  },

  // CANTO E EXÓTICOS
  {
    id: 'diamante-gould',
    category: 'canto',
    badge: 'Surreal',
    name: 'Diamante Gould',
    description: 'Verde, azul, amarelo, vermelho, preto e violeta na mesma ave.',
    price: 396.9,
    benchmark: 397,
    installments: 8,
    image: COMMONS('Gouldian Finch. (8065423804).jpg'),
    variants: ['Cabeça Vermelha', 'Preta', 'Amarela'],
  },
  {
    id: 'canario-vermelho',
    category: 'canto',
    badge: 'Cor',
    name: 'Canário Vermelho Mosaico',
    description: 'Contraste branco e vermelho intenso para quem procura cor pura.',
    price: 279.9,
    benchmark: 280,
    installments: 6,
    image: COMMONS('Red factor canary.jpg'),
    variants: ['Vermelho', 'Mosaico'],
  },
  {
    id: 'canario-belga',
    category: 'canto',
    badge: 'Clássico',
    name: 'Canário Belga Amarelo',
    description: 'Amarelo luminoso, pequeno porte e tradição no canto.',
    price: 179.9,
    benchmark: 180,
    installments: 4,
    image: COMMONS('Yellow canary.jpg'),
    variants: ['Amarelo', 'Canto'],
  },
  {
    id: 'trinca-ferro',
    category: 'canto',
    badge: 'Canto',
    name: 'Trinca-Ferro',
    description: 'Ave de canto forte e muito procurada por criadores especializados.',
    price: 2499.9,
    benchmark: null,
    installments: 12,
    image: COMMONS('Saltator similis.jpg'),
    variants: ['Canto', 'Legalizado'],
  },

  // AQUÁTICOS ORNAMENTAIS
  {
    id: 'marreco-mandarim',
    category: 'aquaticos',
    badge: 'Chácara',
    name: 'Marreco Mandarim',
    description: 'Laranja, azul, verde e branco com formato de plumagem quase surreal.',
    price: 749.9,
    benchmark: 750,
    installments: 12,
    image: COMMONS('Mandarin duck (male).jpg'),
    variants: ['Macho', 'Fêmea'],
  },
  {
    id: 'marreco-carolina',
    category: 'aquaticos',
    badge: 'Lago',
    name: 'Marreco Carolina',
    description: 'Crista alongada e combinação verde, branca, castanha e azul.',
    price: 599.9,
    benchmark: 600,
    installments: 12,
    image: COMMONS('Wood Duck male. Aix sponsa (38816918742).jpg'),
    variants: ['Macho', 'Fêmea'],
  },
  {
    id: 'marreco-mandarim-branco',
    category: 'aquaticos',
    badge: 'Branco',
    name: 'Marreco Mandarim Branco',
    description: 'Variação totalmente branca com bico rosado para lagos ornamentais.',
    price: 1499.9,
    benchmark: 1500,
    installments: 12,
    image: COMMONS('The white duck of the Mandarins.jpg'),
    variants: ['Branco', 'Macho', 'Fêmea'],
  },
  {
    id: 'marreco-carolina-branco',
    category: 'aquaticos',
    badge: 'Branco',
    name: 'Marreco Carolina Branco',
    description: 'Plumagem clara e elegante para projetos paisagísticos com lago.',
    price: 999.9,
    benchmark: 1000,
    installments: 12,
    image: COMMONS('White wood duck.jpg'),
    variants: ['Branco'],
  },
  {
    id: 'marreco-mini-cool',
    category: 'aquaticos',
    badge: 'Mini',
    name: 'Marreco Mini Cool',
    description: 'Uma das menores raças ornamentais para jardins e viveiros compactos com água.',
    price: 399.9,
    benchmark: 400,
    installments: 9,
    image: COMMONS('Call duck.jpg'),
    variants: ['Mini', 'Macho', 'Fêmea'],
  },
  {
    id: 'marreco-cayuga',
    category: 'aquaticos',
    badge: 'Negro iridescente',
    name: 'Marreco Cayuga',
    description: 'Plumagem preta com reflexos verdes metálicos que mudam com a luz.',
    price: 399.9,
    benchmark: 400,
    installments: 9,
    image: COMMONS('Cayuga duck.jpg'),
    variants: ['Black', 'Green Iridescent'],
  },
  {
    id: 'marreco-rouen',
    category: 'aquaticos',
    badge: 'Grande',
    name: 'Marreco Rouen',
    description: 'Cabeça verde, peito castanho e porte robusto para lagos de chácaras e sítios.',
    price: 399.9,
    benchmark: 400,
    installments: 9,
    image: COMMONS('Rouen Duck.jpg'),
    variants: ['Macho', 'Fêmea'],
  },

  // NUTRÓPICA
  {
    id: 'nutropica-periquito',
    category: 'nutropica',
    badge: 'Nutrópica',
    name: 'Nutrópica com Sementes para Periquito',
    description: 'Linha especializada para Periquitos Australianos.',
    price: 38.99,
    benchmark: 39,
    installments: null,
    image: COMMONS('Bird food pellets.JPG'),
    variants: ['300 g', 'Periquito'],
  },
  {
    id: 'nutropica-calopsita',
    category: 'nutropica',
    badge: 'Nutrópica',
    name: 'Nutrópica Seleção Natural Calopsitas',
    description: 'Alimento formulado para Calopsitas.',
    price: 46.99,
    benchmark: 47,
    installments: null,
    image: COMMONS('Pelleted bird food.jpg'),
    variants: ['Calopsita', 'Seleção Natural'],
  },
  {
    id: 'nutropica-agapornis-frutas',
    category: 'nutropica',
    badge: 'Frutas',
    name: 'Nutrópica Agapornis com Frutas 300 g',
    description: 'Extrusada completa para Agapornis, Jandaias, Forpus e pequenos psitacídeos.',
    price: 46.99,
    benchmark: 47,
    installments: null,
    image: COMMONS('Parrot pellets.jpg'),
    variants: ['300 g', 'Frutas'],
  },
  {
    id: 'nutropica-ringneck',
    category: 'nutropica',
    badge: 'Ring Neck',
    name: 'Nutrópica Natural para Ring Neck',
    description: 'Alimento extrusado específico para Ring Necks e psitacídeos compatíveis.',
    price: 68.99,
    benchmark: 69,
    installments: null,
    image: COMMONS('Bird pellets.jpg'),
    variants: ['Ring Neck', 'Extrusada'],
  },
  {
    id: 'nutropica-loris',
    category: 'nutropica',
    badge: 'Lóris',
    name: 'Nutrópica Papa para Lóris',
    description: 'Alimento específico para o manejo nutricional de Lóris.',
    price: 88.99,
    benchmark: 89,
    installments: null,
    image: COMMONS('Lory food.jpg'),
    variants: ['Lóris', 'Papa'],
  },
  {
    id: 'nutropica-psitacideos',
    category: 'nutropica',
    badge: 'Papinha',
    name: 'Papinha Nutrópica para Psitacídeos',
    description: 'Papinha especializada para manejo de filhotes de psitacídeos.',
    price: 84.99,
    benchmark: 85,
    installments: null,
    image: COMMONS('Hand feeding formula bird.jpg'),
    variants: ['Psitacídeos', 'Papinha'],
  },
  {
    id: 'nutropica-trinca-power',
    category: 'nutropica',
    badge: 'Power',
    name: 'Nutrópica Trinca Ferro Power 300 g',
    description: 'Extrusada voltada ao Trinca-Ferro.',
    price: 44.99,
    benchmark: 45,
    installments: null,
    image: COMMONS('Bird seed mix.jpg'),
    variants: ['300 g', 'Trinca Ferro'],
  },
  {
    id: 'nutropica-canario-farinhada',
    category: 'nutropica',
    badge: 'Farinhada',
    name: 'Farinhada Nutrópica Canário Mel e Ovos',
    description: 'Farinhada especializada à base de mel e ovos.',
    price: 48.99,
    benchmark: 49,
    installments: null,
    image: COMMONS('Bird food.jpg'),
    variants: ['Canário', 'Mel', 'Ovos'],
  },
  {
    id: 'nutropica-arara-papa',
    category: 'nutropica',
    badge: 'Araras',
    name: 'Papa Nutrópica para Arara',
    description: 'Alimento para manejo nutricional de filhotes de Araras.',
    price: 96.99,
    benchmark: 97,
    installments: 2,
    image: COMMONS('Parrot food.jpg'),
    variants: ['Arara', 'Papa'],
  },
  {
    id: 'nutropica-beija-flor',
    category: 'nutropica',
    badge: 'Néctar',
    name: 'Néctar Nutrópica para Beija-Flor',
    description: 'Néctar específico para Beija-Flores.',
    price: 58.99,
    benchmark: 59,
    installments: null,
    image: COMMONS('Hummingbird feeder food.jpg'),
    variants: ['Néctar', 'Beija-Flor'],
  },

  // HABITATS
  {
    id: 'voadeira-150',
    category: 'habitats',
    badge: '1,50 m',
    name: 'Voadeira Suspensa 1,50 m',
    description: 'Gaiola reforçada para Ring Neck, Rosela e Calopsita, com abertura para ninho.',
    price: 913.89,
    benchmark: 913.99,
    installments: 12,
    image: COMMONS('A cage for birds.jpg'),
    variants: ['1,50 m', 'Cinza'],
  },
  {
    id: 'viveiro-rodinhas',
    category: 'habitats',
    badge: 'Rodinhas',
    name: 'Viveiro com Rodinhas',
    description: 'Para Calopsitas, Periquitos, Agapornis e Canários, com bandeja removível.',
    price: 1105.89,
    benchmark: 1105.99,
    installments: 12,
    image: COMMONS('Bird cage with stand.jpg'),
    variants: ['Branco', 'Base', 'Rodinhas'],
  },
  {
    id: 'gaiola-dois-andares',
    category: 'habitats',
    badge: 'Grande porte',
    name: 'Gaiola 2 Andares para Grandes Psitacídeos',
    description: 'Estrutura reforçada para Papagaios, Araras, Ring Necks e Cacatuas.',
    price: 3703.89,
    benchmark: 3703.99,
    installments: 12,
    image: COMMONS('Large parrot cage.jpg'),
    variants: ['2 Andares', 'Rodízios'],
  },
  {
    id: 'viveiro-lara',
    category: 'habitats',
    badge: 'Voadeira',
    name: 'Viveiro Voadeira Lara',
    description: 'Estrutura ampla e galvanizada para aves de médio e grande porte.',
    price: 4820.89,
    benchmark: 4820.99,
    installments: 12,
    image: COMMONS('Aviary cage.jpg'),
    variants: ['Preto', 'Grande'],
  },

  // EQUIPAMENTOS
  {
    id: 'chocadeira-maia',
    category: 'equipamentos',
    badge: 'Automática',
    name: 'Chocadeira Maia para Papagaios e Ring Necks',
    description: 'Incubação automática para ovos de psitacídeos.',
    price: 1605.89,
    benchmark: 1605.99,
    installments: 12,
    image: COMMONS('Small Chicken Egg Incubator.jpg'),
    variants: ['110 V', '220 V'],
  },
  {
    id: 'chocadeira-juli70',
    category: 'equipamentos',
    badge: 'Ovoscópio',
    name: 'Chocadeira Automática Juli 70',
    description: 'Modelo digital para 70 ovos com ovoscópio.',
    price: 1462.89,
    benchmark: 1462.99,
    installments: 12,
    image: COMMONS('Small Chicken Egg Incubator.jpg'),
    variants: ['70 ovos', 'Digital'],
  },
  {
    id: 'ninho-aquatico-pequeno',
    category: 'equipamentos',
    badge: 'Aquáticos',
    name: 'Casinha Ninho para Marrecos',
    description: 'Abrigo de madeira para aves aquáticas de pequeno porte.',
    price: 249.9,
    benchmark: 250,
    installments: 5,
    image: COMMONS('Duck house.jpg'),
    variants: ['Madeira', 'Pequeno porte'],
  },
  {
    id: 'ninho-aquatico-medio',
    category: 'equipamentos',
    badge: 'Aquáticos',
    name: 'Casinha Ninho para Tadornas',
    description: 'Abrigo para aves aquáticas de médio porte.',
    price: 349.9,
    benchmark: 350,
    installments: 8,
    image: COMMONS('Duck shelter.jpg'),
    variants: ['Madeira', 'Médio porte'],
  },
  {
    id: 'ninho-aquatico-grande',
    category: 'equipamentos',
    badge: 'Cisnes',
    name: 'Casinha Ninho para Cisnes e Gansos',
    description: 'Abrigo tratado para aves aquáticas de grande porte.',
    price: 499.9,
    benchmark: 500,
    installments: 12,
    image: COMMONS('Swan house.jpg'),
    variants: ['Madeira', 'Grande porte'],
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function Aves() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch =
        activeCategory === 'todos' ||
        product.category === activeCategory

      const searchable = [
        product.name,
        product.description,
        product.badge,
        ...product.variants,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return (
        categoryMatch &&
        (!normalizedSearch ||
          searchable.includes(normalizedSearch))
      )
    })
  }, [activeCategory, normalizedSearch])

  function selectCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector('#aves-produtos')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  function resetFilters() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  return (
    <main className="birds-store">
      <section className="birds-store__hero">
        <img
          src={budgerigarPhoto3}
          alt="Periquitos Australianos coloridos"
          className="birds-store__hero-image"
        />
        <div className="birds-store__hero-shade" />

        <div className="birds-store__container birds-store__hero-inner">
          <span>Marketplace AgroNexus™</span>
          <h1>
            Aves.
            <br />
            Cor.
            <br />
            <strong>Desejo.</strong>
          </h1>
          <p>
            Psitacídeos, aves de canto, exóticos, aquáticos
            ornamentais, Nutrópica, habitats, incubação,
            criação e acessórios.
          </p>
          <a href="#aves-produtos">
            Comprar <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div className="birds-store__container">
        <section className="birds-store__search">
          <label htmlFor="aves-search">O que você procura?</label>
          <div>
            <input
              id="aves-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Cacatua, Lóris, Ring Neck Cobalto, Rosela, Marreco Mandarim, Nutrópica, chocadeira..."
              autoComplete="off"
            />
            {(searchTerm || activeCategory !== 'todos') && (
              <button type="button" onClick={resetFilters}>
                Limpar
              </button>
            )}
          </div>
        </section>

        <section className="birds-store__categories">
          <header className="birds-store__section-head">
            <span>Comprar por categoria</span>
            <h2>Escolha a próxima obsessão.</h2>
          </header>

          <div className="birds-store__category-grid">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category.id}
                className={
                  activeCategory === category.id
                    ? 'bird-category is-active'
                    : 'bird-category'
                }
                onClick={() => selectCategory(category.id)}
              >
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  onError={(event) =>
                    applyFallback(
                      event,
                      category.id
                    )
                  }
                />
                <span className="bird-category__shade" />
                <span className="bird-category__copy">
                  <strong>{category.name}</strong>
                  <small>{category.line}</small>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          id="aves-produtos"
          className="birds-store__products"
        >
          <header className="birds-store__section-head">
            <span>{filteredProducts.length} produtos nesta seleção</span>
            <h2>Olhou. Gostou. Comprou.</h2>
          </header>

          <div className="birds-store__product-grid">
            {filteredProducts.map((product) => (
              <article className="bird-product" key={product.id}>
                <div className="bird-product__media">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(event) =>
                      applyFallback(
                        event,
                        product.category
                      )
                    }
                  />
                  <span>{product.badge}</span>
                </div>

                <div className="bird-product__body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="bird-product__variants">
                    {product.variants.map((variant) => (
                      <span key={variant}>{variant}</span>
                    ))}
                  </div>

                  <div className="bird-product__price">
                    {product.benchmark ? (
                      <del>
                        Ref. mercado {formatBRL(product.benchmark)}
                      </del>
                    ) : null}
                    <strong>{formatBRL(product.price)}</strong>

                    {product.installments ? (
                      <span>
                        até {product.installments}x de{' '}
                        {formatBRL(product.price / product.installments)}
                      </span>
                    ) : (
                      <span>Pagamento no checkout</span>
                    )}
                  </div>

                  <a href={`#/marketplace?produto=${product.id}`}>
                    Comprar <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="birds-store__empty">
              <strong>Nenhum produto encontrado.</strong>
              <button type="button" onClick={resetFilters}>
                Ver todos
              </button>
            </div>
          )}
        </section>

        <section className="birds-store__commercial-strip">
          <div>
            <span>Nutrópica</span>
            <strong>Alimentação é recompra.</strong>
            <p>
              Extrusadas, papinhas, néctares e farinhadas
              aparecem como produtos individuais, com preço
              visível e compra direta.
            </p>
          </div>
          <button
            type="button"
            onClick={() => selectCategory('nutropica')}
          >
            Ver linha Nutrópica →
          </button>
        </section>

        <div className="birds-store__note">
          <strong>Animais vivos:</strong>{' '}
          comercialização somente com origem regular e
          documentação exigida para cada espécie.
        </div>

        <footer className="birds-store__footer">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
