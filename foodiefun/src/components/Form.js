import React, { useState, useRef } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [creds, setCreds] = useState({ userName: "", password: "" });
  const usernameFieldRef = useRef();
  const passwordFieldRef = useRef();

  const changeHandler = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    //   if (values.email === "alreadytaken@atb.dev") {
    //   	setErrors({ email: "That email is already taken" });
    //   } else {
    event.preventDefault();
    const username = usernameFieldRef.current.value;
    const password = passwordFieldRef.current.value;
    axios
      .post("https://foodiefun-api.herokuapp.com/api/auth/login", { username, password })
      .then(res => {
        console.log(res.data); // Data was created successfully and logs to console
      })
      .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
        // setSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  ref={usernameFieldRef}
                  name="userName"
                  onChange={changeHandler}
                  value={creds.userName}
                  id="user"
                  type="text"
                  class="input"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  ref={passwordFieldRef}
                  onChange={changeHandler}
                  name="password"
                  value={creds.password}
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon" /> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign In" />
              </div>
              <div class="hr" />
              <div class="foot-lnk">
                <a className="forgot" href="#forgot">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input id="pass" type="text" class="input" />
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign Up" />
              </div>
              <div class="hr" />
              <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
