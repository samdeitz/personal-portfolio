import { useApp } from "../context/AppContext";
import Header from "./Header.jsx";
import Desktop from "./desktop/Desktop.jsx";
import DesktopApp from "./desktop/DesktopApp.jsx";
import VBox from "./ui/VBox.jsx";
import signing from "../assets/images/signing.jpg";
import team from "../assets/images/team.jpg";
import { useScrollLock } from "../hooks/useScrollLock.js";

const LandingSection = () => {
  const { windows } = useApp();
  const hasVisibleWindows = windows.some((win) => !win.minimized);
  useScrollLock(hasVisibleWindows);
  return (
    <VBox className="fixed inset-0 h-dvh z-1 @container overflow-hidden pb-13">
      <img
        src={team}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-10 h-auto w-[85%] max-w-3xl aspect-auto opacity-40 sm:w-[55%]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <img
        src={signing}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-13 -z-10 h-auto w-[85%] max-w-4xl aspect-auto opacity-50 sm:w-[65%]"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <DesktopApp />
      <Header />
      <Desktop />
    </VBox>
  );
};

export default LandingSection;
