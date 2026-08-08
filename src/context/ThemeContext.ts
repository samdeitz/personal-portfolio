import { createContext, useContext } from "react";

export const ThemeContext = createContext(undefined);
export const useTheme = () => {return useContext(ThemeContext)};
