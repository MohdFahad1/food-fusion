import React from "react";
import logo from "../../Assets/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="footer-para">
        We're a tream of Professional cooks who are excited about their food,
        amazing skills and expertise in cooking.
      </p>
      <div className='logo'>
      <div className='image-logo'>
        <img src={logo} alt="logo" />
        <h1>Taste</h1>
      </div>
      <p>Restaurant & BBQ</p>
      </div>
    </footer>
  );
}