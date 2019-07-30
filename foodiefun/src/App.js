import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';


import Form from './components/Form'
import ReviewForm from './components/ReviewForm/ReviewForm';
import UserInfo from './components/userInfo';
import mockarray from './components/mockarray';

const App = () => {
  const [reviews, setReviews] = useState([...mockarray]);

  const addReview = restaurant => {
    setReviews([...reviews, {...restaurant, id: Date.now()}])
  }

	return (
		<div className='App'>
      <Link to='/loginform'>Login Form</Link>
      <Link to='/'>Home</Link>
      <Link to='/formreview'>Review Forms</Link>
			{/* <Form />  */}
      <Route path='/formreview' render={props => <ReviewForm {...props} addReview={addReview} />} />
      <Route path='/loginform' component={Form} />
      {/* <ReviewForm addReview={addReview} /> */}
      {console.log(reviews)}
		  <Route exact path='/' render={props => <UserInfo {...props} data = {reviews} />} />
      <Route path='/edit/:id' render={props => {
                    const targetedReview = reviews.find(review => review.id.toString() === props.match.params.id);
                    console.log(props.match);
                    return <ReviewForm {...props} initialCard={targetedReview} addReview={addReview} />;  
                  }}/>
		</div>
	)
}

export default App
