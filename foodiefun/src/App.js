import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import UserInfo from "./Components/userInfo";
import mockarray from "./Components/mockarray";
import Navbar from "./Components/Navbar";
import RecipeApp from "./recipes/RecipeApp";
import {axiosWithAuth} from './utils/auth';
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('https://foodiefun-api.herokuapp.com/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.log('you are not logged in', err))
  }, [])

  const addReview = (restaurant) => {
    console.log('adding to server', restaurant);
    axiosWithAuth().post('https://foodiefun-api.herokuapp.com/api/reviews', restaurant)
      .then(res => {
        setReviews([...reviews, {...res.data}]);
      })
      .catch(err => console.log('could not add item to server', err))
  };

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

	return (
		<div className='App'>
      <Navbar />
      {/* <RecipeApp /> */}
      
      {/* <SignUp /> */}
      <Route path='/loginform' component={SignIn} />
      <Route path='/signupform' component={SignUp} />
      <Route path='/recipes' component={RecipeApp} />
      {/* <ReviewForm /> */}
      {/* <ReviewForm addReview={addReview} /> */}
      {console.log(reviews)}
      
      {/* protected route code for home (UserInfo) */}
      {/* {
        localStorage.getItem('token') ? <Route path='/' render={props => <UserInfo {...props} data={reviews} setReviews={setReviews} />} /> : <Redirect to='/signupform' />
      } */}
      
        <Route exact path='/' render={props => {
                return localStorage.getItem('token') ? <UserInfo {...props} data={reviews} setReviews={setReviews} /> : <Redirect to='/loginform' />
        }} /> 

      {/* protected route code for ReviewForm */}
      {/* {
        localStorage.getItem('token') ? <Route path='/formreview' render={props => <ReviewForm {...props} addReview={addReview} />} /> : <Redirect to='/signupform' />
      } */}

      <Route exact path='/formreview' render={props => {
                      return localStorage.getItem('token') ? <ReviewForm {...props} addReview={addReview} /> : <Redirect to='/loginform' />
              }} /> 
      
      <Route path='/edit/:id' render={props => {
                    const targetedReview = reviews.find(review => review.id.toString() === props.match.params.id);
                    console.log(props.match);
                    return <ReviewForm {...props} initialCard={targetedReview} addReview={editReview} />;  
                  }}/>
		</div>
	)
};

export default App;
