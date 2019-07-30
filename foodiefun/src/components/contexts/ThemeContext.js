import React, { createContext, useState } from 'react'
import useToggleState from '../hooks/useToggleState'

const ThemeContext = createContext()

const ThemeProvider = props => {
	const [isDarkMode, toggleTheme] = useToggleState('false')

	return (
		<ThemeContext.Provider
			value={{ isDarkMode: isDarkMode, toggleTheme: toggleTheme }}
		>
			{props.children}
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider }
