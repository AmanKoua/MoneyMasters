import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../Components/Drawer";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={styles.Home}>
      <Drawer></Drawer>
      <div className="w-3/4 h-full ml-auto overflow-scroll">
        <div className=" w-3/4 ml-auto mr-auto mt-60 flex flex-col">
          <p className="text-4xl text-center pt-3">
            Embark on your financial learning journey today and discover the
            essential tools and knowledge to master your finances.
          </p>
          <button className="bg-moneyDarkGreen m-6 p-3 w-2/6 ml-auto mr-auto shadow-xl text-xl">
            Start Learning Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
