import VBox from "./ui/VBox.jsx"
import openWhite from "../assets/open-white.svg"
import openBlack from "../assets/open-black.svg"
import { useTheme } from "../ThemeProvider.jsx";


const Card = ( props ) => {
    const { isDark } = useTheme();
    
    return (

        <VBox {...props} className={`project-app h-fit hover:animate-shake cursor-pointer ${props.className}`}>
            <div className="relative">
                <img className="w-5 absolute bottom-1 left-1" src={isDark ? openWhite : openBlack} />
                <img className="object-cover block rounded-t-lg" src={props.imgsrc} />
            </div>
            <h3 className={`text-center font-bold ${isDark ? " bg-[rgba(0,0,0,0.3)]" : "bg-[rgba(255,255,255,0.3)]"}  rounded-b-lg`}>{props.apptitle}</h3>
        </VBox>
    )
}

export default Card;