import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import Card from "./Card";

const PopularCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(db, "carFinder/"); // Replace with the path where your data is stored

        // Fetch the data from the reference
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
          const carList = Object.values(snapshot.val());
          const popularCar = carList
            .sort((a, b) => b.price_per_day - a.price_per_day)
            .slice(0, 4);

          setCars(popularCar);
        }
      } catch (error) {
        console.log("Error fetching cars:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container py-12">
      <h3>Popular Cars</h3>
      <ul className="grid grid-cols-4 gap-16">
        {cars.map((car, index) => (
          <Card car={car} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default PopularCar;
