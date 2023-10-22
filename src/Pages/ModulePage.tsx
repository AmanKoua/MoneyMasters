import React from "react";
import Drawer from "../Components/Drawer";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <Drawer></Drawer>
      <div className="w-3/4 h-full ml-auto overflow-scroll">

       <div className=" w-3/4 ml-auto mr-auto mt-auto flex flex-col">        
        <h3 className="text-6xl text-center pt-3">
             Modules
          </h3>
          <div className="bg-moneyDarkGreen m-6 p-5 w-3/4 ml-auto mr-auto shadow-xl text-xl">
            <h5 className="font-bold text-3xl text-center ml-auto mr-auto">Savings</h5>
            <p className="text-center">Learn the importance of saving, how to start, and the benefits of consistency.</p>
          </div>
          <div className="bg-moneyDarkGreen m-6 p-5 w-3/4 ml-auto mr-auto shadow-xl text-xl">
            <h5 className="font-bold text-3xl text-center ml-auto mr-auto">Investing</h5>
            <p className="text-center">Get introduced to the world of investments, including stocks, ETFs, mutual funds, and bonds.</p>
          </div>
          <div className="bg-moneyDarkGreen m-6 p-5 w-3/4 ml-auto mr-auto shadow-xl text-xl">
            <h5 className="font-bold text-3xl text-center ml-auto mr-auto">Planning and Basics</h5>
            <p className="text-center"> Learn the tools and knowledge to create and stick to a personal budget, highlighting the importance of financial planning.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
