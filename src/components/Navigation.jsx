import { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation({ language, setLanguage, t }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 70
      const targetPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a 
          href="#home" 
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('home')
          }}
        >
          {t.nav.home}
        </a>
        <div className="nav-right">
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('skills')
                }}
              >
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                {t.nav.about}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
              onClick={() => setLanguage('ru')}
            >
              RU
            </button>
            <button
              className={`lang-btn ${language === 'uz' ? 'active' : ''}`}
              onClick={() => setLanguage('uz')}
            >
              UZ
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
