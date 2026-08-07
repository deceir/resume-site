import { useEffect, useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useScrollProgress, useScrollSpy } from '../hooks/useScrollSpy.js'
import LangToggle from './LangToggle.jsx'

function Logo() {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight"
      aria-label="Home"
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel shadow-[0_0_20px_-8px_rgba(139,92,246,0.9)] transition-colors group-hover:border-violet/60">
        <svg viewBox="0 0 100 100" className="h-4.5 w-4.5">
          <path
            d="M26 62 L38 30 L50 62 M31 52 H45"
            stroke="currentColor"
            className="text-violet-soft"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 36 L74 49 L60 62"
            stroke="currentColor"
            className="text-cyan"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden text-chalk sm:inline">
        akidev<span className="text-violet-soft">.jp</span>
      </span>
    </a>
  )
}

export default function Nav() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const progress = useScrollProgress()

  const ids = useMemo(() => t.nav.items.map((i) => i.id), [t])
  const active = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line/80 bg-void/72 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {t.nav.items.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      isActive ? 'text-chalk' : 'text-mist hover:text-chalk'
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-line bg-panel-2/80"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-panel/70 text-chalk backdrop-blur-md transition-colors hover:border-violet/50 md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? (
                  <>
                    <path d="M6 6 L18 18" />
                    <path d="M18 6 L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3.5 8 H20.5" />
                    <path d="M3.5 16 H20.5" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        <div
          aria-hidden="true"
          className="h-px origin-left bg-gradient-to-r from-violet via-cyan to-lime transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
        />
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-void/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-3 top-20 rounded-2xl surface p-3 shadow-2xl transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {t.nav.items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base text-chalk transition-colors hover:bg-panel-2"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
