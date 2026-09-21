import { appLayouts } from "./AppLayout.jsx";
import { useMediaQuery } from "react-responsive";

import AppHeader from "./AppHeader.jsx";
import apps from "../../appInfo.js";
import { useApp } from "../../context/AppContext.js";
import { useTheme } from "../../context/ThemeContext.js";
import VBox from "../ui/VBox.js";
import AppElement from "./AppElement.js";

const OpenTab = ({ style, windowID, isVisible, imagesByName }) => {
  const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
  const { isDark } = useTheme(); // Theme boolean
  const { focusedWindowID, windows, dispatch } = useApp();
  const currentApp =
    apps[windows.find((window) => window.id === windowID).type];
  const currentAppLayout = appLayouts[currentApp.id];

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
        h-full

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
      <AppHeader
        appID={windowID}
        title={currentApp.title}
        notMobile={notMobile}
      />

      {/* --- APP CONTENT --- */}
      <VBox
        className={`
                ${isDark ? "dark" : "light"}
                overflow-y-auto
                ${currentApp.title == "Terminal" && "hide-scrollbar"}
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
