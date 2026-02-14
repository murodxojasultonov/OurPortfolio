import './About.css'

function About({ t }) {
  const values = [
    t.about.value1,
    t.about.value2,
    t.about.value3,
    t.about.value4,
    t.about.value5
  ]

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <p className="about-text">{t.about.story}</p>
          <h3 className="about-subtitle">{t.about.whyTitle}</h3>
          <ul className="about-list">
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
