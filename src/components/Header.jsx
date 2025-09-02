import VBox from "./VBox";
import { useTheme } from "../ThemeProvider";


const Header = () => {
    const { isDark } = useTheme();

    return (
        <VBox className="
        p-4
        pt-10
        text-center
        z-98
        ">
            <h1 className="text-3xl bold">Hello, I'm <span className={`title-gradient ${isDark ? "dark" : "light"}`}>Sam Deitz</span>...</h1>
            <h1 className="text-3xl bold">A full stack developer</h1>
        </VBox>       
    )
}

export default Header;