import React from "react";
import "./OptionsMenu.css";
import { categories } from "../../assets/assets";
const OptionsMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="options-menu" id="options-menu">
        <h1>What would you like to eat?</h1>
        <p className="options-menu-text">
          Craving something delicious? Explore our menu and find your perfect
          meal!
        </p>
        <div className="options-menu-list">
          {categories.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.name ? "all" : item.name
                  )
                }
                key={index}
                className="options-menu-list-item"
              >
                <img
                  className={category === item.name ? "active" : ""}
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OptionsMenu;
