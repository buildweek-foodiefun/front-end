import React, { useState, createContext } from 'react'

const LanguageContext = createContext()

const LanguageProvider = props => {
	const [language, setLanguage] = useState('english')
	const changeLanguage = e => setLanguage(e.target.value)

	return (
		<LanguageContext.Provider
			value={{ language: language, changeLanguage: changeLanguage }}
		>
			{props.children}
		</LanguageContext.Provider>
	)
}

export { LanguageContext, LanguageProvider }
