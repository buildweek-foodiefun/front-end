import React, {useState} from 'react';
import './App.css';

import ReviewForm from './components/ReviewForm/ReviewForm';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = restaurant => {
    setReviews([...reviews, {...restaurant, id: Date.now()}])
  }

  return (
    <div className="App">
      {console.log(reviews)}
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default App;
