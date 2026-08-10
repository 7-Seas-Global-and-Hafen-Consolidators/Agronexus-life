import { useMemo, useState } from 'react'
import '../styles/Aquarismo.css'

const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop`

const UNSPLASH = (photo) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1400&q=82`

const COMMONS = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=1400`

const AQUARISMO_CATEGORIES = [
  {
    id: 'agua-doce',
    name: 'Água Doce',
    description:
      'Bettas, Kinguios, Tetras, Guppies, Molinésias, Platis, Espadas, Corydoras, Cascudos, Ciclídeos e outras espécies.',
    image: PEXELS(4742439),
  },
  {
    id: 'kinguios',
    name: 'Kinguios',
    description:
      'Oranda, Ranchu, Ryukin, Telescópio, Red Cap, Calico, Black Moor e outras variedades.',
    image: COMMONS('OrangeWhite Ryukin.jpg'),
    imagePosition: 'center 45%',
  },
  {
    id: 'marinho',
    name: 'Marinho e Reef',
    description:
      'Ocellaris, peixes marinhos, invertebrados, corais, anêmonas, nano reef, mini reef e reef.',
    image: COMMONS('Pomacanthus xanthometopon 420710351.jpg'),
    imagePosition: 'center 48%',
  },
  {
    id: 'moreias',
    name: 'Moreias',
    description:
      'Snowflake, Zebra, Pintada, Verde e outras moreias para sistemas marinhos adequados.',
    image: COMMONS('Snowflake Moray Eel (8180784914).jpg'),
  },
  {
    id: 'corais',
    name: 'Corais',
    description:
      'Zoanthus, Acropora, Montipora, Euphyllia, Ricordea, Torch e outras formas, cores e fluorescências.',
    image: COMMONS('Blue Acropora coral.jpg'),
  },
  {
    id: 'reef-base',
    name: 'Rochas e Substratos',
    description:
      'Rochas para reef, aragonita, areia, cascalhos e materiais para estrutura e base do sistema.',
    image: COMMONS(
      'Limestone rubble on aragonite sand beach (San Salvador Island, Bahamas) (16001526892).jpg'
    ),
  },
  {
    id: 'aquarios',
    name: 'Aquários',
    description:
      'Aquários de vidro, cubos, nanos e diferentes volumes para água doce, plantados, marinhos e reef.',
    image: PEXELS(3234841),
  },
  {
    id: 'equipamentos',
    name: 'Equipamentos',
    description:
      'Filtros, bombas, skimmers, termostatos, luminárias, circulação, controladores e acessórios.',
    image: PEXELS(8915250),
  },
  {
    id: 'consumo',
    name: 'Água, Substratos e Alimentação',
    description:
      'Sal, areia, substratos, condicionadores, testes, suplementos, mídias e alimentação.',
    image: PEXELS(2564494),
  },
]

const PRODUCTS = [
  {
    id: 'betta-dragon-blue',
    category: 'agua-doce',
    badge: 'Em alta',
    name: 'Betta Dragon Blue',
    description:
      'Betta ornamental de coloração azul intensa e padrão Dragon.',
    price: 59.9,
    installments: 2,
    image: UNSPLASH('photo-1742672924749-8a2267ca07df'),
    imageAlt: 'Betta colorido em aquário',
    variants: ['Blue', 'Red', 'White', 'Pink', 'Yellow'],
  },
  {
    id: 'betta-halfmoon',
    category: 'agua-doce',
    badge: 'Cores',
    name: 'Betta Halfmoon',
    description:
      'Betta ornamental de nadadeiras amplas, disponível em diferentes padrões e cores.',
    price: 49.9,
    installments: 2,
    image: UNSPLASH('photo-1534043464124-3be32fe000c9'),
    imageAlt: 'Betta roxo e azul fotografado de perto',
    variants: ['Blue', 'Red', 'Multicolor', 'Black', 'White'],
  },
  {
    id: 'guppy-color',
    category: 'agua-doce',
    badge: 'Popular',
    name: 'Guppy Color',
    description:
      'Peixe ornamental pequeno, ativo e disponível em grande variedade de cores e caudas.',
    price: 12.9,
    installments: null,
    image: UNSPLASH('photo-1706479980962-23942d2f4d56'),
    imageAlt: 'Guppy colorido em aquário plantado',
    variants: ['Blue', 'Red', 'Yellow', 'Mosaic', 'Multicolor'],
  },
  {
    id: 'kinguio-oranda-red-cap',
    category: 'kinguios',
    badge: 'Kinguio',
    name: 'Kinguio Oranda Red Cap',
    description:
      'Uma das variedades mais reconhecidas de Kinguio ornamental.',
    price: 19.9,
    installments: null,
    image: COMMONS('Red cap gold.jpg'),
    imageAlt: 'Kinguio Oranda Red Cap branco e vermelho em close',
    imageCredit: 'Souravgg8 / Wikimedia Commons · CC BY-SA 4.0',
    imagePosition: 'center 45%',
    variants: ['Pequeno', 'Médio', 'Grande'],
  },
  {
    id: 'kinguio-telescopio',
    category: 'kinguios',
    badge: 'Kinguio',
    name: 'Kinguio Telescópio',
    description:
      'Variedade ornamental clássica, inclusive em versões Black Moor, Calico e Albino.',
    price: 14.9,
    installments: null,
    image: COMMONS('Black Moor Goldfish.jpg'),
    imageAlt: 'Kinguio Telescópio Black Moor preto em perfil',
    imagePosition: 'center 48%',
    variants: ['Preto', 'Calico', 'Albino'],
  },
  {
    id: 'kinguio-ranchu',
    category: 'kinguios',
    badge: 'Seleção',
    name: 'Kinguio Ranchu',
    description:
      'Variedade ornamental de corpo arredondado e perfil característico.',
    price: 69.9,
    installments: 2,
    image: COMMONS('ZImage7.jpg'),
    imageAlt: 'Kinguio Ranchu Calico multicolorido',
    imageCredit: 'Debaserr / Wikimedia Commons · GFDL',
    imagePosition: 'center 48%',
    variants: ['Red', 'Red White', 'Calico', 'Black'],
  },
  {
    id: 'ocellaris',
    category: 'marinho',
    badge: 'Reef',
    name: 'Ocellaris',
    description:
      'Peixe-palhaço ornamental para sistemas marinhos compatíveis.',
    price: 119.9,
    installments: 3,
    image: COMMONS('Black clownfish.jpg'),
    imageAlt: 'Ocellaris Black entre anêmonas',
    imageCredit: 'Shek Graham / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 48%',
    variants: ['Orange', 'Black', 'Designer'],
  },
  {
    id: 'peixe-mandarim',
    category: 'marinho',
    badge: 'Surreal',
    name: 'Peixe-Mandarim',
    description:
      'Azul, verde, laranja e padrões psicodélicos em uma das espécies marinhas mais marcantes do aquarismo.',
    price: 179.9,
    installments: 4,
    image: COMMONS(
      'Mandarinfish (Synchiropus splendidus) (16057996190).jpg'
    ),
    imageAlt: 'Peixe-mandarim azul, verde e laranja em close',
    imageCredit:
      'Bernard DUPONT / Wikimedia Commons · CC',
    imagePosition: 'center 52%',
    variants: ['Blue Green', 'Orange', 'Psychodelic'],
  },
  {
    id: 'peixe-anjo-face-azul',
    category: 'marinho',
    badge: 'Impacto',
    name: 'Peixe-Anjo-de-Face-Azul',
    description:
      'Pomacanthus xanthometopon: máscara azul intensa, amarelo e desenho corporal impossível de ignorar.',
    price: 499.9,
    installments: 10,
    image: COMMONS(
      'Pomacanthus xanthometopon 420710351.jpg'
    ),
    imageAlt: 'Peixe-anjo-de-face-azul amarelo e azul em recife',
    imageCredit:
      'Jean-Paul Boerekamps / Wikimedia Commons · CC',
    imagePosition: 'center 48%',
    variants: ['Juvenil', 'Adulto'],
  },
  {
    id: 'peixe-anjo-fogo',
    category: 'marinho',
    badge: 'Cor',
    name: 'Peixe-Anjo-Fogo',
    description:
      'Centropyge loricula em vermelho-laranja intenso com faixas pretas e detalhes azul-elétrico.',
    price: 249.9,
    installments: 6,
    image: COMMONS(
      'Flame Angelfish Centropyge loricula.jpg'
    ),
    imageAlt: 'Peixe-anjo-fogo vermelho e laranja em recife',
    imageCredit:
      'Brian Gratwicke / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 50%',
    variants: ['Red', 'Orange', 'Blue Edge'],
  },
  {
    id: 'royal-gramma',
    category: 'marinho',
    badge: 'Neon',
    name: 'Royal Gramma',
    description:
      'Roxo elétrico encontrando amarelo vivo em um dos contrastes mais fortes entre peixes marinhos compactos.',
    price: 159.9,
    installments: 4,
    image: COMMONS('Gramma loreto 01.jpg'),
    imageAlt: 'Royal Gramma roxo e amarelo em close',
    imageCredit:
      'Wikimedia Commons · licença na página do arquivo',
    imagePosition: 'center 48%',
    variants: ['Purple', 'Yellow'],
  },
  {
    id: 'peixe-anjo-regal',
    category: 'marinho',
    badge: 'Exótico',
    name: 'Peixe-Anjo Regal',
    description:
      'Pygoplites diacanthus com faixas amarelas, brancas, azuis e pretas em desenho natural extremamente gráfico.',
    price: 449.9,
    installments: 10,
    image: COMMONS(
      'Pygoplites diacanthus Regal Angelfish by Nick Hobgood.jpg'
    ),
    imageAlt: 'Peixe-anjo Regal amarelo azul branco e preto',
    imageCredit:
      'Nick Hobgood / Wikimedia Commons · CC',
    imagePosition: 'center 48%',
    variants: ['Yellow', 'Blue', 'White'],
  },
  {
    id: 'zoanthus-neon',
    category: 'marinho',
    badge: 'Fluorescente',
    name: 'Zoanthus Neon',
    description:
      'Colônia de pólipos com cores intensas para criar pontos de fluorescência e contraste em reef.',
    price: 79.9,
    installments: 2,
    image: COMMONS('Zoanthid.jpg'),
    imageAlt: 'Zoanthids coloridos em colônia',
    imageCredit:
      'Neil Skene / Wikimedia Commons · domínio público',
    imagePosition: 'center 50%',
    variants: ['Green', 'Orange', 'Purple', 'Mix'],
  },
  {
    id: 'ricordea-orange',
    category: 'marinho',
    badge: 'Fluorescente',
    name: 'Ricordea Orange',
    description:
      'Ricordea florida em laranja vivo com textura que parece de outro planeta sob iluminação reef.',
    price: 119.9,
    installments: 3,
    image: COMMONS('Ricordea florida.jpg'),
    imageAlt: 'Ricordea florida laranja em aquário',
    imageCredit:
      'Wikimedia Commons · licença na página do arquivo',
    imagePosition: 'center 50%',
    variants: ['Orange', 'Green', 'Blue', 'Pink'],
  },
  {
    id: 'torch-coral',
    category: 'marinho',
    badge: 'Movimento',
    name: 'Torch Coral',
    description:
      'Euphyllia glabrescens com tentáculos longos, cor intensa e movimento constante dentro do reef.',
    price: 249.9,
    installments: 6,
    image: COMMONS('Euphyllia glabrescens.jpg'),
    imageAlt: 'Torch Coral Euphyllia glabrescens em detalhe',
    imageCredit:
      'Ryan Boren / Wikimedia Commons · CC',
    imagePosition: 'center 50%',
    variants: ['Green', 'Gold', 'Purple Tip'],
  },
  {
    id: 'moreia-snowflake',
    category: 'moreias',
    badge: 'Moreia',
    name: 'Moreia Snowflake',
    description:
      'Echidna nebulosa: padrão branco, preto e amarelo com aparência impossível de confundir.',
    price: 250,
    installments: 5,
    image: COMMONS('Snowflake Moray Eel (8180784914).jpg'),
    imageAlt: 'Moreia Snowflake branca preta e amarela em close',
    imageCredit:
      'Michael Bentley / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 46%',
    variants: ['20 cm', 'Snowflake'],
  },
  {
    id: 'moreia-zebra',
    category: 'moreias',
    badge: 'Moreia',
    name: 'Moreia Zebra',
    description:
      'Gymnomuraena zebra com faixas claras e escuras extremamente gráficas sobre o corpo.',
    price: 399.9,
    installments: 8,
    image: COMMONS(
      'Zebra Moray (Gymnomuraena zebra) (52684673425).jpg'
    ),
    imageAlt: 'Moreia Zebra vista de frente em aquário',
    imageCredit:
      'Bernard DUPONT / Wikimedia Commons · CC BY-SA 2.0',
    imagePosition: 'center 42%',
    variants: ['Zebra', 'Juvenil', 'Adulto'],
  },
  {
    id: 'moreia-pintada',
    category: 'moreias',
    badge: 'Moreia',
    name: 'Moreia Pintada',
    description:
      'Gymnothorax moringa com padrão de manchas fortes saindo de rochas e tocas do reef.',
    price: 349.9,
    installments: 7,
    image: COMMONS('Spotted Moray Eel.jpg'),
    imageAlt: 'Moreia Pintada emergindo de uma toca no recife',
    imageCredit:
      'Betty Wills / Wikimedia Commons',
    imagePosition: 'center 48%',
    variants: ['Spotted', 'Juvenil', 'Adulto'],
  },
  {
    id: 'moreia-verde',
    category: 'moreias',
    badge: 'Impacto',
    name: 'Moreia Verde',
    description:
      'Gymnothorax funebris com corpo robusto e presença visual dramática em sistemas de grande porte.',
    price: 599.9,
    installments: 10,
    image: COMMONS('GreenMorayEel.JPG'),
    imageAlt: 'Moreia Verde fotografada em aquário',
    imageCredit:
      'Blueag9 / Wikimedia Commons',
    imagePosition: 'center 48%',
    variants: ['Green', 'Grande porte'],
  },
  {
    id: 'wrasse-six-line',
    category: 'marinho',
    badge: 'Reef Safe',
    name: 'Wrasse Six Line',
    description:
      'Pseudocheilinus hexataenia com seis linhas azuladas sobre corpo laranja e comportamento ativo.',
    price: 280,
    installments: 5,
    image: COMMONS('Six-line wrasse.jpg'),
    imageAlt: 'Wrasse Six Line azul e laranja em aquário',
    imageCredit:
      'Lonnie Huffman / Wikimedia Commons · CC BY 3.0',
    imagePosition: 'center 50%',
    variants: ['Blue', 'Orange', 'Reef Safe'],
  },
  {
    id: 'acropora-blue',
    category: 'corais',
    badge: 'SPS',
    name: 'Acropora Blue',
    description:
      'Acropora de estrutura ramificada e coloração azul intensa para sistemas reef estabelecidos.',
    price: 149.9,
    installments: 3,
    image: COMMONS('Blue Acropora coral.jpg'),
    imageAlt: 'Acropora azul intensa em recife',
    imageCredit:
      'Wikimedia Commons · licença na página do arquivo',
    imagePosition: 'center 50%',
    variants: ['Blue', 'Frag', 'Colônia'],
  },
  {
    id: 'acropora-reef',
    category: 'corais',
    badge: 'SPS',
    name: 'Acropora Reef',
    description:
      'Acropora para quem procura arquitetura ramificada, cor e crescimento visual marcante no reef.',
    price: 129.9,
    installments: 3,
    image: COMMONS('Acropora in Aquarium.jpg'),
    imageAlt: 'Acropora ramificada em aquário reef',
    imageCredit:
      'Dieter Karner / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 50%',
    variants: ['Green', 'Blue', 'Purple', 'Frag'],
  },
  {
    id: 'montipora',
    category: 'corais',
    badge: 'SPS',
    name: 'Montipora',
    description:
      'Coral SPS com crescimento em placas ou estruturas incrustantes e alto impacto visual.',
    price: 99.9,
    installments: 3,
    image: COMMONS('ORAcoral1.jpg'),
    imageAlt: 'Montipora de aquacultura em close',
    imageCredit:
      'Jlus580 / Wikimedia Commons',
    imagePosition: 'center 46%',
    variants: ['Orange', 'Green', 'Red', 'Plate'],
  },
  {
    id: 'torch-coral-green',
    category: 'corais',
    badge: 'LPS',
    name: 'Torch Coral Green',
    description:
      'Euphyllia glabrescens com tentáculos longos, movimento constante e fluorescência verde.',
    price: 249.9,
    installments: 6,
    image: COMMONS('Euphyllia glabrescens en acuario.JPG'),
    imageAlt: 'Torch Coral verde em aquário reef',
    imageCredit:
      'Josuevg / Wikimedia Commons · CC BY-SA 3.0',
    imagePosition: 'center 50%',
    variants: ['Green', 'Gold', 'Purple Tip'],
  },
  {
    id: 'zoanthus-mix',
    category: 'corais',
    badge: 'Fluorescente',
    name: 'Zoanthus Mix',
    description:
      'Colônias de Zoanthus com contraste de cores, múltiplos pólipos e forte fluorescência.',
    price: 69.9,
    installments: 2,
    image: COMMONS('Zoanthid.jpg'),
    imageAlt: 'Colônia de Zoanthus em aquário marinho',
    imageCredit:
      'Neil Skene / Wikimedia Commons · domínio público',
    imagePosition: 'center 50%',
    variants: ['Green', 'Orange', 'Purple', 'Mix'],
  },
  {
    id: 'rocha-reef-1kg',
    category: 'reef-base',
    badge: 'Rocha',
    name: 'Rocha para Reef 1 kg',
    description:
      'Rocha para estruturação de aquários marinhos, formação de tocas e composição de hardscape.',
    price: 49.9,
    installments: null,
    image: COMMONS(
      'Limestone rubble on aragonite sand beach (San Salvador Island, Bahamas) (16001526892).jpg'
    ),
    imageAlt: 'Rochas calcárias e aragoníticas em detalhe',
    imageCredit:
      'James St. John / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 50%',
    variants: ['1 kg', '5 kg', '10 kg'],
  },
  {
    id: 'aragonita-5kg',
    category: 'reef-base',
    badge: 'Substrato',
    name: 'Aragonita 5 kg',
    description:
      'Substrato claro para montagem de sistemas marinhos e reef em diferentes granulometrias.',
    price: 119.9,
    installments: 4,
    image: COMMONS(
      'Marine biogenous aragonite sand (modern; marine beach at Sandy Point, San Salvador Island, Bahamas) (48744508548).jpg'
    ),
    imageAlt: 'Areia aragonita clara em detalhe',
    imageCredit:
      'James St. John / Wikimedia Commons · CC BY 2.0',
    imagePosition: 'center 50%',
    variants: ['1–2 mm', '3–5 mm', '5 kg'],
  },
  {
    id: 'coral-soft',
    category: 'marinho',
    badge: 'Coral',
    name: 'Coral Soft',
    description:
      'Corais ornamentais para sistemas reef, vendidos individualmente.',
    price: 89.9,
    installments: 3,
    image: UNSPLASH('photo-1613117799054-66cacc1914c3'),
    imageAlt: 'Coral verde bioluminescente em aquário reef',
    variants: ['Green', 'Orange', 'Pink', 'Multicolor'],
  },
  {
    id: 'aquario-nano-20',
    category: 'aquarios',
    badge: 'Apartamento',
    name: 'Aquário Nano 20 L',
    description:
      'Aquário de vidro compacto para pequenos espaços e projetos de aquarismo.',
    price: 169.9,
    installments: 5,
    image: COMMONS('Planted Nano Aquarium.JPG'),
    imageAlt: 'Nano aquário plantado compacto',
    imagePosition: 'center 50%',
    variants: ['20 L', '30 L', '40 L'],
  },
  {
    id: 'aquario-cubo',
    category: 'aquarios',
    badge: 'Vidro',
    name: 'Aquário Cubo de Vidro',
    description:
      'Aquário vazio em vidro para montagem personalizada.',
    price: 129.9,
    installments: 4,
    image: COMMONS('Empty aquarium.jpg'),
    imageAlt: 'Aquário de vidro vazio',
    imagePosition: 'center 50%',
    variants: ['20 cm', '25 cm', '30 cm', '40 cm'],
  },
  {
    id: 'skimmer-nano',
    category: 'equipamentos',
    badge: 'Nano Reef',
    name: 'Skimmer Nano Reef',
    description:
      'Skimmer compacto para sistemas marinhos e nano reef.',
    price: 269.9,
    installments: 6,
    image: COMMONS('Skimz-SC205-Protein-Skimmer.jpg'),
    imageAlt: 'Protein skimmer para aquário marinho',
    imageCredit: 'Skimz / Wikimedia Commons · CC BY-SA 4.0',
    variants: ['Até 60 L', 'Até 100 L', 'Até 150 L'],
  },
  {
    id: 'bomba-circulacao',
    category: 'equipamentos',
    badge: 'Equipamento',
    name: 'Bomba de Circulação',
    description:
      'Circulação de água para aquários de água doce e sistemas marinhos.',
    price: 79.9,
    installments: 2,
    image: COMMONS('Tauchpumpe EDEN 104s 2007-10-14 aa EDIT CUT 1944x1944.jpg'),
    imageAlt: 'Bomba submersível compacta para aquário',
    imageCredit: 'Andreas Neudecker / Wikimedia Commons · CC',
    variants: ['2.000 L/h', '3.000 L/h', '5.000 L/h'],
  },
  {
    id: 'termostato',
    category: 'equipamentos',
    badge: 'Controle',
    name: 'Termostato para Aquário',
    description:
      'Controle de temperatura para aquários em diferentes volumes.',
    price: 69.9,
    installments: 2,
    image: COMMONS('Aquarium heater1.jpg'),
    imageAlt: 'Aquecedor termostato de imersão para aquário',
    imageCredit: 'Dr. David Midgley / Wikimedia Commons · CC BY-SA 2.5',
    variants: ['25 W', '50 W', '100 W', '200 W'],
  },
  {
    id: 'luminaria-reef',
    category: 'equipamentos',
    badge: 'Reef',
    name: 'Luminária LED Reef',
    description:
      'Iluminação LED para aquários marinhos e manutenção de corais compatíveis.',
    price: 289.9,
    installments: 6,
    image: COMMONS('Led Aquarium Light.jpg'),
    imageAlt: 'Luminária LED instalada sobre aquário',
    imageCredit: 'Lime Huang / Wikimedia Commons · CC BY-SA 3.0',
    variants: ['Nano', '40 cm', '60 cm'],
  },
  {
    id: 'areia-reef',
    category: 'consumo',
    badge: 'Substrato',
    name: 'Areia para Reef',
    description:
      'Substrato para sistemas marinhos e reef em diferentes granulometrias.',
    price: 49.9,
    installments: null,
    image: COMMONS('Marine biogenous aragonite sand (modern; marine beach at Sandy Point, San Salvador Island, Bahamas) (48744508548).jpg'),
    imageAlt: 'Areia aragonita marinha em detalhe',
    imageCredit: 'James St. John / Wikimedia Commons · CC BY 2.0',
    variants: ['2 kg', '5 kg', '10 kg'],
  },
  {
    id: 'racao-kinguio',
    category: 'consumo',
    badge: 'Alimentação',
    name: 'Alimentação para Kinguios',
    description:
      'Alimento específico para Kinguios e variedades ornamentais.',
    price: 19.9,
    installments: null,
    image: COMMONS('Fish Feed Pellets.jpg'),
    imageAlt: 'Pellets de alimentação para peixes ornamentais',
    imageCredit: 'Narek75 / Wikimedia Commons · CC BY-SA 4.0',
    imagePosition: 'center 50%',
    variants: ['30 g', '100 g', '300 g'],
  },
]

function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function Aquarismo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] =
    useState('todos')

  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase('pt-BR')

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
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

      const matchesSearch =
        !normalizedSearch ||
        searchable.includes(normalizedSearch)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, normalizedSearch])

  function chooseCategory(categoryId) {
    setActiveCategory(categoryId)
    setSearchTerm('')

    window.requestAnimationFrame(() => {
      document
        .querySelector('#aquarismo-produtos')
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
    <main className="aqua-store">
      <section className="aqua-store__hero">
        <div className="aqua-store__hero-media">
          <img
            src={COMMONS(
              'Mandarinfishes (Synchiropus splendidus) (8467335517).jpg'
            )}
            alt="Peixes-mandarim intensamente coloridos em ambiente reef"
          />
          <div className="aqua-store__hero-shade" />

          <small className="aqua-store__hero-credit">
            Bernard DUPONT / Wikimedia Commons
          </small>
        </div>

        <div className="aqua-store__container aqua-store__hero-inner">
          <span>Marketplace AgroNexus™</span>

          <h1>Aquarismo</h1>

          <p>
            Água doce, Kinguios, Bettas, plantados,
            marinho, Nano Reef, Mini Reef, corais,
            aquários, equipamentos, alimentação e
            manutenção.
          </p>

          <a href="#aquarismo-produtos">
            Comprar
            <strong aria-hidden="true">→</strong>
          </a>
        </div>
      </section>

      <div className="aqua-store__container">
        <section className="aqua-store__search">
          <label htmlFor="aquarismo-search">
            O que você procura?
          </label>

          <div>
            <input
              id="aquarismo-search"
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Betta Dragon, Oranda, Ocellaris, skimmer, termostato, areia..."
              autoComplete="off"
            />

            {(searchTerm ||
              activeCategory !== 'todos') && (
              <button
                type="button"
                onClick={resetFilters}
              >
                Limpar
              </button>
            )}
          </div>
        </section>

        <section className="aqua-store__categories">
          <header className="aqua-store__section-head">
            <span>Comprar por categoria</span>
            <h2>Escolha o que quer.</h2>
          </header>

          <div className="aqua-store__category-grid">
            {AQUARISMO_CATEGORIES.map(
              (category) => (
                <button
                  type="button"
                  key={category.id}
                  className={
                    activeCategory === category.id
                      ? 'aqua-category is-active'
                      : 'aqua-category'
                  }
                  onClick={() =>
                    chooseCategory(category.id)
                  }
                >
                  <img
                    src={category.image}
                    alt=""
                    loading="lazy"
                    style={{
                      objectPosition:
                        category.imagePosition ||
                        'center',
                    }}
                  />

                  <span className="aqua-category__shade" />

                  <span className="aqua-category__copy">
                    <strong>
                      {category.name}
                    </strong>

                    <small>
                      {category.description}
                    </small>
                  </span>
                </button>
              )
            )}
          </div>
        </section>

        <section
          className="aqua-store__products"
          id="aquarismo-produtos"
        >
          <header className="aqua-store__section-head">
            <span>Preço na tela</span>

            <h2>
              Produto. Preço. Compra.
            </h2>
          </header>

          <div className="aqua-store__product-grid">
            {filteredProducts.map(
              (product) => (
                <article
                  className="aqua-product"
                  key={product.id}
                >
                  <div className="aqua-product__media">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      style={{
                        objectPosition:
                          product.imagePosition ||
                          'center',
                      }}
                    />

                    <span>
                      {product.badge}
                    </span>

                    {product.imageCredit ? (
                      <small className="aqua-product__credit">
                        {product.imageCredit}
                      </small>
                    ) : null}
                  </div>

                  <div className="aqua-product__body">
                    <h3>{product.name}</h3>

                    <p>
                      {product.description}
                    </p>

                    <div className="aqua-product__variants">
                      {product.variants.map(
                        (variant) => (
                          <span key={variant}>
                            {variant}
                          </span>
                        )
                      )}
                    </div>

                    <div className="aqua-product__price">
                      <strong>
                        {formatBRL(
                          product.price
                        )}
                      </strong>

                      {product.installments ? (
                        <span>
                          {product.installments}x de{' '}
                          {formatBRL(
                            product.price /
                              product.installments
                          )}
                        </span>
                      ) : (
                        <span>
                          Pagamento no checkout
                        </span>
                      )}
                    </div>

                    <a
                      href={`#/marketplace?produto=${product.id}`}
                    >
                      Comprar
                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              )
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="aqua-store__empty">
              <strong>
                Nenhum produto encontrado.
              </strong>

              <button
                type="button"
                onClick={resetFilters}
              >
                Ver todos
              </button>
            </div>
          ) : null}
        </section>

        <footer className="aqua-store__footer">
          AgroNexus™ · Uma iniciativa da Guiropa World
        </footer>
      </div>
    </main>
  )
}
