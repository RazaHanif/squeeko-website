
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
    children: React.ReactNode
}

type ThemeProviderState = {
    theme: Theme
}

const initialState: ThemeProviderState = {
    theme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    )

    useEffect(() => {
        const root = window.document.documentElement
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        const applyTheme = () => {
            const systemTheme = mediaQuery.matches ? "dark" : "light"

            root.classList.remove("light", "dark")
            root.classList.add(systemTheme)

            setTheme(systemTheme)
        }

        applyTheme()

        mediaQuery.addEventListener("change", applyTheme)

        return () => {
            mediaQuery.removeEventListener("change", applyTheme)
        }
    }, [])

    return (
        <ThemeProviderContext.Provider value={{ theme }}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeProviderContext)
}
