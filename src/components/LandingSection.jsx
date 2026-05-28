import Header from "./Header.jsx";
import Desktop from "./desktop/Desktop.jsx";
import DesktopApp from "./desktop/DesktopApp.jsx";
import Terminal from "./desktop/apps/Terminal.jsx";
import VBox from "./ui/VBox.jsx";
import meDark from "@/assets/images/me-dark.png";

const LandingSection = () => {
  return (
    <VBox className="@container overflow-y-scroll hide-scrollbar">
      <DesktopApp />
      <Header />
      <Desktop />
      <img
        src={meDark}
        className="
            fixed
            z-97
            right-0
            bottom-0
            max-h-screen
            overflow-none
            aspect-auto
            "
      />
    </VBox>
  );
};

export default LandingSection;
