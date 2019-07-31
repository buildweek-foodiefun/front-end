import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from 'axios'
import Form from "./components/Form";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import UserInfo from "./components/userInfo";
import mockarray from "./components/mockarray";
import Navbar from "./components/Navbar";
import RecipeApp from "./recipes/RecipeApp";

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(async() =>{
    const reviewState = await axios.get('https://foodiefun-api.herokuapp.com/api/reviews', {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkIiwiaWF0IjoxNTY0NTcxMjM2LCJleHAiOjE1NjQ4MzA0MzZ9.RpdHbaqncnttO3h-Iq6U6MYYGkxmQkTeLSIH3708iXQ'
      }
    });
    setReviews(reviewState.data)
    //console.log("reviewstate", reviewState.data)

  },[])

  const addReview = restaurant => {
    setReviews([...reviews, { ...restaurant, id: Date.now() }]);
  };

  // edit submit handler for editing functionality of the restaurant cards.
  const editReview = editedReview => {
    const reviewsCopy = [...reviews];
    const oldReview = reviewsCopy.find(review => review.id === editedReview.id);
    oldReview.restaurantName = editedReview.restaurantName;
    oldReview.restaurantType = editedReview.restaurantType;
    oldReview.menuItem = editedReview.menuType;
    oldReview.comments = editedReview.comments;
    oldReview.waitTime = editedReview.waitTime;
    oldReview.photoOfOrder = editedReview.photoOfOrder;
    oldReview.price = editedReview.price;
    oldReview.foodRating = editedReview.foodRating;
    oldReview.dateOfVisit = editedReview.dateOfVisit;
    setReviews(reviewsCopy);
  }

  // Delete button functionality. Will need send this onClick function to 
  // to userCard.js UserCard component: 
  const deleteReview = data => {
    console.log(data.id)
    setReviews([...reviews.filter(review => review.id !== data.id)])
  }

	return (
		<div className='App'>
      <Navbar />
      {/* <Form /> */}
      {/* <RecipeApp /> */}
      <Link to='/loginform'>Login Form</Link>
      <Link to='/'>Home</Link>
      <Link to='/formreview'>Review Forms</Link>
			{/* <Form />  */}
      <Route path='/formreview' render={props => <ReviewForm {...props} addReview={addReview} />} />
      <Route path='/loginform' component={Form} />
      {/* <ReviewForm addReview={addReview} /> */}
      {console.log(reviews)}

		  <Route exact path='/' render={props => <UserInfo {...props} data = {reviews} setReviews={setReviews} />} />
      

      <Route path='/edit/:id' render={props => {
                    const targetedReview = reviews.find(review => review.id.toString() === props.match.params.id);
                    console.log(props.match);
                    return <ReviewForm {...props} initialCard={targetedReview} addReview={editReview} />;  
                  }}/>
		</div>
	)
};

export default App;
