import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/MoneyMastersLogo.jpg";

const Navbar = () => {
  const location = useLocation();
  const pagesWithoutProfileImg = ["/login", "/signup"];
  const isPageWithoutProfileImg = pagesWithoutProfileImg.includes(
    location.pathname
  );

  return (
    <div className="flex flex-row">
      <div className="h-18 w-full flex flex-row">
        <img src={logo} className="w-20" />
        <div className="w-max h-max mt-auto mb-auto text-3xl ml-5">
          MoneyMasters
        </div>
      </div>
      {!isPageWithoutProfileImg && (
        <div className="bg-gray-300 w-10 h-10 rounded-full mr-5 mt-auto mb-auto"></div>
      )}
    </div>
  );
};

export default Navbar;
