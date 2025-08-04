import { createContext, useContext } from "react";


//default values for the theme context
export const ThemeContext = createContext({
      themeMode : "light",
      darkTheme  : () => {},
      lightTheme  : () => {},
      toggleTheme : () => {}
})

// ThemeContext.Provider is used to provide the context to the components here 
export const ThemeProvider = ThemeContext.Provider;

//custom hook to use the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}