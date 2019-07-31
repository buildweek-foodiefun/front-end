import React, { useState } from "react";
import "./App.css";

import Form from "./Components/Form";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import UserInfo from "./Components/userInfo";
import mockarray from "./Components/mockarray";
import Navbar from "./Components/Navbar";
import RecipeApp from "./recipes/RecipeApp";

const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = restaurant => {
    setReviews([...reviews, { ...restaurant, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Navbar />
      <Form />
      <RecipeApp />
      {/* <ReviewForm addReview={addReview} /> */}
      {console.log(reviews)}
      {/* <UserInfo data = {mockarray} /> */}
    </div>
  );
};

export default App;
