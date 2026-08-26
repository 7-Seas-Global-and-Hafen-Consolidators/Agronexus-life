const sourceRef = ({ id, slug, world, categories, type, name, image, images = [], sourceName, sourceUrl, sourcePrice = null, sourceAvailability = null, description = '', attributes = [] }) => ({
  id,
  slug,
  world,
  categories,
  type,
  name,
  image,
  images: [...new Set([image, ...images].filter(Boolean))],
  price: null,
  sourceName,
  sourceUrl,
  sourcePrice,
  sourceAvailability,
  description,
  attributes: [
    ...attributes,
    ['Fonte de referência', sourceName],
    ...(sourcePrice != null ? [['Preço observado na fonte', `R$ ${Number(sourcePrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`]] : []),
  ],
  highlights: ['Registro de referência', sourceName].filter(Boolean),
  stockLabel: sourceAvailability || 'Referência externa · confirme disponibilidade com a AgroNexus™',
  delivery: 'Condições, procedência, disponibilidade e logística devem ser confirmadas antes de qualquer operação comercial.',
  sourceRecord: true,
})

export const SOURCE_INGESTION_WAVE5 = [
  sourceRef({
    id:'1985534801', slug:'source-coelhosmini-gaiola-hamster-tubos-divertidos', world:'equipamentos', categories:['pequenos-mamiferos','hamsters','gaiolas','habitats'], type:'habitat-accessory',
    name:'Gaiola Hamster Tubos Divertidos', image:'https://d5gag3xtge2og.cloudfront.net/producao/33124649/M/gaiola-hamster-tubos-divertidos-.webp',
    images:['https://dw0jruhdg6fis.cloudfront.net/producao/31276149/M/gaiola-hamster-tubos-divertidos-.webp'],
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/gaiola-hamster-tubos-divertidos-/prod-5327853/', sourcePrice:178,
    description:'Referência de habitat modular para hamsters recuperada do catálogo-fonte.',
    attributes:[['Categoria','Gaiolas e habitats'],['Indicação','Hamsters']]
  }),
  sourceRef({
    id:'1985534802', slug:'source-coelhosmini-roda-hamster-suporte-2510227', world:'equipamentos', categories:['pequenos-mamiferos','hamsters','enriquecimento','acessorios'], type:'enrichment-accessory',
    name:'Roda Hamster com Suporte', image:'https://d5gag3xtge2og.cloudfront.net/producao/36272011/M/roda-hamster-com-suporte-.webp',
    images:['https://dw0jruhdg6fis.cloudfront.net/producao/5637829/M/roda-hamster-com-suporte-.webp'],
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/roda-hamster-com-suporte-/prod-2510227/', sourcePrice:20,
    description:'Referência de enriquecimento ambiental para hamsters recuperada do catálogo-fonte.',
    attributes:[['Categoria','Enriquecimento ambiental'],['Indicação','Hamsters']]
  }),
  sourceRef({
    id:'1985534803', slug:'source-vasoeflor-rosa-enxertada-bordo-mesclado', world:'plantas', categories:['plantas','flores','ornamentais','rosas'], type:'living-plant-reference',
    name:'Muda de Rosa Bordô Mesclado Enxertada', image:'https://vasoeflor.cdn.magazord.com.br/img/2024/06/produto/2227/capa-rosa-bordo-mesc.jpg?ims=fit-in/425x425/filters:fill(white)',
    images:['https://vasoeflor.cdn.magazord.com.br/img/2024/06/produto/2228/medida-rosa.jpg?ims=fit-in/425x425/filters:fill(white)'],
    sourceName:'Vaso & Flor', sourceUrl:'https://www.vasoeflor.com.br/muda-de-rosa-enxertada-bordo-mesclado-vaso-flor', sourcePrice:38.70,
    description:'Muda ornamental enxertada em tonalidade bordô mesclado, aproximadamente 40–60 cm segundo o catálogo-fonte.',
    attributes:[['Categoria original','Mudas · Ornamentais · Rosas Enxertadas'],['Tamanho observado','40 a 60 cm'],['Preço anterior observado','R$ 58,60']]
  }),
  sourceRef({
    id:'1985534804', slug:'source-consulado-premier-adultos-racas-medias-frango-20kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed-reference',
    name:'Ração Premier Pet Fórmula Cães Adultos Raças Médias Frango 20 kg', image:'https://www.consuladoracao.com.br/product_picture.php?p=7897348200833',
    sourceName:'Consulado da Ração', sourceUrl:'https://www.consuladoracao.com.br/racao-seca-premier-pet-formula-para-caes-adultos-de-racas-medias-sabor-frango-20-kg-103196', sourcePrice:221.22,
    description:'Registro de referência de alimentação para cães adultos de raças médias, preservando a condição promocional observada na fonte.',
    attributes:[['Marca','Premier Pet'],['Peso','20 kg'],['Preço regular observado','R$ 339,90'],['Estoque observado na fonte','507']]
  }),
  sourceRef({
    id:'1985534805', slug:'source-reef-palythoa-sonic-flare', world:'corais', categories:['corais','reef','palythoa','marinho'], type:'coral-reference',
    name:'Palythoa Sonic Flare (+2 Pólipos)', image:'https://dcdn-us.mitiendanube.com/stores/001/455/260/products/740caf11fe54aa720a9163b696f371d1-df06f480b96ba377b416693904921390-480-0.webp',
    images:['https://dcdn-us.mitiendanube.com/stores/001/455/260/products/740caf11fe54aa720a9163b696f371d1-df06f480b96ba377b416693904921390-1024-1024.webp'],
    sourceName:'Reef Aquários', sourceUrl:'https://www.reefaquarios.com.br/produtos/palythoa-sonic-flare-2-polipos/', sourcePrice:85, sourceAvailability:'Disponível na fonte no snapshot · estoque observado: 4',
    description:'Registro de referência do acervo reef, preservando fotografia, preço e estoque observados no snapshot fornecido.',
    attributes:[['Grupo','Palythoa'],['Quantidade indicada','+2 pólipos'],['Estoque observado na fonte','4']]
  }),
  sourceRef({
    id:'1985534806', slug:'source-reef-palythoa-purple-death', world:'corais', categories:['corais','reef','palythoa','marinho'], type:'coral-reference',
    name:'Palythoa Purple Death (+5 Pólipos)', image:'https://dcdn-us.mitiendanube.com/stores/001/455/260/products/b400f41b8532057749d34e0a34c2bdc4-f3c73f12c62e7bf32416693904827712-1024-1024.webp',
    sourceName:'Reef Aquários', sourceUrl:'https://www.reefaquarios.com.br/produtos/palythoa-purple-death-5-polipos/', sourcePrice:95, sourceAvailability:'Disponível na fonte no snapshot · estoque observado: 3',
    description:'Registro de referência do catálogo de corais, mantendo a fotografia e condição de estoque observadas.',
    attributes:[['Grupo','Palythoa'],['Quantidade indicada','+5 pólipos'],['Preço anterior observado','R$ 115,00'],['Estoque observado na fonte','3']]
  }),
  sourceRef({
    id:'1985534807', slug:'source-reef-cloves-lemon-muda', world:'corais', categories:['corais','reef','cloves','marinho'], type:'coral-reference',
    name:'Cloves Lemon (Muda)', image:'https://dcdn-us.mitiendanube.com/stores/001/455/260/products/db3eb08e931f21db4934c8a7ae39fcb2-2a74f5be9d4858f91616693892318137-480-0.webp',
    sourceName:'Reef Aquários', sourceUrl:'https://www.reefaquarios.com.br/produtos/cloves-lemon-muda/', sourcePrice:190, sourceAvailability:'Disponível na fonte no snapshot · estoque observado: 7',
    description:'Registro de referência de coral/muda recuperado da fonte Reef Aquários.',
    attributes:[['Grupo','Cloves'],['Estoque observado na fonte','7']]
  }),
]

export default SOURCE_INGESTION_WAVE5
