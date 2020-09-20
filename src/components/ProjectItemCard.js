import React from 'react'
import './ProjectItemCard.css'

function ProjectItemCard({ project }) {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="projectItemCard">
                <img className="projectItemCard__img"
                    src={require(`./images/${project.img}`)}
                    alt="" />
                <div className="projectItemCard__info">
                    <div className="projectItemCard__text">
                        <h3>{project.project_name}</h3>
                        <p className="projectItemCard__time">{project.time}</p>
                        <div className="projectItemCard__hashtags">
                            {project.hashtag.map((hashtag, index)=>{
                                return (
                                    <div key={index} className="projectItemCard__hashtag"><strong>{hashtag}</strong></div>
                                )
                            })}
                        </div>
                        <p className="projectItemCard__desc">Tech:
                            {project.tech.map((tech, index)=>{
                                if (index === 0){
                                    return(
                                        <span key={index}> {tech}</span> 
                                    )
                                }else{
                                    return(
                                        <span key={index}>, {tech}</span> 
                                    )
                                }
                                
                            })}
                        </p>
                        
                        <p className="projectItemCard__desc">{project.description}</p>
                    </div>
                </div>

            </div>
        </a>

    )
}

export default ProjectItemCard
