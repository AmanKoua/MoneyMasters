import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import { backendURL } from "../Context/EnvironmentContext";

const Login = () => {
  const navigate = useNavigate();
  const userProfile = useContext(ProfileContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="h-full">
      {/*This is the div for the login page*/}
      <div className=" w-full h-max mt-20">
        <h1 className="w-max ml-auto mr-auto mt-auto mb-auto text-3xl font-bold">
          Login
        </h1>
      </div>
      <div className="w-4/12 h-max p-4 ml-auto mr-auto mt-5 shadow-lg">
        <div className="w-3/4 h-max ml-auto mr-auto p-2 flex flex-row justify-between">
          <p>Email</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-3/4 bg-gray-300"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="w-3/4 h-max ml-auto mr-auto p-2 flex flex-row justify-between">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-3/4 bg-gray-300"
            value={userPass}
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
          />
        </div>
        <div className="w-3/4 h-max ml-auto mr-auto mt-3">
          <button
            className="bg-moneyDarkGreen w-full text-4xl pb-2 shadow-md"
            onClick={async () => {
              setError("");
              setMessage("");

              const response = await fetch(`${backendURL}/user/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userEmail, password: userPass }),
              });

              const json = await response.json();

              if (response.ok) {
                setMessage("Sucessfully logged into account!");
                let responsePayload = {
                  payload: json.payload,
                  token: json.token,
                };
                userProfile.dispatch({ type: "SET", payload: responsePayload });
              } else {
                setError("Logging in failed!");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="">
        <div className="w-max ml-auto mr-auto mt-10">
          <p className="">Forgot password?</p>
        </div>
      </div>
      <div className="">
        <div className="w-4/12 ml-auto mr-auto mt-10 flex flex-row justify-around">
          <div className="">
            <p className="text-2xl">New Here?</p>
          </div>
          <div className=" w-1/4 h-max">
            <button
              className="bg-moneyDarkGreen w-full h-full text-xl pb-1 shadow-md"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
      {error && (
        <div className="ag bg-moneyError w-3/12 ml-auto mr-auto mt-3 border-2 border-red-600 text-center">
          {error}
        </div>
      )}
      {message && (
        <div className="ag bg-moneyMessage w-3/12 ml-auto mr-auto mt-3 border-2 border-green-600 text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
