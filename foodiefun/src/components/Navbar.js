import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css";
import image from "./img/foodiefun-logo-long.png";

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
            <a href="/" class="nav-links">
            <Link to='/'>Home</Link>
            </a>
          </li>
          <li>
            <a href="/SignIn/SignUp" class="nav-links">
              <Link to='/loginform'>SignIn/SignUp</Link>
            </a>
          </li>
          <li>
            <a href="/Write a Review" class="nav-links">
            <Link to='/formreview'>Write a Review</Link>
            </a>
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
