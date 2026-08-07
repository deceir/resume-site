import { useEffect, useState } from 'react'

/** Returns the id of the section currently closest to the top of the viewport. */
export function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0] ?? null)

  useEffect(() => {
    const onScroll = () => {
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      // Near the bottom the last section may never cross the offset line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80
      setActive(atBottom ? ids[ids.length - 1] : current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}

/** 0 → 1 progress through the whole document. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
