import React from "react";
import "./ProjectItemCard.scss";
import { useProject } from "../context/ProjectContext";
import { firebaseAnalytics } from "../firebaseConfig";

function ProjectItemCard({ project }) {
  const { selectCategory } = useProject();
  const { select, img, project_name, time, hashtag, tech, description } =
    project;

  const handleProjectClick = () => {
    firebaseAnalytics.logEvent(selectCategory, {
      projectName: project_name,
    });
  };

  return (
    <a
      className={`projectItemCard__link ${
        select.split(" ").includes(selectCategory) || selectCategory === "all"
          ? "active"
          : ""
      } `}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleProjectClick}
    >
      <div className="projectItemCard">
        <img
          className="projectItemCard__img"
          src={`https://raw.githubusercontent.com/lit26/project_list/assets/images/${img}`}
          alt=""
        />
        <div className="projectItemCard__info">
          <div className="projectItemCard__text">
            <h3>{project_name}</h3>
            <p className="projectItemCard__time">{time}</p>
            <div className="projectItemCard__hashtags">
              {hashtag.map((eachHashtag, index) => (
                <div key={index} className="projectItemCard__hashtag">
                  <strong>{eachHashtag}</strong>
                </div>
              ))}
            </div>
            <p className="projectItemCard__desc">
              Tech:
              {tech.map((eachTech, index) => (
                <span key={index}>
                  {index === 0 ? " " : ", "}
                  {eachTech}
                </span>
              ))}
            </p>

            <p className="projectItemCard__desc">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectItemCard;
