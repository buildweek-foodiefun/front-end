import React from "react";
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
          <li><a href="/recipes">RECIPES</a></li>
          <li><a href="/loginform">SIGN IN</a></li>
          <li><a href="/signupform">SIGN UP</a></li>
          <li><a href="/formreview">ADD REVIEW</a></li>
        </ul>
        <div class="nav__icon">
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