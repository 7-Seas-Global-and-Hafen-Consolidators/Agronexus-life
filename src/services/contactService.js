/**
 * contactService.js
 *
 * Integração real do formulário de contato da AgroNexus com Formspree.
 *
 * IMPORTANTE:
 * O endereço de recebimento NÃO fica exposto no código do site.
 * O destinatário real permanece configurado diretamente
 * no painel do Formspree deste endpoint.
 */

const FORMSPREE_ENDPOINT =
  'https://formspree.io/f/xqergyvv'

function getErrorMessage(result) {
  if (!result) {
    return 'Não foi possível enviar sua mensagem.'
  }

  if (result.error) {
    return result.error
  }

  if (Array.isArray(result.errors)) {
    return result.errors
      .map((item) => item.message)
      .join(' ')
  }

  return 'Não foi possível enviar sua mensagem.'
}

export async function sendContactMessage(data) {
  const response = await fetch(
    FORMSPREE_ENDPOINT,
    {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        localizacao: data.localizacao,
        empresa: data.empresa,
        interesse: data.interesse,
        mensagem: data.mensagem,

        _subject:
          `AgroNexus — ${data.interesse} — ${data.nome}`,

        origem: data.origem,
      }),
    }
  )

  const result =
    await response.json()

  if (!response.ok) {
    throw new Error(
      getErrorMessage(result)
    )
  }

  return result
}
