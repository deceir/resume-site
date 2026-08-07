import { useLang } from '../i18n/LanguageContext.jsx'
import Section from './Section.jsx'

function Stats() {
  const { t } = useLang()
  return (
    <div className="reveal mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {t.stats.map((s) => (
        <div key={s.label} className="bg-panel px-5 py-6 text-center sm:px-6 sm:py-8">
          <div className="font-mono text-3xl font-bold text-gradient sm:text-4xl">{s.value}</div>
          <div className="mt-2 text-xs leading-snug text-mist sm:text-[13px]">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const { t } = useLang()

  return (
    <Section id="about" kicker={t.about.kicker} title={t.about.title}>
      <Stats />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="reveal space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-[16px] leading-relaxed text-mist text-pretty sm:text-[17px]">
              {p}
            </p>
          ))}
        </div>

        <dl className="reveal h-fit rounded-2xl surface p-6 sm:p-7" style={{ transitionDelay: '90ms' }}>
          {t.about.facts.map((f, i) => (
            <div
              key={f.k}
              className={`flex flex-col gap-1 py-3.5 ${
                i !== 0 ? 'border-t border-line' : 'pt-0'
              }`}
            >
              <dt className="font-mono text-[11px] tracking-[0.18em] text-mist uppercase">{f.k}</dt>
              <dd className="text-[15px] text-chalk">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
