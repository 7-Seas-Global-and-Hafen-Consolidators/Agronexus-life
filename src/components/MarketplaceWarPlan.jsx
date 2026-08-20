import { useMemo, useState } from 'react'
import '../styles/MarketplaceWarPlan.css'

/* ============================================================
   AGRONEXUS™ — MARKETPLACE WAR PLAN
   Arquitetura comercial centralizada
   - Categorias responsivas
   - Produtos com múltiplas categorias
   - Guias Oficiais visíveis em todas as páginas
   - Checkout direto quando configurado
   ============================================================ */

const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop`

/* ============================================================
   PRODUTOS
   Um produto pode pertencer a várias categorias.

   Exemplos:
   - Guia Periquito = Aves + Guias Oficiais
   - Guia Calopsitas = Aves + Guias Oficiais
   - Guia Nano Reef = Aquarismo + Equipamentos + Guias Oficiais

   REGRA:
   Produto sem checkout real pode aparecer em pré-lançamento,
   mas o botão de compra fica desabilitado até o link ser inserido.
   ============================================================ */

const CORE_PRODUCTS = [
  {
    id: 'guia-periquito-australiano',

    categories: [
      'aves',
      'publicacoes',
    ],

    categoryLabel:
      'Guias Oficiais · Aves',

    name:
      'Guia Oficial AgroNexus — Periquito Australiano',

    description:
      'Publicação digital completa com 369 páginas sobre comportamento, alimentação, manejo, genética, saúde, reprodução, mutações, bem-estar e criação responsável.',

    price: 19.90,

    oldPrice: null,

    installments: null,

    checkout:
      'https://www.asaas.com/c/bzsxz4qaps5glfm4',

    badge: 'Preço de lançamento',

    delivery: 'Produto digital',

    image: PEXELS(34039458),

    imageAlt:
      'Periquitos australianos coloridos pousados em um galho',

    variants: [
      '369 páginas',
      'Comportamento',
      'Genética',
      'Mutações',
      'Saúde',
      'Reprodução',
    ],
  },

  {
    id: 'guia-calopsitas',

    categories: [
      'aves',
      'publicacoes',
    ],

    categoryLabel:
      'Guias Oficiais · Aves',

    name:
      'Guia Oficial AgroNexus — Calopsitas',

    description:
      'Publicação digital aprofundada sobre comportamento, alimentação, manejo, saúde, mutações, reprodução, ambiente, linguagem corporal e bem-estar.',

    price: 19.90,

    oldPrice: null,

    installments: null,

    checkout:
      'https://www.asaas.com/c/x17xj6s0gmqrhgnm',

    badge: 'Preço de lançamento',

    delivery: 'Produto digital',

    image: PEXELS(12181403),

    imageAlt:
      'Calopsitas em ambiente de criação doméstica',

    variants: [
      'Comportamento',
      'Mutações',
      'Manejo',
      'Saúde',
      'Reprodução',
      'Bem-estar',
    ],
  },

  {
    id: 'guia-marinho-nano-reef',

    categories: [
      'aquarismo',
      'equipamentos',
      'publicacoes',
    ],

    categoryLabel:
      'Guias Oficiais · Aquarismo',

    name:
      'Guia Oficial AgroNexus — Marinho Nano Reef',

    description:
      'Publicação digital completa com 231 páginas sobre montagem, ciclagem, parâmetros, filtragem, iluminação, fauna, corais, equipamentos, manutenção e estabilidade de sistemas marinhos e nano reef.',

    price: 19.90,

    oldPrice: null,

    installments: null,

    checkout:
      'https://www.asaas.com/c/aguqwb595g73fw43',

    badge: 'Preço de lançamento',

    delivery: 'Produto digital · 231 páginas',

    image: PEXELS(29216700),

    imageAlt:
      'Aquário marinho nano reef com peixes-palhaço e corais',

    variants: [
      '231 páginas',
      'Nano Reef',
      'Marinho',
      'Corais',
      'Ocellaris',
      'Equipamentos',
    ],
  },

  /* ==========================================================
     NUTRÓPICA — LINHA COMERCIAL
     Preços AgroNexus definidos alguns centavos abaixo das
     referências informadas pelo usuário.
     Itens sem referência exata usam preço sugerido por analogia
     com produtos próximos da mesma linha.
     ========================================================== */

  {
    id: 'nutropica-agapornis-frutas',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Nutrópica para Agapornis com Frutas',
    description: 'Alimento especializado Nutrópica para Agapornis, com apresentação comercial pronta para compra.',
    price: 46.89,
    oldPrice: 47.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica para Agapornis com Frutas.png'),
    imageAlt: 'Ração Nutrópica para Agapornis com Frutas',
    variants: ['Agapornis', 'Com frutas'],
  },

  {
    id: 'nutropica-periquitos-300g',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Extrusada Nutrópica para Periquitos 300 g',
    description: 'Ração extrusada Nutrópica para Periquitos, em embalagem de 300 g.',
    price: 38.89,
    oldPrice: 39.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico · 300 g',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Periquitos 300 g.png'),
    imageAlt: 'Ração Extrusada Nutrópica para Periquitos 300 g',
    variants: ['Periquitos', 'Extrusada', '300 g'],
  },

  {
    id: 'nutropica-periquitos-sementes',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Extrusada Nutrópica com Sementes para Periquito',
    description: 'Linha Nutrópica para Periquitos com sementes, voltada à alimentação diária.',
    price: 46.89,
    oldPrice: 47.00,
    installments: null,
    checkout: null,
    badge: 'Preço sugerido',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica com Sementes para Periquito2.png'),
    imageAlt: 'Ração Extrusada Nutrópica com Sementes para Periquito',
    variants: ['Periquitos', 'Sementes'],
  },

  {
    id: 'nutropica-canarios-extrusada',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Extrusada para Canários',
    description: 'Alimento extrusado Nutrópica desenvolvido para Canários.',
    price: 36.89,
    oldPrice: 37.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada para Canários.png'),
    imageAlt: 'Ração Extrusada para Canários',
    variants: ['Canários', 'Extrusada'],
  },

  {
    id: 'nutropica-coleiros-farinhada-umida',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Farinhada Úmida Nutrópica para Coleiros',
    description: 'Farinhada úmida Nutrópica destinada à alimentação especializada de Coleiros.',
    price: 110.59,
    oldPrice: 110.71,
    installments: { count: 2 },
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Farinhada Úmida Nutrópica para Coleiros.png'),
    imageAlt: 'Farinhada Úmida Nutrópica para Coleiros',
    variants: ['Coleiros', 'Farinhada úmida'],
  },

  {
    id: 'nutropica-farinhada-psitacideos',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Farinhada Nutrópica à base de Mel e Ovos para Psitacídeos',
    description: 'Farinhada Nutrópica à base de mel e ovos para alimentação de Psitacídeos.',
    price: 98.49,
    oldPrice: 98.60,
    installments: { count: 2 },
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Farinhada Nutrópica a base de Mel e Ovos para psitacídeos.png'),
    imageAlt: 'Farinhada Nutrópica à base de Mel e Ovos para Psitacídeos',
    variants: ['Psitacídeos', 'Mel', 'Ovos'],
  },

  {
    id: 'nutropica-papa-arara',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Papa Nutrópica para Arara',
    description: 'Papa Nutrópica formulada para Araras e manejo alimentar especializado.',
    price: 96.89,
    oldPrice: 97.00,
    installments: { count: 2 },
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Papa Nutrópica para Arara.png'),
    imageAlt: 'Papa Nutrópica para Arara',
    variants: ['Araras', 'Papa'],
  },

  {
    id: 'nutropica-papa-loris',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Nutrópica Papa para Lóris',
    description: 'Papa Nutrópica destinada à alimentação especializada de Lóris.',
    price: 88.89,
    oldPrice: 89.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica Papa para Lóris.png'),
    imageAlt: 'Ração Nutrópica Papa para Lóris',
    variants: ['Lóris', 'Papa'],
  },

  {
    id: 'nutropica-papagaio-gourmet',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Nutrópica Papagaio Gourmet',
    description: 'Linha Gourmet Nutrópica destinada à alimentação de Papagaios.',
    price: 88.89,
    oldPrice: 89.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica Papagaio Gourmet.png'),
    imageAlt: 'Ração Nutrópica Papagaio Gourmet',
    variants: ['Papagaios', 'Gourmet'],
  },

  {
    id: 'nutropica-papinha-psitacideos',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Papinha Nutrópica para Psitacídeos',
    description: 'Papinha Nutrópica para alimentação e manejo de Psitacídeos.',
    price: 84.89,
    oldPrice: 85.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Papinha Nutrópica para Psitacídeos.png'),
    imageAlt: 'Papinha Nutrópica para Psitacídeos',
    variants: ['Psitacídeos', 'Papinha'],
  },

  {
    id: 'nutropica-trinca-ferro-fit',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Extrusada Fit Nutrópica para Trinca Ferro',
    description: 'Ração extrusada Fit Nutrópica para Trinca Ferro, com proposta de controle de peso.',
    price: 84.89,
    oldPrice: 85.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada Fit Nutrópica para Trinca Ferro (Controle de Peso).png'),
    imageAlt: 'Ração Extrusada Fit Nutrópica para Trinca Ferro',
    variants: ['Trinca Ferro', 'Fit', 'Controle de peso'],
  },

  {
    id: 'nutropica-ringneck-natural',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Extrusada Natural para Ringneck',
    description: 'Ração extrusada natural Nutrópica destinada a Ring Necks.',
    price: 68.89,
    oldPrice: 69.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada Natural para Ringneck.png'),
    imageAlt: 'Ração Extrusada Natural para Ringneck',
    variants: ['Ring Neck', 'Natural', 'Extrusada'],
  },

  {
    id: 'nutropica-nectar-beija-flor',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Néctar Nutrópica para Beija-Flor',
    description: 'Néctar Nutrópica destinado à alimentação de Beija-Flores.',
    price: 58.89,
    oldPrice: 59.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Néctar Nutrópica para Beija-Flor.png'),
    imageAlt: 'Néctar Nutrópica para Beija-Flor',
    variants: ['Beija-Flor', 'Néctar'],
  },

  {
    id: 'nutropica-farinhada-canario',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Farinhada Nutrópica para Canário à Base de Mel e Ovos',
    description: 'Farinhada Nutrópica para Canários, à base de mel e ovos.',
    price: 48.89,
    oldPrice: 49.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Farinhada Nutrópica para Canário a Base de Mel e Ovos.png'),
    imageAlt: 'Farinhada Nutrópica para Canário à Base de Mel e Ovos',
    variants: ['Canários', 'Mel', 'Ovos'],
  },

  {
    id: 'nutropica-calopsita-gourmet',
    categories: ['aves', 'alimentacao'],
    categoryLabel: 'Nutrópica · Aves',
    name: 'Ração Nutrópica Calopsita Gourmet',
    description: 'Linha Gourmet Nutrópica destinada à alimentação de Calopsitas.',
    price: 48.89,
    oldPrice: 49.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica Calopsita Gourmet2.png'),
    imageAlt: 'Ração Nutrópica Calopsita Gourmet',
    variants: ['Calopsitas', 'Gourmet'],
  },

  /* Pequenos mamíferos — mantidos no mesmo acervo de imagem,
     mas distribuídos corretamente nas categorias Mamíferos
     e Alimentação. */

  {
    id: 'nutropica-coelho-filhote',
    categories: ['mamiferos', 'alimentacao'],
    categoryLabel: 'Nutrópica · Pequenos Mamíferos',
    name: 'Ração Nutrópica para Coelho Filhote',
    description: 'Ração Nutrópica destinada à alimentação de coelhos filhotes.',
    price: 52.89,
    oldPrice: 53.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica para Coelho Filhote.png'),
    imageAlt: 'Ração Nutrópica para Coelho Filhote',
    variants: ['Coelhos', 'Filhotes'],
  },

  {
    id: 'nutropica-coelho-adulto',
    categories: ['mamiferos', 'alimentacao'],
    categoryLabel: 'Nutrópica · Pequenos Mamíferos',
    name: 'Ração Extrusada Nutrópica para Coelho Adulto',
    description: 'Ração extrusada Nutrópica destinada à alimentação de coelhos adultos.',
    price: 48.89,
    oldPrice: 49.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Coelho Adulto.png'),
    imageAlt: 'Ração Extrusada Nutrópica para Coelho Adulto',
    variants: ['Coelhos', 'Adultos'],
  },

  {
    id: 'nutropica-porquinho-india',
    categories: ['mamiferos', 'alimentacao'],
    categoryLabel: 'Nutrópica · Pequenos Mamíferos',
    name: 'Ração Nutrópica para Porquinho da Índia',
    description: 'Ração Nutrópica destinada à alimentação de Porquinhos-da-Índia.',
    price: 48.89,
    oldPrice: 49.00,
    installments: null,
    checkout: null,
    badge: 'Preço AgroNexus',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica para Porquinho da Índia.png'),
    imageAlt: 'Ração Nutrópica para Porquinho da Índia',
    variants: ['Porquinho-da-Índia'],
  },

  {
    id: 'nutropica-hamster-muesli-300g',
    categories: ['mamiferos', 'alimentacao'],
    categoryLabel: 'Nutrópica · Pequenos Mamíferos',
    name: 'Ração Extrusada para Hamster Muesli 300 g',
    description: 'Linha Muesli Nutrópica para Hamsters em embalagem de 300 g.',
    price: 39.89,
    oldPrice: 40.00,
    installments: null,
    checkout: null,
    badge: 'Preço sugerido',
    delivery: 'Produto físico · 300 g',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Extrusada para Hamster Muesli 300 g 2.png'),
    imageAlt: 'Ração Extrusada para Hamster Muesli 300 g',
    variants: ['Hamsters', 'Muesli', '300 g'],
  },

  {
    id: 'nutropica-hamster-gourmet',
    categories: ['mamiferos', 'alimentacao'],
    categoryLabel: 'Nutrópica · Pequenos Mamíferos',
    name: 'Ração Nutrópica Gourmet para Hamster',
    description: 'Linha Gourmet Nutrópica destinada à alimentação de Hamsters.',
    price: 46.89,
    oldPrice: 47.00,
    installments: null,
    checkout: null,
    badge: 'Preço sugerido',
    delivery: 'Produto físico',
    image: encodeURI('/images/aves/categories/products/nutropica/Ração Nutrópica Gourmet para Hamster2.png'),
    imageAlt: 'Ração Nutrópica Gourmet para Hamster',
    variants: ['Hamsters', 'Gourmet'],
  }

]

/* ============================================================
   CATEGORIAS DO MARKETPLACE
   ============================================================ */


/* ============================================================
   CATÁLOGO MASSIVO AGRONEXUS
   Ofertas sem preço fechado entram como consulta comercial.
   Origem/fornecedor/criador NÃO aparece na vitrine pública.
   ============================================================ */

const CATALOG_SEEDS = {
  aves: [
    'Ring Neck Azul', 'Ring Neck Violeta', 'Ring Neck Albino', 'Ring Neck Lutino', 'Ring Neck Cobalto',
    'Calopsita Ancestral', 'Calopsita Lutina', 'Calopsita Cara Branca', 'Agapornis Roseicollis', 'Agapornis Personata',
    'Agapornis Fischeri', 'Lóris Molucano', 'Lóris Arco-Íris', 'Papagaio Ecletus', 'Papagaio-do-Congo',
    'Kakariki Lutino', 'Rosela Rubina', 'Rosela Penant', 'Bourke Rosa', 'Periquito Cabeça-de-Ameixa',
    'Periquito Mustache', 'Grande Alexandre', 'Arara Canindé', 'Arara Vermelha', 'Cacatua Galah',
    'Viveiro Modular para Aves', 'Ninho de Madeira para Psitacídeos', 'Poleiro Natural', 'Brinquedo de Forrageamento', 'Banheira para Aves'
  ],
  aquarismo: [
    'Betta Halfmoon', 'Betta Plakat', 'Kinguio Oranda', 'Kinguio Ranchu', 'Kinguio Ryukin',
    'Peixe-Palhaço Ocellaris', 'Camarão Neocaridina', 'Camarão Caridina', 'Cardume Neon', 'Corydora',
    'Disco', 'Acará Bandeira', 'Guppy', 'Molinésia', 'Platy',
    'Aquário Nano 20 L', 'Aquário 60 L', 'Aquário 100 L', 'Aquário 200 L', 'Aquário Reef',
    'Filtro Canister', 'Filtro Hang-On', 'Bomba de Circulação', 'Bomba de Recalque', 'Skimmer',
    'Luminária LED Plantado', 'Luminária LED Reef', 'Termostato Digital', 'Substrato Fértil', 'Rocha para Aquapaisagismo'
  ],
  mamiferos: [
    'Hamster Sírio', 'Hamster Sírio Pelo Longo', 'Hamster Anão', 'Gerbilo', 'Chinchila',
    'Porquinho-da-Índia', 'Mini Coelho', 'Mini Lop', 'Netherland Dwarf', 'Coelho Lionhead',
    'Gaiola Modular para Hamster', 'Habitat Acrílico', 'Roda Silenciosa', 'Bebedouro de Esfera', 'Comedouro Cerâmico',
    'Túnel Modular', 'Casinha de Madeira', 'Banheira de Areia', 'Feno Premium', 'Pellets para Coelhos'
  ],
  caes: [
    'Spitz Alemão', 'Bulldog Francês', 'Schnauzer Miniatura', 'Chihuahua', 'Pug',
    'Boston Terrier', 'Cavalier King Charles Spaniel', 'Dachshund', 'Yorkshire Terrier', 'Shih Tzu',
    'Cama Ortopédica', 'Caixa de Transporte', 'Bebedouro Automático', 'Comedouro Lento', 'Tapete Higiênico',
    'Peitoral Ajustável', 'Guia de Passeio', 'Brinquedo Mordedor', 'Brinquedo Interativo', 'Escova de Pelagem'
  ],
  gatos: [
    'Siamês', 'Ragdoll', 'Maine Coon', 'British Shorthair', 'Persa',
    'Bengal', 'Sphynx', 'Scottish Straight', 'Norueguês da Floresta', 'Exótico de Pelo Curto',
    'Arranhador Torre', 'Fonte de Água', 'Caixa de Areia Fechada', 'Areia Higiênica', 'Cama Suspensa',
    'Bolsa de Transporte', 'Túnel Interativo', 'Brinquedo com Catnip', 'Comedouro Elevado', 'Escova Removedora de Pelos'
  ],
  repteis: [
    'Gecko Leopardo', 'Iguana Verde', 'Jabuti', 'Terrário 45 cm', 'Terrário 60 cm',
    'Terrário 90 cm', 'Lâmpada UVB', 'Lâmpada de Aquecimento', 'Termômetro Digital', 'Higrômetro Digital',
    'Manta Aquecedora', 'Substrato de Coco', 'Casca Natural', 'Toca para Répteis', 'Bebedouro de Terrário',
    'Pinça de Manejo', 'Decoração Naturalizada', 'Tronco para Terrário', 'Planta Artificial para Terrário', 'Controle de Temperatura'
  ],
  botanica: [
    'Dionaea Muscipula', 'Nepenthes', 'Drosera', 'Sarracenia', 'Orquídea Phalaenopsis',
    'Orquídea Cattleya', 'Violeta Africana', 'Mini Rosa', 'Bonsai Jabuticaba', 'Bonsai Pitanga',
    'Mini Romã', 'Mini Acerola', 'Suculentas Selecionadas', 'Cactos Ornamentais', 'Samambaia',
    'Substrato para Orquídeas', 'Substrato para Carnívoras', 'Vaso Autoirrigável', 'Vaso Cerâmico', 'Adubo Orgânico'
  ],
  alimentacao: [
    'Mix de Sementes para Periquitos', 'Mix de Sementes para Calopsitas', 'Farinhada para Psitacídeos', 'Papa para Filhotes', 'Néctar para Lóris',
    'Ração Extrusada para Papagaios', 'Ração Extrusada para Ring Necks', 'Ração para Canários', 'Ração para Hamsters', 'Ração para Chinchilas',
    'Ração para Porquinho-da-Índia', 'Ração para Coelhos', 'Feno Selecionado', 'Petisco Natural para Aves', 'Petisco Natural para Cães',
    'Petisco Natural para Gatos', 'Alimento para Bettas', 'Alimento para Kinguios', 'Alimento para Ciclídeos', 'Alimento para Camarões'
  ],
  habitats: [
    'Gaiola para Calopsitas', 'Gaiola para Canários', 'Viveiro Interno', 'Viveiro Externo', 'Ninho para Agapornis',
    'Ninho para Ring Neck', 'Aquário Curvo', 'Aquário Plantado', 'Aquário Marinho', 'Móvel para Aquário',
    'Terrário Vertical', 'Terrário Horizontal', 'Habitat para Hamster', 'Cercado para Coelhos', 'Casinha para Chinchila',
    'Cama para Cães', 'Cama para Gatos', 'Toca para Gatos', 'Poleiro de Janela', 'Estante Modular para Habitats'
  ],
  equipamentos: [
    'Incubadora Digital', 'Ovoscópio LED', 'Balança de Precisão', 'Termômetro Infravermelho', 'Umidificador Digital',
    'Purificador de Água', 'Filtro UV para Aquário', 'Dosadora Automática', 'Alimentador Automático', 'Controlador de Temperatura',
    'Medidor de pH', 'Medidor TDS', 'Refratômetro', 'Sifão para Aquário', 'Aspirador de Substrato',
    'Tesoura de Aquapaisagismo', 'Pinça de Aquapaisagismo', 'Nebulizador para Terrário', 'Temporizador Digital', 'Luminária de Cultivo'
  ],
}

const CATEGORY_META = {
  aves: ['Aves', PEXELS(36133129)],
  aquarismo: ['Aquarismo', PEXELS(29216700)],
  mamiferos: ['Pequenos Mamíferos', PEXELS(4520480)],
  caes: ['Cães', PEXELS(17880515)],
  gatos: ['Gatos', PEXELS(9916903)],
  repteis: ['Répteis e Terrários', PEXELS(18118236)],
  botanica: ['Plantas e Cultivo', PEXELS(3691258)],
  alimentacao: ['Alimentação', PEXELS(12928244)],
  habitats: ['Habitats', PEXELS(26756414)],
  equipamentos: ['Equipamentos', PEXELS(4090814)],
}

const GENERATED_PRODUCTS = Object.entries(CATALOG_SEEDS).flatMap(
  ([category, names]) =>
    names.map((name, index) => ({
      id: `catalogo-${category}-${index + 1}`,
      categories: [category],
      categoryLabel: CATEGORY_META[category][0],
      name,
      description: `${name} no catálogo AgroNexus. Consulte condições, disponibilidade e opções atuais.`,
      price: null,
      oldPrice: null,
      installments: null,
      checkout: null,
      badge: 'Catálogo AgroNexus',
      delivery: 'Disponibilidade sob consulta',
      image: CATEGORY_META[category][1],
      imageAlt: name,
      variants: ['Consultar', 'AgroNexus'],
      consultation: true,
    }))
)

const PRODUCTS = [
  ...CORE_PRODUCTS,
  ...GENERATED_PRODUCTS,
]

const CATEGORIES = [
  {
    id: 'aves',
    name: 'Aves',
    shortName: 'Aves',

    description:
      'Periquitos, calopsitas, canários, Ring Necks, Agapornis, Forpus, Roselas, Kakarikis, Lóris e muito mais.',

    keywords:
      'periquito calopsita ring neck agapornis loris canario forpus rosela kakariki bourke ave',

    image: PEXELS(36133129),

    imageAlt:
      'Periquitos australianos de plumagem colorida',

    highlight:
      'Cores, mutações e espécies',

    chips: [
      'Periquitos',
      'Calopsitas',
      'Canários',
      'Ring Neck',
      'Agapornis',
      'Forpus',
    ],
  },

  {
    id: 'aquarismo',
    name: 'Aquarismo',
    shortName: 'Aquarismo',

    description:
      'Bettas, kinguios, camarões, plantados, nano aquários, Ocellaris, marinho, nano reef, mini reef, reef e corais.',

    keywords:
      'aquario betta kinguio oranda ranchu reef marinho ocellaris coral camarao plantado nano mini',

    image: PEXELS(29216700),

    imageAlt:
      'Peixes-palhaço em aquário marinho com corais coloridos',

    highlight:
      'Nano Reef · Kinguios · Bettas',

    chips: [
      'Betta',
      'Kinguios',
      'Nano Reef',
      'Ocellaris',
      'Corais',
      'Plantados',
    ],
  },

  {
    id: 'mamiferos',
    name: 'Pequenos Mamíferos',
    shortName: 'Mamíferos',

    description:
      'Hamsters, chinchilas, mini coelhos, porquinhos-da-índia, gerbilos, habitats, alimentação e acessórios.',

    keywords:
      'hamster chinchila coelho mini lop netherland gerbilo porquinho india mamifero',

    image: PEXELS(4520480),

    imageAlt:
      'Hamster pequeno e fofo fotografado de perto',

    highlight:
      'Pequenos espaços',

    chips: [
      'Hamster',
      'Chinchila',
      'Mini Coelho',
      'Gerbilo',
      'Porquinho-da-índia',
    ],
  },

  {
    id: 'caes',
    name: 'Cães',
    shortName: 'Cães',

    description:
      'Raças pequenas e procuradas para a vida urbana, além de alimentação, higiene, camas, transporte e brinquedos.',

    keywords:
      'cachorro cao spitz pomeranian shih tzu yorkshire dachshund bulldog frances chihuahua schnauzer pug',

    image: PEXELS(17880515),

    imageAlt:
      'Spitz Alemão branco fotografado em estúdio',

    highlight:
      'Pequenos para apartamento',

    chips: [
      'Spitz Alemão',
      'Shih Tzu',
      'Dachshund',
      'Bulldog Francês',
      'Yorkshire',
      'Schnauzer Mini',
    ],
  },

  {
    id: 'gatos',
    name: 'Gatos',
    shortName: 'Gatos',

    description:
      'Siamês, Persa, Ragdoll e outras raças, além de alimentação, areia, fontes, caixas, arranhadores e brinquedos.',

    keywords:
      'gato siames persa ragdoll british shorthair maine coon areia arranhador fonte caixa',

    image: PEXELS(9916903),

    imageAlt:
      'Gato siamês de olhos azuis fotografado de perto',

    highlight:
      'Siamês · Persa · Ragdoll',

    chips: [
      'Siamês',
      'Persa',
      'Ragdoll',
      'British Shorthair',
      'Maine Coon',
    ],
  },

  {
    id: 'repteis',
    name: 'Répteis e Terrários',
    shortName: 'Répteis',

    description:
      'Iguanas, geckos e outras espécies comercializáveis, terrários, iluminação UVB, aquecimento, substratos e alimentação.',

    keywords:
      'reptil terrario jabuti gecko iguana serpente cobra uvb substrato aquecimento',

    image: PEXELS(18118236),

    imageAlt:
      'Gecko em terrário com ambiente naturalizado',

    highlight:
      'Terrários e espécies',

    chips: [
      'Iguana',
      'Gecko',
      'Terrários',
      'UVB',
      'Aquecimento',
      'Substratos',
    ],
  },

  {
    id: 'botanica',
    name: 'Plantas, Flores e Bonsais',
    shortName: 'Plantas',

    description:
      'Carnívoras, orquídeas, violetas, mini rosas, bonsais, mini frutíferas, vasos, substratos, adubos e ferramentas.',

    keywords:
      'dionaea nepenthes drosera carnivora bonsai jabuticaba pitanga acerola roma planta orquidea violeta mini rosa vaso adubo',

    image: PEXELS(3691258),

    imageAlt:
      'Planta carnívora Dionaea muscipula em macro',

    highlight:
      'Carnívoras · Flores · Mini frutíferas',

    chips: [
      'Dionaea',
      'Nepenthes',
      'Orquídeas',
      'Violetas',
      'Bonsais',
      'Mini Frutíferas',
    ],
  },

  {
    id: 'alimentacao',
    name: 'Alimentação',
    shortName: 'Alimentação',

    description:
      'Rações, extrusadas, farinhadas, sementes, néctares, fenos, pellets, alimentos vivos e alimentação especializada.',

    keywords:
      'racao alimento extrusada farinhada semente nectar feno pellet artemia tenebrio comida pet',

    image: PEXELS(12928244),

    imageAlt:
      'Ração seca em pote para alimentação de animais',

    highlight:
      'Compra recorrente',

    chips: [
      'Cães',
      'Gatos',
      'Aves',
      'Peixes',
      'Roedores',
      'Répteis',
    ],
  },

  {
    id: 'habitats',
    name: 'Habitats',
    shortName: 'Habitats',

    description:
      'Aquários, gaiolas, viveiros, terrários, cercados, ninhos, tocas, poleiros e estruturas para cada espécie.',

    keywords:
      'gaiola viveiro aquario terrario cercado habitat poleiro toca ninho vidro',

    image: PEXELS(6364370),

    imageAlt:
      'Aves em viveiro com poleiros e ambiente preparado',

    highlight:
      'Do aquário ao viveiro',

    chips: [
      'Aquários',
      'Viveiros',
      'Gaiolas',
      'Terrários',
      'Cercados',
      'Poleiros',
    ],
  },

  {
    id: 'equipamentos',
    name: 'Equipamentos',
    shortName: 'Equipamentos',

    description:
      'Filtros, bombas, skimmers, termostatos, iluminação, climatização, incubação, automação e equipamentos especializados.',

    keywords:
      'filtro bomba skimmer iluminacao termostato aquecimento chocadeira incubadora equipamento automacao reef',

    image: PEXELS(8915250),

    imageAlt:
      'Aquário marinho iluminado com peixes e corais',

    highlight:
      'Aquarismo, aves e cultivo',

    chips: [
      'Bombas',
      'Filtros',
      'Skimmers',
      'Termostatos',
      'Iluminação',
      'Automação',
    ],
  },

  {
    id: 'publicacoes',
    name: 'Guias Oficiais',
    shortName: 'Guias',

    description:
      'Publicações digitais AgroNexus com conteúdo aprofundado, preço visível e checkout direto.',

    keywords:
      'guia livro ebook publicacao periquito calopsita nano reef marinho manual',

    image: PEXELS(34039458),

    imageAlt:
      'Periquitos australianos coloridos',

    highlight:
      'A partir de R$ 19,90',

    chips: [
      'Periquitos',
      'Calopsitas',
      'Nano Reef',
      'Aquarismo',
      'Plantas',
      'Cuidados',
    ],
  },
]

/* ============================================================
   DESTAQUES
   ============================================================ */

const TRENDING = [
  {
    category: 'caes',
    label: 'Em alta',
    title: 'Spitz Alemão',
    subtitle:
      'Branco · Creme · Laranja · Preto · Sable',
    image: PEXELS(17880515),
  },

  {
    category: 'gatos',
    label: 'Para apartamento',
    title: 'Siamês',
    subtitle:
      'Seal Point · Blue Point · Chocolate Point',
    image: PEXELS(9916903),
  },

  {
    category: 'mamiferos',
    label: 'Pequenos espaços',
    title: 'Hamsters',
    subtitle:
      'Sírio · Anão · Pelo longo · Várias cores',
    image: PEXELS(3586056),
  },

  {
    category: 'aves',
    label: 'Muitas cores',
    title: 'Periquitos Australianos',
    subtitle:
      'Azul · Verde · Amarelo · Branco · Violeta',
    image: PEXELS(36133129),
  },

  {
    category: 'aquarismo',
    label: 'Em alta',
    title: 'Nano Reef',
    subtitle:
      'Ocellaris · Corais · Iluminação · Skimmer',
    image: PEXELS(29216700),
  },

  {
    category: 'aquarismo',
    label: 'Clássico',
    title: 'Kinguios',
    subtitle:
      'Oranda · Ranchu · Ryukin · Telescópio',
    image: PEXELS(26756414),
  },

  {
    category: 'botanica',
    label: 'Modinha',
    title: 'Plantas Carnívoras',
    subtitle:
      'Dionaea · Nepenthes · Drosera',
    image: PEXELS(3691258),
  },

  {
    category: 'botanica',
    label: 'Apartamento',
    title: 'Flores e Mini Frutíferas',
    subtitle:
      'Orquídeas · Violetas · Bonsais · Jabuticaba',
    image: PEXELS(4090814),
  },
]

/* ============================================================
   FUNÇÕES
   ============================================================ */

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function getInstallmentText(product) {
  if (!product.installments) {
    return null
  }

  return `${product.installments.count}x de ${formatBRL(
    product.price /
      product.installments.count
  )}`
}

/* ============================================================
   CARD DE PRODUTO
   Reutilizado no catálogo e na faixa global de Guias Oficiais.
   ============================================================ */

function ProductCard({ product, guideCard = false }) {
  const installmentText =
    getInstallmentText(product)

  const hasCheckout =
    Boolean(product.checkout)

  return (
    <article
      className={`marketplace-war__product ${
        guideCard
          ? 'marketplace-war__product--guide'
          : ''
      }`.trim()}
    >

      <div className="marketplace-war__product-image">

        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
        />

        <span className="marketplace-war__badge">
          {product.badge}
        </span>

      </div>

      <div className="marketplace-war__product-top">

        <span>
          {product.categoryLabel}
        </span>

        <span>
          {product.delivery}
        </span>

      </div>

      <div className="marketplace-war__product-copy">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="marketplace-war__variants">

          {product.variants.map(
            (variant) => (
              <span key={variant}>
                {variant}
              </span>
            )
          )}

        </div>

      </div>

      <div className="marketplace-war__price-block">

        {product.consultation ? (
          <>
            <strong>Consultar</strong>
            <span>Disponibilidade e condições atuais</span>
          </>
        ) : (
          <>
            {product.oldPrice ? (
              <del>{formatBRL(product.oldPrice)}</del>
            ) : null}

            <strong>{formatBRL(product.price)}</strong>

            {installmentText ? (
              <span>{installmentText}</span>
            ) : (
              <span>Pagamento no checkout</span>
            )}
          </>
        )}

      </div>

      {hasCheckout ? (
        <a
          href={product.checkout}
          className="marketplace-war__buy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar

          <span aria-hidden="true">
            →
          </span>
        </a>
      ) : (
        <a
          href={`#/contato?produto=${encodeURIComponent(product.id)}`}
          className="marketplace-war__buy"
        >
          {product.consultation ? 'Consultar' : 'Comprar'}

          <span aria-hidden="true">
            →
          </span>
        </a>
      )}

      <small>
        {hasCheckout
          ? 'Checkout processado pela Guiropa World.'
          : 'Compra encaminhada para atendimento comercial AgroNexus.'}
      </small>

    </article>
  )
}

