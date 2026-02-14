import { projectsData } from '../data/projects'
import './Projects.css'

function Projects({ t, language }) {
  const projects = projectsData[language]

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-section">
                <div className="project-label">{t.projects.problem}</div>
                <p className="project-text">{project.problem}</p>
              </div>
              
              <div className="project-section">
                <div className="project-label">{t.projects.solution}</div>
                <p className="project-text">{project.solution}</p>
              </div>
              
              <div className="project-section">
                <div className="project-label">{t.projects.technologies}</div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="projects-note">{t.projects.note}</p>
      </div>
    </section>
  )
}

export default Projects
