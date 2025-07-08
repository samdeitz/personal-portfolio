
import VBox from "./VBox.jsx"
import openWhite from "../assets/open-white.svg"
import openBlack from "../assets/open-black.svg"
import { useTheme } from "../ThemeProvider.jsx";


const Card = ( props ) => {
    const { isDark } = useTheme();
    
    return (

        <VBox {...props} className={`project-app ${props.className}`}>
            <div className="relative">
                <img className="w-5 absolute bottom-1 left-1" src={isDark ? openWhite : openBlack} />
                <img className="object-cover block rounded-lg" src={props.imgsrc} />
            </div>
            <h3 className="text-center">Project Title</h3>
        </VBox>
    )
}

export default Card;