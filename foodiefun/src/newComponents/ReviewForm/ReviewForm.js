import React, { useState } from 'react';
import './FormStyles.css';


const ReviewForm = props => {

  const { addReview, initialCard } = props;
  const [restaurant, setRestaurant] = useState(
    initialCard || {
      id: Date.now(),
      restaurantName: "",
      restaurantType: "",
      menuItem: "",
      comments: "",
      waitTime: "",
      photoOfOrder: "",
      price: "",
      foodRating: "",
      dateOfVisit: ""

    }
  );

  const fileSelectedHandler = event => {
    console.log("BOOYAA", event)
  }



  const handleChange = event => {
    setRestaurant({ ...restaurant, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(restaurant);
    addReview(restaurant);
    // setRestaurant({
    //   restaurantName: "",
    //   restaurantType: "",
    //   menuItem: "",
    //   comments: "",
    //   waitTime: "",
    //   photoOfOrder: "",
    //   price: "",
    //   foodRating: "",
    //   dateOfVisit: "",
    //   photoOfOrder: ''
    // });

    props.history.push('/');
  };

  const foodOptions = [
    "Vegetarian",
    "American",
    "Fast Food",
    "Mexican",
    "Italian",
    "Ethiopian",
    "Greek",
    "Indian",
    "Soul Food",
    "Thai",
    "Mediterranean",
    "Vietnamese",
    "Sushi",
    "Spanish",
    "Jamaican"

  ];

  return (
    <form onSubmit={handleSubmit}>
      <div class="new-login-wrap">
        <div class="new-login-html">
          <label class="newTab">Rate Your Food Experience</label>
          <div class="login-form">
            <div>
              <div class="group">
                <label for="restaurant-name" class="label">
                  Restaurant Name
                </label>
                <input
                  name="restaurantName"
                  onChange={handleChange}
                  value={restaurant.restaurantName}
                  type="text"
                  class="input"
                />
              </div>
              <div class="group">
                <label for="Restaurant Type" className="label">
                  Restaurant Type
                </label>

                {/* event handler experiment on select html tag */}
                <select
                  name="food-types"
                  type="text"
                  value={restaurant.restaurantType}
                  // eslint-disable-next-line
                  name="restaurantType"
                  className="form-control"
                  id="restaurantType"
                  placeholder="Other Types"
                  onChange={handleChange}
                  // eslint-disable-next-line
                  className="input"
                >
                  {/* <option value="vegetarian">Vegetarian</option> */}
                  {foodOptions.map((food, index) => {
                    return (
                      <option key={index} value={food}>
                        {food}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="group">
                <label for="Menu-Item" class="label">
                  Menu Item
                </label>
                <input
                  type="text"
                  value={restaurant.menuItem}
                  name="menuItem"
                  className="form-control"
                  id="menuItem"
                  onChange={handleChange}
                  // eslint-disable-next-line
                  className="input"
                />
              </div>
              <div class="group">
                <label for="comments" className="label">
                  Comments
                </label>
                <textarea
                  type="text"
                  value={restaurant.comments}
                  name="comments"
                  className="form-control"
                  placeholder="Enter Comments"
                  onChange={handleChange}
                  rows="6"
                  cols="33"
                  // eslint-disable-next-line
                  className="input"
                />
              </div>
              <div className="group numeric-group">
                <div className="numeric">
                  <label for="waitTime" className="label">
                    Wait Time
                  </label>
                  <input
                    type="number"
                    value={restaurant.waitTime}
                    name="waitTime"
                    className="form-control"
                    placeholder="Wait Time"
                    onChange={handleChange}
                    // eslint-disable-next-line
                    className="input"
                    step="5"
                    min="0"
                    style={{ width: 80 }}
                  />
                </div>
                <div className="numeric">
                  <label for="foodRating" className="label">
                    Rate the food
                  </label>
                  <input
                    type="number"
                    value={restaurant.foodRating}
                    name="foodRating"
                    className="input"
                    placeholder="Rate the Food"
                    min='0'
                    max='5'
                    onChange={handleChange}
                    style={{ width: 80 }}
                  />
                </div>
                <div className="numeric">
                  <label for="price" className="label">
                    Price
                  </label>
                  <input
                    type="number"
                    value={restaurant.price}
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    onChange={handleChange}
                    // eslint-disable-next-line
                    className="input"
                    step="2"
                    min="3"
                    style={{ width: 80 }}
                  />
                </div>
                <div className="numeric">
                  <label for="dateOfVisit" className="label">
                    Date of Visit
                  </label>
                  <input
                    type="date"
                    value={restaurant.dateOfVisit}
                    name="dateOfVisit"
                    className="form-control"
                    placeholder="Date of Visit"
                    onChange={handleChange}
                    // eslint-disable-next-line
                    className="input"
                    style={{ width: 200 }}
                  />
                </div>
              </div>
              <div class="group">
                <label for="photoOfOrder" className="label">
                  Photo of Order
                </label>
                <input
                  type="file"
                  value={restaurant.photoOfOrder}
                  name="photoOfOrder"
                  className="form-control"
                  placeholder="photo of order"
                  onChange={handleChange}
                  type="text"
                  // eslint-disable-next-line
                  className="input"
                />
              </div>
              <div class="group">
                <button type="submit" class="button btn" value="Sign Up">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};


export default ReviewForm;