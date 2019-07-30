import React, {useState} from 'react';
import './App.css';


import Navbar from './components/Navbar'
import Form from './components/Form'
import ReviewForm from './components/ReviewForm/ReviewForm';
import UserInfo from './components/userInfo';
import mockarray from './components/mockarray';
import PageContent from './components/PageContent'
import { ThemeProvider, ThemeContext } from './components/contexts/ThemeContext'
import { LanguageProvider } from './components/contexts/LanguageContext'

const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = restaurant => {
    setReviews([...reviews, {...restaurant, id: Date.now()}])
  }

	return (
		<ThemeProvider>
			<LanguageProvider>
				<PageContent>
					<Navbar />
					{/* <Form /> */}
          {/* <ReviewForm addReview={addReview} /> */}
          {console.log(reviews)}
          <UserInfo data = {mockarray} />
				</PageContent>
			</LanguageProvider>
		</ThemeProvider>
	)
}

export default App
