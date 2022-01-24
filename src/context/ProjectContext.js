import React, { useContext, useState, useEffect } from 'react';
import { firebaseAnalytics } from '../firebaseConfig';

const ProjectContext = React.createContext();

export function useProject() {
    return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);
    const [selectCategory, setSelectCategory] = useState('all');
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (selectCategory === 'all') {
            setCount(projects.length);
        } else {
            setCount(
                projects.filter(project =>
                    project.select.split(' ').includes(selectCategory),
                ).length,
            );
            firebaseAnalytics.logEvent(selectCategory);
        }
        setTotal(projects.length);
    }, [projects, selectCategory]);

    const value = {
        projects,
        setProjects,
        selectCategory,
        setSelectCategory,
        count,
        total,
    };

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
}
