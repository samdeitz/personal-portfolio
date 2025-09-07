import { ThemeProvider } from "./ThemeProvider";
import { AppProvider } from './AppProvider';
import DesktopApp from "./components/DesktopApp.jsx";
import LandingSection from "./components/LandingSection.jsx";
import Taskbar from "./components/Taskbar";
import apps from "./appInfo.js";

function App() {
  return (
    
    <ThemeProvider>
      <AppProvider>

        <DesktopApp apps={apps} />
        <LandingSection />
        <Taskbar apps={apps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App;
