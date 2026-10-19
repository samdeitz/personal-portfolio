import { useState, useLayoutEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setDark] = useState(true);
  const toggleTheme = () => setDark((dark) => !dark);
  const setTheme = (theme: "dark" | "light") => setDark(theme === "dark");
  useLayoutEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(isDark ? "dark" : "light");
  }, [isDark]);
  return <ThemeContext.Provider value={{ isDark, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
};
