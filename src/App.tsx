import { ThemeProvider } from "./context/ThemeProvider";
import { AppProvider } from "./context/AppProvider";
import LandingSection from "./components/LandingSection";
import Taskbar from "./components/taskbar/Taskbar";
import apps from "./apps/registry";

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
