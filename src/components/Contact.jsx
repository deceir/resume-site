import { useLang } from '../i18n/LanguageContext.jsx'
import { SOCIALS } from '../site.config.js'
import Section from './Section.jsx'

const EMAIL = SOCIALS.find((s) => s.label === 'Email')

export default function Contact() {
  const { t } = useLang()

  return (
    <Section id="contact" kicker={t.contact.kicker} title={t.contact.title}>
      <div className="reveal relative overflow-hidden rounded-3xl surface p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)',
          }}
        />

        <div className="relative max-w-2xl">
          <p className="text-lg leading-relaxed text-mist text-pretty">{t.contact.body}</p>

          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-[13px] text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {t.contact.availability}
          </p>

          <div className="mt-9">
            <a
              href={EMAIL?.href ?? '#'}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet to-cyan px-7 py-3.5 text-sm font-semibold text-void transition-transform duration-200 hover:scale-[1.03] active:scale-[0.99]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </svg>
              {t.contact.cta}
            </a>
          </div>
        </div>

        {/* Only split into columns once there's more than one card.
            Otherwise the empty cell shows as a bare slab of border colour. */}
        <ul
          className={`relative mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${
            SOCIALS.length > 1 ? 'sm:grid-cols-2' : ''
          }`}
        >
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group flex h-full flex-col gap-1 bg-panel px-5 py-4 transition-colors hover:bg-panel-2"
              >
                <span className="flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-mist uppercase">
                  {s.label}
                  <svg viewBox="0 0 20 20" className="h-3 w-3 -translate-y-px opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13 13 7M7.5 7H13v5.5" />
                  </svg>
                </span>
                <span className="truncate text-[14.5px] text-chalk transition-colors group-hover:text-cyan">
                  {s.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
