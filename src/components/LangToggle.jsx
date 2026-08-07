import { useLang } from '../i18n/LanguageContext.jsx'

/**
 * Two-state segmented switch. Both labels stay visible so a reader who
 * only knows one of the two languages can still find their way out.
 */
export default function LangToggle({ className = '' }) {
  const { lang, setLang, t } = useLang()

  // Equal widths matter: the sliding pill is positioned as a flat 50% of
  // the track, so "EN" and "日本語" have to occupy the same box.
  const base =
    'relative z-10 grid w-[3.6rem] place-items-center py-1 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 rounded-full'

  return (
    <div
      role="group"
      aria-label={t.lang.toggleLabel}
      className={`relative inline-flex items-center rounded-full border border-line bg-panel/70 p-0.5 backdrop-blur-md ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute top-0.5 bottom-0.5 w-[3.6rem] rounded-full bg-gradient-to-r from-violet/80 to-cyan/60 shadow-[0_0_18px_-4px_rgba(139,92,246,0.9)] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${lang === 'en' ? '0rem' : '3.6rem'})` }}
      />
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? 'text-white' : 'text-mist hover:text-chalk'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ja')}
        aria-pressed={lang === 'ja'}
        lang="ja"
        className={`${base} ${lang === 'ja' ? 'text-white' : 'text-mist hover:text-chalk'}`}
      >
        日本語
      </button>
    </div>
  )
}
