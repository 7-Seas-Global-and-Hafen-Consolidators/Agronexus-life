import { useEffect, useMemo, useState } from 'react'
import '../styles/agro-hub.css'

import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Portfolio from '../components/Portfolio'

import avesImage from '../assets/images/editorial/AgroNexus-Birds.png'
import avesCantantesImage from '../assets/images/editorial/agronexus-aves-cantantes-canarios-passeriformes-marketplace.jpg'
import mamiferosImage from '../assets/images/editorial/agronexus-hamsters-editorial-guide-1.jpg'
import marketplaceImage from '../assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg'
import bibliotecaImage from '../assets/images/editorial/agronexus-cockatiels-editorial-guide.jpg'
import comunidadeImage from '../assets/images/editorial/agronexus-rosellas-editorial-guide.jpg'

const WHATSAPP_NUMBER = '5547991353900'
const SUPPORT_URL = 'https://www.asaas.com/c/u6toboa8xhqsmosv'

const aquarismoImage =
  '/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png'

const AREAS = [
  {
    title: 'Aves',
    subtitle: 'Marketplace de aves e psitacídeos',
    description:
      'Comprar aves, filhotes, viveiros, gaiolas, alimentação, genética, mutações, manejo responsável e publicações especializadas.',
    href: '#/aves',
    number: '01',
    image: avesImage,
    imageAlt:
      'Marketplace AgroNexus de aves, psitacídeos, periquitos, calopsitas, Ring Necks e Agapornis',
  },
  {
    title: 'Aquarismo',
    subtitle: 'Marketplace de peixes e aquários',
    description:
      'Aquários de água doce, marinhos, reef, plantados, ciclídeos, peixes ornamentais, corais, filtros, bombas e alimentação.',
    href: '#/aquarismo',
    number: '02',
    image: aquarismoImage,
    imageAlt:
      'Marketplace AgroNexus de aquários, peixes ornamentais, ciclídeos africanos e reef',
  },
  {
    title: 'Mamíferos',
    subtitle: 'Marketplace de pequenos e grandes mamíferos',
    description:
      'Hamsters, porquinhos-da-índia, coelhos, chinchilas, furões, alpacas, lhamas, habitats, alimentação e cuidados.',
    href: '#/mamiferos',
    number: '03',
    image: mamiferosImage,
    imageAlt:
      'Marketplace AgroNexus de hamsters, pequenos mamíferos, alpacas e animais de companhia',
  },
  {
    title: 'Marketplace',
    subtitle: 'Venda, compra e projetos especializados',
    description:
      'Espécies, raças, plantas, equipamentos, alimentação, acessórios, kits, projetos completos e atendimento especializado.',
    href: '#/marketplace',
    number: '04',
    image: marketplaceImage,
    imageAlt:
      'Marketplace AgroNexus de animais, plantas, répteis, equipamentos e biodiversidade',
  },
  {
    title: 'Biblioteca',
    subtitle: 'Guias e publicações oficiais',
    description:
      'Manuais completos, guias técnicos, conteúdos educativos e publicações para começar e cuidar corretamente.',
    href: '#/biblioteca',
    number: '05',
    image: bibliotecaImage,
    imageAlt:
      'Biblioteca AgroNexus com guias oficiais de animais, aves, aquarismo e biodiversidade',
  },
  {
    title: 'Comunidade',
    subtitle: 'Conhecimento, mercado e conexão',
    description:
      'Consumidores, especialistas, instituições, clubes, empresas e apaixonados por biodiversidade conectados pela AgroNexus.',
    href: '#/comunidade',
    number: '06',
    image: comunidadeImage,
    imageAlt:
      'Comunidade internacional AgroNexus de biodiversidade e mercado responsável',
  },
]

const CONNECTIONS = [
  {
    value: '13+',
    title: 'Criadores e produtores',
    text: 'Fontes comerciais responsáveis e referências inicialmente identificadas.',
  },
  {
    value: '18+',
    title: 'Clubes e comunidades',
    text: 'Federações, associações, fóruns e organizações especializadas mapeadas.',
  },
  {
    value: '15+',
    title: 'Ciência e bem-estar',
    text: 'Universidades, especialistas, veterinários e conexões institucionais.',
  },
  {
    value: '12+',
    title: 'Áreas especializadas',
    text: 'Aves, aquarismo, cães, gatos, mamíferos, répteis, botânica e conservação.',
  },
]

