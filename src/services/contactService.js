/**
 * contactService.js
 * ------------------------------------------------------------------
 * Ponto central de integração do formulário de contato.
 *
 * Hoje esta função apenas SIMULA o envio (resolve após um pequeno
 * delay). Quando você tiver um backend ou um serviço de e-mail
 * (EmailJS, Resend, SendGrid, Formspree, um endpoint próprio, etc.),
 * basta substituir o corpo da função `sendContactMessage` pela
 * chamada real — o restante da aplicação não precisa mudar.
 *
 * Exemplo de integração real com fetch:
 *
 *   export async function sendContactMessage(data) {
 *     const res = await fetch(import.meta.env.VITE_CONTACT_ENDPOINT, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify(data),
 *     })
 *     if (!res.ok) throw new Error('Falha ao enviar a mensagem')
 *     return res.json()
 *   }
 *
 * Dica: guarde a URL do endpoint em um arquivo .env como
 *   VITE_CONTACT_ENDPOINT=https://...
 * e acesse via import.meta.env.VITE_CONTACT_ENDPOINT
 * ------------------------------------------------------------------
 */

export async function sendContactMessage(data) {
  // --- SIMULAÇÃO (remover ao integrar a API real) ---
  console.log('[contactService] Mensagem pronta para envio:', data)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, message: 'Mensagem recebida com sucesso.' })
    }, 900)
  })
}
