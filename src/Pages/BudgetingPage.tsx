import React from 'react'
import Drawer from '../Components/Drawer'
import { Outlet } from "react-router-dom";
import {Link} from 'react-router-dom'

const BudgetingPage = () => {
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
    )
}

export default BudgetingPage

