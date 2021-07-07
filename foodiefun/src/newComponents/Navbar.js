import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import image from "./img/foodiefun-logo-long.png";
const Navbar = () => {
  return (
    <header id="header" role="heading">
      <div className="top-nav" ></div>
      <nav>
        <div className="nav">
          <img src={image} className="logo" alt="Logo" style={{ width: "320px" }} />
        </div>
        <ul>
          <span>
            <li><a href="/">HOME</a></li>
          </span>
          <li><Link to="/recipes">RECIPES</Link></li>
          <li><Link to="/loginform">SIGN IN</Link></li>
          <li><Link to="/signupform">SIGN UP</Link></li>
          <li><Link to="/formreview">ADD REVIEW</Link></li>
        </ul>
        <div className="nav__icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="bottom-nav" ></div>
      <div id="color-overlay"></div>
      <div className="hero flex-center">
        <div className="hero-message">
          <h1 className="hero-title">Foodie Fun</h1>
          <h2 className="hero-sub-title">You Can Do It When You Foodie Fun It </h2>
        </div>
      </div>
    </header>
  );
};
export default Navbar;