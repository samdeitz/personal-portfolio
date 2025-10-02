import VBox from "./ui/VBox.jsx"
import openWhite from "../assets/open-white.svg"
import openBlack from "../assets/open-black.svg"
import { useTheme } from "../ThemeProvider.jsx";


const Card = ( props ) => {
    const { isDark } = useTheme();
    
    return (

        <VBox {...props} className={`transition-all duration-1000 relative project-app h-fit hover:animate-shake cursor-pointer ${props.className}`}>
            <img className="w-5 absolute top-3 right-3" src={isDark ? openWhite : openBlack} />
            <img className="@max-lg:w-24 w-35 sm rounded-t-lg" src={props.imgsrc} />
            <h3 className={`@max-lg:w-24 w-35 text-center font-bold ${isDark ? " bg-[rgba(0,0,0,0.3)]" : "bg-[rgba(255,255,255,0.3)]"}  rounded-b-lg`}>{props.apptitle}</h3>
        </VBox>
    )
}

export default Card;