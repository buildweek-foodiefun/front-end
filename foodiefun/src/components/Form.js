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
                        waitTime: '', 
                        dateOfVisit: ''})
    }, []);
    

    return (
    <form>
      <fieldset>
        <legend>Signup</legend>
        {console.log(restaurant)}
        <div className="form-group row">
          <label for="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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