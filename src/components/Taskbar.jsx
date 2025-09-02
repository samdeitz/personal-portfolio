import { useState } from 'react';

import HBox from "./HBox.jsx";
import VBox from "./VBox.jsx";
import Searchbar from './Searchbar.jsx';
import SearchResults from "./SearchResults.jsx";

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
    const { isDark, toggleTheme } = useTheme();
    const { openApps, openApp } = useApp();
    const [ searchValue, setSearchValue ] = useState("");
    const [ openResults, setOpenResults ] = useState(false);
    const [ appIsBouncing, setAppIsBouncing ] = useState(["", false]);
    const [isSearching, setIsSearching] = useState(false);

    return (
        <>
        <SearchResults 
            isDark={isDark}
            searchValue={searchValue}
            openResults={openResults}
            apps={apps}
            openApp={openApp}
        />
        <VBox className="fixed z-98 bottom-0 ">
            
            <HBox 
            className={`
            ${isDark ? "bg-dark-grey" : "bg-light-grey"}
            flex 
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
                    setOpenResults={setOpenResults}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                    />
                    <HBox className={`${isSearching && "hidden sm:flex"}`}>
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
                                <VBox className="taskbar-item gap-2 bounce-container" 
                                    onMouseEnter={() => setAppIsBouncing([a, true])} 
                                    onMouseLeave={() => setAppIsBouncing(["", false])}
                                    key={a} 
                                    onClick={() => openApp(a)}
                                >
                                    <img className={`rounded-lg ${appIsBouncing[0] === a && appIsBouncing[1] && "animate-small-bounce"}`} src={appImages[apps[a].desktopImageSrc]?.default} />
                                    <div className={`${isDark ?"bg-light" : "bg-dark"} rounded-lg min-w-[100%] min-h-1 m-auto`} ></div>
                                </VBox>
                            )
                            
                        )}

                    </HBox>
                </HBox>


                <HBox>
                    <a href="../assets/SDResumeTech.pdf" 
                    className="
                    flex 
                    items-center 
                    taskbar-item
                    w-20
                    ">
                        resume
                    </a>
                    <img onClick={toggleTheme} className="taskbar-item" src={isDark ? sunWhite : sunBlack} alt="sun" />
                </HBox>

            </HBox> 
        </VBox>      
        </>     
        
    )
}


export default Taskbar;

