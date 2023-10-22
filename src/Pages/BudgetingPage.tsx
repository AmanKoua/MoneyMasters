import React, { useEffect } from "react";
import Drawer from "../Components/Drawer";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const BudgetingPage = () => {
<<<<<<< HEAD
    return (
        <>
            <div className="overflow-y-auto">
                <Drawer></Drawer>
                <h3 className="w-3/4 ml-auto text-center text-6xl">Budgeting</h3>
                <div className="pt-10 w-3/4 ml-auto">
                    <div className="w-3/4 ml-auto mr-auto mt-auto flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}


export default BudgetingPage
=======
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
>>>>>>> 28248c0350158c2044ebf646382b7e8d4842e2d8

  return (
    <>
      <div className="overflow-y-auto h-screen">
        <Drawer></Drawer>
        <h3 className="w-3/4  ml-auto text-center text-6xl">Budgeting</h3>
        <div className=" pt-10 w-3/4 h-full ml-auto">
          <div className=" w-3/4 ml-auto mr-auto mt-auto flex flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetingPage;
