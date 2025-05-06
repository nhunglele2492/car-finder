import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const SearchPages = () => {
  const [cars, setCars] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

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

  const filteredItems = cars.filter((item) =>
    item.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 container">
      <h2 className="text-xl mb-4">Results for: "{query}"</h2>
      <ul className="grid grid-cols-4 gap-16 mb-16 transition-all duration-500 ease-in-out">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <Card key={index} car={item} />)
        ) : (
          <h2 className="col-span-4 text-center text-gray-500">
            There are no results for: "{query}"
          </h2>
        )}
      </ul>
    </div>
  );
};

export default SearchPages;
