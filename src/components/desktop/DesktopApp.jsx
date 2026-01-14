import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/context/ThemeContext.js";
import { useApp } from "@/context/AppContext.js";

import VBox from "@/components/ui/VBox.jsx";
import HBox from "@/components/ui/HBox.jsx";

import closeBlack from "@/assets/icons/close-black.svg";
import closeWhite from "@/assets/icons/close-white.svg";
import minimizeWhite from "@/assets/icons/minimize-white.svg";
import minimizeBlack from "@/assets/icons/minimize-black.svg";
import githubWhite from "@/assets/icons/github-white.svg";
import githubBlack from "@/assets/icons/github-black.svg";


// const appImages = import.meta.glob("@/assets/images/*.jpg", {
//     eager: true,
//     import: "default"
// });

// change keys to
// const imagesByName = Object.fromEntries(
//   Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
// );

const DesktopApp = ({ apps }) => {
    const { isDark } = useTheme(); // Theme boolean
    const { app, setApp, openApps, setOpenApps } = useApp(); // open app information
    const [isVisible, setIsVisible] = useState(false); // if an app is open 
    const currentApp = apps[app]; // current app open
    const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile


    // determine if an app is open
    useEffect(() => {
        if (app) setIsVisible(true);
    }, [app]);


    // The 'x' on the open app is clicked
    const closeApp = () => {
        setIsVisible(false); // no longer visible

        // update context for other components 
        setTimeout(() => {
            setApp(""); // current app on screen set to empty
            setOpenApps([...openApps].filter((val) => val != app)); // closed app removed from taskbar
        }, 300);
        
    }

    // The '-' on the open app is clicked
    const minimizeApp = () => {
        setIsVisible(false); // no longer visible

        // update context
        setTimeout(() => {
            setApp(""); // current app on screen is set to empty, does not remove from taskbar
        }, 300);
    }

    return (
        <>
            {app && (
                <div>
                    <div className="overlay h-[100vh]" /> {/* Overlay behind app to block clicking other elements on the screen */}
                    
                    {/* -------- APP WINDOW -------- */}
                    <VBox className={`
                    transition-all 
                    duration-300 
                    ease-in-out
                    origin-bottom-left
                    ${isDark ? "bg-dark" : "bg-light"}
                    ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                    
                    fixed
                    w-10/12
                    h-11/12
                    max-w-3xl

                    m-auto
                    left-0
                    right-0
                    top-0
                    bottom-0

                    rounded-lg
                    z-100
                    
                    
                    `}>
                        {/* --- HEADER --- */}
                        <HBox className={`
                            ${isDark ? "bg-dark-grey" : "bg-light-grey"} 
                            justify-between
                            rounded-t-lg
                        `}>

                            {/* App Title */}
                            <h1 className="self-center pl-2 font-bold">{currentApp.title}</h1>
                            
                            {/* Close/Minimize buttons */}
                            <HBox>
                                {notMobile && <img onClick={minimizeApp} src={isDark ? minimizeWhite : minimizeBlack} className="hover-over w-10 h-fit p-2 rounded-lg"/>}
                                <img onClick={closeApp} className="w-10 p-2 h-fit hover-over rounded-lg" src={isDark ? closeWhite : closeBlack} />
                            </HBox>
                        </HBox>

                        {/* --- APP CONTENT --- */}
                        <VBox className={`
                            ${isDark ? "dark" : "light"}
                            overflow-auto
                            scrollbar-style
                            items-center
                            h-full
                            p-4
                            gap-y-1
                        `}>
                        
                        {/* --- PROJECTS --- */}
                        {currentApp.id < 20 &&
                            <VBox className="gap-4">
                                <p className="text-center">Coming Soon...</p>
                                {/* <img className="max-w-10/12 max-h-4/6 border-2 rounded-lg" src={appImages[currentApp.appImageSrc]?.default} />
                                <hr className="w-11/12 my-5" />
                                
                                <p className="w-10/12">Project overview: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <hr className="w-11/12 my-5" />
                                <p className="w-10/12">Project Impact: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <hr className="w-11/12 my-5" /> */}

                                <a className="self-start center" href={currentApp.repoLink} target="_blank">
                                    <HBox className="items-center gap-2 hover-over p-1 pl-2 pr-3 rounded-lg cursor-pointer">
                                            <img className="w-10" src={isDark ? githubWhite : githubBlack} />
                                            <h1 className="h-fit">Go to repo</h1>
                                    </HBox>
                                </a>

                            </VBox>
                        }

                        {/* --- OTHER (ID = 20 and UP) --- */}
                        {/* {currentApp.id === 20 && // about me
                            <>
                                <img className="border-2 rounded-lg" src={imagesByName[`${currentApp.appImageSrc}`]} />
                            </>
                        } */}
                        
                        
                        {currentApp.id === 21 || currentApp.id === 20 && // previous work
                            <>
                                <h1 className="">Coming soon...</h1>
                            </>
                        }

                        {currentApp.id === 22 && // references for images used
                            <>
                                <h1 className="pt-5">Icons used for this website from <a className="reference-link" href="https://icons8.com/" target="_blank">Icons8</a> </h1>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/7695/search">Search</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/YRRhCXfA0Vd0/mail">Mail</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/5e8ZvPF0Llyj/sun-and-moon">Sun And Moon</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/60664/external-link">Open</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/71200/close">Close</a>
                                <a className="reference-link" target="_blank" href="https://icons8.com/icon/WeOgTBKEK9Zc/horizontal-line">Horizontal Line</a>

                            </>
                        }
                        </VBox>
                    
                    </VBox>
                </div>
        )}
    </>
    )
}

export default DesktopApp;