export const OFFER_TYPES = {
  animal: ['Espécie', 'Raça / variedade', 'Sexo', 'Idade', 'Identificação', 'Documentação'],
  aquatic: ['Espécie', 'Tamanho', 'Ambiente', 'Parâmetros', 'Compatibilidade'],
  coral: ['Grupo', 'Espécie', 'Tamanho', 'Iluminação', 'Fluxo', 'Parâmetros'],
  feed: ['Marca', 'Indicação', 'Peso', 'Composição', 'Fase da vida'],
  veterinary: ['Categoria', 'Apresentação', 'Indicação', 'Conteúdo', 'Fabricante'],
  equipment: ['Marca', 'Modelo', 'Voltagem', 'Potência', 'Capacidade', 'Dimensões'],
  habitat: ['Tipo', 'Material', 'Dimensões', 'Espécies indicadas', 'Capacidade'],
  'living-plant': ['Espécie', 'Tipo', 'Altura', 'Ambiente', 'Vaso', 'Cultivo'],
  service: ['Serviço', 'Modalidade', 'Área atendida', 'Agendamento'],
  publication: ['Formato', 'Páginas', 'Tema', 'Entrega'],
  generic: ['Marca', 'Modelo', 'Variação', 'Dimensões', 'Conteúdo'],
}

export function fieldsForOfferType(type) {
  return OFFER_TYPES[type] || OFFER_TYPES.generic
}

export function normalizeAttributes(attributes) {
  if (!attributes) return []
  if (Array.isArray(attributes)) return attributes
  return Object.entries(attributes)
}

export default OFFER_TYPES
