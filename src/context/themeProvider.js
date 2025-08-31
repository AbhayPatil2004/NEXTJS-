"use client"

import { useContext,createContext , useEffect , useState  } from "react";

export const ThemeContext = createContext() 

export default function ThemeProvider({children}){

    const [ isDark , setIsDark ] = useState(true)

    function toggleTheme(){
        setIsDark((prev) => !prev)
        if( isDark ){
            document.body.style.backgroundColor = "#121212"; 
        }
        else{
            document.body.style.color = "white";
        }
    }

    useEffect(() => [
        toggleTheme()
    ],[isDark])

    return <ThemeContext.Provider value = {{isDark , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}
export function useTheme() {
  return useContext(ThemeContext);
}