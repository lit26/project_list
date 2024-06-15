import React from "react";
import { Project } from "../types";
import { useProject } from "../context/ProjectContext";

interface ProjectItemCardProps {
  project: Project;
}
const ProjectItemCard: React.FC<ProjectItemCardProps> = ({ project }) => {
  const { selectCategory } = useProject();
  const { select, img, projectName, time, hashtag, tech, description } =
    project;

  return (
    <a
      className={
        select.includes(selectCategory) || selectCategory === "all"
          ? "animate-fade-in block"
          : "animate-fade-out hidden"
      }
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="md:flex px-3 py-4 hover:shadow-default duration-500 mb-2">
        <img
          className="w-full md:w-72 object-contain mr-8 shadow-default"
          src={img}
          alt=""
        />

        <div className="mt-1 md:mt-0">
          <h3 className="text-primary text-xl mb-1">{projectName}</h3>
          <p className="text-black mb-1">{time}</p>
          <div className="flex flex-wrap">
            {hashtag.map((eachHashtag, index) => (
              <div
                key={index}
                className="bg-primary text-white m-1 px-3 py-1 rounded-3xl text-sm"
              >
                <strong>{eachHashtag}</strong>
              </div>
            ))}
          </div>
          <p className="projectItemCard__desc text-desc">
            Tech:
            {tech.map((eachTech, index) => (
              <span key={index}>
                {index === 0 ? " " : ", "}
                {eachTech}
              </span>
            ))}
          </p>

          <p className="projectItemCard__desc text-desc">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectItemCard;
