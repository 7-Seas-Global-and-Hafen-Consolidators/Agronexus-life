const LOCAL = (path) => encodeURI(path)

const species = ({ id, slug, name, file, categories = [], description }) => ({
  id,
  slug,
  world: 'aves',
  categories: ['aves', 'psitacideos', ...categories],
  type: 'species-reference',
  name,
  image: LOCAL(`/images/aves/categories/products/psitacideos/${file}`),
  images: [LOCAL(`/images/aves/categories/products/psitacideos/${file}`)],
  description: description || `Registro visual AgroNexus™ de ${name}.`,
  highlights: ['Acervo visual local', 'AgroNexus™', 'Referência de espécie'],
  attributes: [['Coleção', 'Psitacídeos'], ['Tipo', 'Referência visual']],
  stockLabel: 'Referência de biodiversidade · consulte informações',
  delivery: 'Registro informativo. Disponibilidade comercial, quando aplicável, é tratada separadamente.'
})

export const SPECIES_MEDIA_WAVE = [
  species({id:'1985534201',slug:'agapornis-fischeri',name:'Agapornis fischeri',file:'agaporni-ficheri.png',categories:['agapornis']}),
  species({id:'1985534202',slug:'agapornis-personata',name:'Agapornis personata',file:'agaporni-personata.png',categories:['agapornis']}),
  species({id:'1985534203',slug:'agapornis-roseicollis',name:'Agapornis roseicollis',file:'agaporni-roseicollis.png',categories:['agapornis']}),
  species({id:'1985534204',slug:'arara-azul',name:'Arara-azul',file:'arara-azul.png',categories:['araras']}),
  species({id:'1985534205',slug:'arara-macau',name:'Arara-macau',file:'arara-macau.png',categories:['araras']}),
  species({id:'1985534206',slug:'arara-vermelha',name:'Arara-vermelha',file:'arara-vermelha.png',categories:['araras']}),
  species({id:'1985534207',slug:'ararajuba',name:'Ararajuba',file:'ararajuba.png',categories:['araras']}),
  species({id:'1985534208',slug:'bourke-rosa',name:'Periquito-de-Bourke rosa',file:'bourke-rosa.png',categories:['periquitos','cauda-longa']}),
  species({id:'1985534209',slug:'cacatua-alba',name:'Cacatua alba',file:'cacatua-alba.png',categories:['cacatuas']}),
  species({id:'1985534210',slug:'cacatua-galah',name:'Cacatua Galah',file:'cacatua-galah.png',categories:['cacatuas']}),
  species({id:'1985534211',slug:'cacatua-galerita',name:'Cacatua galerita',file:'cacatua-galerita.png',categories:['cacatuas']}),
  species({id:'1985534212',slug:'calopsita-ancestral',name:'Calopsita ancestral',file:'calopsita-ancestral.png',categories:['calopsitas']}),
  species({id:'1985534213',slug:'calopsita-cara-branca',name:'Calopsita cara-branca',file:'calopsita-cara-branca.png',categories:['calopsitas']}),
  species({id:'1985534214',slug:'calopsita-lutina',name:'Calopsita lutina',file:'calopsita-lutina.png',categories:['calopsitas']}),
  species({id:'1985534215',slug:'caturrita',name:'Caturrita',file:'caturrita.png',categories:['periquitos']}),
  species({id:'1985534216',slug:'kakariki-lutino',name:'Kakariki lutino',file:'kakariki-lutino.png',categories:['kakarikis']}),
  species({id:'1985534217',slug:'loris-arco-iris',name:'Lóris arco-íris',file:'lóris-arco-Íris.png',categories:['loris']}),
  species({id:'1985534218',slug:'loris-bailarino',name:'Lóris bailarino',file:'lóris-bailarino.png',categories:['loris']}),
  species({id:'1985534219',slug:'loris-molucano',name:'Lóris molucano',file:'lóris-molucanos.png',categories:['loris']}),
  species({id:'1985534220',slug:'papagaio-do-congo',name:'Papagaio-do-Congo',file:'papagaio-do-congo.png',categories:['papagaios','africanos']}),
  species({id:'1985534221',slug:'papagaio-eclectus',name:'Eclectus',file:'papagaio-ecletus.png',categories:['papagaios','eclectus']}),
  species({id:'1985534222',slug:'grande-alexandre',name:'Grande Alexandre',file:'papagaio-grande-alexandre.png',categories:['periquitos','asiaticos']}),
  species({id:'1985534223',slug:'periquito-cabeca-ameixa',name:'Periquito cabeça-de-ameixa',file:'periquito-cabeça-de-ameixa.png',categories:['periquitos','asiaticos']}),
  species({id:'1985534224',slug:'periquito-mustache',name:'Periquito Mustache',file:'periquito-mustache.png',categories:['periquitos','asiaticos']}),
  species({id:'1985534225',slug:'red-rumped',name:'Red-rumped',file:'red-rumped.png',categories:['periquitos','cauda-longa']}),
  species({id:'1985534226',slug:'ringneck-albino',name:'Ringneck albino',file:'ringneck-albino.png',categories:['ringneck']}),
  species({id:'1985534227',slug:'ringneck-azul-turquesa',name:'Ringneck azul-turquesa',file:'ringneck-azul-turquesa.png',categories:['ringneck']}),
  species({id:'1985534228',slug:'ringneck-azul',name:'Ringneck azul',file:'ringneck-azul.png',categories:['ringneck']}),
  species({id:'1985534229',slug:'ringneck-cobalto',name:'Ringneck cobalto',file:'ringneck-cobalto.png',categories:['ringneck']}),
  species({id:'1985534230',slug:'ringneck-cremino',name:'Ringneck cremino',file:'ringneck-cremino.png',categories:['ringneck']}),
  species({id:'1985534231',slug:'ringneck-sky-blue',name:'Ringneck sky blue',file:'ringneck-sky-blue.png',categories:['ringneck']}),
  species({id:'1985534232',slug:'ringneck-verde',name:'Ringneck verde',file:'ringneck-verde.png',categories:['ringneck']}),
  species({id:'1985534233',slug:'ringneck-violeta',name:'Ringneck violeta',file:'ringneck-violeta.png',categories:['ringneck']}),
  species({id:'1985534234',slug:'rosela-adscitus',name:'Rosela adscitus',file:'rosela-adscitus.png',categories:['roselas']}),
  species({id:'1985534235',slug:'rosela-ancestral',name:'Rosela ancestral',file:'rosela-ancestral.png',categories:['roselas']}),
  species({id:'1985534236',slug:'rosela-penant',name:'Rosela Penant',file:'rosela-penant.png',categories:['roselas']}),
  species({id:'1985534237',slug:'rosela-rubina',name:'Rosela rubina',file:'rosela-rubina.png',categories:['roselas']})
]

export default SPECIES_MEDIA_WAVE