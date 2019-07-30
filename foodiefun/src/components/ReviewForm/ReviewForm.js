import React, {useState, useEffect} from 'react';
import './FormStyles.scss';

function ReviewForm({addReview}) {
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
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Rate the Food</legend>
          
          <div className="form-group row">
            <div className="column">
            <label for="Restaurant Name" className="col-sm-2 col-form-label">
              Restaurant Name
            </label>
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
            <div className="coumn">
              <label for="Restaurant Type" className="col-sm-2 col-form-label">
                Restaurant Type
              </label>

              {/* event handler experiment on select html tag */}
              <select 
              name="food-types"
              type="text"
              value={restaurant.restaurantType}
              name='restaurantType'
              className="form-control"
              id="restaurantType"
              placeholder="Other Types"
              onChange={handleChange}>
                <option value="vegetarian">Vegetarian</option>
                <option value="american">American</option>
                <option value="fast food">Fast Food</option>
                <option value="mexican">Mexican</option>
                <option value="italian">Italian</option>
                <option value="ethiopian">Ethiopian</option>
                <option value="greek">Greek</option>
                <option value="ihop">IHOP</option>
                <option value="olivegarden">Olive Garden</option>
                <option value="sweetgreen">Sweetgreen</option>
                <option value="mccormicksmit">Ethiopian</option>
                <option value="mccormick">Mccormick and Schmick's</option>
                <option value="redlobster">Red Lobster</option>
                <option value="indian">Indian</option>
                <option value="soul food">Soul Food</option>
                <option value="thai">Thai</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="Outback">Outback</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <div className="column">
            <label for="menuItem" className="col-form-label">
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
          <div className="form-group row">
          <div className="column">
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
          </div>
          <div className="form-group row">
          <div className="column">
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
          </div>
          <div className="form-group row">
          <div className="column">
            <label for="photoOfOrder">Photo of Order</label>
            <input
              value={restaurant.photoOfOrder}
              name='photoOfOrder'
              className="form-control"
              placeholder="photo of order"
              onChange={handleChange}
              type="file"
            />
            </div>
          </div>
          <div className="form-group row">
          <div className="column">
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
          </div>
          <div className="form-group row">
          <div className="column">
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
          </div>
          <div className="form-group row">
          <div className="column">
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
          </div>
          <div className="row">
            <div className="column"> 
          <button type="button">Edit</button>
          <button className="delete" type="button">Delete</button>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          
          </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
}
export default ReviewForm;