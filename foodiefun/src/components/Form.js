import React, {useState, useEffect} from 'react';
import './FormStyles.css';

function Form({addReview}) {
    const [restaurant, setRestaurant] = useState({
                                                restaurantName: '',
                                                restaurantType: '',
                                                menuItem: '', 
                                                comments: '', 
                                                waitTime: '', 
                                                photoOfOrder: '', 
                                                price: '', 
                                                rate: '', 
                                                dateOfVisit: ''});
    
    const handleChange = event => {
        setRestaurant({...restaurant, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(restaurant);
        addReview(restaurant);
        setRestaurant({
                        restaurantName: '',
                        restaurantType: '',
                        menuItem: '', 
                        comments: '', 
                        waitTime: '', 
                        photoOfOrder: '', 
                        price: '', 
                        rate: '', 
                        dateOfVisit: ''})
    }

    return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Rate the Food</legend>
        <div className="form-group row">
          <label for="Restaurant Name" className="col-sm-2 col-form-label">
            Restaurant Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={restaurant.restaurantName}
              name='restaurantName'
              className="form-control"
              id="restaurantName"
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="Restaurant Type" className="col-sm-2 col-form-label">
            Restaurant Type
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={restaurant.restaurantType}
              name='restaurantType'
              className="form-control"
              id="restaurantType"
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="menuItem" className="col-sm-2 col-form-label">
            Menu Item
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={restaurant.menuItem}
              name='menuItem'
              className="form-control"
              id="menuItem"
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group">
          <label for="comments">Comments</label>
          <div>
            <textarea 
              type="text"
              value={restaurant.comments}
              name='comments'
              className="form-control"
              placeholder="Enter Comments"
              onChange={handleChange}
            rows="6" cols="33"></textarea>
          </div>
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
            required
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
          <label for="foodRating">Rate the food: 1-worst 5-best</label>
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
            name='dateOfVisit'
            className="form-control"
            placeholder="Date of Visit"
            onChange={handleChange} 
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
    
  </div>
      </fieldset>
    </form>
    )
}

export default Form;