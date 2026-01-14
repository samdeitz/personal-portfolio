import VBox from "./ui/VBox";
import { useTheme } from "@/ThemeProvider";


const Header = () => {
    const { isDark } = useTheme();

    return (
        <VBox className="
        p-4
        py-10
        text-center
        z-98
        ">
            <h1 className={`text-2xl leading-tight font-normal`}>Hello,</h1>
            <h1 className={`text-5xl leading-tight font-bold -mt-2 title-gradient ${isDark ? "dark" : "light"}`}>I'm Sam Deitz</h1>
            <h1 className={`text-2xl leading-tight font-normal`}>A Front End Developer</h1>
        </VBox>       
    )
}

export default Header;