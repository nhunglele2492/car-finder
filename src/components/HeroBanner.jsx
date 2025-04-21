import React from "react";
import imageUrl from "../assets/hero-banner.svg";

const HeroBanner = () => {
  return (
    <div
      className="h-[505px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container text-white flex flex-col items-start justify-center h-full">
        <h2 className="mb-6">The Best Platform for Car Rental</h2>
        <p>
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </p>
        <a href="#" className="btn btn-primary">
          Rent Now
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
