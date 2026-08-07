import { useLang } from '../i18n/LanguageContext.jsx'
import Section from './Section.jsx'

export default function Experience() {
  const { t } = useLang()

  return (
    <Section id="experience" kicker={t.experience.kicker} title={t.experience.title}>
      <ol className="relative">
        {/* Spine */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-violet/70 via-line to-transparent sm:left-[9px]"
        />

        {t.experience.roles.map((role) => (
          <li key={`${role.company}-${role.period}`} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-12">
            {/* The pulsing node marks an ongoing role — driven by the data,
                not by position, so nothing reads as "current" by accident. */}
            <span
              aria-hidden="true"
              className={`absolute top-1.5 left-0 grid h-3.5 w-3.5 place-items-center rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                role.current ? 'border-violet bg-violet/25' : 'border-line bg-panel'
              }`}
            >
              {role.current && (
                <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse-slow" />
              )}
            </span>

            <div className="group rounded-2xl surface p-6 transition-colors duration-300 hover:border-violet/35 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-chalk sm:text-xl">{role.role}</h3>
                <span className="font-mono text-xs whitespace-nowrap text-violet-soft">
                  {role.period}
                </span>
              </div>

              <p className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-mist">
                <span className="font-medium text-cyan">{role.company}</span>
                <span aria-hidden="true" className="text-line">
                  /
                </span>
                <span>{role.location}</span>
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-mist text-pretty">
                {role.summary}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-[14.5px] leading-relaxed text-mist">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet/70" />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-mist"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
