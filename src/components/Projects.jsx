import { useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'
import Section from './Section.jsx'

const FILTERS = ['all', 'game', 'software']

function KindBadge({ kind, label }) {
  const isGame = kind === 'game'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase ${
        isGame ? 'border-cyan/35 bg-cyan/10 text-cyan' : 'border-violet/35 bg-violet/10 text-violet-soft'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isGame ? (
          <>
            <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
            <path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59L2.1 15.2A2.5 2.5 0 0 0 4.59 18c1.16 0 1.9-.5 2.5-1.2L8.5 15h7l1.41 1.8c.6.7 1.34 1.2 2.5 1.2a2.5 2.5 0 0 0 2.49-2.8l-.6-6.61A4 4 0 0 0 17.32 5Z" />
          </>
        ) : (
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
        )}
      </svg>
      {label}
    </span>
  )
}

export default function Projects() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState('all')

  const items = useMemo(
    () => (filter === 'all' ? t.projects.items : t.projects.items.filter((p) => p.kind === filter)),
    [t, filter],
  )

  // A filter bar is only meaningful once there's more than one kind of
  // project to filter between.
  const showFilters = useMemo(
    () => new Set(t.projects.items.map((p) => p.kind)).size > 1,
    [t],
  )

  // Cards mounted by a filter change still need to be picked up.
  useReveal([filter, lang])

  return (
    <Section id="projects" kicker={t.projects.kicker} title={t.projects.title} note={t.projects.note}>
      <div className={`reveal mb-8 flex flex-wrap gap-2 ${showFilters ? '' : 'hidden'}`}>
        {FILTERS.map((key) => {
          const isActive = filter === key
          const count =
            key === 'all'
              ? t.projects.items.length
              : t.projects.items.filter((p) => p.kind === key).length
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                isActive
                  ? 'border-violet/60 bg-violet/15 text-chalk shadow-[0_0_30px_-12px_rgba(139,92,246,1)]'
                  : 'border-line bg-panel/60 text-mist hover:border-violet/35 hover:text-chalk'
              }`}
            >
              {t.projects.filters[key]}
              <span className="font-mono text-[11px] opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      {items.length === 0 ? (
        <p className="text-mist">{t.projects.empty}</p>
      ) : (
        <div className={`grid gap-5 ${items.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {items.map((p, i) => (
            <article
              key={p.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-2xl surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_24px_60px_-30px_rgba(139,92,246,0.85)] sm:p-7"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 scanlines opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between gap-3">
                <KindBadge kind={p.kind} label={t.projects.filters[p.kind]} />
                {p.year && <span className="font-mono text-xs text-mist">{p.year}</span>}
              </div>

              <h3 className="relative mt-4 text-xl font-semibold text-chalk transition-colors group-hover:text-violet-soft sm:text-2xl">
                {p.title}
              </h3>

              <p className="relative mt-1.5 font-mono text-[11px] tracking-[0.14em] text-mist uppercase">
                {p.role} · {p.status}
              </p>

              <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-mist text-pretty">
                {p.blurb}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-panel-2/70 px-2 py-0.5 font-mono text-[11px] text-mist"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* No link is better than a link to nowhere. */}
              {p.href && (
                <a
                  href={p.href}
                  target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel={p.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-chalk"
                >
                  {t.projects.viewLabel}
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 4.5 12.5 10 7 15.5" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
