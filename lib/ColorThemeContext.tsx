import { FC, createContext, useState, useEffect } from 'react'

import { themeColors } from './constants'

type ColorTheme = {
    colorMode: 'light' | 'dark'
    changeColorMode: (cm: 'light' | 'dark') => void
}

export const ColorThemeContext = createContext<ColorTheme>(null)

export const ColorThemeProvider: FC = ({ children }) => {
    const [colorMode, setColorMode] = useState(undefined)
    useEffect(() => {
        const root = window.document.documentElement
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        )
        setColorMode(initialColorValue)
    }, [])

    const changeColorMode = (mode: string) => {
        setColorMode(mode)

        window.localStorage.setItem('color-mode', mode)

        const root = window.document.documentElement
        root.style.setProperty('--initial-color-mode', mode)
        root.style.setProperty(
            '--color-text',
            mode === 'light'
                ? themeColors.light.textColor
                : themeColors.dark.textColor
        )
        root.style.setProperty(
            '--color-background',
            mode === 'light'
                ? themeColors.light.backgroundColor
                : themeColors.dark.backgroundColor
        )
    }
    return (
        <ColorThemeContext.Provider value={{ colorMode, changeColorMode }}>
            {children}
        </ColorThemeContext.Provider>
    )
}
