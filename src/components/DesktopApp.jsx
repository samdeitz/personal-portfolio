import { useState, useEffect } from "react";
import VBox from "./VBox.jsx";
import HBox from "./HBox.jsx";
import closeBlack from "../assets/close-black.svg";
import closeWhite from "../assets/close-white.svg";
import minimizeWhite from "../assets/minimize-white.svg";
import minimizeBlack from "../assets/minimize-black.svg";
import { useTheme } from "../ThemeProvider.jsx";
import { useApp } from "../AppContext.js";
import apps from "../appInfo.js";
// import appImages from "../images.js";

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const DesktopApp = () => {
    const { isDark } = useTheme();
    const { app, setApp, openApps, setOpenApps } = useApp();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (app) setIsVisible(true);
    }, [app]);

    const closeApp = () => {
        const a = app;
        setIsVisible(false);

        setTimeout(() => {
            setApp("");
            setOpenApps([...openApps].filter((val) => val != a));
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
                    <div className="overlay" />
                    <VBox className={`
                    transition-transform 
                    duration-300 
                    ease-in-out
                    ${isDark ? "bg-[#151515]" : "bg-[#d9d9d9]"}
                    ${isVisible ? "scale-100" : "scale-0"}
                    
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
                        ${isDark ? "bg-[#333]" : "bg-[#999]"} 
                        justify-between
                        rounded-t-lg
                        `}>
                            <h1 className=" self-center pl-2">{apps[app].title}</h1>
                            <HBox>
                                <img onClick={minimizeApp} src={isDark ? minimizeWhite : minimizeBlack} className="hover-over w-10 h-fit p-2 rounded-lg"/>
                                <img onClick={closeApp} className="w-10 p-2 h-fit hover-over rounded-lg" src={isDark ? closeWhite : closeBlack} />
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
                            <img className="w-10/12 max-h-4/6 border-2 rounded-lg" src={appImages[`${apps[app].projectImageSrc}`]?.default} />
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

export default DesktopApp;