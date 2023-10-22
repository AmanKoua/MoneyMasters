import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../Components/Drawer";

const Portfolio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  let modulesProgressPercentage: Number = 30;
  let userPtsProgressPercentage: Number = 35;
  let userPointCount: Number = 15;
  let pointsTotal: Number = 350;

  return (
    <div>
      <div className="w-full h-screen flex flex-row">
        <Drawer></Drawer>
        <div className=" w-3/4 ml-auto h-max">
          <h1 className=" w-max h-max text-5xl ml-auto mr-auto">Portfolio</h1>
          <div className="h-full pr-5">
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-5">
              <div>
                <p className="w-max ml-auto mr-auto mt-3 text-2xl pr-3 pl-3">
                  Modules Progress
                </p>
              </div>
              <div className="w-full border-l border-r border-black">
                <div
                  className="bg-moneyDarkGreen animate-pulse"
                  style={{
                    width: `${modulesProgressPercentage}%`,
                    height: "100%",
                  }}
                >
                  <h1 className="w-max text-3xl ml-auto mr-auto pt-3">{`${modulesProgressPercentage}%`}</h1>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div>
                <p className="w-max ml-auto mr-auto mt-3 text-2xl pr-9 pl-3">
                  Points Progress
                </p>
              </div>
              <div className="w-full border-l border-r border-black">
                <div
                  className="bg-moneyDarkGreen animate-pulse"
                  style={{
                    width: `${userPtsProgressPercentage}%`,
                    height: "100%",
                  }}
                >
                  <h1 className="w-max text-3xl ml-auto mr-auto pt-3">{`${userPointCount}/${pointsTotal}`}</h1>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div>
                <p className="w-max ml-auto mr-auto mt-3 text-2xl pr-3 pl-3">
                  Badges Progress
                </p>
              </div>
              <div className=" w-3/4 border-l border-r border-black">
                <div className="h-full w-full flex flex-row justify-around">
                  <div className="h-3/4 w-12 bg-moneyDarkGreen rounded-full mt-auto mb-auto"></div>
                  <div className="h-3/4 w-12 bg-moneyDarkGreen rounded-full mt-auto mb-auto"></div>
                  <div className="h-3/4 w-12 bg-black rounded-full mt-auto mb-auto"></div>
                  <div className="h-3/4 w-12 bg-black rounded-full mt-auto mb-auto"></div>
                  <div className="h-3/4 w-12 bg-black rounded-full mt-auto mb-auto"></div>
                </div>
              </div>
              <div>
                <p className="w-max ml-auto mr-auto mt-3 text-2xl pr-3 pl-3">
                  2/5
                </p>
              </div>
            </div>
            <div className="h-32 flex flex-row justify-around"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
