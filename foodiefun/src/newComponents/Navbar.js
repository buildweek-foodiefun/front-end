import React from "react";
import {Link} from 'react-router-dom';
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
    <div>
      <div className="top-container" />
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars" />
        </span>
        <img
          className="logo-img"
          src={image}
          alt="Logo"
          style={{ height: "60px" }}
        />
        <ul className="main-nav" id="js-menu">
          <li>
            <a href="/" class="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faHome} />
            </span>
            <Link to='/'>Home</Link>
            </a>
          </li>
          <li>
            <a href="/SignIn/SignUp" class="nav-links">
            <span className="icon-space">
                <FontAwesomeIcon icon={faSignInAlt} />
              </span>
              <Link to='/loginform'>SignIn</Link>
            </a>
          </li>
          <li>
            <a href="/Write a Review" class="nav-links">
            <span className="icon-space">
                <FontAwesomeIcon icon={faPen} />
              </span>
            <Link to='/formreview'>Write a Review</Link>
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <Link to='/signupform'>SignUp</Link>
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              <Link to='/recipes'>Recipes</Link>
            </a>
          </li>
        </ul>
      </nav>
      <div className="bottom-container" />
    </div>
  );
};

export default Navbar;