/**
 * AgroNexus™ — Commercial Infrastructure
 *
 * Centraliza:
 * - meios de pagamento
 * - entidades de processamento
 * - canais comerciais
 * - identificação de anúncios
 *
 * Babylon continua exclusivamente interno.
 */

export const AGRONEXUS_COMMERCE = {
  brand:
    'AgroNexus™',

  whatsapp:
    '+48 732 099 369',

  telegram:
    '+44 75 9471 6370',

  paymentMethods: [
    'Pix',
    'Boleto bancário',
    'Cartão de crédito',
  ],

  installmentLabel:
    'Opções de parcelamento disponíveis no checkout.',

  paymentLinks: {
    asaas: {
      label:
        'Pagar com Asaas',

      url:
        'https://www.asaas.com/c/u6toboa8xhqsmosv',

      provider:
        'Asaas',

      legalEntity:
        'Guiropa World',

      disclosure:
        'Processamento de pagamento por Guiropa World, empresa do ecossistema empresarial AgroNexus™.',
    },

    mercadoPago: {
      label:
        'Pagar com Mercado Pago',

      url:
        'https://link.mercadopago.com.br/agronexus',

      provider:
        'Mercado Pago',

      legalEntity:
        '7 Seas Global',

      disclosure:
        'Processamento de pagamento por 7 Seas Global, empresa do ecossistema empresarial AgroNexus™.',
    },
  },
}

/**
 * Controle interno de anúncios.
 *
 * Exemplo:
 * formatAdNumber(1985533504)
 * → Anúncio #1985533504
 */

export function formatAdNumber(
  value
) {
  const raw =
    String(
      value || ''
    ).replace(
      /\D/g,
      ''
    )

  if (!raw) {
    return (
      'Anúncio #0000000000'
    )
  }

  return (
    `Anúncio #${raw.padStart(
      10,
      '0'
    )}`
  )
}

export default AGRONEXUS_COMMERCE
