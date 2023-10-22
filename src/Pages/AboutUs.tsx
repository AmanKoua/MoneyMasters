import React from "react";
import Drawer from "../Components/Drawer";

import OpeImg from "../assets/Ope.jpg";
import AmanImg from "../assets/Aman.jpg";
import MinhImg from "../assets/Minh.jpg";
import IbrahimImg from "../assets/Ibrahim.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full flex flex-row">
        <Drawer></Drawer>
        <div className=" w-3/4 ml-auto h-screen">
          <h1 className=" w-max h-max text-5xl ml-auto mr-auto">About Us</h1>
          <div className="h-full overflow-scroll">
            <div className="h-1/2 flex flex-row justify-around">
              <div className="w-4/12">
                <img
                  src={OpeImg}
                  className="w-48 ml-auto mr-auto rounded-full"
                />
                <div className="w-max h-max ml-auto mr-auto mt-2">
                  <h1 className="bg-gray-200 text-2xl p-2 rounded-lg">
                    opemipo olagoke
                  </h1>
                </div>
                <div className="bg-gray-200 w-full h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-lg text-center">
                    opemipo olagoke is a software engineer who will need to fill
                    out this sample text before we deploy the website and before
                    we end up finishing after the 2 day period
                  </h1>
                </div>
              </div>
              <div className="w-4/12">
                <img
                  src={AmanImg}
                  className="w-48 ml-auto mr-auto rounded-full"
                />
                <div className="bg-gray-200 w-max h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-2xl">Aman Koua</h1>
                </div>
                <div className="bg-gray-200 w-full h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-lg text-center">
                    Aman Koua is a software engineer who will need to fill out
                    this sample text before we deploy the website and before we
                    end up finishing after the 2 day period
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-1/2 flex flex-row justify-around mt-10 mb-10">
              <div className="w-4/12">
                <img
                  src={MinhImg}
                  className="w-48 ml-auto mr-auto rounded-full"
                />
                <div className="bg-gray-200 w-max h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-2xl">Minh Nguyen</h1>
                </div>
                <div className="bg-gray-200 w-full h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-lg text-center">
                    Minh Nguyen is a software engineer who will need to fill out
                    this sample text before we deploy the website and before we
                    end up finishing after the 2 day period
                  </h1>
                </div>
              </div>
              <div className="w-4/12">
                <img
                  src={IbrahimImg}
                  className="w-48 ml-auto mr-auto rounded-full"
                />
                <div className="bg-gray-200 w-max h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-2xl">Ibrahim Hussaini</h1>
                </div>
                <div className="bg-gray-200 w-full h-max ml-auto mr-auto mt-2 p-2 rounded-lg">
                  <h1 className="text-lg text-center">
                    ibrahim hussaini is a software engineer who will need to
                    fill out this sample text before we deploy the website and
                    before we end up finishing after the 2 day period
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-32 flex flex-row justify-around"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
