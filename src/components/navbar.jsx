import React from "react";
import "../assets/css/style.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav id="navbar">
      <h2>INSTANT</h2>
      <ul className="navbar-list">
        <li>
          <a href="#section-one">Home</a>
        </li>
        <li>
          <a href="#showcase">Gallery</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <div className="hamburger-menu">
      <GiHamburgerMenu />

      </div>
    </nav>
  );
}

export default Navbar;
