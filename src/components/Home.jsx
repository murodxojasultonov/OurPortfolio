import './Home.css'

function Home({ t }) {
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
    <section className="section home-section" id="home">
      <div className="container">
        <h1 className="home-title">{t.home.title}</h1>
        <p className="home-subtitle">{t.home.subtitle}</p>
        <p className="home-description">{t.home.description}</p>
        <div className="home-cta">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            {t.home.viewProjects}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            {t.home.contactMe}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
