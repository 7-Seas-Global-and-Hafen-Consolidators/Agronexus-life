import { formatAdNumber } from './commerceConfig'
import { FISH_NATURE_PRODUCTS } from './fishNature/products'
import { WAVE2_REFERENCE_OFFERS } from './marketCatalogWave2'
import { LOCAL_MEDIA_WAVE } from './marketCatalogLocalMediaWave'
import { SOURCE_INGESTION_WAVE4 } from './marketCatalogSourceIngestionWave4'
import { SOURCE_INGESTION_WAVE5 } from './marketCatalogSourceIngestionWave5'
import { REEF_WAVE } from './specialistCatalog/reefWave'
import { PLANT_WAVE } from './specialistCatalog/plantWave'

const money = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
const LOCAL = (path) => encodeURI(path)
const AGX_PRICE = (referencePrice) => Math.round(Number(referencePrice) * 0.8 * 100) / 100
const INSTALLMENTS = 12
const installmentText = (price) => price == null ? null : `até ${INSTALLMENTS}x de ${money(price / INSTALLMENTS)}`

const offer = ({ referencePrice = null, price = null, ...item }) => {
  const finalPrice = price ?? (referencePrice == null ? null : AGX_PRICE(referencePrice))
  return { ...item, price: finalPrice, oldPrice: item.oldPrice ?? referencePrice, installmentText: item.installmentText ?? installmentText(finalPrice), stockLabel: item.stockLabel || 'Disponível na AgroNexus' }
}

