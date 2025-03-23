import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          Get ready to indulge in a world of flavors! From fresh and crunchy to
          rich and indulgent, our menu is crafted to satisfy every taste bud.
          Whether you're in the mood for something light or a hearty meal, we’ve
          got you covered!
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explopre-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
