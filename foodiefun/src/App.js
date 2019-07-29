import React from 'react'

import Navbar from './components/Navbar'
import Form from './components/Form'
import PageContent from './components/PageContent'
import { ThemeProvider, ThemeContext } from './components/contexts/ThemeContext'
import { LanguageProvider } from './components/contexts/LanguageContext'

const App = () => {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<PageContent>
					<Navbar />
					<Form />
				</PageContent>
			</LanguageProvider>
		</ThemeProvider>
	)
}

export default App
