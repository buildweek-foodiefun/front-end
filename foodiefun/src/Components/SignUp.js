import React, { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./SignUp.css";
import image from './img/Min.jpg'




const SignIn = () => {
    const [creds, setCreds] = useState({ userName: "", password: "" });
    const usernameFieldRef = useRef();
    const passwordFieldRef = useRef();


    const changeHandler = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('login');
        const username = usernameFieldRef.current.value;
        const password = passwordFieldRef.current.value;
        axios
            .post("https://foodiefun-api.herokuapp.com/api/auth/register", {
                username,
                password
            })
            .then(res => {
                console.log("DATA", res.data)
                localStorage.setItem('token', res.data.token)
                swal(
                    "Welcome to Foodie Fun!",
                    "You are now a registered user, please sign in and enjoy your stay!",
                    "success"
                );
            })
            .catch(err => {
                console.log('LOGIN FAILED', err.response); // There was an error creating the data and logs to console
            });
    }






    return (
        <div class="page-content">
            <div class="form-v6-content">
                <div class="form-left">
                    <img className="form-image" src={image} style={{ background: "linear-gradient: to right, #c33764, #1d2671", opacity: ".8", height: "500px" }} alt="form" />
                </div>
                <form
                    onSubmit={handleSubmit}
                    class="form-detail"
                    method="post">
                    <h2>Register Form</h2>
                    <div class="form-row">
                        <input
                            ref={usernameFieldRef}
                            onChange={changeHandler}
                            // value={creds.userName}
                            type="text"
                            name="id"
                            id="user-name"
                            class="input-text"
                            placeholder="Enter Desired User Name"
                            required />
                    </div>
                    <div class="form-row">
                        <input
                            ref={passwordFieldRef}
                            onChange={changeHandler}
                            value={creds.password}
                            type="password"
                            name="password"
                            id="password"
                            class="input-text"
                            placeholder="Password"
                            required />
                    </div>
                    <div class="form-row">
                        <input
                            type="password"
                            name="comfirm-password"
                            id="comfirm-password"
                            class="input-text"
                            placeholder="Comfirm Password"
                            required />
                    </div>
                    <div class="form-row-last">
                        <input type="submit"
                            name="register"
                            class="register"
                            value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )

}



export default SignIn