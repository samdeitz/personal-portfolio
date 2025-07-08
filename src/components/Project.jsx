import VBox from "./VBox.jsx";
import HBox from "./HBox.jsx";
import closeBlack from "../assets/close-black.svg";
import closeWhite from "../assets/close-white.svg";
import sample from "../assets/sample.jpg";
import { useTheme } from "../ThemeProvider.jsx";
import { useProject } from "../ProjectProvider.jsx";

const Project = () => {
    const { isDark } = useTheme();
    const { project, setProject } = useProject();

    const closeProject = () => {
        setProject("");
    }

    const minimizeProject = () => {
        
    }

    return (
        <>
            {project && (
                <div>
                    <div className="overlay"></div>
                    <VBox className={`
                    ${isDark ? "bg-[#151515]" : "bg-[#d9d9d9]"}
                    fixed
                    w-10/12
                    h-11/12

                    m-auto
                    left-0
                    right-0
                    top-0
                    bottom-0


                    rounded-lg
                    z-100
                    `}>
                        <HBox className={`
                        ${isDark ? "bg-[#333]" : "bg-[#999]"} 
                        justify-between
                        rounded-t-lg
                        `}>
                            <h1 className=" self-center pl-2">Project Name</h1>
                            <HBox>
                                <img onClick={minimizeProject} />
                                <img onClick={closeProject} className="w-10 p-2 h-fit hover-over rounded-lg" src={isDark ? closeWhite : closeBlack} />
                            </HBox>
                        </HBox>

                        <VBox className={`
                        overflow-auto
                        scrollbar-style
                        ${isDark ? "dark" : "light"}
                        items-center
                        p-4
                        gap-y-1
                        `}>
                            <img className="w-10/12 max-h-4/6 border-2 rounded-lg" src={sample} />
                            <p className="project-desc p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="project-desc p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="project-desc p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="project-desc p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </VBox>
                    
                    </VBox>
                </div>
        )}
    </>
    )
}

export default Project;