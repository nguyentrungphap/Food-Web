import React from "react";
import Style from "./style.module.scss";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className={Style.Footer} id="footer">
      <div className={Style.Content}>
        <div className={Style.Left}>
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={Style.Icon}>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className={Style.Center}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className={Style.Right}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>012345767</li>
            <li>phapnguyen05032002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={Style.Copyright}>
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