const MARKETPLACE_CATEGORIES = [
  {
    id: 'aves-psitacideos',
    eyebrow: 'Aves e psitacídeos',
    title: 'Marketplace de Aves',
    description:
      'Comprar aves, localizar criador de aves, pesquisar preços, mutações, filhotes, viveiros, alimentação e cuidados.',
    image: avesImage,
    items: [
      'Comprar Periquito Australiano',
      'Comprar Periquito Inglês',
      'Comprar Calopsita',
      'Preço de Calopsita mutação',
      'Comprar Ring Neck',
      'Comprar Ring Neck Azul',
      'Criador de Ring Neck perto de mim',
      'Comprar Agapornis',
      'Agapornis filhote preço',
      'Comprar Rosella',
      'Comprar Red Rumped',
      'Comprar Alexandrino',
      'Comprar Derbyan',
      'Comprar Mustache',
      'Comprar Kakariki',
      'Comprar Bourke',
      'Comprar Princess',
      'Comprar Turquoisine',
      'Comprar Forpus',
      'Comprar Eclectus',
      'Comprar Caique',
      'Comprar Papagaio do Congo',
      'Comprar Papagaio Amazona',
      'Comprar Arara',
      'Comprar Cacatua',
      'Comprar Cacatua Rosada',
      'Comprar Lóris Molucano',
      'Comprar Lóris Amor-Amor',
      'Comprar Lóris Bailarino',
      'Comprar Lóris Castanho',
    ],
  },
  {
    id: 'aves-cantantes',
    eyebrow: 'Canários e passeriformes',
    title: 'Marketplace de Aves Cantantes',
    description:
      'Canários, aves cantantes, passeriformes ornamentais, gaiolas, viveiros, sementes, rações e acessórios.',
    image: avesCantantesImage,
    items: [
      'Comprar Canário Belga',
      'Canário Belga preço',
      'Comprar Canário Gloster',
      'Comprar Canário Roller',
      'Comprar Canário Timbrado',
      'Comprar Canário Border',
      'Comprar Canário Norwich',
      'Comprar Canário Lizard',
      'Comprar Diamante Gould',
      'Comprar Mandarim',
      'Comprar Manon',
      'Comprar Bengalins',
      'Comprar Curió legalizado',
      'Comprar Bicudo legalizado',
      'Comprar Trinca-Ferro legalizado',
      'Comprar Coleiro legalizado',
      'Comprar Azulão legalizado',
      'Comprar Pintassilgo',
      'Comprar Cardeal',
      'Comprar Galo-de-Campina',
      'Gaiola para Canário',
      'Viveiro para Canários',
      'Ração para Canário',
      'Sementes para aves cantantes',
    ],
  },
  {
    id: 'aquarismo-doce',
    eyebrow: 'Água doce',
    title: 'Marketplace de Peixes Ornamentais',
    description:
      'Comprar peixes de água doce, aquários, filtros, bombas, substratos, plantas, rações e equipamentos.',
    image: aquarismoImage,
    items: [
      'Comprar Betta',
      'Comprar Betta Halfmoon',
      'Comprar Betta Koi',
      'Aquário para Betta',
      'Ração para Betta',
      'Comprar Kinguio',
      'Comprar Kinguio Oranda',
      'Aquário para Kinguio',
      'Comprar Acará-Bandeira',
      'Comprar Disco',
      'Comprar Oscar',
      'Comprar Ramirezi',
      'Comprar Apistogramma',
      'Comprar Neon',
      'Comprar Rodóstomo',
      'Comprar Mato-Grosso',
      'Comprar Paulistinha',
      'Comprar Guppy',
      'Comprar Molinésia',
      'Comprar Platy',
      'Comprar Espada',
      'Comprar Corydoras',
      'Comprar Cascudo',
      'Comprar Botia-Palhaço',
      'Comprar Killifish',
      'Comprar Aruanã',
      'Comprar Flowerhorn',
      'Comprar Carpa Koi',
      'Aquário plantado completo',
    ],
  },
  {
    id: 'aquarismo-africano',
    eyebrow: 'Malawi, Tanganica e Vitória',
    title: 'Marketplace de Ciclídeos Africanos',
    description:
      'Peixes, compatibilidade, aquários de 200 litros ou mais, rochas, filtragem, alimentação e projetos completos.',
    items: [
      'Comprar Ciclídeos Africanos',
      'Comprar Frontosa',
      'Comprar Tropheus',
      'Comprar Demasoni',
      'Comprar Yellow Lab',
      'Comprar Auratus',
      'Comprar Venustus',
      'Comprar Livingstoni',
      'Comprar Peacock',
      'Comprar Mbunas',
      'Comprar Haps',
      'Aquário para Ciclídeos Africanos',
      'Rochas para Ciclídeos Africanos',
      'Substrato para Ciclídeos Africanos',
      'Filtro para aquário de 200 litros',
      'Ração para Ciclídeos Africanos',
      'Compatibilidade de Ciclídeos Africanos',
      'Kit aquário falso marinho',
    ],
  },
  {
    id: 'aquarismo-marinho',
    eyebrow: 'Marinho e reef',
    title: 'Marketplace de Aquário Marinho',
    description:
      'Peixes marinhos, corais, anêmonas, aquários reef, skimmers, sumps, bombas, iluminação e projetos completos.',
    items: [
      'Comprar Peixe-Palhaço Ocellaris',
      'Comprar casal de Nemo',
      'Comprar Peixe-Palhaço Percula',
      'Comprar Peixe-Palhaço Clarkii',
      'Comprar Blue Tang',
      'Comprar Yellow Tang',
      'Comprar Peixe-Mandarim',
      'Comprar Royal Gramma',
      'Comprar Firefish',
      'Comprar Goby',
      'Comprar Blenny',
      'Comprar Wrasse',
      'Comprar Anthias',
      'Comprar Anêmona',
      'Anêmona para Ocellaris',
      'Comprar Coral Zoanthus',
      'Comprar Coral Hammer',
      'Comprar Coral Torch',
      'Comprar Coral Frogspawn',
      'Comprar Acropora',
      'Comprar Montipora',
      'Montar Mini Reef',
      'Montar aquário marinho',
      'Skimmer para aquário marinho',
      'Sump para aquário marinho',
      'Iluminação para reef',
      'Bomba de circulação',
      'Sal sintético para aquário',
      'Kit de testes para reef',
    ],
  },
  {
    id: 'caes',
    eyebrow: 'Raças e cuidados',
    title: 'Marketplace de Cães',
    description:
      'Comprar filhotes, pesquisar raças, preços, alimentação, acessórios, enriquecimento e preparação da família.',
    items: [
      'Comprar Labrador',
      'Filhote de Labrador preço',
      'Comprar Golden Retriever',
      'Comprar Border Collie',
      'Border Collie filhote preço',
      'Comprar Spitz Alemão',
      'Spitz Alemão Anão preço',
      'Comprar Pinscher',
      'Comprar Bulldog Francês',
      'Comprar Bulldog Inglês',
      'Comprar Bull Terrier',
      'Comprar Cane Corso',
      'Comprar Mastim Napolitano',
      'Comprar Pastor Alemão',
      'Comprar Pastor Belga',
      'Comprar Rottweiler',
      'Comprar Dobermann',
      'Comprar Schnauzer',
      'Comprar Pug',
      'Comprar Boston Terrier',
      'Comprar Chihuahua',
      'Comprar Dachshund',
      'Comprar Shiba Inu',
      'Comprar Akita Inu',
      'Comprar Chow Chow',
      'Comprar Husky Siberiano',
      'Comprar São Bernardo',
      'Comprar Boxer',
      'Kit completo para filhote',
      'Ração para cães por raça',
      'Brinquedos de enriquecimento',
    ],
  },
  {
    id: 'gatos',
    eyebrow: 'Raças e companhia',
    title: 'Marketplace de Gatos',
    description:
      'Comprar gatos de raça, alimentação, higiene, fontes, caixas sanitárias, arranhadores e enriquecimento.',
    items: [
      'Comprar Gato Persa',
      'Gato Persa filhote preço',
      'Comprar Persa Pelo Longo',
      'Comprar Exotic Shorthair',
      'Comprar Gato Sphynx',
      'Gato Sphynx preço',
      'Comprar Maine Coon',
      'Maine Coon filhote preço',
      'Comprar Siamês',
      'Comprar Ragdoll',
      'Comprar Bengal',
      'Comprar British Shorthair',
      'Comprar Scottish Fold',
      'Comprar Angorá',
      'Comprar Himalaio',
      'Comprar Norueguês da Floresta',
      'Comprar Siberiano',
      'Comprar Devon Rex',
      'Comprar Cornish Rex',
      'Comprar Abissínio',
      'Fonte de água para gatos',
      'Arranhador para gatos',
      'Areia sanitária para gatos',
      'Kit completo para gato filhote',
    ],
  },
  {
    id: 'pequenos-mamiferos',
    eyebrow: 'Companheiros especiais',
    title: 'Marketplace de Pequenos Mamíferos',
    description:
      'Comprar pequenos mamíferos, habitats, alimentação, substratos, acessórios e enriquecimento.',
    items: [
      'Comprar Hamster Sírio',
      'Hamster Sírio preço',
      'Comprar Hamster Roborovski',
      'Comprar Hamster Winter White',
      'Comprar Hamster Campbell',
      'Comprar Hamster Chinês',
      'Comprar Porquinho-da-Índia',
      'Comprar Chinchila',
      'Comprar Furão',
      'Comprar Coelho',
      'Comprar Gerbil',
      'Comprar Twister',
      'Comprar Degu',
      'Comprar Hedgehog',
      'Habitat para Hamster',
      'Roda para Hamster',
      'Substrato para Hamster',
      'Ração para Hamster',
      'Viveiro para Porquinho-da-Índia',
      'Kit completo para Chinchila',
    ],
  },
  {
    id: 'animais-rurais',
    eyebrow: 'Pets rurais e projetos especiais',
    title: 'Marketplace de Alpacas e Lhamas',
    description:
      'Alpacas, lhamas, mini animais, cercamentos, abrigos, alimentação, transporte e projetos responsáveis.',
    items: [
      'Comprar Alpaca',
      'Alpaca como pet',
      'Alpaca preço',
      'Criador de Alpaca no Brasil',
      'Comprar Lhama',
      'Lhama como pet',
      'Comprar Mini Pig',
      'Comprar Mini Cabra',
      'Comprar Mini Pônei',
      'Abrigo para Alpaca',
      'Cercamento para Alpaca',
      'Alimentação para Alpaca',
      'Transporte de Alpaca',
      'Projeto completo para Alpacas',
    ],
  },
  {
    id: 'repteis',
    eyebrow: 'Terrários e espécies',
    title: 'Marketplace de Répteis e Anfíbios',
    description:
      'Comprar répteis legalizados, terrários, aquecimento, UVB, substratos, alimentação e controle ambiental.',
    items: [
      'Comprar Jabuti legalizado',
      'Comprar Tartaruga legalizada',
      'Comprar Tigre-d’Água',
      'Comprar Gecko Leopardo',
      'Comprar Gecko Cristado',
      'Comprar Dragão-Barbudo',
      'Comprar Iguana',
      'Comprar Camaleão',
      'Comprar Corn Snake',
      'Comprar Jiboia legalizada',
      'Comprar Python legalizada',
      'Comprar Axolote',
      'Comprar Dendrobates',
      'Terrário para Gecko',
      'Terrário para Dragão-Barbudo',
      'Lâmpada UVB para répteis',
      'Aquecimento para terrário',
      'Substrato para terrário',
      'Controle de temperatura e umidade',
    ],
  },
  {
    id: 'botanica',
    eyebrow: 'Plantas, flores e cultivo',
    title: 'Marketplace de Plantas e Botânica',
    description:
      'Comprar flores, bonsais, mini árvores, frutíferas, orquídeas, plantas ornamentais, substratos e adubos.',
    items: [
      'Comprar Bonsai',
      'Bonsai para apartamento',
      'Comprar Bonsai de Jabuticaba',
      'Comprar Bonsai de Romã',
      'Comprar Bonsai de Oliveira',
      'Comprar Bonsai de Ficus',
      'Comprar Acer Japonês',
      'Comprar Sakura',
      'Comprar Mini Jabuticabeira',
      'Mini árvore frutífera',
      'Árvore frutífera para apartamento',
      'Comprar Mini Limoeiro',
      'Comprar Mini Romãzeira',
      'Comprar Mini Oliveira',
      'Comprar Orquídeas',
      'Comprar Rosas',
      'Comprar Bromélias',
      'Comprar Plantas Carnívoras',
      'Comprar Suculentas',
      'Comprar Cactos',
      'Comprar Palmeiras',
      'Comprar Árvores Nativas',
      'Comprar Mudas Frutíferas',
      'Comprar Flores Ornamentais',
      'Substrato para Bonsai',
      'Adubo para Bonsai',
      'Terra para plantas',
      'Areia para jardinagem',
      'Vasos para Bonsai',
      'Ferramentas para Bonsai',
    ],
  },
  {
    id: 'equipamentos',
    eyebrow: 'Habitats, acessórios e alimentação',
    title: 'Marketplace de Produtos Especializados',
    description:
      'Lojas, produtos, equipamentos, alimentação, habitats, acessórios, higiene, saúde e bem-estar.',
    items: [
      'Comprar Gaiola para Calopsita',
      'Comprar Viveiro para Ring Neck',
      'Comprar Viveiro para Aves',
      'Comprar Poleiro Natural',
      'Comprar Brinquedo para Papagaio',
      'Comprar Ninho para Agapornis',
      'Comprar Comedouro para Aves',
      'Comprar Bebedouro para Aves',
      'Comprar Ração para Periquito',
      'Comprar Ração para Calopsita',
      'Comprar Ração para Ring Neck',
      'Comprar Néctar para Lóris',
      'Comprar Farinhada para Aves',
      'Comprar Vitaminas para Aves',
      'Comprar Cálcio para Aves',
      'Comprar Aquário',
      'Comprar Filtro Canister',
      'Comprar Bomba para Aquário',
      'Comprar Skimmer',
      'Comprar Sump',
      'Comprar Mídia Biológica',
      'Comprar Iluminação para Plantado',
      'Comprar Iluminação para Reef',
      'Comprar Terrário',
      'Comprar Paludário',
      'Comprar Incubadora',
      'Comprar Chocadeira',
      'Comprar Ração para Hamster',
      'Comprar Ração para Cães',
      'Comprar Ração para Gatos',
    ],
  },
]

