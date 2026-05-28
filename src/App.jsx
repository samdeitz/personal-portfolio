import { ThemeProvider } from "./context/ThemeProvider";
import { AppProvider } from "./context/AppProvider";
import Terminal from "./components/desktop/apps/Terminal.jsx";
import LandingSection from "./components/LandingSection.jsx";
import Taskbar from "./components/taskbar/Taskbar";
import apps from "./appInfo.js";

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
