import { ThemeProvider } from "./context/ThemeProvider";
import { AppProvider } from "./context/AppProvider";
import Terminal from "./components/desktop/apps/Terminal";
import LandingSection from "./components/LandingSection";
import Taskbar from "./components/taskbar/Taskbar";
import apps from "./appInfo";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <LandingSection />
        <Taskbar apps={apps} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
