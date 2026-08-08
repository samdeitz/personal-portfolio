import { appLayouts } from "./AppLayout.jsx";
import { useApp } from "@/context/AppContext.js";
import { useTheme } from "@/context/ThemeContext.js";
import { useMediaQuery } from "react-responsive";

import apps from "@/appInfo.js";
import AppElement from "./AppElement.jsx";
import VBox from "@/components/ui/VBox.jsx";
import AppHeader from "./AppHeader.jsx";

const OpenTab = ({ style, appID, windowID, isVisible, imagesByName }) => {
  const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
  const { isDark } = useTheme(); // Theme boolean
  const { focusedWindowID, windows, dispatch } = useApp();
  const currentApp = apps[windows.find((window) => window.id === appID).title];
  const currentAppLayout = appLayouts[currentApp.title];

  return (
    <VBox
      style={style}
      className={`
        transition-all 
        border-2
        duration-300 
        ease-in-out
        origin-bottom-left
        ${isDark ? "bg-dark" : "bg-light"}
        ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}
        ${focusedWindowID === windowID && "border-blue-300"}
        relative
        min-w-0

        rounded-lg
        z-100
      `}
      onMouseEnter={() =>
        dispatch({
          type: "FOCUS_CHANGE",
          payload: {
            windowID,
          },
        })
      }
    >
      {/* --- HEADER --- */}
      <AppHeader appID={appID} title={currentApp.title} notMobile={notMobile} />

      {/* --- APP CONTENT --- */}
      <VBox
        className={`
                ${isDark ? "dark" : "light"}
                overflow-y-auto
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
