import React, { useState } from "react";
import Style from "./style.module.scss";
import { assets } from "../../assets/assets";
function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className={Style.LoginPopup}>
      <form className={Style.Container}>
        <div className={Style.Title}>
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className={Style.Inputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className={Style.Condition}>
          <input type="checkbox" required />
          <p>By continuing, i aggre to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
              }}
            >
              CLick here
            </span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span
              onClick={() => {
                setCurrState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
