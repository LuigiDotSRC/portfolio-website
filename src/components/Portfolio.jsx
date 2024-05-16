import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';

function Portfolio() {
  return (
    <div className="mx-8 my-8 flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map(project => (
          <ProjectCard
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio; 