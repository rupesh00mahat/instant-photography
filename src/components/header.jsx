import React from "react";
import Navbar from "./navbar";
import "../assets/css/style.css";

function Header() {
  return (
    <div id="header">
      <Navbar />
      <section className="header">
        <div className="header-title">
          <h1>INSTANT</h1>
          <p>PHOTO STUDIO</p>
        </div>
        <div className="header-content">
          <p>Address</p>
          <p>Tel</p>
          <p>7 Days a week from 9:00 am to 7:00 pm</p>
        </div>
      </section>
    </div>
  );
}

export default Header;
