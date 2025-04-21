import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { get, ref } from "firebase/database";

const CarDetailPage = () => {
  const { id } = useParams();

  const [car, setCar] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const carRef = ref(db, `carFinder/${id - 1}`);
        const snapshot = await get(carRef);

        if (snapshot.exists()) {
          setCar(snapshot.val());
        } else {
          setCar({});
        }
      } catch (error) {
        console.error("❌ Error fetching car details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  const fullImageUrl = window.location.origin + "/" + car.car_image;

  console.log(car);

  return (
    <>
      <div className="bg-grey h-[600px]">
        <div className="container h-full">
          <div className="flex flex-col justify-center items-center h-full text-white">
            <h2>{car.title || "No Title"}</h2>
            <span className="text-xl">
              <span className="font-bold">{car.price_per_day || "N/A"}$/</span>{" "}
              <span className="text-sm">day</span>
            </span>
            {car.discounted_price_per_day && (
              <span className="line-through text-secondary ">
                {car.discounted_price_per_day}$
              </span>
            )}
            <img
              className="mt-10"
              src={fullImageUrl || "default.jpg"}
              alt={car.title}
            />
          </div>
        </div>
      </div>
      <div className="container my-12">
        <div className="mb-10">
          <h3>Description</h3>
          <p>{car.full_description || "No description available"}</p>
        </div>
        <div className="mb-10">
          <h3>Technical Details</h3>
          <table className="max-w-[690px] border border-gray-300 w-full text-left">
            <tbody>
              <tr className="border border-gray-300">
                <td className="p-4 text-secondary font-medium">Type Car</td>
                <td className="p-4 border-r text-right">
                  {car.category || "N/A"}
                </td>
                <td className="p-4 text-secondary font-medium">Capacity</td>
                <td className="p-4 text-right">
                  {car.car_details?.capacity || "N/A"}
                </td>
              </tr>
              <tr className="border border-gray-300">
                <td className="p-4 text-secondary font-medium">Steering</td>
                <td className="p-4 border-r text-right">
                  {car.car_details?.transmission || "N/A"}
                </td>
                <td className="p-4 text-secondary font-medium">Gasoline</td>
                <td className="p-4 text-right">
                  {car.car_details?.gas_tank_capacity || "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>More info about {car.title || "this car"}</h3>
      </div>
    </>
  );
};

export default CarDetailPage;
