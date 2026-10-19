import { createContext, useContext } from "react";
interface ThemeValue { isDark: boolean; toggleTheme: () => void; setTheme: (theme: "dark" | "light") => void }
export const ThemeContext = createContext<ThemeValue | null>(null);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Theme requires ThemeProvider");
  return context;
};
