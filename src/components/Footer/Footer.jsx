import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-content-logo" />
          <p>
            Experience the best feast with AdhiFeast! We bring you quality food,
            fast delivery, and an amazing dining experience.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Explore</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/delivery">Delivery</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="tel:+9841181633">+9841181633</a>
            </li>
            <li>
              <a href="mailto:aditya1stha@gmail.com">aditya1stha@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright &copy; 2025 <strong>AdhiFeast.com</strong> - All Rights
        Reserved
      </p>
    </div>
  );
};

export default Footer;
