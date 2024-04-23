import React, { useContext } from "react";
import Style from "./style.module.scss";
import { StoreContext } from "./../../context/StoreContext";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  console.log(cartItems);
  return (
    <div className={Style.Cart}>
      <div className={Style.Items}>
        <div className={Style.Title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={item._id} className={`${Style.Title} ${Style.Item}`}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className={Style.Remove}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={Style.Bottom}>
        <div className={Style.Total}>
          <h2>Cart Totals</h2>
          <div>
            <div className={Style.Details}>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={Style.Details}>
              <p>Delivery free</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className={Style.Details}>
              <b>Total</b>
              <p>{getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={Style.Promocode}>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className={Style.Input}>
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
