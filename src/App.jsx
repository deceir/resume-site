import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Backdrop from './components/Backdrop.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <Backdrop />
      <Home />
    </LanguageProvider>
  )
}
