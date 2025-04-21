import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const SearchPages = ({ results }) => {
  return (
    <div className="container py-12">
      <h3>Popular Cars</h3>
      <ul className="grid grid-cols-4 gap-16 mb-16 transition-all duration-500 ease-in-out">
        {results.map((car, index) => (
          <Card car={car} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default SearchPages;
