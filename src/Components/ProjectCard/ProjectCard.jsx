import React from 'react'
import './style.scss'


const ProjectCard = ({
  variant, src, title, description
}) => (
  <>
    <section className="project">
      <section className="project__body">
        <div className={`project__${variant}`}>
          <img className="project__cardImage" src={src} alt="alternate" />
          <div className="project__textContainer">
            <h1 className="project__title">{title}</h1>
            <p className="projectDescription">{description}</p>
          </div>
        </div>
      </section>
    </section>
  </>
)


export default ProjectCard
