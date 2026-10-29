import { useCallback, useState } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { TerminalProvider } from "./context/TerminalContext";
import { AppProvider } from "./context/AppProvider";
import LandingSection from "./components/LandingSection";
import Taskbar from "./components/taskbar/Taskbar";
import apps from "./apps/registry";
import SearchModal from "./components/desktop/SearchModal";
import SearchProvider from "./context/SearchContext";
import BootScreen from "./components/BootScreen";

function App() {
  const [booting, setBooting] = useState(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return false;
    try {
      return sessionStorage.getItem("booted") !== "true";
    } catch {
      return true;
    }
  });
  const completeBoot = useCallback(() => {
    try {
      sessionStorage.setItem("booted", "true");
    } catch {
      // Storage may be unavailable; the desktop must still open.
    }
    setBooting(false);
  }, []);

  return (
    <ThemeProvider>
      {booting && <BootScreen onComplete={completeBoot} />}
      <div inert={booting} className={booting ? "invisible" : "visible"}>
        <AppProvider>
          <TerminalProvider>
            <SearchProvider>
              <SearchModal></SearchModal>
              <Taskbar apps={apps} />
            </SearchProvider>

            <LandingSection ready={!booting} />
          </TerminalProvider>
        </AppProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
