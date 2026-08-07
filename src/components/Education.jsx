import { useLang } from '../i18n/LanguageContext.jsx'
import Section from './Section.jsx'

export default function Education() {
  const { t } = useLang()

  return (
    <Section id="education" kicker={t.education.kicker} title={t.education.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.education.items.map((item, i) => (
          <div
            key={item.school}
            className="reveal rounded-2xl surface p-6 transition-colors duration-300 hover:border-cyan/35 sm:p-7"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <p className="font-mono text-xs text-cyan">{item.period}</p>
            <h3 className="mt-3 text-lg font-semibold text-chalk">{item.award}</h3>
            <p className="mt-1 text-[15px] text-mist">{item.school}</p>
            <p className="mt-4 border-t border-line pt-4 text-[14.5px] leading-relaxed text-mist text-pretty">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
