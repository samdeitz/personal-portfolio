import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/context/ThemeContext.js";
import { useApp } from "@/context/AppContext.js";
import { appLayouts } from "./AppLayout.jsx";

import AppElement from "./AppElement.jsx";
import VBox from "@/components/ui/VBox.jsx";
import HBox from "@/components/ui/HBox.jsx";

import closeBlack from "@/assets/icons/close-black.svg";
import closeWhite from "@/assets/icons/close-white.svg";
import minimizeWhite from "@/assets/icons/minimize-white.svg";
import minimizeBlack from "@/assets/icons/minimize-black.svg";



const appImages = import.meta.glob("@/assets/images/*.jpg", {
    eager: true,
    import: "default"
});


const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
);

const DesktopApp = ({ apps }) => {
    const { isDark } = useTheme(); // Theme boolean
    const { app, setApp, openApps, setOpenApps } = useApp(); // open app information
    const [isVisible, setIsVisible] = useState(false); // if an app is open 
    const currentApp = apps[app]; // current app open
    const currentAppLayout = appLayouts[app]; // page layout of the current app
    const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
    const [screenHeight, setScreenHeight] = useState(document.documentElement.scrollHeight);


    useEffect(() => {
        const updateHeight = () => {
            console.log(screenHeight);  
            setScreenHeight(document.documentElement.scrollHeight);
        }

        window.addEventListener("resize", updateHeight);
        updateHeight();
        return (
            () => window.removeEventListener("resize", updateHeight)
        );
    })

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
                    <div className={`overlay z-99]`} style={{ height: screenHeight }} /> {/* Overlay behind app to block clicking other elements on the screen */}
                    
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
                            gap-y-1
                        `}>
                            {currentAppLayout.map((element) => {
                                    return (
                                        <AppElement
                                            element={element}
                                            currentApp={currentApp}
                                            images={imagesByName}
                                        ></AppElement>
                                    );
                                })}   
                        </VBox>
                                
                            
                    
                    </VBox>
                </div>
        )}
    </>
    )
}

export default DesktopApp;