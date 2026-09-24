import type { CSSProperties } from "react";
import { useMediaQuery } from "react-responsive";

import AppHeader from "./AppHeader.jsx";
import { getApp } from "../../apps/registry";
import { useApp } from "../../context/AppContext.js";
import { SPLIT_BREAKPOINT } from "../../context/AppProvider";
import VBox from "../ui/VBox.js";
import AppContent from "./AppContent";

const OpenTab = ({
  style,
  windowID,
}: {
  style: CSSProperties;
  windowID: string;
}) => {
  const notMobile = useMediaQuery({ minWidth: 400 }); // boolean to conditionally render for devices that are not mobile
  const isSingleWindow = useMediaQuery({ maxWidth: SPLIT_BREAKPOINT });
  const { focusedWindowID, windows, dispatch } = useApp();
  const window = windows.find((window) => window.id === windowID);
  const currentApp = window && getApp(window.type);
  if (!currentApp) return null;

  return (
    <VBox
      style={style}
      className={`
        transition-[opacity,scale,max-width,max-height]
        border-2
        ease-in-out
        ${isSingleWindow ? "origin-bottom-left" : "origin-center"}
        bg-theme-page
        animate-window-open
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
