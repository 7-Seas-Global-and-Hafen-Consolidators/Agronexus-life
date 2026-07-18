import '../styles/ServiceCard.css'

/**
 * ServiceCard — card reutilizável de serviço/solução.
 * @param {string} title - título do card
 * @param {string} text  - descrição
 */
export default function ServiceCard({ title, text }) {
  return (
    <article className="scard">
      <span className="scard__line" aria-hidden="true" />

      <h3 className="scard__title">
        {title}
      </h3>

      <p className="scard__text">
        {text}
      </p>
    </article>
  )
}
