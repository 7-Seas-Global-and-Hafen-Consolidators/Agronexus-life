/** AgroNexus™ — Commercial Infrastructure */
export const AGRONEXUS_COMMERCE={
 brand:'AgroNexus™',
 contactLinks:{whatsapp:{label:'WhatsApp',url:'https://wa.me/48732099369'},telegram:{label:'Telegram',url:'https://t.me/+447594716370'}},
 paymentMethods:[{id:'pix',label:'Pix'},{id:'boleto',label:'Boleto bancário'},{id:'credit-card',label:'Cartão de crédito'}],
 cardBrands:['Visa','Mastercard','Elo','American Express','Hipercard','Diners Club','Discover','JCB'],
 installmentLabel:'Cartão de crédito em até 5x. Pix e boleto também disponíveis.',
 paymentLinks:{
  asaas:{label:'Pagar com Asaas',url:'https://www.asaas.com/c/u6toboa8xhqsmosv',provider:'Asaas',legalEntity:'Guiropa World',disclosure:'Processamento de pagamento por Guiropa World, empresa do ecossistema empresarial AgroNexus™.'},
  mercadoPago:{label:'Pagar com Mercado Pago',url:'https://link.mercadopago.com.br/agronexus',provider:'Mercado Pago',legalEntity:'7 Seas Global',disclosure:'Processamento de pagamento por 7 Seas Global, empresa do ecossistema empresarial AgroNexus™.'}
 }
}
export function formatAdNumber(value){const raw=String(value||'').replace(/\D/g,'');if(!raw)return'Anúncio #0000000000';return `Anúncio #${raw.padStart(10,'0')}`}
export default AGRONEXUS_COMMERCE