/* ============================================================
   MARKETPLACE
   ============================================================ */

export default function MarketplaceWarPlan({
  initialCategory = 'todos',
  embedded = false,
}) {
  const safeInitialCategory =
    initialCategory === 'todos' ||
    CATEGORIES.some(
      (category) =>
        category.id === initialCategory
    )
      ? initialCategory
      : 'todos'

  const [searchTerm, setSearchTerm] =
    useState('')

  const [activeCategory, setActiveCategory] =
    useState(safeInitialCategory)

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  /* ==========================================================
     CATEGORIAS
     ========================================================== */

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((category) => {
      const matchesCategory =
        activeCategory === 'todos' ||
        category.id === activeCategory

      const searchable = [
        category.name,
        category.shortName,
        category.description,
        category.keywords,
        category.highlight,
        ...category.chips,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const matchesSearch =
        !normalizedSearch ||
        searchable.includes(
          normalizedSearch
        )

      return (
        matchesCategory &&
        matchesSearch
      )
    })
  }, [
    activeCategory,
    normalizedSearch,
  ])

  /* ==========================================================
     PRODUTOS
     O mesmo produto pode aparecer em várias categorias.
     ========================================================== */

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'todos' ||
        product.categories.includes(
          activeCategory
        )

      const searchable = [
        product.name,
        product.categoryLabel,
        product.description,
        product.badge,
        product.delivery,
        ...product.categories,
        ...product.variants,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      const matchesSearch =
        !normalizedSearch ||
        searchable.includes(
          normalizedSearch
        )

      return (
        matchesCategory &&
        matchesSearch
      )
    })
  }, [
    activeCategory,
    normalizedSearch,
  ])

  /* ==========================================================
     GUIAS OFICIAIS GLOBAIS
     Esta coleção independe da categoria ativa.
     Por isso os Guias aparecem em TODAS as páginas.
     ========================================================== */

  const officialGuides = useMemo(() => {
    return PRODUCTS.filter(
      (product) =>
        product.categories.includes(
          'publicacoes'
        )
    )
  }, [])

  /* ==========================================================
     CATEGORIA
     ========================================================== */

  function selectCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector(
          '#catalogo-marketplace'
        )
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  /* ==========================================================
     RESET
     ========================================================== */

  function resetMarketplace() {
    setActiveCategory('todos')
    setSearchTerm('')
  }

  /* ==========================================================
     RESULTADOS
     ========================================================== */

  const hasCategoryResults =
    filteredCategories.length > 0

  const hasProductResults =
    filteredProducts.length > 0

  const activeCategoryData =
    CATEGORIES.find(
      (category) =>
        category.id === activeCategory
    )

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <main className="marketplace-war">
      <div className="marketplace-war__container">

        {!embedded ? (
          <header className="marketplace-war__hero">

            <div className="marketplace-war__hero-copy">

              <span className="marketplace-war__eyebrow">
                Marketplace AgroNexus™
              </span>

              <h1>
                Escolha.
                <br />
                Veja o preço.
                <br />
                <strong>Compre.</strong>
              </h1>

              <p>
                Animais, aves, peixes,
                plantas, flores, alimentação,
                habitats, equipamentos,
                acessórios e publicações.
                Produto publicado entra para
                ser comprado.
              </p>

            </div>

            <div className="marketplace-war__search">

              <label htmlFor="marketplace-search">
                O que você procura?
              </label>

              <div className="marketplace-war__search-row">

                <input
                  id="marketplace-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Spitz, Siamês, Calopsita, Kinguio, Nano Reef, Dionaea, ração, skimmer..."
                  autoComplete="off"
                />

                {(searchTerm ||
                  activeCategory !==
                    'todos') && (
                  <button
                    type="button"
                    onClick={
                      resetMarketplace
                    }
                  >
                    Limpar
                  </button>
                )}

              </div>

            </div>

          </header>
        ) : null}

        {/* ====================================================
            CATEGORIAS
            ==================================================== */}

        <nav
          className="marketplace-war__category-strip"
          aria-label="Categorias do Marketplace"
        >

          <button
            type="button"
            className={
              activeCategory === 'todos'
                ? 'is-active'
                : ''
            }
            onClick={() =>
              selectCategory('todos')
            }
          >
            Todos
          </button>

          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category.id}
              className={
                activeCategory ===
                category.id
                  ? 'is-active'
                  : ''
              }
              onClick={() =>
                selectCategory(
                  category.id
                )
              }
            >
              {category.shortName}
            </button>
          ))}

        </nav>

        {/* ====================================================
            EM ALTA
            ==================================================== */}

        <section className="marketplace-war__trend">

          <header className="marketplace-war__section-head">

            <div>

              <span>Em alta</span>

              <h2>
                O que chama atenção agora.
              </h2>

            </div>

            <p>
              Apartamento, cor, variedade,
              hobbies e produtos que fazem a
              pessoa parar, olhar e querer.
            </p>

          </header>

          <div className="marketplace-war__trend-grid">

            {TRENDING.map((item) => (
              <button
                type="button"
                key={`${item.category}-${item.title}`}
                className="marketplace-war__trend-card"
                onClick={() =>
                  selectCategory(
                    item.category
                  )
                }
              >

                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                />

                <span className="marketplace-war__trend-shade" />

                <span className="marketplace-war__trend-copy">

                  <small>
                    {item.label}
                  </small>

                  <strong>
                    {item.title}
                  </strong>

                  <span>
                    {item.subtitle}
                  </span>

                </span>

              </button>
            ))}

          </div>

        </section>

        {/* ====================================================
            CATEGORIAS DO MARKETPLACE
            ==================================================== */}

        <section
          id="catalogo-marketplace"
          className="marketplace-war__section"
        >

          <header className="marketplace-war__section-head">

            <div>

              <span>
                Comprar por categoria
              </span>

              <h2>
                Explore o Marketplace
              </h2>

            </div>

            <p>
              Escolha uma área ou use a busca
              para encontrar exatamente o que
              procura.
            </p>

          </header>

          {hasCategoryResults ? (

            <div className="marketplace-war__category-grid">

              {filteredCategories.map(
                (category) => (

                  <article
                    className="marketplace-war__category"
                    key={category.id}
                  >

                    <div className="marketplace-war__category-image">

                      <img
                        src={category.image}
                        alt={
                          category.imageAlt
                        }
                        loading="lazy"
                      />

                      <span>
                        {category.highlight}
                      </span>

                    </div>

                    <div className="marketplace-war__category-body">

                      <span className="marketplace-war__category-label">
                        {category.shortName}
                      </span>

                      <h3>
                        {category.name}
                      </h3>

                      <p>
                        {category.description}
                      </p>

                      <div className="marketplace-war__chips">

                        {category.chips.map(
                          (chip) => (
                            <span key={chip}>
                              {chip}
                            </span>
                          )
                        )}

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          selectCategory(
                            category.id
                          )
                        }
                      >
                        Ver produtos

                        <span
                          aria-hidden="true"
                        >
                          →
                        </span>

                      </button>

                    </div>

                  </article>

                )
              )}

            </div>

          ) : (

            <div className="marketplace-war__no-results">

              <strong>
                Nenhuma categoria corresponde
                à busca.
              </strong>

              <button
                type="button"
                onClick={
                  resetMarketplace
                }
              >
                Ver Marketplace completo
              </button>

            </div>

          )}

        </section>

        {/* ====================================================
            PRODUTOS DISPONÍVEIS
            ==================================================== */}

        <section
          id="produtos-disponiveis"
          className="marketplace-war__section marketplace-war__section--products"
        >

          <header className="marketplace-war__section-head">

            <div>

              <span>
                Compra direta
              </span>

              <h2>
                {activeCategory ===
                'todos'
                  ? 'Produtos disponíveis'
                  : activeCategoryData?.name ||
                    'Produtos disponíveis'}
              </h2>

            </div>

            <p>
              Fotografia, variação, preço e
              checkout. Sem consulta para
              descobrir quanto custa.
            </p>

          </header>

          {hasProductResults ? (

            <div className="marketplace-war__products">

              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}

            </div>

          ) : (

            <div className="marketplace-war__category-focus">

              <span>
                {activeCategory ===
                'todos'
                  ? 'Marketplace AgroNexus'
                  : activeCategoryData?.name ||
                    'Categoria'}
              </span>

              <h3>
                Nenhum produto publicado
                nesta categoria ainda.
              </h3>

              <p>
                Esta área do Marketplace
                AgroNexus está habilitada.
                Os produtos publicados
                aparecem aqui com preço
                definido e checkout direto.
              </p>

              <button
                type="button"
                onClick={
                  resetMarketplace
                }
              >
                Ver produtos disponíveis
              </button>

            </div>

          )}

        </section>

        {/* ====================================================
            GUIAS OFICIAIS — VISÍVEIS EM TODAS AS PÁGINAS
            ==================================================== */}

        <section
          id="guias-oficiais"
          className="marketplace-war__section marketplace-war__section--guides"
        >

          <header className="marketplace-war__section-head">

            <div>

              <span>
                Guias Oficiais AgroNexus
              </span>

              <h2>
                Informação também é produto.
              </h2>

            </div>

            <p>
              Publicações digitais especializadas,
              conteúdo aprofundado, preço visível
              e acesso direto pelo checkout.
            </p>

          </header>

          <div className="marketplace-war__products marketplace-war__products--guides">

            {officialGuides.map(
              (product) => (
                <ProductCard
                  key={`guide-${product.id}`}
                  product={product}
                  guideCard
                />
              )
            )}

          </div>

        </section>

        {/* ====================================================
            PRINCÍPIOS
            ==================================================== */}

        <section className="marketplace-war__principles">

          <div>

            <strong>
              Preço na tela
            </strong>

            <span>
              O cliente vê quanto custa antes
              de clicar.
            </span>

          </div>

          <div>

            <strong>
              Parcelamento visível
            </strong>

            <span>
              Quando houver parcelamento, ele
              aparece junto do preço.
            </span>

          </div>

          <div>

            <strong>
              Compra unitária
            </strong>

            <span>
              Cada produto pode ser comprado
              separadamente.
            </span>

          </div>

          <div>

            <strong>
              Guiropa World
            </strong>

            <span>
              Operação financeira claramente
              identificada no checkout.
            </span>

          </div>

        </section>

        {/* ====================================================
            RODAPÉ
            ==================================================== */}

        <footer className="marketplace-war__footer-note">
          AgroNexus™ · Uma iniciativa da
          Guiropa World
        </footer>

      </div>
    </main>
  )
}
