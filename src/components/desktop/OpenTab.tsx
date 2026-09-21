import type { CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";

import AppHeader from "./AppHeader.jsx";
import { getApp } from "../../apps/registry";
import { useApp } from "../../context/AppContext.js";
import { useTheme } from "../../context/ThemeContext.js";
import VBox from "../ui/VBox.js";
import AppContent from "./AppContent";

const OpenTab = ({ style, windowID, isVisible }: { style: CSSProperties; windowID: string; isVisible: boolean }) => {
  const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
  const { isDark } = useTheme(); // Theme boolean
  const { focusedWindowID, windows, dispatch } = useApp();
  const window = windows.find((window) => window.id === windowID);
  const currentApp = window && getApp(window.type);
  if (!currentApp) return null;

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
        min-h-0
        overflow-hidden
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
                min-h-0
                flex-1
                ${currentApp.kind === "project" ? "project-viewport" : "items-center gap-y-5"}
            `}
      >
        <AppContent app={currentApp} />
      </VBox>
    </VBox>
  );
};

export default OpenTab;
