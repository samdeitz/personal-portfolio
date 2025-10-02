import Header from './Header.jsx';
import Desktop from "./Desktop.jsx";
import VBox from "./ui/VBox.jsx";
import meDark from "../assets/me-dark.png";
import meLight from "../assets/me-light.png";
import { useTheme } from "../ThemeProvider.jsx";

const LandingSection = () => {
    const { isDark } = useTheme();

    return (
        <VBox className="@container overflow-y-scroll hide-scrollbar">

            <Header />
            <Desktop />
            <img src={isDark ? meDark : meLight} className="
            fixed
            z-97
            right-0
            bottom-0
            max-h-[100vh]
            overflow-none
            aspect-auto
            "/>
        </VBox>
    )
}

export default LandingSection;