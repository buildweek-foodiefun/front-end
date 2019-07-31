import React from "react";
import "./Navbar.css";
import image from "./img/foodiefun-logo-long.png";
import {Route, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars" />
        </span>
        <img
          className="logo-img"
          src={image}
          alt="Logo"
          style={{ height: "70px" }}
        />
        <ul class="main-nav" id="js-menu">
          <li>


            <Link to='/' class="nav-links">Home</Link>
            {/* <a href="/" class="nav-links">
              Home
            </a> */}
          </li>
          <li>
           <Link to='/loginform' class="nav-links">Login Form</Link>
            {/* <a href="/SignIn/SignUp" class="nav-links">
              SignIn/SignUp
            </a> */}


          </li>
          <li>
          <Link to='/formreview' class="nav-links" >Write a Review</Link>
            {/* <a href="/Write a Review" class="nav-links">
              Write a Review
            </a> */}
          </li>
          <li>
            <a href="/Contact Us" class="nav-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Recipes" class="nav-links">
              Recipes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
