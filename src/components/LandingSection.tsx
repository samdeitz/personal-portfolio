import { useEffect } from "react";
import { useApp } from "../context/AppContext";
import { FileSystemProvider } from "../context/FileSystemContext.js";
import Header from "./Header.jsx";
import Desktop from "./desktop/Desktop.jsx";
import DesktopApp from "./desktop/DesktopApp.jsx";
import VBox from "./ui/VBox.jsx";
import meDark from "@/assets/images/me-dark.png";

const LandingSection = () => {
  const { windows } = useApp();
  const hasVisibleWindows = windows.some((window) => !window.minimized);

  useEffect(() => {
    if (!hasVisibleWindows) return;

    // Lock document scrolling as well as the desktop's own scroll container.
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [hasVisibleWindows]);

  return (
    <VBox
      className={`@container hide-scrollbar ${hasVisibleWindows ? "overflow-hidden" : "overflow-y-scroll"}`}
    >
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