const BASE_OFFERS = [
  offer({ id:'1985533504', slug:'bonsai-roma-frutifera-20cm', world:'plantas', categories:['plantas','bonsais','frutiferas'], type:'living-plant', name:'Bonsai de Romã Frutífera 20 cm', referencePrice:148.99, image:'https://http2.mlstatic.com/D_Q_NP_609372-MLB111826137263_052026-F-bonsai-de-roma-frutifera-20-cm--planta-natural.webp', images:['https://http2.mlstatic.com/D_Q_NP_609372-MLB111826137263_052026-F-bonsai-de-roma-frutifera-20-cm--planta-natural.webp'], description:'Bonsai de romã frutífera em vaso, com aproximadamente 20 cm de altura.', highlights:['Planta natural','Altura aproximada: 20 cm','Acompanha vaso'], attributes:[['Espécie','Romã'],['Tipo','Bonsai'],['Altura','20 cm'],['Ambiente','Interior / área iluminada'],['Quantidade','1 planta']], delivery:'Entrega calculada conforme CEP e características do item.' }),
  offer({ id:'1985533505', slug:'nutropica-agapornis-frutas', world:'alimentacao', categories:['aves','alimentacao','racoes'], type:'feed', name:'Ração Nutrópica para Agapornis com Frutas', price:46.89, oldPrice:47.00, image:LOCAL('/images/aves/categories/products/nutropica/Ração Nutrópica para Agapornis com Frutas.png'), images:[LOCAL('/images/aves/categories/products/nutropica/Ração Nutrópica para Agapornis com Frutas.png')], description:'Alimento especializado para Agapornis.', highlights:['Agapornis','Com frutas','Produto físico'], attributes:[['Categoria','Alimentação'],['Indicação','Agapornis'],['Formato','Ração especializada']], delivery:'Entrega calculada no atendimento/checkout.' }),
  offer({ id:'1985533506', slug:'nutropica-periquitos-300g', world:'alimentacao', categories:['aves','alimentacao','racoes'], type:'feed', name:'Ração Extrusada Nutrópica para Periquitos 300 g', price:38.89, oldPrice:39.00, image:LOCAL('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Periquitos 300 g.png'), images:[LOCAL('/images/aves/categories/products/nutropica/Ração Extrusada Nutrópica para Periquitos 300 g.png')], description:'Ração extrusada para periquitos em embalagem de 300 g.', highlights:['Periquitos','Extrusada','300 g'], attributes:[['Categoria','Alimentação'],['Indicação','Periquitos'],['Peso','300 g']], delivery:'Entrega calculada no atendimento/checkout.' }),
  offer({ id:'1985533510', slug:'golden-mega-filhotes-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed', name:'Ração Golden Mega Cães Filhotes Porte Grande 15 kg', referencePrice:189.90, description:'Alimento seco para cães filhotes de porte grande e gigante.', highlights:['15 kg','Filhotes','Porte grande e gigante'], attributes:[['Marca','Golden'],['Peso','15 kg'],['Indicação','Cães filhotes'],['Sabor','Frango e arroz']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533511', slug:'golden-formula-adultos-peru-arroz-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed', name:'Ração Golden Fórmula Cães Adultos Peru e Arroz 15 kg', referencePrice:189.90, description:'Alimento seco para cães adultos.', highlights:['15 kg','Adultos','Premium especial'], attributes:[['Marca','Golden'],['Peso','15 kg'],['Indicação','Cães adultos'],['Sabor','Peru e arroz']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533512', slug:'golden-special-adultos-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed', name:'Ração Golden Special Cães Adultos Frango e Carne 15 kg', referencePrice:149.99, description:'Alimento seco para cães adultos, sabor frango e carne.', highlights:['15 kg','Adultos','Frango e carne'], attributes:[['Marca','Golden'],['Peso','15 kg'],['Indicação','Cães adultos']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533513', slug:'premier-caes-adultos-racas-grandes-carne-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed', name:'Ração Premier Fórmula Cães Adultos Raças Grandes Carne 15 kg', referencePrice:259.99, description:'Alimento para cães adultos de raças grandes e gigantes.', highlights:['15 kg','Raças grandes','Adultos'], attributes:[['Marca','Premier Fórmula'],['Peso','15 kg'],['Indicação','Cães adultos'],['Sabor','Carne e batata-doce']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533514', slug:'premier-caes-adultos-racas-grandes-cordeiro-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed', name:'Ração Premier Fórmula Cães Adultos Raças Grandes Cordeiro 15 kg', referencePrice:272.90, description:'Alimento para cães adultos de porte grande e gigante.', highlights:['15 kg','Cordeiro','Porte grande'], attributes:[['Marca','Premier Fórmula'],['Peso','15 kg'],['Indicação','Cães adultos'],['Sabor','Cordeiro']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533515', slug:'premier-gatos-adultos-performance-75kg', world:'alimentacao', categories:['gatos','alimentacao','racoes'], type:'feed', name:'Ração Premier Performance e Vitalidade Gatos Adultos 7,5 kg', referencePrice:199.99, description:'Alimento seco para gatos adultos.', highlights:['7,5 kg','Gatos adultos','Frango'], attributes:[['Marca','Premier'],['Peso','7,5 kg'],['Indicação','Gatos adultos'],['Sabor','Frango']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533516', slug:'premier-gatos-castrados-salmao-500g', world:'alimentacao', categories:['gatos','alimentacao','racoes'], type:'feed', name:'Ração Premier Gatos Castrados Salmão 500 g', referencePrice:33.50, description:'Alimento para gatos castrados de 6 meses a 6 anos.', highlights:['500 g','Castrados','Salmão'], attributes:[['Marca','Premier'],['Peso','500 g'],['Indicação','Gatos castrados'],['Sabor','Salmão']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533520', slug:'areia-meau-biodegradavel-4kg', world:'equipamentos', categories:['gatos','higiene','areia'], type:'hygiene', name:'Areia Higiênica Meau Biodegradável Grãos Finos 4 kg', referencePrice:69.90, description:'Areia higiênica biodegradável de grãos finos para gatos.', highlights:['4 kg','Biodegradável','Gatos'], attributes:[['Marca','Meau'],['Peso','4 kg'],['Categoria','Higiene para gatos']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533521', slug:'tapete-higienico-meau-30un', world:'equipamentos', categories:['caes','higiene','tapetes'], type:'hygiene', name:'Tapete Higiênico Meau para Cães 30 unidades', referencePrice:104.90, description:'Tapete higiênico para cães em pacote com 30 unidades.', highlights:['30 unidades','Cães','Higiene'], attributes:[['Marca','Meau'],['Quantidade','30 unidades'],['Categoria','Higiene para cães']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533522', slug:'arranhador-meau-ondulado-papelao', world:'equipamentos', categories:['gatos','brinquedos','arranhadores'], type:'accessory', name:'Arranhador Meau Ondulado de Papelão para Gatos', referencePrice:39.90, description:'Arranhador de papelão para enriquecimento ambiental de gatos.', highlights:['Gatos','Papelão','Enriquecimento'], attributes:[['Marca','Meau'],['Categoria','Arranhador'],['Tamanho','Único']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533523', slug:'caixa-areia-meau-inox-soleira-g', world:'equipamentos', categories:['gatos','higiene','caixas-de-areia'], type:'habitat-accessory', name:'Caixa de Areia Meau Inox com Soleira Tam. G', referencePrice:249.90, description:'Caixa sanitária em inox com soleira para gatos.', highlights:['Inox','Tamanho G','Gatos'], attributes:[['Marca','Meau'],['Material','Inox'],['Tamanho','G']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533524', slug:'brinquedo-pet-games-flying-cat', world:'equipamentos', categories:['gatos','brinquedos'], type:'toy', name:'Brinquedo Pet Games Flying Cat', referencePrice:74.90, description:'Brinquedo interativo para gatos.', highlights:['Gatos','Interativo','Tamanho único'], attributes:[['Marca','Pet Games'],['Categoria','Brinquedo'],['Tamanho','Único']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533525', slug:'mordedor-pet-games-4dogs-nylon-p', world:'equipamentos', categories:['caes','brinquedos','mordedores'], type:'toy', name:'Mordedor Pet Games 4 Dogs Nylon Tam. P', referencePrice:59.90, description:'Mordedor de nylon para cães.', highlights:['Cães','Nylon','Tamanho P'], attributes:[['Marca','Pet Games'],['Categoria','Mordedor'],['Tamanho','P']], delivery:'Entrega calculada conforme CEP.' }),
  offer({ id:'1985533526', slug:'bandeja-pet-games-caixona-areia', world:'equipamentos', categories:['gatos','higiene','caixas-de-areia'], type:'habitat-accessory', name:'Bandeja Higiênica Pet Games Caixona de Areia', referencePrice:164.90, description:'Bandeja higiênica ampla para gatos.', highlights:['Gatos','Bandeja higiênica','Tamanho único'], attributes:[['Marca','Pet Games'],['Categoria','Caixa de areia'],['Tamanho','Único']], delivery:'Entrega calculada conforme CEP.' })
]

const WAVE2_OFFERS = WAVE2_REFERENCE_OFFERS.map(offer)
const LOCAL_MEDIA_OFFERS = LOCAL_MEDIA_WAVE.map(offer)
const SOURCE_WAVE4_OFFERS = SOURCE_INGESTION_WAVE4.map(offer)
const SOURCE_WAVE5_OFFERS = SOURCE_INGESTION_WAVE5.map(offer)
const SPECIALIST_REEF_OFFERS = REEF_WAVE.map(offer)
const SPECIALIST_PLANT_OFFERS = PLANT_WAVE.map(offer)

const AQUATIC_OFFERS = FISH_NATURE_PRODUCTS
  .filter((item) => item?.name)
  .slice(0, 240)
  .map((item, index) => {
    const referencePrice = Number.isFinite(Number(item.price)) ? Number(item.price) : null
    return offer({
      id: String(1985533600 + index), slug: item.slug || item.id || `aquatic-${index + 1}`, world: item.world || 'aquarismo',
      categories: [item.world || 'aquarismo', item.category || 'catalogo', ...(item.categories || [])].filter(Boolean), type: item.type || 'aquatic', name: item.name,
      referencePrice, image: item.primaryImage || item.images?.find(Boolean) || '', images: item.images?.filter(Boolean) || [item.primaryImage].filter(Boolean),
      description: item.description || 'Registro do universo aquático AgroNexus™.', highlights: [item.category,item.species,item.size].filter(Boolean),
      attributes: Object.entries(item.attributes || {}).slice(0,12), delivery:'Condições de entrega conforme natureza, tamanho e destino do item.',
      stockLabel: item.stockLabel || item.availabilityLabel || (item.availability === 'out-of-stock' ? 'Indisponível na fonte · registro preservado' : 'Consulte disponibilidade na AgroNexus™')
    })
  })

export const MARKET_OFFERS = [...SOURCE_WAVE5_OFFERS, ...SOURCE_WAVE4_OFFERS, ...LOCAL_MEDIA_OFFERS, ...SPECIALIST_REEF_OFFERS, ...SPECIALIST_PLANT_OFFERS, ...AQUATIC_OFFERS, ...WAVE2_OFFERS, ...BASE_OFFERS]

export function getMarketOffer(value) { const key = String(value || '').trim(); return MARKET_OFFERS.find((item) => item.id === key || item.slug === key) || null }
export function getRelatedOffers(offerItem, limit = 6) { if (!offerItem) return []; return MARKET_OFFERS.filter((item) => item.id !== offerItem.id).filter((item) => item.world === offerItem.world || item.categories?.some((category) => offerItem.categories?.includes(category))).slice(0, limit) }
export function getOffersByWorld(world) { return MARKET_OFFERS.filter((item) => item.world === world || item.categories?.includes(world)) }
export function getOffersByCategory(category) { const key = String(category || '').trim(); return key ? MARKET_OFFERS.filter((item) => item.world === key || item.categories?.includes(key) || item.type === key) : [] }
export function publicOffer(offerItem) { if (!offerItem) return null; return { ...offerItem, adNumber: formatAdNumber(offerItem.id), formattedPrice: offerItem.price == null ? null : money(offerItem.price), formattedOldPrice: offerItem.oldPrice == null ? null : money(offerItem.oldPrice) } }
export default MARKET_OFFERS