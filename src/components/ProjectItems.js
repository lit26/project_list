import React, { useEffect } from "react";
import ProjectItemCard from "./ProjectItemCard";
import "./ProjectItems.scss";
import { useProject } from "../context/ProjectContext";

function ProjectItems() {
  const { projects, setProjects } = useProject();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lit26/project_list/assets/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [setProjects]);

  return (
    <div className="projectItems">
      {[...projects].reverse().map((project, index) => (
        <ProjectItemCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectItems;
