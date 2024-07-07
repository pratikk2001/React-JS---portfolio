import React from 'react';
import './projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      link: '#'
    },
    {
      title: 'Project Four',
      description: 'A brief description of Project Three.',
      link: '#'
    },
    
  ];

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
