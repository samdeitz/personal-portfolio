import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../ThemeProvider.jsx";
import { useApp } from "../AppContext.js";

import VBox from "./ui/VBox.jsx";
import HBox from "./ui/HBox.jsx";

import closeBlack from "../assets/close-black.svg";
import closeWhite from "../assets/close-white.svg";
import minimizeWhite from "../assets/minimize-white.svg";
import minimizeBlack from "../assets/minimize-black.svg";
import githubWhite from "../assets/github-white.svg";
import githubBlack from "../assets/github-black.svg";


const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const DesktopApp = ({ apps }) => {
    const { isDark } = useTheme();
    const { app, setApp, openApps, setOpenApps } = useApp();
    const [isVisible, setIsVisible] = useState(false);
    const currentApp = apps[app];
    const isDesktop = useMediaQuery({ minWidth: 400 });


    useEffect(() => {
        if (app) setIsVisible(true);
    }, [app]);

    const closeApp = () => {
        setIsVisible(false);

        setTimeout(() => {
            setApp("");
            setOpenApps([...openApps].filter((val) => val != app));
        }, 300);
        
    }

    const minimizeApp = () => {
        setIsVisible(false);

        setTimeout(() => {
            setApp("");
        }, 300);
    }

    return (
        <>
            {app && (
                <div>
                    <div className="overlay h-[100vh]" />
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
                        <HBox className={`
                        ${isDark ? "bg-dark-grey" : "bg-light-grey"} 
                        justify-between
                        rounded-t-lg
                        `}>
                            <h1 className="self-center pl-2 font-bold">{currentApp.title}</h1>
                            <HBox>
                                {isDesktop && <img onClick={minimizeApp} src={isDark ? minimizeWhite : minimizeBlack} className="hover-over w-10 h-fit p-2 rounded-lg"/>}
                                <img onClick={closeApp} className="w-10 p-2 h-fit hover-over rounded-lg" src={isDark ? closeWhite : closeBlack} />
                            </HBox>
                        </HBox>

                        <VBox className={`
                        ${isDark ? "dark" : "light"}
                        overflow-auto
                        scrollbar-style
                        items-center
                        h-full
                        p-4
                        gap-y-1
                        `}>

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

                        {/* all apps with different formats */}
                        {currentApp.id === 20 && // about me
                            <>
                                <img className="max-w-10/12 max-h-4/6 border-2 rounded-lg" src={appImages[`${currentApp.appImageSrc}`]?.default} />
                            </>
                        }
                        
                        
                        {currentApp.id === 21 && // previous work
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