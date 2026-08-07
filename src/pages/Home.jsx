import { useLang } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import { Divider } from '../components/Section.jsx'

export default function Home() {
  const { lang } = useLang()
  useReveal([lang])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
