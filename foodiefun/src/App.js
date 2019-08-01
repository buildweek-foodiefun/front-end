import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Form from "./components/Form";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import UserInfo from "./components/userInfo";
import mockarray from "./components/mockarray";
import Navbar from "./components/Navbar";
import RecipeApp from "./recipes/RecipeApp";
import {axiosWithAuth} from './utils/auth';

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('https://foodiefun-api.herokuapp.com/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.log('you are not logged in', err))
  }, [])

  // const addReview = (restaurant) => {
  //   setReviews([...reviews, { ...restaurant}]);
  // }

  const addReview = (restaurant) => {
    console.log('adding to server', restaurant);
    axiosWithAuth().post('https://foodiefun-api.herokuapp.com/api/reviews', restaurant)
      .then(res => {
        setReviews([...reviews, {...res.data}]);
      })
      .catch(err => console.log('could not add item to server', err))
  };

  // edit submit handler for editing functionality of the restaurant cards.
  // const editReview = editedReview => {
  //   const reviewsCopy = [...reviews];
  //   const oldReview = reviewsCopy.find(review => review.id === editedReview.id);
  //   oldReview.restaurantName = editedReview.restaurantName;
  //   oldReview.restaurantType = editedReview.restaurantType;
  //   oldReview.menuItem = editedReview.menuType;
  //   oldReview.comments = editedReview.comments;
  //   oldReview.waitTime = editedReview.waitTime;
  //   oldReview.photoOfOrder = editedReview.photoOfOrder;
  //   oldReview.price = editedReview.price;
  //   oldReview.foodRating = editedReview.foodRating;
  //   oldReview.dateOfVisit = editedReview.dateOfVisit;
  //   setReviews(reviewsCopy);
  // }

  const editReview = editedReview => {
    axiosWithAuth().put(`https://foodiefun-api.herokuapp.com/api/reviews/${editedReview.id}`, editedReview)
      .then(res => {
        console.log(res.data);
        // For the page.
        const reviewsCopy = [...reviews];
        const oldReview = reviewsCopy.find(review => review.id === editedReview.id);
        oldReview.restaurantName = editedReview.restaurantName;
        oldReview.restaurantType = editedReview.restaurantType;
        oldReview.menuItem = editedReview.menuItem;
        oldReview.comments = editedReview.comments;
        oldReview.waitTime = editedReview.waitTime;
        oldReview.photoOfOrder = editedReview.photoOfOrder;
        oldReview.price = editedReview.price;
        oldReview.foodRating = editedReview.foodRating;
        oldReview.dateOfVisit = editedReview.dateOfVisit;
        setReviews(reviewsCopy);
      })
      
      .catch(err => {
        console.error('Can not edit message', err);
      })
  }

  // Delete button functionality. Will need send this onClick function to 
  // to userCard.js UserCard component: 

	return (
		<div className='App'>
      <Navbar />
      {/* <Form /> */}
      {/* <RecipeApp /> */}
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
