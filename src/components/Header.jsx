import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-svg.svg";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };
  return (
    <div className="container flex justify-between items-center gap-6 pt-8 pb-8">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <form onSubmit={handleSearch} className="search w-[300px]">
        <input
          className="p-4 w-full border border-grey rounded-lg"
          type="search"
          placeholder="Search for your car ..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
      <div className="menu-links">
        <ul className="text-right flex flex-row items-center justify-end flex-rows gap-2">
          <li>
            <Link to="/">Favorite</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
