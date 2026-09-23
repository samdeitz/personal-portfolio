import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import { FileSystemProvider } from "../context/FileSystemContext.js";
import Header from "./Header.jsx";
import Desktop from "./desktop/Desktop.jsx";
import DesktopApp from "./desktop/DesktopApp.jsx";
import VBox from "./ui/VBox.jsx";
import meDark from "@/assets/images/me-dark.png";
import { useScrollLock } from "../hooks/useScrollLock.js";

const LandingSection = () => {
  const { windows } = useApp();
  const hasVisibleWindows = windows.some((win) => !win.minimized);
  useScrollLock(hasVisibleWindows);
  return (
    <VBox
      className={`z-1 @container hide-scrollbar ${hasVisibleWindows ? "overflow-hidden" : "overflow-y-scroll"}`}
    >
      {/* <SearchModal></SearchModal> */}
      <FileSystemProvider>
        <DesktopApp />
      </FileSystemProvider>
      <Header />
      <Desktop />
      <img
        src={meDark}
        className="
            fixed
            z-97
            right-0
            bottom-0
            max-h-screen
            overflow-none
            aspect-auto
            "
      />
    </VBox>
  );
};

export default LandingSection;
