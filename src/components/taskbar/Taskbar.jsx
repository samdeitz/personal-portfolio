import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { useApp } from "@/context/AppContext.js";
import { useTheme } from '@/context/ThemeContext.js';

import HBox from "@/components/ui/HBox.jsx";
import VBox from "@/components/ui/VBox.jsx";
import Searchbar from './Searchbar.jsx';
import SearchResults from "./SearchResults.jsx";
import OverflowingApps from "./OverflowingApps.jsx";

// White icons (for dark mode)
import searchWhite from "@/assets/icons/taskbarIcons/search-white.svg";
import mailWhite from "@/assets/icons/taskbarIcons/mail-white.svg";
import githubWhite from "@/assets/icons/github-white.svg";
import linkedinWhite from "@/assets/icons/taskbarIcons/linkedin-white.svg";
import sunWhite from "@/assets/icons/taskbarIcons/sun-white.svg";
import moreAppsBlack from "@/assets/icons/taskbarIcons/moreapps-black.svg";
import moreAppsWhite from "@/assets/icons/taskbarIcons/moreapps-white.svg";

// Black icons (for light mode)
import searchBlack from "@/assets/icons/taskbarIcons/search-black.svg";
import mailBlack from "@/assets/icons/taskbarIcons/mail-black.svg";
import githubBlack from "@/assets/icons/github-black.svg";
import linkedinBlack from "@/assets/icons/taskbarIcons/linkedin-black.svg";
import sunBlack from "@/assets/icons/taskbarIcons/sun-black.svg";

// glob images for apps
const appImages = import.meta.glob("@/assets/icons/appIcons/*.jpg", {
    eager: true,
    import: "default"
});

// change keys to be by image name rather than path
const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
);

const Taskbar = ( { apps } ) => {
    const { isDark, toggleTheme } = useTheme(); // Theme context for rendering and toggling
    const { openApps, openApp } = useApp(); // app context for opening and seeing whats open
    const [ searchValue, setSearchValue ] = useState(""); // search value state
    const [ appIsBouncing, setAppIsBouncing ] = useState(["", false]); // hovering a taskbar app -> bounce it ["appID", bounce?]
    const [ isSearching, setIsSearching ] = useState(false); // user is searching
    const [ showApps, setShowApps ] = useState(false); // show taskbar apps (depends on screen size)
    const notMobile = useMediaQuery({ minWidth: 400 }) // Screen size determination
    const [displayableOpenApps, setDisplayableOpenApps] = useState([]); // apps able to fit on the taskbar
    const [nonDisplayableOpenApps, setNonDisplayableOpenApps] = useState([]); // apps that would overflow the taskbar size
    const taskbarRef = useRef(null); // reference to taskbar (for handling overflow)
    const appRef = useRef(null); // reference to any app (for handling overflow)


    useEffect(() => {
        let el = taskbarRef.current; // get taskbar element
        const APPW = 52; // get app width
        if (!el || !notMobile) return; // if the app is mobile, the apps dont show anyway
        
        // Function to sort apps into visible (able to fit) and hidden (overflows)
        const sortApps = () => {
            let visible = [];
            let hidden = [];

            // amount of apps able to fit --> Subtracts 2 to fit the overflowingApps menu, and subtracts one more for extra space
            let fittableApps = Math.floor(el.clientWidth / APPW)-3;
            
            // slice into visible and hidden if needed
            if (openApps.length > fittableApps) {
                visible = [...openApps.slice(0, fittableApps-1)];
                hidden = [...openApps.slice(fittableApps-1)];
            }
            else visible = [...openApps];

            // set state variables
            setDisplayableOpenApps(visible);
            setNonDisplayableOpenApps(hidden);
        }


        sortApps();

        // sorts apps every time user resizes the screen
        let observer = new ResizeObserver(sortApps);
        observer.observe(el);
        return () => observer.disconnect(); // cleanup
    }, [openApps, isSearching, notMobile])


    return (
        <>
        {/* -------- SEARCH RESULTS MENU -------- */}
        <SearchResults 
            apps={apps}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            searchValue={searchValue}
        />
        
        {/* -------- TASKBAR -------- */}
        <VBox className="fixed z-98 bottom-0 max-w-full" id="taskbar">
            
            {/* Left aligned items */}
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
                {/* --- SEARCHBAR --- */}
                <Searchbar 
                    searchImg={isDark ? searchWhite : searchBlack} 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                />

                {/* --- SOCIAL ICONS --- */}
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

                    {/* Displayable open apps render */}
                    {displayableOpenApps.length > 0 && notMobile  && (
                        
                        
                        displayableOpenApps.map((a) => 
                            <VBox className="taskbar-item gap-2 bounce-container flex-shrink-0" 
                                onMouseEnter={() => setAppIsBouncing([a, true])} 
                                onMouseLeave={() => setAppIsBouncing(["", false])}
                                key={a} 
                                onClick={() => openApp(a)}
                            >
                                <img className={`rounded-lg ${appIsBouncing[0] === a && appIsBouncing[1] && "animate-small-bounce"}`} src={imagesByName[apps[a].desktopImageSrc]} />
                                <div className={`${isDark ?"bg-light" : "bg-dark"} rounded-lg min-w-[100%] min-h-1 m-auto`} ></div>
                            </VBox>  
                        )
                    )}

                    {/* Apps for hidden app menu */}
                    {nonDisplayableOpenApps.length > 0 && 
                        <VBox className={showApps ? (isDark ? "bg-light-grey" : "bg-dark-grey") : (isDark ? "bg-dark-grey" : "bg-light-grey")}>
                            <OverflowingApps 
                                nonDisplayableOpenApps={nonDisplayableOpenApps}
                                appImages={imagesByName}
                                apps={apps}
                                showApps={showApps}
                                setShowApps={setShowApps}
                            />

                            {/* More apps menu (to show hidden apps) */}
                            <div className="taskbar-item">
                                <img 
                                    src={isDark ? moreAppsWhite : moreAppsBlack} 
                                    onClick={() => setShowApps(!showApps)} 
                                />
                            </div>
                        </VBox>
                    }
                </HBox>

                {/* Right aligned items */}
                <HBox className="flex-shrink-0">

                    {/* Resume link */}
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

                    {/* Light/dark mode toggle */}
                    <img onClick={toggleTheme} className="taskbar-item" src={isDark ? sunWhite : sunBlack} alt="sun/moon" />
                </HBox>

            </HBox> 
        </VBox>      
        </>     
        
    )
}


export default Taskbar;

