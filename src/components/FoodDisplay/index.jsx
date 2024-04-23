import React, { useContext } from "react";
import Style from "./style.module.scss";
import { StoreContext } from "./../../context/StoreContext";
import FoodItem from "../FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className={Style.FoodDisplay} id="food-display">
      <h2>Top dishes near you</h2>
      <div className={Style.List}>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
