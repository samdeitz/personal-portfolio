import { ThemeProvider } from "./context/ThemeProvider";
import { TerminalProvider } from "./context/TerminalContext";
import { AppProvider } from "./context/AppProvider";
import LandingSection from "./components/LandingSection";
import Taskbar from "./components/taskbar/Taskbar";
import apps from "./apps/registry";
import SearchModal from "./components/desktop/SearchModal";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <TerminalProvider>
        <SearchProvider>
          <SearchModal></SearchModal>
          <Taskbar apps={apps} />
        </SearchProvider>

        <LandingSection />
      </TerminalProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
