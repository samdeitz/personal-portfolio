import { useState, useEffect, useContext } from 'react';
import HBox from "./HBox.jsx";
import VBox from "./VBox.jsx";
import Searchbar from './Searchbar.jsx';

import searchWhite from "../assets/search-white.svg";
import mailWhite from "../assets/mail-white.svg";
import githubWhite from "../assets/github-white.svg";
import linkedinWhite from "../assets/linkedin-white.svg";
import sunWhite from "../assets/sun-white.svg";

import searchBlack from "../assets/search-black.svg";
import mailBlack from "../assets/mail-black.svg";
import githubBlack from "../assets/github-black.svg";
import linkedinBlack from "../assets/linkedin-black.svg";
import sunBlack from "../assets/sun-black.svg";
import { useProject } from "../ProjectProvider.jsx";
import { useTheme } from '../ThemeProvider.jsx';

// import all project jpgs for use
const projectImages = import.meta.glob("../assets/*.jpg", {eager: true}); 


const Taskbar = ( { projects } ) => {
    const {isDark, toggleTheme} = useTheme();
    const { project } = useProject();

    return (
        <HBox 
        className={`
        flex 
        ${isDark ? "bg-[#333333]" : "bg-[#999999]" }
        justify-between
        items-center 
        h-13
        fixed
        z-98
        bottom-0
        w-screen
        `}>
            <HBox className="gap-1">
                <Searchbar searchImg={isDark ? searchWhite : searchBlack} />
                <HBox>
                    <a href="mailto: sdeitz@uwo.ca" target="_blank">
                        <img className="taskbar-item" src={isDark ? mailWhite : mailBlack} alt="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/sam-deitz-80559a31a/" target="_blank">
                        <img className="taskbar-item" src={isDark ? linkedinWhite : linkedinBlack} alt="linkedin" />
                    </a>
                    <a href="https://github.com/samdeitz" target="_blank">
                        <img className="taskbar-item" src={isDark ? githubWhite : githubBlack} alt="github" />
                    </a>
                    {project && (
                        <VBox className="taskbar-item gap-2">
                            <img className="rounded-lg" src={projectImages[`${projects[project].imgsrc}`]?.default} />
                            <div className={`${isDark ?"bg-[#d9d9d9]" : "bg-[#151515]"} rounded-lg min-w-[100%] min-h-1 m-auto`} ></div>
                        </VBox>
                            )}

                </HBox>
            </HBox>
            <HBox>
                <a href="" 
                className="
                flex 
                items-center 
                taskbar-item
                w-20
                "
                >
                    resume
                </a>
                <img onClick={toggleTheme} className="taskbar-item" src={isDark ? sunWhite : sunBlack} alt="sun" />
            </HBox>

        </HBox>            
        
    )
}


export default Taskbar;

