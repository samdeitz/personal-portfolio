import { useApp } from "../context/AppContext";
import Header from "./Header.jsx";
import Desktop from "./desktop/Desktop.jsx";
import DesktopApp from "./desktop/DesktopApp.jsx";
import VBox from "./ui/VBox.jsx";
import signing from "../assets/images/signing.jpg";
import team from "../assets/images/team.jpg";
import { useScrollLock } from "../hooks/useScrollLock.js";

const LandingSection = ({ ready }: { ready: boolean }) => {
  const { windows } = useApp();
  const hasVisibleWindows = windows.some((win) => !win.minimized);
  useScrollLock(hasVisibleWindows);
  return (
    <VBox className={`fixed inset-0 h-dvh z-1 @container overflow-hidden pb-13 ${ready ? "motion-safe:animate-desktop-enter" : ""}`}>
      <img
        src={team}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 min-[900px]:right-auto min-[900px]:left-0 -z-10 h-auto max-h-[45svh] w-[clamp(28rem,55vw,48rem)] aspect-auto object-cover opacity-40"
        style={{
          top: "clamp(0rem, calc(24rem - 40vw), 14rem)",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <img
        src={signing}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-13 -z-10 h-auto max-h-[45svh] w-[clamp(28rem,65vw,56rem)] aspect-auto object-cover opacity-50 min-[900px]:opacity-35"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <DesktopApp />
      <Header ready={ready} />
      <Desktop />
    </VBox>
  );
};

export default LandingSection;
