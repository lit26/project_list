import React, { useContext, useState } from 'react';

const ProjectContext = React.createContext();

export function useProject() {
    return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
    const [selectCategory, setSelectCategory] = useState('all');

    const value = { selectCategory, setSelectCategory };

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
}
