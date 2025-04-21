import React from "react";
import logo from "../assets/logo-svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container py-12">
      <div className="footer-top text-secondary flex items-start justify-between pb-12 border-b-2 border-b-secondary">
        <div>
          <img className="mb-6" src={logo} alt="logo" />
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div>
          <h3 className="text-body">About</h3>
          <ul className="flex flex-col">
            <Link to="/">How it works?</Link>
            <Link to="/">Created By</Link>
          </ul>
        </div>
      </div>
      <div className="footer-bottom py-12 flex items-start justify-between pb-12">
        <div className="">
          <p>©2025 CarFinder. All rights reserved</p>
        </div>
        <div>
          <ul className="flex gap-3">
            <Link to="/">Privacy & Policy</Link>
            <Link to="/">Terms & Condition</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
