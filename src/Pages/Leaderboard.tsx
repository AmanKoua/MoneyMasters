import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "../Components/Drawer";

import { ProfileContext } from "../Context/ProfileContext";

const Leaderboard = () => {
  const userProfile = useContext(ProfileContext);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="w-full flex flex-row">
        <Drawer></Drawer>
        <div className=" w-3/4 ml-auto h-max">
          <h1 className=" w-max h-max text-5xl ml-auto mr-auto">Leaderboard</h1>
          <div className="h-full overflow-y-scroll">
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-yellow-500 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  1
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 7/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-gray-300 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  2
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Bill Smith
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 330
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 5/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-orange-700 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  3
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Sally Jones
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 300
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 4/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Don Williams
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 290
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 4/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Steven Meijers
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 285
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 4/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-1/4 border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Rick Grimes
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 250
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 3/10
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

export default Leaderboard;
