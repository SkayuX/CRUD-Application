import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children } : { children: React.ReactNode | React.ReactNode[] }) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        console.log(`Zaczęto o ${new Date().getSeconds()}`)
        setTimeout(() => {
            setState(true)
            console.log(`Zakończono o ${new Date().getSeconds()}`)
        }, 4000)
    }, [])

    const ContextValue = { themeLoaded: state }

    return (
        <ThemeContext.Provider value={ContextValue} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)