import Header from './Header.jsx';
import Desktop from "./Desktop.jsx";
import VBox from "./VBox.jsx";

const LandingSection = () => {


    return (
        <VBox className="overflow-y-scroll items-center hide-scrollbar">
            <Header />
            <Desktop />
        </VBox>
    )
}

export default LandingSection;