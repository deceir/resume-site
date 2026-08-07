import { useLang } from '../i18n/LanguageContext.jsx'
import Section from './Section.jsx'

const ACCENT = {
  violet: {
    dot: 'bg-violet',
    glow: 'group-hover:border-violet/45 group-hover:shadow-[0_0_40px_-16px_rgba(139,92,246,0.9)]',
    chip: 'hover:border-violet/50 hover:text-violet-soft',
  },
  cyan: {
    dot: 'bg-cyan',
    glow: 'group-hover:border-cyan/45 group-hover:shadow-[0_0_40px_-16px_rgba(34,211,238,0.9)]',
    chip: 'hover:border-cyan/50 hover:text-cyan',
  },
  lime: {
    dot: 'bg-lime',
    glow: 'group-hover:border-lime/45 group-hover:shadow-[0_0_40px_-16px_rgba(163,230,53,0.8)]',
    chip: 'hover:border-lime/50 hover:text-lime',
  },
  rose: {
    dot: 'bg-rose',
    glow: 'group-hover:border-rose/45 group-hover:shadow-[0_0_40px_-16px_rgba(251,113,133,0.8)]',
    chip: 'hover:border-rose/50 hover:text-rose',
  },
}

export default function Skills() {
  const { t } = useLang()

  return (
    <Section id="skills" kicker={t.skills.kicker} title={t.skills.title} note={t.skills.note}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.skills.groups.map((group, i) => {
          const a = ACCENT[group.accent] ?? ACCENT.violet
          return (
            <div
              key={group.name}
              className={`reveal group rounded-2xl surface p-6 transition-all duration-300 sm:p-7 ${a.glow}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="mb-5 flex items-center gap-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                <h3 className="font-mono text-[13px] tracking-[0.15em] text-chalk uppercase">
                  {group.name}
                </h3>
                <span className="ml-auto font-mono text-xs text-mist">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-lg border border-line bg-panel-2/70 px-3 py-1.5 text-[13px] text-mist transition-colors ${a.chip}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
