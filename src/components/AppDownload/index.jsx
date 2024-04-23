import React from "react";
import Style from "./style.module.scss";
import { assets } from "../../assets/assets";
function AppDownload() {
  return (
    <div className={Style.AppDownload} id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className={Style.Platforms}>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
