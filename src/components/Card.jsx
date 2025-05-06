import React from "react";
import { Link } from "react-router-dom";
import { FaGasPump } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Card = ({ car }) => {
  return (
    <li className="py-5 border border-secondary/[0.2] shadow-sm px-4 rounded-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-10">
        <div className="flex flex-col">
          <h4 className="font-bold">{car.title}</h4>
          <span className="text-secondary text-sm">{car.category}</span>
        </div>
        <CiHeart />
      </div>
      <img src={car.car_image} className="mb-10" />
      <div className="flex items-center justify-center gap-3 text-secondary text-sm mb-10">
        <span className="flex gap-1 items-center">
          <FaGasPump />
          {car.car_details.gas_tank_capacity}
        </span>
        <span className="flex gap-1 items-center">
          <TbSteeringWheel />
          {car.car_details.transmission}
        </span>
        <span className="flex gap-1 items-center">
          <IoPeopleSharp />
          {car.car_details.capacity}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl">
            <span className="font-bold">{car.price_per_day}$/</span>{" "}
            <span className="text-sm text-secondary">day</span>
          </span>
          {car.discounted_price_per_day && (
            <span className="line-through text-secondary ">
              {car.discounted_price_per_day}$
            </span>
          )}
        </div>
        <Link to={`car/${car.id}`} className="btn btn-primary">
          Rent Now
        </Link>
      </div>
    </li>
  );
};

export default Card;
