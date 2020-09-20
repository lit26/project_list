import React from 'react'
import projects from './projects.json'
import ProjectItemCard from './ProjectItemCard'
import './ProjectItems.css'

function ProjectItems() {

    return (
        <div className="projectItems">
            {projects.reverse().map((project, index)=>{
                return (
                    <ProjectItemCard key={index} project={project} />
                )
            })}
        </div>
    )
}

export default ProjectItems
