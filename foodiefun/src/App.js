import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';


import Form from './components/Form'
import ReviewForm from './components/ReviewForm/ReviewForm';
import UserInfo from './components/userInfo';
import mockarray from './components/mockarray';

const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = restaurant => {
    setReviews([...reviews, {...restaurant, id: Date.now()}])
  }

	return (
		<div className='App'>
      <Link to='/loginform'>Login Form</Link>
      <Link to='/'>Home</Link>
      <Link to='/formreview'>Review Forms</Link>
			<Form /> 
      <ReviewForm addReview={addReview} />
      {console.log(reviews)}
		  <UserInfo data = {mockarray} />
		</div>
	)
}

export default App
