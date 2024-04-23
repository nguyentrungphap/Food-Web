import React, { useState } from "react";
import Style from "./style.module.scss";
import Header from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";
import AppDownload from "../../components/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className={Style.Home}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
