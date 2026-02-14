import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { translations } from './data/translations'

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language)
    document.documentElement.lang = language
    
    // Update page title based on language
    const titles = {
      en: 'Software Developer Portfolio | ERP & Automation Solutions',
      ru: 'Портфолио разработчика | ERP и автоматизация',
      uz: 'Dasturchi portfoliosi | ERP va avtomatlashtirish'
    }
    document.title = titles[language]
  }, [language])

  const t = translations[language]

  return (
    <div className="app">
      <Navigation language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Home t={t} />
        <Projects t={t} language={language} />
        <Skills t={t} />
        <About t={t} />
        <Contact t={t} language={language} />
      </main>
      <Footer t={t} />
      <ScrollToTop />
    </div>
  )
}

export default App
