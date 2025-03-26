import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("contact");
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          {" "}
          <img src={assets.logo} alt="food delivery site logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <a
          href="#home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#options-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#"
          onClick={() => setMenu("cart")}
          className={menu === "cart" ? "active" : ""}
        >
          Cart
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="search icon"
          className="search-icon"
        />
        <div className="navbar-search-icon">
          <img src={assets.take_away} alt="" className="take-away" />
          <div className="cart-notification"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
