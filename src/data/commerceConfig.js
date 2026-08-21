/**
 * AgroNexus™ — Commercial Infrastructure
 *
 * Centraliza:
 * - meios de pagamento
 * - entidades de processamento
 * - canais comerciais
 * - bandeiras aceitas
 * - identificação de anúncios
 *
 * Babylon continua exclusivamente interno.
 */

export const AGRONEXUS_COMMERCE = {
  brand:
    'AgroNexus™',

  contactLinks: {
    whatsapp: {
      label:
        'WhatsApp',

      url:
        'https://wa.me/48732099369',
    },

    telegram: {
      label:
        'Telegram',

      url:
        'https://t.me/+447594716370',
    },
  },

  paymentMethods: [
    {
      id:
        'pix',

      label:
        'Pix',
    },

    {
      id:
        'boleto',

      label:
        'Boleto bancário',
    },

    {
      id:
        'credit-card',

      label:
        'Cartão de crédito',
    },
  ],

  cardBrands: [
    'Visa',
    'Mastercard',
    'Elo',
    'American Express',
    'Hipercard',
    'Diners Club',
    'Discover',
    'JCB',
  ],

  installmentLabel:
    'Parcelamento disponível conforme as condições apresentadas no checkout.',

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
