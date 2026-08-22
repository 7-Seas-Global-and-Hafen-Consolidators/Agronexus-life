// AgroNexus specialist catalog wave — plants / fruit trees / ornamentals
// Public-facing catalog data only. No supplier identity is exposed.

const slugify = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')

export const PLANT_WAVE = [
  ['1985534200','Muda de Cacau',47.90,'Frutífera','Theobroma cacao'],
  ['1985534201','Muda de Tucaneira',39.90,'Nativa','Citharexylum myrianthum'],
  ['1985534202','Muda de Grumixama',37.80,'Frutífera','Eugenia brasiliensis'],
  ['1985534203','Muda de Falso-Barbatimão',31.90,'Nativa','Cassia leptophylla'],
  ['1985534204','Muda de Amora Gigante',37.80,'Frutífera','Morus nigra'],
  ['1985534205','Muda Goiaba Paluma Vermelha',36.80,'Frutífera','Psidium guajava'],
  ['1985534206','Muda Trepadeira Jasmim dos Poetas',39.90,'Ornamental','Jasminum polyanthum'],
  ['1985534207','Muda de Brinco-de-índio',31.90,'Nativa / Ornamental','Cojoba arborea'],
  ['1985534208','Muda Goiaba Tailandesa',31.60,'Frutífera','Psidium guajava'],
  ['1985534209','Muda de Maracujá Ácido',38.70,'Frutífera','Passiflora edulis'],
  ['1985534210','Muda de Tangerina Ponkan Enxertada',39.20,'Frutífera enxertada','Citrus reticulata'],
  ['1985534211','Muda de Limão Caviar Enxertado',43.70,'Frutífera enxertada','Microcitrus australasica'],
  ['1985534212','Muda de Uva Vitória Enxertada sem Semente',39.80,'Frutífera enxertada','Vitis vinifera'],
  ['1985534213','Muda de Cereja Portuguesa Enxertada',49.80,'Frutífera enxertada','Prunus avium'],
  ['1985534214','Muda de Lichia Bengal Enxerto',46.80,'Frutífera enxertada','Litchi chinensis'],
  ['1985534215','Muda de Figo Roxo de Valinhos',33.80,'Frutífera','Ficus carica'],
  ['1985534216','Muda de Laranja Bahia Enxertada',38.50,'Frutífera enxertada','Citrus sinensis'],
  ['1985534217','Muda de Limão Tahiti Enxertado',39.70,'Frutífera enxertada','Citrus latifolia'],
  ['1985534218','Muda de Araçá Vermelho',34.60,'Frutífera','Psidium cattleianum'],
  ['1985534219','Muda de Uva Rainha Itália Enxertada',39.90,'Frutífera enxertada','Vitis vinifera'],
  ['1985534220','Muda de Uva Isis Enxertada sem Semente',42.80,'Frutífera enxertada','Vitis vinifera'],
  ['1985534221','Muda de Caqui Rama Forte Enxertado',43.70,'Frutífera enxertada','Diospyros kaki'],
  ['1985534222','Muda de Uva Niagara Rosada Enxertada',39.70,'Frutífera enxertada','Vitis labrusca'],
  ['1985534223','Muda de Manga Palmer Enxertada',51.90,'Frutífera enxertada','Mangifera indica'],
  ['1985534224','Muda de Mirtilo Climax',42.90,'Frutífera','Vaccinium spp.'],
  ['1985534225','Muda de Laranjinha Kinkan Enxertada',41.70,'Frutífera enxertada','Citrus japonica'],
  ['1985534226','Muda de Maracujá Doce',39.20,'Frutífera','Passiflora alata'],
  ['1985534227','Muda de Limão Siciliano Enxertado',42.60,'Frutífera enxertada','Citrus limon'],
  ['1985534228','Muda de Caqui Fuyu Enxertado',41.80,'Frutífera enxertada','Diospyros kaki'],
  ['1985534229','Muda de Jabuticaba Olho de Boi',59.60,'Frutífera','Plinia cauliflora'],
].map(([id,name,referencePrice,group,scientificName]) => ({
  id,
  slug: slugify(name),
  world: 'plantas',
  categories: ['plantas', group.toLowerCase().includes('ornamental') ? 'ornamentais' : 'frutiferas'],
  type: 'living-plant',
  name,
  referencePrice,
  description: `${name} — oferta individual AgroNexus para cultivo, jardim, pomar ou paisagismo.`,
  highlights: [group, scientificName, 'Oferta individual'],
  attributes: [['Grupo',group],['Nome científico',scientificName],['Universo','Plantas']],
  delivery: 'Entrega calculada conforme CEP e características da muda.',
}))

export default PLANT_WAVE
