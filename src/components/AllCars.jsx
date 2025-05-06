import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import Card from "./Card";

const AllCar = () => {
  const [cars, setCars] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  let displayedCars = showAll ? cars : cars.slice(0, 8);

  return (
    <div className="container py-12">
      <h3>Popular Cars</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16 mb-8 xl:mb-16 transition-all duration-500 ease-in-out">
        {displayedCars.map((car) => (
          <Card car={car} key={car.id} />
        ))}
      </ul>
      <div className="w-full mx-auto text-center">
        <button
          className="btn btn-secondary transition-all duration-300 ease-in-out"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less Cars" : "Show More Cars"}
        </button>
      </div>
    </div>
  );
};

export default AllCar;