const POPULAR_SEARCHES = [
  'Comprar Ring Neck Azul',
  'Preço de Calopsita mutação',
  'Criador de Agapornis perto de mim',
  'Ração para Periquito Australiano',
  'Comprar Canário Belga',
  'Comprar Hamster Sírio',
  'Aquário para Betta',
  'Comprar Kinguio Oranda',
  'Comprar casal de Ocellaris',
  'Montar Mini Reef',
  'Comprar Labrador',
  'Comprar Border Collie',
  'Comprar Spitz Alemão',
  'Comprar Gato Persa',
  'Comprar Gato Sphynx',
  'Comprar Alpaca',
  'Bonsai para apartamento',
  'Mini Jabuticabeira',
  'Viveiro para Ring Neck',
  'Néctar para Lóris',
]

function createWhatsAppLink(subject) {
  const message = [
    'Olá, AgroNexus!',
    '',
    `Encontrei no site: ${subject}.`,
    '',
    'Gostaria de falar agora com um especialista e receber orientação.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

function MarketplaceCategory({ category }) {
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded
    ? category.items
    : category.items.slice(0, 10)

  return (
    <article
      id={category.id}
      className="agro-seo__category"
    >
      {category.image ? (
        <div className="agro-seo__category-media">
          <img
            src={category.image}
            alt={`${category.title} AgroNexus`}
            loading="lazy"
            decoding="async"
          />

          <div
            className="agro-seo__category-shade"
            aria-hidden="true"
          />
        </div>
      ) : null}

      <div className="agro-seo__category-content">
        <span className="agro-seo__category-eyebrow">
          {category.eyebrow}
        </span>

        <h3>{category.title}</h3>

        <p>{category.description}</p>

        <div className="agro-seo__queries">
          {visibleItems.map((item) => (
            <a
              key={item}
              href={createWhatsAppLink(item)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item}
            </a>
          ))}
        </div>

        {category.items.length > 10 ? (
          <button
            type="button"
            className="agro-seo__expand"
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded
              ? 'Mostrar menos'
              : `Ver mais ${category.items.length - 10} opções`}
          </button>
        ) : null}

        <a
          href={createWhatsAppLink(category.title)}
          className="agro-seo__specialist"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar agora com um especialista
          <span aria-hidden="true">→</span>
        </a>

        <small className="agro-seo__institution">
          Atendimento AgroNexus™ · Uma iniciativa do Grupo Guiropa World
        </small>
      </div>
    </article>
  )
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector(
      'meta[name="description"]'
    )
    const previousDescription =
      description?.getAttribute('content') || ''

    document.title =
      'AgroNexus™ — Marketplace de Animais, Aquarismo, Plantas e Biodiversidade'

    if (description) {
      description.setAttribute(
        'content',
        'Marketplace AgroNexus de aves, peixes ornamentais, aquarismo, cães, gatos, hamsters, répteis, alpacas, plantas, bonsais, viveiros, aquários, alimentação, equipamentos, guias e soluções especializadas.'
      )
    }

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.id = 'agronexus-home-structured-data'
    structuredData.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AgroNexus',
      url: 'https://agronexus.life',
      description:
        'Marketplace de animais, aquarismo, plantas, biodiversidade, equipamentos e publicações especializadas.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Guiropa World',
        url: 'https://guiropa.world',
      },
      sameAs: [
        'https://www.instagram.com/agronexus.life',
        'https://www.facebook.com/share/1E93BrSr1w/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Atendimento especializado',
        telephone: '+55-47-99135-3900',
        availableLanguage: ['Portuguese', 'English'],
      },
    })

    document.head.appendChild(structuredData)

    return () => {
      document.title = previousTitle

      if (description) {
        description.setAttribute(
          'content',
          previousDescription
        )
      }

      structuredData.remove()
    }
  }, [])

  const filteredCategories = useMemo(() => {
    const normalized = searchTerm
      .trim()
      .toLocaleLowerCase('pt-BR')

    if (!normalized) {
      return MARKETPLACE_CATEGORIES
    }

    return MARKETPLACE_CATEGORIES.filter((category) => {
      const searchableText = [
        category.title,
        category.eyebrow,
        category.description,
        ...category.items,
      ]
        .join(' ')
        .toLocaleLowerCase('pt-BR')

      return searchableText.includes(normalized)
    })
  }, [searchTerm])

  return (
    <main id="topo">
      <Hero />

      <Mission />

      <section
        className="agro-support"
        aria-labelledby="agro-support-title"
      >
        <div className="agro-hub__container">
          <div className="agro-support__panel">
            <div className="agro-support__copy">
              <span className="agro-hub__eyebrow">
                Ajude a manter este projeto vivo
              </span>

              <h2 id="agro-support-title">
                Ajude a expandir o
                <span> Atlas Mundial da Biodiversidade.</span>
              </h2>

              <p>
                A AgroNexus produz guias completos, conteúdos educativos,
                pesquisas, fotografias, ferramentas e publicações que ajudam
                pessoas a cuidar corretamente de cada espécie. Um animal
                pequeno, um peixe, uma ave ou uma planta merecem conhecimento,
                planejamento e responsabilidade.
              </p>

              <div className="agro-support__points">
                <span>Novos guias e manuais</span>
                <span>Pesquisa e conservação</span>
                <span>Conteúdo educativo</span>
                <span>Infraestrutura tecnológica</span>
              </div>
            </div>

            <div className="agro-support__action">
              <span className="agro-support__suggestion">
                Apoio voluntário sugerido
              </span>

              <strong>R$ 10</strong>

              <p>
                Cada contribuição ajuda a financiar a continuidade e a
                expansão da AgroNexus™.
              </p>

              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apoiar a AgroNexus
                <span aria-hidden="true">→</span>
              </a>

              <small>
                A AgroNexus™ é uma iniciativa do Grupo Guiropa World.
                O pagamento será processado em nome da Guiropa World.
              </small>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ecossistema"
        className="agro-hub"
        aria-labelledby="agro-hub-title"
      >
        <div className="agro-hub__container">
          <header className="agro-hub__header">
            <span className="agro-hub__eyebrow">
              Marketplace AgroNexus™
            </span>

            <h2 id="agro-hub-title">
              Marketplace de animais, aquarismo,
              plantas e biodiversidade.
            </h2>

            <p>
              Comprar aves, peixes ornamentais, cães, gatos, hamsters,
              répteis, alpacas, plantas, bonsais, equipamentos,
              alimentação, viveiros, aquários, terrários, acessórios,
              guias e projetos especializados.
            </p>

            <small className="agro-hub__guiropa">
              AgroNexus™ · Uma iniciativa do Grupo Guiropa World
            </small>
          </header>

          <div className="agro-hub__grid">
            {AREAS.map((area) => (
              <a
                className="agro-hub__card"
                href={area.href}
                key={area.title}
              >
                <div className="agro-hub__media">
                  <img
                    src={area.image}
                    alt={area.imageAlt}
                    loading="lazy"
                  />

                  <div
                    className="agro-hub__media-overlay"
                    aria-hidden="true"
                  />

                  <span className="agro-hub__number">
                    {area.number}
                  </span>
                </div>

                <div className="agro-hub__content">
                  <span className="agro-hub__subtitle">
                    {area.subtitle}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <span className="agro-hub__action">
                    Explorar marketplace
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="agro-popular">
            <div className="agro-popular__head">
              <span className="agro-hub__eyebrow">
                Pesquisas populares
              </span>

              <h3>
                O que as pessoas procuram no Marketplace AgroNexus
              </h3>
            </div>

            <div className="agro-popular__items">
              {POPULAR_SEARCHES.map((item) => (
                <a
                  key={item}
                  href={createWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>

          <div
            className="agro-hub__metrics"
            aria-label="Dimensão inicial da rede AgroNexus"
          >
            <header className="agro-hub__metrics-head">
              <span className="agro-hub__eyebrow">
                Rede AgroNexus
              </span>

              <h3>
                Mercado, conhecimento e atendimento especializado.
              </h3>

              <p>
                A AgroNexus atua como ponte entre quem procura e uma rede
                comercial selecionada, preservando suas fontes e mantendo
                o atendimento, a orientação e a intermediação centralizados
                na plataforma.
              </p>
            </header>

            <div className="agro-hub__metrics-grid">
              {CONNECTIONS.map((connection) => (
                <article
                  className="agro-hub__metric"
                  key={connection.title}
                >
                  <strong className="agro-hub__metric-value">
                    {connection.value}
                  </strong>

                  <h4>{connection.title}</h4>

                  <p>{connection.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="agro-seo"
        aria-labelledby="agro-seo-title"
      >
        <div className="agro-hub__container">
          <header className="agro-seo__header">
            <span className="agro-hub__eyebrow">
              Comprar, pesquisar e planejar
            </span>

            <h2 id="agro-seo-title">
              Encontre espécies, raças,
              produtos e projetos especializados.
            </h2>

            <p>
              Pesquise por animal, raça, peixe, ave, planta, produto,
              equipamento, alimentação ou projeto. Todo atendimento é
              realizado pela AgroNexus™.
            </p>
          </header>

          <div className="agro-seo__search">
            <label htmlFor="marketplace-search">
              Pesquisar no Marketplace AgroNexus
            </label>

            <div className="agro-seo__search-control">
              <input
                id="marketplace-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Ex.: Ring Neck, Betta, Labrador, Alpaca, Bonsai, viveiro, aquário..."
              />

              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                >
                  Limpar
                </button>
              ) : null}
            </div>
          </div>

          <div className="agro-seo__results">
            <span>
              {filteredCategories.length}{' '}
              {filteredCategories.length === 1
                ? 'categoria encontrada'
                : 'categorias encontradas'}
            </span>

            {searchTerm ? (
              <a
                href={createWhatsAppLink(searchTerm)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar sobre “{searchTerm}”
                <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </div>

          <div className="agro-seo__grid">
            {filteredCategories.map((category) => (
              <MarketplaceCategory
                category={category}
                key={category.id}
              />
            ))}
          </div>

          {filteredCategories.length === 0 ? (
            <div className="agro-seo__empty">
              <h3>Não encontrou o que procura?</h3>

              <p>
                Fale agora com a AgroNexus. Nossa rede pode analisar
                espécies, produtos e projetos que ainda não aparecem
                publicamente no marketplace.
              </p>

              <a
                href={createWhatsAppLink(searchTerm)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar agora com um especialista
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="agro-final-cta">
        <div className="agro-hub__container">
          <div className="agro-final-cta__panel">
            <div>
              <span className="agro-hub__eyebrow">
                Atendimento especializado AgroNexus™
              </span>

              <h2>
                Encontrou o que procura?
                <span> Fale diretamente conosco.</span>
              </h2>

              <p>
                Espécies, preços, filhotes, equipamentos, alimentação,
                kits, documentação, habitats e projetos completos.
                O atendimento acontece diretamente pelo WhatsApp da AgroNexus.
              </p>
            </div>

            <a
              href={createWhatsAppLink(
                'Atendimento especializado no Marketplace AgroNexus'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar agora com um especialista
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="agro-final-cta__institution">
            AgroNexus™ — Marketplace Internacional de Biodiversidade.
            Uma iniciativa do Grupo Guiropa World.
          </p>
        </div>
      </section>

      <Portfolio />
    </main>
  )
}
