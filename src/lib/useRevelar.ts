import { useEffect } from 'react'

/** Revela suavemente elementos com [data-revelar] quando entram na tela. */
export function useRevelar() {
  useEffect(() => {
    const alvos = document.querySelectorAll<HTMLElement>('[data-revelar]')
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      alvos.forEach((el) => el.classList.add('revelado'))
      return
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add('revelado')
            obs.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    alvos.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
