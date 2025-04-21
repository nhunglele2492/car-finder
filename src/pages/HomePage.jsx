import React from "react";
import HeroBanner from "../components/HeroBanner";
import PopularCar from "../components/PopularCar";
import AllCar from "../components/AllCars";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <PopularCar />
      <AllCar />
    </div>
  );
};

export default HomePage;
