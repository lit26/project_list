import React, { useEffect } from 'react';
import projects from './projects.json';
import ProjectItemCard from './ProjectItemCard';
import './ProjectItems.scss';
import { useProject } from '../context/ProjectContext';

function ProjectItems() {
    const { setProjects } = useProject();

    useEffect(() => {
        setProjects(projects);
    }, [setProjects]);

    return (
        <div className="projectItems">
            {projects.reverse().map((project, index) => (
                <ProjectItemCard key={index} project={project} />
            ))}
        </div>
    );
}

export default ProjectItems;
