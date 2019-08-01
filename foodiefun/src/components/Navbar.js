import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import image from "./img/foodiefun-logo-long.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faHome,
  faSignInAlt,
  faPen,
  faPhone,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCoffee,
  faCheckSquare,
  faHome,
  faSignInAlt,
  faPen,
  faPhone,
  faBookOpen
);

const Navbar = () => {
  return (
    <header id="header" role="heading">
      <div className="top-nav" ></div>
      <nav>
        <h1 class="logo">Foodie Fun</h1>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/recipes">RECIPES</a></li>
          <li><a href="/loginform">SIGN IN</a></li>
          <li><a href="/signupform">SIGN UP</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/addreview">ADD REVIEW</a></li>
        </ul>
        <div class="nav__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="bottom-nav" ></div>
    </header>




  );
};

export default Navbar;