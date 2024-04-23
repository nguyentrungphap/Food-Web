import React, { useContext } from "react";
import Style from "./style.module.scss";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className={Style.FoodItem}>
      <div className={Style.Container}>
        <img src={image} alt="" className={Style.Image} />
        {!cartItems[id] ? (
          <img
            className={Style.Add}
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className={Style.Count}>
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className={Style.Info}>
        <div className={Style.NameRating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className={Style.Desc}>{description}</p>
        <p className={Style.Price}>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
