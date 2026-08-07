import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { content, LANGUAGES } from './content.js'

const STORAGE_KEY = 'portfolio:lang'

const LanguageContext = createContext(null)

/** Saved choice > browser preference > English. */
function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (LANGUAGES.includes(saved)) return saved

  const navLangs = window.navigator.languages ?? [window.navigator.language]
  return navLangs.some((l) => l?.toLowerCase().startsWith('ja')) ? 'ja' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

  // Keep the document in sync so CSS (`html[lang='ja']`), screen readers,
  // and browser translation prompts all agree with the UI.
  useEffect(() => {
    const t = content[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ja' : 'en'))
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: content[lang], isJa: lang === 'ja' }),
    [lang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
