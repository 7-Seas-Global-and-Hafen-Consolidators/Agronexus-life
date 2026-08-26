import reptileEditorial from '../assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg'
import hamsterEditorial1 from '../assets/images/editorial/agronexus-hamsters-editorial-guide-1.jpg'
import hamsterEditorial2 from '../assets/images/editorial/agronexus-hamsters-editorial-guide-2.jpg'
import hamsterEditorial3 from '../assets/images/editorial/agronexus-hamsters-editorial-guide-3.jpg'
import hamsterEditorial4 from '../assets/images/editorial/agronexus-hamsters-editorial-guide-4.jpg'

const local = (path) => encodeURI(path)

const item = ({ id, slug, world, categories, name, image, label = 'Referência visual' }) => ({
  id,
  slug,
  world,
  categories,
  name,
  image,
  label,
})

export const BIODIVERSITY_MEDIA_WAVE2 = [
  item({ id:'bio2-aqua-01', slug:'acaras-bandeira', world:'aquarismo', categories:['aquarismo','peixes','acaras'], name:'Acarás-bandeira', image:local('/images/marketplace/aqua/agronexus-acaras-bandeira-marketplace.png') }),
  item({ id:'bio2-aqua-02', slug:'discus', world:'aquarismo', categories:['aquarismo','peixes','discus'], name:'Discus', image:local('/images/marketplace/aqua/agronexus-discus-marketplace.png') }),
  item({ id:'bio2-aqua-03', slug:'oscar', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Oscar · grandes ciclídeos sul-americanos', image:local('/images/marketplace/aqua/agronexus-oscar-grandes-ciclideos-sul-americanos-marketplace.png') }),
  item({ id:'bio2-aqua-04', slug:'ciclideos-africanos', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Ciclídeos africanos', image:local('/images/marketplace/aqua/agronexus-ciclideos-africanos-guia-completo-marketplace.png') }),
  item({ id:'bio2-aqua-05', slug:'ciclideos-grandes-lagos', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Ciclídeos dos três grandes lagos', image:local('/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png') }),
  item({ id:'bio2-aqua-06', slug:'club-beneficios-aquarismo', world:'aquarismo', categories:['aquarismo','comunidade'], name:'Aquarismo · clube e benefícios AgroNexus™', image:local('/images/marketplace/aqua/agronexus-club-beneficios-marketplace.png'), label:'Ecossistema AgroNexus™' }),

  item({ id:'bio2-ham-01', slug:'hamster-campbell', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Campbell', image:local('/images/marketplace/hamsters/agronexus-hamster-campbell-guia-completo-marketplace.png') }),
  item({ id:'bio2-ham-02', slug:'hamster-chines', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Chinês', image:local('/images/marketplace/hamsters/agronexus-hamster-chines-guia-completo-marketplace.png') }),
  item({ id:'bio2-ham-03', slug:'hamster-roborovski', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Roborovski', image:local('/images/marketplace/hamsters/agronexus-hamster-roborovski-guia-completo-marketplace.png') }),
  item({ id:'bio2-ham-04', slug:'hamster-sirio', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Sírio', image:local('/images/marketplace/hamsters/agronexus-hamster-sirio-guia-completo-marketplace-v2.png') }),
  item({ id:'bio2-ham-05', slug:'hamster-winter-white', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Winter White', image:local('/images/marketplace/hamsters/agronexus-hamster-winter-white-guia-completo-marketplace-v2.png') }),
  item({ id:'bio2-ham-06', slug:'hamsters-panorama', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · panorama AgroNexus™', image:local('/images/marketplace/hamsters/agronexus-hamsters-marketplace.png') }),
  item({ id:'bio2-ham-07', slug:'hamsters-editorial-1', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · arquivo editorial I', image:hamsterEditorial1, label:'Arquivo editorial' }),
  item({ id:'bio2-ham-08', slug:'hamsters-editorial-2', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · arquivo editorial II', image:hamsterEditorial2, label:'Arquivo editorial' }),
  item({ id:'bio2-ham-09', slug:'hamsters-editorial-3', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · arquivo editorial III', image:hamsterEditorial3, label:'Arquivo editorial' }),
  item({ id:'bio2-ham-10', slug:'hamsters-editorial-4', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · arquivo editorial IV', image:hamsterEditorial4, label:'Arquivo editorial' }),
  item({ id:'bio2-rabbit-01', slug:'coelhos', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','coelhos'], name:'Coelhos', image:local('/images/marketplace/mamiferos/agronexus-coelhos-marketplace.png') }),

  item({ id:'bio2-birds-01', slug:'agapornis-panorama', world:'aves', categories:['aves','psitacideos','agapornis'], name:'Agapornis', image:local('/images/marketplace/psitacideos/agronexus-agapornis-marketplace.png') }),
  item({ id:'bio2-birds-02', slug:'araras-panorama', world:'aves', categories:['aves','psitacideos','araras'], name:'Araras', image:local('/images/marketplace/psitacideos/agronexus-araras-marketplace.png') }),
  item({ id:'bio2-birds-03', slug:'cacatuas-panorama', world:'aves', categories:['aves','psitacideos','cacatuas'], name:'Cacatuas', image:local('/images/marketplace/psitacideos/agronexus-cacatuas-marketplace.png') }),
  item({ id:'bio2-birds-04', slug:'caiques-panorama', world:'aves', categories:['aves','psitacideos','caiques'], name:'Caiques', image:local('/images/marketplace/psitacideos/agronexus-caiques-marketplace.png') }),
  item({ id:'bio2-birds-05', slug:'calopsitas-panorama', world:'aves', categories:['aves','psitacideos','calopsitas'], name:'Calopsitas', image:local('/images/marketplace/psitacideos/agronexus-calopsitas-marketplace-definitive.png') }),
  item({ id:'bio2-birds-06', slug:'conures-jandaias-tiribas-maritacas', world:'aves', categories:['aves','psitacideos','conures'], name:'Conures · Jandaias · Tiribas · Maritacas', image:local('/images/marketplace/psitacideos/agronexus-conures-jandaias-tiribas-maritacas-marketplace.png') }),
  item({ id:'bio2-birds-07', slug:'eclectus-panorama', world:'aves', categories:['aves','psitacideos','eclectus'], name:'Eclectus', image:local('/images/marketplace/psitacideos/agronexus-eclectus-marketplace.png') }),
  item({ id:'bio2-birds-08', slug:'forpus-panorama', world:'aves', categories:['aves','psitacideos','forpus'], name:'Forpus', image:local('/images/marketplace/psitacideos/agronexus-forpus-marketplace.png') }),
  item({ id:'bio2-birds-09', slug:'kakarikis-panorama', world:'aves', categories:['aves','psitacideos','kakarikis'], name:'Kakarikis', image:local('/images/marketplace/psitacideos/agronexus-kakarikis-marketplace.png') }),
  item({ id:'bio2-birds-10', slug:'loris-loriquitos-panorama', world:'aves', categories:['aves','psitacideos','loris'], name:'Lóris e loriquitos', image:local('/images/marketplace/psitacideos/agronexus-loris-e-loriquitos-marketplace.png') }),
  item({ id:'bio2-birds-11', slug:'papagaios-africanos-panorama', world:'aves', categories:['aves','psitacideos','papagaios'], name:'Papagaios africanos', image:local('/images/marketplace/psitacideos/agronexus-papagaios-africanos-marketplace.png') }),
  item({ id:'bio2-birds-12', slug:'papagaios-amazonicos-panorama', world:'aves', categories:['aves','psitacideos','papagaios'], name:'Papagaios amazônicos', image:local('/images/marketplace/psitacideos/agronexus-papagaios-amazonicos-marketplace.png') }),
  item({ id:'bio2-birds-13', slug:'papagaios-vasa-panorama', world:'aves', categories:['aves','psitacideos','papagaios'], name:'Papagaios Vasa', image:local('/images/marketplace/psitacideos/agronexus-papagaios-vasa-marketplace.png') }),
  item({ id:'bio2-birds-14', slug:'periquitos-asiaticos-panorama', world:'aves', categories:['aves','psitacideos','periquitos'], name:'Periquitos asiáticos', image:local('/images/marketplace/psitacideos/agronexus-periquitos-asiaticos-marketplace.png') }),
  item({ id:'bio2-birds-15', slug:'periquitos-australianos-cauda-longa', world:'aves', categories:['aves','psitacideos','periquitos'], name:'Periquitos australianos de cauda longa', image:local('/images/marketplace/psitacideos/agronexus-periquitos-australianos-cauda-longa-marketplace.png') }),
  item({ id:'bio2-birds-16', slug:'periquitos-australianos-panorama', world:'aves', categories:['aves','psitacideos','periquitos'], name:'Periquitos australianos', image:local('/images/marketplace/psitacideos/agronexus-periquitos-australianos-marketplace.png') }),
  item({ id:'bio2-birds-17', slug:'pionus-panorama', world:'aves', categories:['aves','psitacideos','pionus'], name:'Pionus', image:local('/images/marketplace/psitacideos/agronexus-pionus-marketplace.png') }),
  item({ id:'bio2-birds-18', slug:'ring-necks-panorama', world:'aves', categories:['aves','psitacideos','ringneck'], name:'Ring Necks', image:local('/images/marketplace/psitacideos/agronexus-ring-necks-marketplace.png') }),
  item({ id:'bio2-birds-19', slug:'roselas-panorama', world:'aves', categories:['aves','psitacideos','roselas'], name:'Roselas', image:local('/images/marketplace/psitacideos/agronexus-roselas-marketplace.png') }),

  item({ id:'bio2-reptile-01', slug:'repteis-editorial', world:'repteis', categories:['repteis'], name:'Répteis · arquivo editorial AgroNexus™', image:reptileEditorial }),
]

export function getBiodiversityMediaWave2(world, category = null) {
  return BIODIVERSITY_MEDIA_WAVE2.filter((entry) => {
    if (entry.world !== world) return false
    if (!category) return true
    return entry.categories?.includes(category)
  })
}

export default BIODIVERSITY_MEDIA_WAVE2