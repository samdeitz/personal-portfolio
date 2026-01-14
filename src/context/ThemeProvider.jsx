import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext.js"

export const ThemeProvider = ({ children }) => {

    const [isDark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark(!isDark);
    }

    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
        document.body.classList.toggle("light", !isDark);
    }, [isDark])
    
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


