import '../styles/ServiceCard.css'

/**
 * ServiceCard — card reutilizável de serviço/solução.
 * @param {string[]} icons  - lista de URLs de ícones a exibir no topo
 * @param {string}   title  - título do card
 * @param {string}   text   - descrição
 * @param {'cyan'|'purple'} accent - cor de destaque do card
 */
export default function ServiceCard({ icons = [], title, text, accent = 'cyan' }) {
  return (
    <article className={`scard scard--${accent}`}>
      <div className="scard__icons">
        {icons.map((src, i) => (
          <span className="scard__icon" key={i}>
            <img src={src} alt="" aria-hidden="true" />
          </span>
        ))}
      </div>
      <h3 className="scard__title">{title}</h3>
      <p className="scard__text">{text}</p>
    </article>
  )
}
