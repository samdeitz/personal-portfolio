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
    <VBox className="fixed inset-0 h-dvh z-1 @container overflow-hidden pb-13">
      <FileSystemProvider>
        <DesktopApp />
      </FileSystemProvider>
      <Header />
      <Desktop />
      <div className="hero-photo-wrap">
        <img
          src={meDark}
          className="
            fixed
            hero-photo
            pointer-events-none
            z-97
            right-0
            bottom-0
            max-h-screen
            overflow-none
            aspect-auto
            "
        />
      </div>
    </VBox>
  );
};

export default LandingSection;
