import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-10 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs">
          © {year} {t.hero.name}. {t.footer.rights}
        </p>

        <div className="flex items-center gap-5">
          <p className="hidden font-mono text-xs sm:block">{t.footer.built}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-chalk"
          >
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 15.5V5M5.5 9 10 4.5 14.5 9" />
            </svg>
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
