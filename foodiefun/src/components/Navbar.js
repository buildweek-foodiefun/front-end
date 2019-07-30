import React from "react";
import "./Navbar.css";
import { image } from "./img/foodiefun-logo-long.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars" />
        </span>
        <img src={image} />
        <ul class="main-nav" id="js-menu">
          <li>
            <a href="#" class="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              SignIn/SignUp
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Write a Review
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Recipes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
