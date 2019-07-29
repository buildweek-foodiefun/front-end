import React, {useState, useEffect} from 'react';
import './FormStyles.css';

function Form() {
    const [restaurant, setRestaurant] = useState({});
    
    const handleChange = event => {
        setRestaurant({...restaurant, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setRestaurant({menuItem: '', 
                        comments: '', 
                        waitTime: '', 
                        photoOfOrder: '', 
                        price: '', 
                        foodRating: '', 
                        dateOfVisit: ''})
    }

    return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group row">
          <label for="menuItem" className="col-sm-2 col-form-label">
            Menu Item
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={restaurant.MenuItem}
              name='menuItem'
              className="form-control"
              id="menuItem"
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group">
          <label for="comments">Comments</label>
          <input
            type="text"
            value={restaurant.comments}
            name='comments'
            className="form-control"
            placeholder="Enter Comments"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="waitTime">Wait Time</label>
          <input
            type="time"
            value={restaurant.waitTime}
            name='waitTime'
            className="form-control"
            placeholder="Wait Time"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="photoOfOrder">Photo of Order</label>
          <input
            type="text"
            value={restaurant.photoOfOrder}
            name='photoOfOrder'
            className="form-control"
            placeholder="photo of order"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            value={restaurant.price}
            name='price'
            className="form-control"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="foodRating">Rate the food</label>
          <input
            type="number"
            value={restaurant.rate}
            name='rate'
            className="form-control"
            placeholder="Rate the Food"
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label for="dateOfVisit">Date of Visit</label>
          <input
            type="date"
            value={restaurant.dateOfVisit}
            name='date'
            className="form-control"
            placeholder="Date of Visit"
            onChange={handleChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
    )
}

export default Form;