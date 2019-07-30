import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = restaurant => {
    setReviews([...reviews, {...restaurant, id: Date.now()}])
  }

  return (
    <div className="App">
      {console.log(reviews)}
      <Form addReview={addReview} />
    </div>
  );
}

export default App;
