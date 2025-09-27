import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { useApp } from "../AppContext.js";
import { useTheme } from '../ThemeProvider.jsx';
import { useBreakpoint } from "../hooks/useBreakpoint.jsx";

import HBox from "./ui/HBox.jsx";
import VBox from "./ui/VBox.jsx";
import Searchbar from './Searchbar.jsx';
import SearchResults from "./SearchResults.jsx";
import OverflowingApps from "./OverflowingApps.jsx";

import searchWhite from "../assets/search-white.svg";
import mailWhite from "../assets/mail-white.svg";
import githubWhite from "../assets/github-white.svg";
import linkedinWhite from "../assets/linkedin-white.svg";
import sunWhite from "../assets/sun-white.svg";
import moreAppsBlack from "../assets/moreapps-black.svg";
import moreAppsWhite from "../assets/moreapps-white.svg";


import searchBlack from "../assets/search-black.svg";
import mailBlack from "../assets/mail-black.svg";
import githubBlack from "../assets/github-black.svg";
import linkedinBlack from "../assets/linkedin-black.svg";
import sunBlack from "../assets/sun-black.svg";


const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Taskbar = ( { apps } ) => {
    const { isDark, toggleTheme } = useTheme();
    const { openApps, openApp } = useApp();
    const [ searchValue, setSearchValue ] = useState("");
    const [ openResults, setOpenResults ] = useState(false);
    const [ appIsBouncing, setAppIsBouncing ] = useState(["", false]);
    const [ isSearching, setIsSearching ] = useState(false);
    const [ showApps, setShowApps ] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 400 })
    const [displayableOpenApps, setDisplayableOpenApps] = useState([]);
    const [nonDisplayableOpenApps, setNonDisplayableOpenApps] = useState([]);
    const taskbarRef = useRef(null);
    const appRef = useRef(null);
    const prevSearchingRef = useRef(null);
    const visibleRef = useRef([]);
    const hiddenRef  = useRef([]);


    useEffect(() => {
        let el = taskbarRef.current;
        const APPW = 52;
        if (!el || !isDesktop) return;
        
        const sortApps = () => {
            let visible = [];
            let hidden = [];
            let fittableApps = Math.floor(el.clientWidth / APPW)-3;
            if (openApps.length > fittableApps) {
                visible = [...openApps.slice(0, fittableApps-1)];
                hidden = [...openApps.slice(fittableApps-1)];
            }
            else visible = [...openApps];
            setDisplayableOpenApps(visible);
            setNonDisplayableOpenApps(hidden);
        }


        sortApps();
        let observer = new ResizeObserver(sortApps);
        observer.observe(el);
        return () => observer.disconnect();
    }, [openApps, isSearching])


    return (
        <>
        <SearchResults 
            isDark={isDark}
            searchValue={searchValue}
            openResults={openResults}
            setOpenResults={setOpenResults}
            apps={apps}
            openApp={openApp}
            setIsSearching={setIsSearching}
        />
        
        <VBox className="fixed z-98 bottom-0 max-w-full" id="taskbar">
            
            <HBox 
            className={`
            ${isDark ? "bg-dark-grey" : "bg-light-grey"}
            flex 
            items-center 
            justify-between
            h-13
            z-98
            translate-y-0
            bottom-0
            w-screen
            `}>
                <Searchbar 
                    searchImg={isDark ? searchWhite : searchBlack} 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    setOpenResults={setOpenResults}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                />
                <HBox className={`${isSearching && "hidden sm:flex"} flex-grow min-w-0`} ref={taskbarRef}>
                    <a className="taskbar-item" href="mailto: sdeitz@uwo.ca" target="_blank" ref={appRef}>
                        <img src={isDark ? mailWhite : mailBlack} alt="mail" />
                    </a>
                    <a className="taskbar-item flex-shrink-0" href="https://www.linkedin.com/in/sam-deitz-80559a31a/" target="_blank">
                        <img src={isDark ? linkedinWhite : linkedinBlack} alt="linkedin" />
                    </a>
                    <a className="taskbar-item flex-shrink-0" href="https://github.com/samdeitz" target="_blank">
                        <img src={isDark ? githubWhite : githubBlack} alt="github" />
                    </a>

                    {displayableOpenApps.length > 0 && isDesktop  && (
                        
                        displayableOpenApps.map((a) => 
                            <VBox className="taskbar-item gap-2 bounce-container flex-shrink-0" 
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
                    {nonDisplayableOpenApps.length > 0 && 
                        <VBox className={`${showApps ? (isDark ? "bg-light-grey" : "bg-dark-grey") : (isDark ? "bg-dark-grey" : "bg-light-grey")}`}>
                            <OverflowingApps 
                                nonDisplayableOpenApps={nonDisplayableOpenApps}
                                appImages={appImages}
                                isDark={isDark}
                                apps={apps}
                                showApps={showApps}
                                setShowApps={setShowApps}
                                openApp={openApp}
                            />
                            <div className="taskbar-item">
                                <img 
                                    src={isDark ? moreAppsWhite : moreAppsBlack} 
                                    onClick={() => setShowApps(!showApps)} 
                                />
                            </div>
                        </VBox>
                    }
                </HBox>
                <HBox className="flex-shrink-0">
                    <a href="../../SDResumeTech.pdf"
                    target="_blank" 
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

