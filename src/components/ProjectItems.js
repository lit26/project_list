import React from 'react';
import projects from './projects.json';
import ProjectItemCard from './ProjectItemCard';
import './ProjectItems.scss';

function ProjectItems() {
    return (
        <div className="projectItems">
            {projects.reverse().map((project, index) => (
                <ProjectItemCard key={index} project={project} />
            ))}
        </div>
    );
}

export default ProjectItems;
