import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "../popular/popular";
import TopRated from "./topRated/topRated";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
