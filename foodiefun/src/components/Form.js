import React, {useState, useEffect} from 'react';
import './FormStyles.css';



function Form() {
    const [restaurant, setRestaurant] = useState({});
    
    useEffect(() => {
    
        setRestaurant({menuItem: '',
                        comments: '',
                        waitTime: '',
                        photoOfOrder: '', 
                        price: '', 
                        foodRating: '',
                        dateOfVisit: ''})
    }, []);
    

    return (
    <form>
      <fieldset> 
      <legend>Sign up</legend>
      
        <div className="form-group row">
          <label for="menuItem" className="col-sm-2 col-form-label">
            Menu Item
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="menuItem"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="comments">Comments</label>
          <div>
          <textarea type="text" className="form-control" placeholder="Enter Comments"
          rows="6" cols="33"></textarea>
          </div>
          {/* <input
            type="text"
            className="form-control"
            placeholder="Enter Comments"
          /> */}
        </div>
        <div className="form-group">
          <label for="waitTime">Wait Time</label>
          <input
            type="time"
            className="form-control"
            placeholder="Wait Time"
          />
        </div>
        <div className="form-group">
          <label for="photoOfOrder">Photo of order</label>
          <input
            className="form-control"
            placeholder="photo of order"
            type="file" />
        </div>
        <div className="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label for="foodRating">Rate the food: 1-worst 5-best</label>
          <input
            type="number"
            className="form-control"
            placeholder="Rate the Food"
          />
        </div>
        <div className="form-group">
          <label for="dateOfVisit">Date of Visit</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date of Visit"
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