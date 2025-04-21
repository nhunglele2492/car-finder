import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-svg.svg";

const Header = () => {
  return (
    <div className="container flex justify-between items-center gap-6 pt-8 pb-8">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="search w-[250px]">
        <input
          className="p-4 w-full"
          type="search"
          placeholder="Search for your car ..."
        />
      </div>
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
