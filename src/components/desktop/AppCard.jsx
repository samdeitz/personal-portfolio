import VBox from "@/components/ui/VBox.jsx"
import openWhite from "@/assets/icons/open-white.svg"
import openBlack from "@/assets/icons/open-black.svg"
import { useTheme } from "@/context/ThemeContext.js";


const Card = ( props ) => {
    const { isDark } = useTheme(); // theme boolean
    
    return (
        // return a card for an app
        <VBox {...props} className={`relative h-fit transition-[transform,opacity] shrink-0 transform-gpu duration-1000 project-app hover:animate-shake cursor-pointer ${props.className}`}>
            
            {/* Open icon */}
            <img className="w-5 absolute top-3 right-3" src={isDark ? openWhite : openBlack} />
            
            {/* App image */}
            <img className="@max-lg:w-24 w-35 sm rounded-t-lg" src={props.imgsrc} />

            {/* App name */}
            <h3 className={`@max-lg:w-24 w-35 text-center font-bold ${isDark ? " bg-[rgba(0,0,0,0.3)]" : "bg-[rgba(255,255,255,0.3)]"}  rounded-b-lg`}>{props.apptitle}</h3>
        </VBox>
    )
}

export default Card;