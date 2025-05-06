import imageUrl from "../assets/hero-banner.svg";
import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(db, "carFinder/"); // Replace with the path where your data is stored

        // Fetch the data from the reference
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
          const carList = Object.values(snapshot.val()).filter(
            (car) => car.id !== undefined
          );

          setCars(carList);
        }
      } catch (error) {
        console.log("Error fetching cars:", error);
      }
    };
    fetchData();
  }, []);

  let heroBannerItem = cars.slice(0, 1);

  return (
    <div
      className="h-[505px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container text-white flex flex-col items-start justify-center h-full">
        {heroBannerItem.length > 0 ? (
          <>
            <h2 className="mb-6">{heroBannerItem[0].title}</h2>
            <p>{heroBannerItem[0].full_description}</p>
            <Link
              to={`car/${heroBannerItem[0].id}`}
              className="btn btn-primary"
            >
              Rent Now
            </Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
