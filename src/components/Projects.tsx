import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const Projects: React.FC = () => {
  return (
    <div className="mx-10 my-3">
      {[...projects].reverse().map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
