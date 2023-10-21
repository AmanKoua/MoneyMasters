import React from "react";
import logo from "../assets/MoneyMastersLogo.jpg";

const Navbar = () => {
  return (
    <div className="">
      <div className="h-14 w-full flex flex-row">
        <img src={logo} className="w-14" />
        <div className="w-max h-max mt-auto mb-auto text-2xl ml-5">
          MoneyMasters
        </div>
      </div>
    </div>
  );
};

export default Navbar;
