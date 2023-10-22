import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/MoneyMastersLogo.jpg";

const Navbar = () => {
  const location = useLocation();
  const pagesWithoutProfileImg = ["/login", "/signup"];
  const isPageWithoutProfileImg = pagesWithoutProfileImg.includes(
    location.pathname
  );

  // TODO : Implement logic to logout user and change button text depending on authentication status

  return (
    <div className="flex flex-row">
      <div className="h-18 w-full flex flex-row">
        <img src={logo} className="w-20" />
        <div className="w-max h-max mt-auto mb-auto text-3xl ml-5">
          <Link to="/">MoneyMasters</Link>
        </div>
      </div>
      {!isPageWithoutProfileImg && (
        <div className="bg-gray-300 w-max h-10 mr-5 mt-auto mb-auto pl-2 pr-2 rounded-md shadow-md">
          <div className="w-max h-max mt-2">
            <Link to="/login">
              <p className="">Logout</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
