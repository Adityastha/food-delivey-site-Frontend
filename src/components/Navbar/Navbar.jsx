import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("contact");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={assets.logo} alt="food delivery site logo" />
      </div>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("cart")}
          className={menu === "cart" ? "active" : ""}
        >
          Cart
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li>
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
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
