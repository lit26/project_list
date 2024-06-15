import React, { useContext, useState } from "react";
import { projects } from "../constants";

interface ProjectContextProps {
  selectCategory: string;
  setSelectCategory: React.Dispatch<React.SetStateAction<string>>;
  count: number;
  total: number;
}
const ProjectContext = React.createContext<ProjectContextProps | undefined>(
  undefined
);

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useContext must be within Provider");
  }
  return context;
}

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectCategory, setSelectCategory] = useState("all");

  const count =
    selectCategory === "all"
      ? projects.length
      : projects.filter((project) => project.select.includes(selectCategory))
          .length;
  const total = projects.length;

  const value = {
    selectCategory,
    setSelectCategory,
    count,
    total,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
