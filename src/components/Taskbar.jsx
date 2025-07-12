import { useState } from 'react';

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
import { useApp } from "../AppContext.js";
import { useTheme } from '../ThemeProvider.jsx';

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Taskbar = ( { apps } ) => {
    const { isDark, toggleTheme} = useTheme();
    const { setApp, openApps, setOpenApps } = useApp();
    const [ searchValue, setSearchValue ] = useState("");

    const openApp = (a) => {
        if(!(typeof a === "string")) a = `proj${a.id}`;
        setApp(a);

        if(!openApps.includes(a)) {
            setOpenApps([
                ...openApps,
                a
            ]);
        }
    }


    return (
        <VBox className="fixed bottom-0">
            {searchValue && <VBox className={`
                border-2 
                w-1/2 
                transition-all
                duration-300
                ease-in-out
                ${searchValue ? "origin-bottom max-h-40" : ""}
                ${isDark ? "bg-[#333]" : "bg-[#999]"}
            `}>

                {Object.values(apps).map((a) => {
                    if(a.title.toLowerCase().includes(searchValue)) {
                        return (
                            <h1 className='py-1 pl-2 cursor-pointer' key={a.id} onClick={() => openApp(a)}>{a.title}</h1>
                        )
                    }
                })}
            </VBox>}
            <HBox 
            className={`
            flex 
            ${isDark ? "bg-[#333333]" : "bg-[#999999]" }
            justify-between
            items-center 
            h-13
            z-98
            translate-y-0
            bottom-0
            w-screen
            `}>
                <HBox className="gap-1">
                    <Searchbar 
                    searchImg={isDark ? searchWhite : searchBlack} 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    />
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
                        {openApps.length > 0 && (
                            openApps.map((a) =>
                                <VBox className="taskbar-item gap-2" key={a} onClick={() => openApp(a)}>
                                    <img className="rounded-lg" src={appImages[`${apps[a].desktopImageSrc}`]?.default} />
                                    <div className={`${isDark ?"bg-[#d9d9d9]" : "bg-[#151515]"} rounded-lg min-w-[100%] min-h-1 m-auto`} ></div>
                                </VBox>
                            )
                            
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
        </VBox>           
        
    )
}


export default Taskbar;

