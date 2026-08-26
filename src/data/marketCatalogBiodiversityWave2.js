const local = (path) => encodeURI(path)

const item = ({ id, slug, world, categories, name, image, label = 'Referência visual' }) => ({
  id,
  slug,
  world,
  categories,
  name,
  image: local(image),
  label,
})

export const BIODIVERSITY_MEDIA_WAVE2 = [
  item({ id:'bio2-aqua-01', slug:'acaras-bandeira', world:'aquarismo', categories:['aquarismo','peixes','acaras'], name:'Acarás-bandeira', image:'/images/marketplace/aqua/agronexus-acaras-bandeira-marketplace.png' }),
  item({ id:'bio2-aqua-02', slug:'discus', world:'aquarismo', categories:['aquarismo','peixes','discus'], name:'Discus', image:'/images/marketplace/aqua/agronexus-discus-marketplace.png' }),
  item({ id:'bio2-aqua-03', slug:'oscar', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Oscar · grandes ciclídeos sul-americanos', image:'/images/marketplace/aqua/agronexus-oscar-grandes-ciclideos-sul-americanos-marketplace.png' }),
  item({ id:'bio2-aqua-04', slug:'ciclideos-africanos', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Ciclídeos africanos', image:'/images/marketplace/aqua/agronexus-ciclideos-africanos-guia-completo-marketplace.png' }),
  item({ id:'bio2-aqua-05', slug:'ciclideos-grandes-lagos', world:'aquarismo', categories:['aquarismo','peixes','ciclideos'], name:'Ciclídeos dos três grandes lagos', image:'/images/marketplace/aqua/agronexus-ciclideos-africanos-tres-grandes-lagos-marketplace.png' }),

  item({ id:'bio2-ham-01', slug:'hamster-campbell', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Campbell', image:'/images/marketplace/hamsters/agronexus-hamster-campbell-guia-completo-marketplace.png' }),
  item({ id:'bio2-ham-02', slug:'hamster-chines', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Chinês', image:'/images/marketplace/hamsters/agronexus-hamster-chines-guia-completo-marketplace.png' }),
  item({ id:'bio2-ham-03', slug:'hamster-roborovski', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Roborovski', image:'/images/marketplace/hamsters/agronexus-hamster-roborovski-guia-completo-marketplace.png' }),
  item({ id:'bio2-ham-04', slug:'hamster-sirio', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Sírio', image:'/images/marketplace/hamsters/agronexus-hamster-sirio-guia-completo-marketplace-v2.png' }),
  item({ id:'bio2-ham-05', slug:'hamster-winter-white', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamster Winter White', image:'/images/marketplace/hamsters/agronexus-hamster-winter-white-guia-completo-marketplace-v2.png' }),
  item({ id:'bio2-ham-06', slug:'hamsters-panorama', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','hamsters'], name:'Hamsters · panorama AgroNexus™', image:'/images/marketplace/hamsters/agronexus-hamsters-marketplace.png' }),
  item({ id:'bio2-rabbit-01', slug:'coelhos', world:'pequenos-mamiferos', categories:['pequenos-mamiferos','coelhos'], name:'Coelhos', image:'/images/marketplace/mamiferos/agronexus-coelhos-marketplace.png' }),

  item({ id:'bio2-reptile-01', slug:'repteis-editorial', world:'repteis', categories:['repteis'], name:'Répteis · arquivo editorial AgroNexus™', image:'/src/assets/images/editorial/agronexus-reptiles-editorial-guide-1.jpg' }),
]

export function getBiodiversityMediaWave2(world, category = null) {
  return BIODIVERSITY_MEDIA_WAVE2.filter((entry) => {
    if (entry.world !== world) return false
    if (!category) return true
    return entry.categories?.includes(category)
  })
}

export default BIODIVERSITY_MEDIA_WAVE2