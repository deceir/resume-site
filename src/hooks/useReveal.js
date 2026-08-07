import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` in the document the first time it
 * scrolls into view. Re-runs when `deps` change so nodes mounted later
 * (e.g. after a language switch or project filter) get observed too.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
