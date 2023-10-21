import React from "react";

const Signup = () => {
  return (
    <div className="h-full">
      {/*This is the div for the login page*/}
      <div className=" w-full h-max mt-20">
        <h1 className="w-max ml-auto mr-auto mt-auto mb-auto text-3xl font-bold">
          Signup
        </h1>
      </div>
      <div className="w-4/12 h-max p-4 ml-auto mr-auto mt-5 shadow-lg">
        <div className="w-3/4 h-max ml-auto mr-auto p-2 flex flex-row justify-between">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-3/4 bg-gray-300"
          />
        </div>
        <div className="w-3/4 h-max ml-auto mr-auto p-2 flex flex-row justify-between">
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-3/4 bg-gray-300"
          />
        </div>
        <div className="w-3/4 h-max ml-auto mr-auto p-2 flex flex-row justify-between">
          <p>Password</p>
          <input
            type="text"
            placeholder="Enter your password"
            className="w-3/4 bg-gray-300"
          />
        </div>
        <div className="w-3/4 h-max ml-auto mr-auto mt-3">
          <button className="bg-moneyDarkGreen w-full text-4xl pb-2 shadow-md">
            Signup
          </button>
        </div>
      </div>
      <div className="">
        <div className="w-4/12 ml-auto mr-auto mt-10 flex flex-row justify-around">
          <div className="">
            <p className="text-2xl">Returning User?</p>
          </div>
          <div className=" w-1/4 h-max">
            <button className="bg-moneyDarkGreen w-full h-full text-xl pb-1 shadow-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
