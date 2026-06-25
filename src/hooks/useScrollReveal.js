import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * Retorna uma ref e um booleano `isVisible` que vira true quando o
 * elemento entra na viewport. Usado em conjunto com a classe .reveal
 * para animar seções suavemente conforme o usuário rola a página.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}
