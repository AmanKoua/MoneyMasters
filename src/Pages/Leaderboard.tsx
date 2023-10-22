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
        <div className=" w-3/4 ml-auto h-screen">
          <h1 className=" w-max h-max text-5xl ml-auto mr-auto">Leaderboard</h1>
          <div className="h-full overflow-scroll">
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-yellow-500 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  1
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-gray-300 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  2
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-orange-700 w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  3
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-16 flex flex-row justify-around mt-4">
              <div className="h-full bg-white w-16 rounded-full">
                <p className="w-max ml-auto mr-auto mt-5 text-xl font-bold">
                  X
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">Aman Koua</p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Points 350
                </p>
              </div>
              <div className="h-full w-max border-l border-r border-black pl-10 pr-10">
                <p className="w-max ml-auto mr-auto mt-3 text-4xl">
                  Badges 2/10
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
