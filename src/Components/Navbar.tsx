import React from "react";
import logo from "../assets/MoneyMastersLogo.jpg";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <div className="h-14 w-full flex flex-row">
        <img src={logo} className="w-14" />
        <div className="w-max h-max mt-auto mb-auto text-2xl ml-5">
          MoneyMasters
        </div>
      </div>
      <div className="bg-gray-300 w-10 h-10 rounded-full mr-5 mt-auto mb-auto"></div>
    </div>
  );
};

export default Navbar;
