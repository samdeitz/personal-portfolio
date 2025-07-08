import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext(undefined);

export const ProjectProvider = ( { children } ) => {
    const [project, setProject] = useState("");

    return (
        <ProjectContext.Provider value={{project, setProject}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProject = () => {return useContext(ProjectContext)};