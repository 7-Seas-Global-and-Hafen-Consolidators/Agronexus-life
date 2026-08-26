export const SPECIES_PRICING = {
  'agapornis-fischeri': {
    benchmarkPrice: 148.00,
    benchmarkLabel: 'Pesquisa pública de mercado · Brasil',
    price: 133.20,
    installments: 5,
    researchedAt: '2026-08-26',
  },
}

export function getSpeciesPricing(slug){
  return SPECIES_PRICING[slug] || null
}
