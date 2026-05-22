import { appLayouts } from "./AppLayout.jsx";
import { useApp } from "@/context/AppContext.js";
import { useTheme } from "@/context/ThemeContext.js";
import { useMediaQuery } from "react-responsive";

import apps from "@/appInfo.js";
import AppElement from "./AppElement.jsx";
import VBox from "@/components/ui/VBox.jsx";
import HBox from "@/components/ui/HBox.jsx";

import closeBlack from "@/assets/icons/close-black.svg";
import closeWhite from "@/assets/icons/close-white.svg";

import minimizeWhite from "@/assets/icons/minimize-white.svg";
import minimizeBlack from "@/assets/icons/minimize-black.svg";

const OpenTab = ({ appID, isVisible, imagesByName }) => {
  const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
  const { isDark } = useTheme(); // Theme boolean
  const { windows, minimizeApp, closeApp } = useApp();
  const currentApp = apps[windows.find((window) => window.id === appID).title];
  const currentAppLayout = appLayouts[currentApp.title];

  return (
    <VBox
      className={`
        transition-all 
        duration-300 
        ease-in-out
        origin-bottom-left
        ${isDark ? "bg-dark" : "bg-light"}
        ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        
        fixed
        m-5
        md:mx-auto
        max-w-3xl
        border-2

        left-0
        right-0
        top-0
        bottom-0

        rounded-lg
        z-100
      `}
    >
      {/* --- HEADER --- */}
      <HBox
        className={`
                ${isDark ? "bg-dark-grey" : "bg-light-grey"} 
                justify-between
                rounded-t-lg
            `}
      >
        {/* App Title */}
        <h1 className="self-center pl-2 font-bold">{currentApp.title}</h1>

        {/* Close/Minimize buttons */}
        <HBox>
          {notMobile && (
            <img
              onClick={() => minimizeApp(appID)}
              src={isDark ? minimizeWhite : minimizeBlack}
              className="hover-over w-10 h-fit p-2 rounded-lg"
            />
          )}
          <img
            onClick={() => closeApp(appID)}
            className="w-10 p-2 h-fit hover-over rounded-lg"
            src={isDark ? closeWhite : closeBlack}
          />
        </HBox>
      </HBox>
      {/* --- APP CONTENT --- */}
      <VBox
        className={`
                ${isDark ? "dark" : "light"}
                overflow-auto
                scrollbar-style
                items-center
                h-full
                gap-y-5
            `}
      >
        {currentAppLayout.map((element, index) => {
          return (
            <AppElement
              element={element}
              currentApp={currentApp}
              images={imagesByName}
              key={element.type + index}
            ></AppElement>
          );
        })}
      </VBox>
    </VBox>
  );
};

export default OpenTab;
