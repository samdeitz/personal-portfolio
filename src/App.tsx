import { ThemeProvider } from "./context/ThemeProvider";
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
        <SearchProvider>
          <SearchModal></SearchModal>
          <Taskbar apps={apps} />
        </SearchProvider>

        <LandingSection />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
