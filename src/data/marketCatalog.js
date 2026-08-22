import { formatAdNumber } from './commerceConfig'
import { FISH_NATURE_PRODUCTS } from './fishNature/products'

const money = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

const LOCAL = (path) => encodeURI(path)

const BASE_OFFERS = [
  {
    id: '1985533504',
    slug: 'bonsai-roma-frutifera-20cm',
    world: 'plantas',
    categories: ['plantas', 'bonsais', 'frutiferas'],
    type: 'living-plant',
    name: 'Bonsai de Romã Frutífera 20 cm',
    price: 99.91,
    oldPrice: 148.99,
    installmentText: '3x de R$ 33,30 sem juros',
    stockLabel: 'Disponível',
    image: 'https://http2.mlstatic.com/D_Q_NP_609372-MLB111826137263_052026-F-bonsai-de-roma-frutifera-20-cm--planta-natural.webp',
    images: [
      'https://http2.mlstatic.com/D_Q_NP_609372-MLB111826137263_052026-F-bonsai-de-roma-frutifera-20-cm--planta-natural.webp',
    ],
    description: 'Bonsai de romã frutífera em vaso, com aproximadamente 20 cm de altura. Oferta AgroNexus com ficha estruturada para produto vivo.',
    highlights: ['Planta natural', 'Altura aproximada: 20 cm', 'Acompanha vaso'],
    attributes: [
      ['Espécie', 'Romã'],
      ['Tipo', 'Bonsai'],
      ['Altura', '20 cm'],
      ['Ambiente', 'Interior / área iluminada'],
      ['Quantidade', '1 planta'],
    ],
    delivery: 'Entrega calculada conforme CEP e características do item.',
  },
  {
    id: '1985533505',
    slug: 'nutropica-agapornis-frutas',
    world: 'alimentacao',
    categories: ['aves', 'alimentacao', 'racoes'],
    type: 'feed',
    name: 'Ração Nutrópica para Agapornis com Frutas',
    price: 46.89,
    oldPrice: 47.00,
    installmentText: null,
    stockLabel: 'Consulte disponibilidade',
    image: LOCAL('/images/aves/categories/products/nutropica/Ração Nutrópica para Agapornis com Frutas.png'),
    images: [LOCAL('/images/aves/categories/products/nutropica/Ração Nutrópica para Agapornis com Frutas.png')],
    description: 'Alimento especializado para Agapornis com apresentação comercial AgroNexus.',
    highlights: ['Agapornis', 'Com frutas', 'Produto físico'],
    attributes: [['Categoria', 'Alimentação'], ['Indicação', 'Agapornis'], ['Formato', 'Ração especializada']],
    delivery: 'Entrega calculada no atendimento/checkout.',
  },
  {
    id: '1985533506',
    slug: 'nutropica-periquitos-300g',
    world: 'alimentacao',
    categories: ['aves', 'alimentacao', 'racoes'],
    type: 'feed',
    name: 'Ração Extrusada Nutrópica para Periquitos 300 g',
    price: 38.89,
    oldPrice: 39.00,
    stockLabel: 'Consulte disponibilidade',
    image: LOCAL('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Periquitos 300 g.png'),
    images: [LOCAL('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Periquitos 300 g.png')],
    description: 'Ração extrusada para periquitos em embalagem de 300 g.',
    highlights: ['Periquitos', 'Extrusada', '300 g'],
    attributes: [['Categoria', 'Alimentação'], ['Indicação', 'Periquitos'], ['Peso', '300 g']],
    delivery: 'Entrega calculada no atendimento/checkout.',
  },
]

const AQUATIC_OFFERS = FISH_NATURE_PRODUCTS
  .filter((item) => item?.name && (item.primaryImage || item.images?.length))
  .slice(0, 24)
  .map((item, index) => ({
    id: String(1985533600 + index),
    slug: item.slug || item.id || `aquatic-${index + 1}`,
    world: item.world || 'aquarismo',
    categories: [item.world || 'aquarismo', item.category || 'catalogo'].filter(Boolean),
    type: item.type || 'aquatic',
    name: item.name,
    price: Number.isFinite(Number(item.price)) ? Number(item.price) : null,
    oldPrice: Number.isFinite(Number(item.oldPrice)) ? Number(item.oldPrice) : null,
    stockLabel: item.available === false ? 'Indisponível agora' : 'Consulte disponibilidade',
    image: item.primaryImage || item.images?.[item.images.length - 1] || '',
    images: item.images?.length ? item.images : [item.primaryImage].filter(Boolean),
    description: item.description || 'Oferta do universo aquático AgroNexus.',
    highlights: [item.category, item.species, item.size].filter(Boolean),
    attributes: Object.entries(item.attributes || {}).slice(0, 12),
    delivery: 'Condições de entrega conforme natureza, tamanho e destino do item.',
  }))

export const MARKET_OFFERS = [...BASE_OFFERS, ...AQUATIC_OFFERS]

export function getMarketOffer(value) {
  const key = String(value || '').trim()
  return MARKET_OFFERS.find((item) => item.id === key || item.slug === key) || null
}

export function getRelatedOffers(offer, limit = 6) {
  if (!offer) return []
  return MARKET_OFFERS
    .filter((item) => item.id !== offer.id)
    .filter((item) => item.world === offer.world || item.categories?.some((category) => offer.categories?.includes(category)))
    .slice(0, limit)
}

export function getOffersByWorld(world) {
  return MARKET_OFFERS.filter((item) => item.world === world || item.categories?.includes(world))
}

export function publicOffer(offer) {
  if (!offer) return null
  return {
    ...offer,
    adNumber: formatAdNumber(offer.id),
    formattedPrice: offer.price == null ? null : money(offer.price),
    formattedOldPrice: offer.oldPrice == null ? null : money(offer.oldPrice),
  }
}

export default MARKET_OFFERS
