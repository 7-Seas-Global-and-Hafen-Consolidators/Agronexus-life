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

export const SOURCE_INGESTION_WAVE4 = [
  sourceRef({
    id:'1985534701', slug:'source-jj-pavao-arlequim-jovem', world:'aves', categories:['aves','pavoes','ornamentais'], type:'bird-reference',
    name:'Pavão Arlequim Jovem', image:'https://avesornamentaisjej.cdn.magazord.com.br/img/2025/01/produto/1677/01-pavao-arlequim-jovem.png?ims=290x290',
    sourceName:'Aves Ornamentais J&J', sourceUrl:'https://www.avesornamentaisjej.com.br/pavao-arlequim-jovem', sourcePrice:800,
    description:'Registro de referência de ave ornamental encontrado no catálogo-fonte fornecido para a operação AgroNexus™.',
    attributes:[['Categoria original','Animais · Pavões'],['Variação observada','Gênero']]
  }),
  sourceRef({
    id:'1985534702', slug:'source-jj-pavao-branco-jovem', world:'aves', categories:['aves','pavoes','ornamentais'], type:'bird-reference',
    name:'Pavão Branco Jovem', image:'https://avesornamentaisjej.cdn.magazord.com.br/img/2025/01/produto/1678/02-pavao-branco-jovem.png?ims=290x290',
    sourceName:'Aves Ornamentais J&J', sourceUrl:'https://www.avesornamentaisjej.com.br/pavao-branco-jovem', sourcePrice:750,
    description:'Registro de referência de ave ornamental preservado a partir do catálogo-fonte.',
    attributes:[['Categoria original','Animais · Pavões'],['Variação observada','Gênero']]
  }),
  sourceRef({
    id:'1985534703', slug:'source-jj-papagaio-do-congo', world:'aves', categories:['aves','psitacideos','papagaios'], type:'bird-reference',
    name:'Papagaio do Congo', image:'https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/561/98-papagaio-do-congo.png?ims=290x290',
    sourceName:'Aves Ornamentais J&J', sourceUrl:'https://www.avesornamentaisjej.com.br/papagaio-do-congo', sourcePrice:17000, sourceAvailability:'Indisponível na fonte · registro preservado',
    description:'Registro histórico de referência do catálogo-fonte. A indisponibilidade observada é preservada, sem substituição por disponibilidade inventada.',
    attributes:[['Categoria original','Psitacídeos · Papagaios']]
  }),
  sourceRef({
    id:'1985534704', slug:'source-jj-emu', world:'aves', categories:['aves','ratitas','exoticos'], type:'bird-reference',
    name:'Emu', image:'https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/439/74-emu-4.png?ims=290x290',
    sourceName:'Aves Ornamentais J&J', sourceUrl:'https://www.avesornamentaisjej.com.br/emu', sourcePrice:3000,
    description:'Registro de referência do grupo de aves ratitas no acervo-fonte.',
    attributes:[['Categoria original','Animais · Exóticos · Aves Ratitas']]
  }),
  sourceRef({
    id:'1985534705', slug:'source-coelhosmini-hamster-anao-russo', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters','roedores'], type:'small-mammal-reference',
    name:'Hamster Anão Russo', image:'https://d5gag3xtge2og.cloudfront.net/producao/35185901/M/hamster-anao-russo.webp',
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/categoria/1261926/HAMSTERs/',
    description:'Registro visual de referência recuperado da categoria de hamsters do acervo-fonte.',
    attributes:[['Grupo','Hamsters']]
  }),
  sourceRef({
    id:'1985534706', slug:'source-coelhosmini-gaiola-hamster-labirinto-2-andar', world:'equipamentos', categories:['pequenos-mamiferos','hamsters','gaiolas','habitats'], type:'habitat-accessory',
    name:'Gaiola Hamster Labirinto 2 Andar', image:'https://dw0jruhdg6fis.cloudfront.net/producao/23125671/M/gaiola-hamsterlabirinto-2-andar.webp',
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/categoria/1261926/HAMSTERs/',
    description:'Referência de habitat/acessório para pequenos mamíferos recuperada do catálogo-fonte.',
    attributes:[['Categoria','Gaiolas e habitats'],['Indicação','Hamsters']]
  }),
  sourceRef({
    id:'1985534707', slug:'source-coelhosmini-tubo-transparente-hamster', world:'equipamentos', categories:['pequenos-mamiferos','hamsters','gaiolas','acessorios'], type:'habitat-accessory',
    name:'Tubo Transparente para Gaiola de Hamster', image:'https://dw0jruhdg6fis.cloudfront.net/producao/23124865/M/tubo-avulso-transparente-para-gaiola-de-hamster-braganca.webp',
    images:['https://dw0jruhdg6fis.cloudfront.net/producao/23124867/M/tubo-avulso-transparente-para-gaiola-de-hamster-braganca.webp'],
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/tubo-avulso-transparente-para-gaiola-de-hamster-braganca/prod-7350194/',
    description:'Acessório modular para habitat de hamster preservado como referência de mercado.',
    attributes:[['Categoria','Acessórios de gaiola'],['Indicação','Hamsters']]
  }),
  sourceRef({
    id:'1985534708', slug:'source-coelhosmini-roda-hamster-com-suporte', world:'equipamentos', categories:['pequenos-mamiferos','hamsters','enriquecimento','acessorios'], type:'enrichment-accessory',
    name:'Roda para Hamster com Suporte', image:'https://dw0jruhdg6fis.cloudfront.net/producao/5637829/M/roda-hamster-com-suporte-.webp',
    sourceName:'Coelhos Mini Ribeirão Preto', sourceUrl:'https://www.coelhosminirp.com.br/categoria/1261926/HAMSTERs/',
    description:'Referência de enriquecimento ambiental para pequenos mamíferos.',
    attributes:[['Categoria','Enriquecimento ambiental'],['Indicação','Hamsters']]
  }),
  sourceRef({
    id:'1985534709', slug:'source-vasoeflor-rosa-enxertada-vermelho-vivo', world:'plantas', categories:['plantas','flores','ornamentais','rosas'], type:'living-plant-reference',
    name:'Muda de Rosa Enxertada Vermelho Vivo', image:'https://vasoeflor.cdn.magazord.com.br/img/2024/11/produto/2419/vermelho-vivo.png?ims=fit-in/425x425/filters:fill(white)',
    images:['https://vasoeflor.cdn.magazord.com.br/img/2024/11/produto/2418/vermelho-vivo-3.png?ims=fit-in/425x425/filters:fill(white)'],
    sourceName:'Vaso & Flor', sourceUrl:'https://www.vasoeflor.com.br/muda-de-rosa-enxertada-vermelho-vivo-vaso-flor', sourcePrice:37.80,
    description:'Muda ornamental de rosa enxertada, aproximadamente 40–60 cm segundo o catálogo-fonte.',
    attributes:[['Categoria original','Mudas · Ornamentais · Rosas Enxertadas'],['Tamanho observado','40 a 60 cm']]
  }),
  sourceRef({
    id:'1985534710', slug:'source-consulado-golden-mini-bits-15kg', world:'alimentacao', categories:['caes','alimentacao','racoes'], type:'feed-reference',
    name:'Ração Golden Formula Mini Bits Carne e Arroz 15 kg', image:'https://www.consuladoracao.com.br/product_picture.php?p=7897348205319',
    sourceName:'Consulado da Ração', sourceUrl:'https://www.consuladoracao.com.br/racao-golden-formula-mini-bits-sabor-carne-e-arroz-para-caes-adultos-de-racas-pequenas-15kg-160520', sourcePrice:152.98,
    description:'Registro de referência de alimentação para cães adultos de raças pequenas, preservando a condição promocional observada na fonte.',
    attributes:[['Marca','Golden'],['Peso','15 kg'],['Preço regular observado','R$ 175,29'],['Estoque observado na fonte','1481']]
  }),
  sourceRef({
    id:'1985534711', slug:'source-reptario-python-ball-comum', world:'repteis', categories:['repteis','serpentes','python-regius'], type:'reptile-reference',
    name:'Python Ball Comum (Python regius)', image:'https://acdn-us.mitiendanube.com/stores/004/777/787/products/img_4234-6eccec77cb79bad0f117858002567640-480-0.webp',
    sourceName:'Criatório Reptário', sourceUrl:'https://criatorioreptario.com.br/produtos/python-ball-comum-python-regius-n81a7/', sourcePrice:3950,
    description:'Registro de referência de Python regius preservado a partir do catálogo-fonte. Qualquer operação depende de documentação, procedência e conformidade aplicáveis.',
    attributes:[['Espécie','Python regius'],['Padrão observado','Comum'],['Sexo observado','Fêmea'],['Estoque observado na fonte','1']]
  }),
  sourceRef({
    id:'1985534712', slug:'source-reptario-python-ball-pastel', world:'repteis', categories:['repteis','serpentes','python-regius'], type:'reptile-reference',
    name:'Python Ball Pastel (Python regius)', image:'https://acdn-us.mitiendanube.com/stores/004/777/787/products/img_4229-5ab5b3512f2392539717858004226738-480-0.webp',
    sourceName:'Criatório Reptário', sourceUrl:'https://criatorioreptario.com.br/produtos/python-ball-pastel-python-regius-68w3w/', sourcePrice:5300,
    description:'Registro de referência de Python regius padrão Pastel. Procedência e conformidade permanecem requisitos para qualquer operação comercial.',
    attributes:[['Espécie','Python regius'],['Padrão observado','Pastel'],['Sexo observado','Fêmea'],['Estoque observado na fonte','1']]
  }),
]

export default SOURCE_INGESTION_WAVE4
