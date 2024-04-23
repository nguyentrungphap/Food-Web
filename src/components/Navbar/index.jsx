import React, { useContext, useState } from "react";
import Style from "./style.module.scss";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className={Style.Navbar}>
      <Link to="/">
        <img src={assets.logo} alt="" className={Style.Logo} />
      </Link>
      <ul className={Style.Menu}>
        <li
          className={menu === "home" ? Style.active : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </li>
        <li
          className={menu === "menu" ? Style.active : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </li>
        <li
          className={menu === "mobile" ? Style.active : ""}
          onClick={() => setMenu("mobile")}
        >
          Mobile App
        </li>
        <li
          className={menu === "contact" ? Style.active : ""}
          onClick={() => setMenu("contact")}
        >
          Contact Us
        </li>
      </ul>
      <div className={Style.Right}>
        <img src={assets.search_icon} alt="" />
        <div className={Style.SearchIcon}>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : Style.Dot}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
