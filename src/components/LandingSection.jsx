import Header from './Header.jsx';
import Desktop from "./Desktop.jsx";
import VBox from "./ui/VBox.jsx";
import me from "../assets/me2.png";

const LandingSection = () => {


    return (
        <VBox className="@container overflow-y-scroll items-center hide-scrollbar">

            <Header />
            <Desktop />
            <img src={me} className="
            fixed
            z-97
            right-0
            bottom-0
            max-h-[100vh]
            overflow-none
            "/>
        </VBox>
    )
}

export default LandingSection;