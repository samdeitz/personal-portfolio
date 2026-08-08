import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext.js"

export const ThemeProvider = ({ children }) => {

    const [isDark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark(!isDark);
    }

    useEffect(() => {
        document.body.classList.remove("dark", "light");
        document.body.classList.add(isDark ? "dark" : "light");
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(isDark ? "dark" : "light");
    }, [isDark])
    
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


