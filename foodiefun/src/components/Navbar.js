import React from "react";
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
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faSignInAlt} />
              </span>
              SignIn/SignUp
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faPen} />
              </span>
              Write A Review
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              <span className="icon-space">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              Recipes
            </a>
          </li>
        </ul>
      </nav>
      <div className="bottom-container" />
    </div>
  );
};

export default Navbar;
