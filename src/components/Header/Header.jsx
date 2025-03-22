import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>TASTY FOOD COMMING TO YOU</h2>
          <p>
            Your time is precious, and we know your struggle only to get your
            food. Get your job done and lessen your hustle!
          </p>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
