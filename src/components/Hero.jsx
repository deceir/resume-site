import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

const TYPE_MS = 55
const ERASE_MS = 28
const HOLD_MS = 1900

/** Types each role out, holds, erases, moves on. Restarts on language change. */
function useTypewriter(words) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!words?.length) return
    setText('')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }

    // Cursor state lives in closure vars, not in the setState updater.
    // StrictMode double-invokes updaters, which would double the timers.
    let timer
    let index = 0
    let len = 0
    let erasing = false

    const tick = () => {
      const word = words[index % words.length]

      if (!erasing) {
        len += 1
        setText(word.slice(0, len))
        if (len >= word.length) {
          erasing = true
          timer = setTimeout(tick, HOLD_MS)
        } else {
          timer = setTimeout(tick, TYPE_MS)
        }
        return
      }

      len -= 1
      setText(word.slice(0, len))
      if (len <= 0) {
        erasing = false
        index += 1
        timer = setTimeout(tick, 320)
      } else {
        timer = setTimeout(tick, ERASE_MS)
      }
    }

    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

export default function Hero() {
  const { t, lang } = useLang()
  const role = useTypewriter(t.hero.roles)
  const ref = useRef(null)

  // Cursor-tracked spotlight. Written straight to CSS vars via rAF so
  // React never re-renders on pointer move.
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    const onMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
        frame = 0
      })
    }

    el.addEventListener('pointermove', onMove)
    return () => {
      el.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="top"
      ref={ref}
      className="group relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
      style={{ '--mx': '50%', '--my': '50%' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(340px circle at var(--mx) var(--my), rgba(139,92,246,0.13), transparent 72%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 py-1.5 pr-4 pl-3 text-xs text-mist backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {t.hero.status}
          </span>
        </div>

        <p className="reveal is-visible mt-9 font-mono text-sm text-mist" style={{ transitionDelay: '60ms' }}>
          {t.hero.greeting}
        </p>

        <h1
          className="reveal is-visible mt-3 text-[clamp(2.6rem,9vw,6rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance"
          style={{ transitionDelay: '120ms' }}
        >
          <span className="text-gradient">{t.hero.name}</span>
        </h1>

        <div
          className="reveal is-visible mt-6 flex min-h-[2.4rem] items-center gap-3 font-mono text-lg text-chalk sm:text-2xl"
          style={{ transitionDelay: '180ms' }}
        >
          <span aria-hidden="true" className="text-cyan">
            &gt;
          </span>
          <span aria-live="polite" className="text-balance">
            {role}
          </span>
          <span aria-hidden="true" className="inline-block h-[1.1em] w-[3px] bg-cyan animate-blink" />
        </div>

        <p
          className="reveal is-visible mt-8 max-w-2xl text-[17px] leading-relaxed text-mist text-pretty sm:text-lg"
          style={{ transitionDelay: '240ms' }}
        >
          {t.hero.tagline}
        </p>

        <div
          className="reveal is-visible mt-10 flex flex-wrap items-center gap-3"
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="#projects"
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet to-cyan px-6 py-3 text-sm font-semibold text-void transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]"
          >
            <span className="relative">{t.hero.ctaPrimary}</span>
            <svg viewBox="0 0 20 20" className="relative h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h11M11 5.5 15.5 10 11 14.5" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 text-sm font-semibold text-chalk backdrop-blur-md transition-colors hover:border-violet/60 hover:bg-panel-2"
          >
            {t.hero.ctaSecondary}
          </a>
          <span className="ml-1 hidden text-sm text-mist sm:inline" lang={lang}>
            {t.hero.location}
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-mist uppercase">
          {t.hero.scroll}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-line to-transparent" />
      </div>
    </section>
  )
}
