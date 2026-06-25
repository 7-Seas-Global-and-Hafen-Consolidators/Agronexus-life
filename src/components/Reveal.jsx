import useScrollReveal from '../hooks/useScrollReveal'

/**
 * Reveal — encapsula o efeito de fade/slide ao rolar a página.
 * Uso: <Reveal as="section" delay={120}> ... </Reveal>
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
