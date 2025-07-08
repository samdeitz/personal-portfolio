import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

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



export const useTheme = () => {return useContext(ThemeContext)};