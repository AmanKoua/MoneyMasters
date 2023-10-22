import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

interface Scenario {
    description: string;
    cost: number;
}

const B_1 = () => {
    const [openQuiz, setOpenQuiz] = useState(false);
    const scenarios: Scenario[] = [
        { description: 'Pay $400 for rent', cost: 400 },
        { description: 'Buy $50 worth of groceries', cost: 50 },
    ];
    const [money, setMoney] = useState(1000);
    const [currentScenario, setCurrentScenario] = useState(0);

    const handlePay = () => {
        setMoney(money - scenarios[currentScenario].cost);
        setCurrentScenario(currentScenario + 1);
    };

    const handleSkip = () => {
        setCurrentScenario(currentScenario + 1);
    };

    return (
        <div >
            <div className=' bg-slate-200 p-4 rounded-xl'>
            <p className='  font-bold text-xl border-b border-black '>Definition of Budgeting</p>
                <p className='p-3'>
                Budgeting is the practice of creating a plan to spend your money. 
                This spending plan is called a budget. Creating this spending plan allows you
                to determine in advance whether you will have enough money to do the things you 
                need to do or would like to do.
                </p>
            </div>

            <div className=' bg-slate-200 p-4 rounded-xl mt-5'>
                <p className=' font-bold text-xl border-b border-black '>The Importance of Budgeting</p>
                <p className='p-3'>
                Managing Finances: Without a budget, you might end up spending more than you earn, leading to debts or living paycheck to paycheck.
                </p>
                <p className='p-3'>Achieving Financial Goals: Whether you want to buy a house, go on vacation, or retire early, 
                budgeting helps you set and achieve these milestones.
                </p>
            </div>
            

          
            {!openQuiz && <button onClick={() => setOpenQuiz((isOpen) => !isOpen)} className='flex bg-moneyDarkGreen pr-7 pl-7 rounded-xl mt-5 ml-auto mr-auto p-3'>Next</button>}

            {openQuiz && (
                <div className="mt-20">
                     <h3  className="w-3/4 h-full ml-auto mr-auto text-center text-2xl border-b border-black" >Activity</h3>
                    {!(currentScenario=== scenarios.length) &&<span className=" mt-10 text-xl">
                        Money Left: ${money}
                    </span >}
                    {currentScenario < scenarios.length ? (
                        <div >
                            <p className="bg-slate-300 rounded-xl text-2xl text-center p-6 m-3">{scenarios[currentScenario].description}</p>
                            <div className='flex'>
                                <button className="border-black bg-slate-300 rounded-xl pt-3 pb-3 pr-10 pl-10" onClick={handlePay}>Pay</button>
                                <button className="border-black ml-auto bg-slate-300 rounded-xl pt-3 pb-3 pr-10 pl-10"onClick={handleSkip}>Skip</button>
                            </div>
                            
                        </div>
                    ) : (
                        <div className="bg-slate-300 rounded-xl text-2xl text-center p-6 m-3">
                            Exercise Completed! Final amount: ${money} 
                            <Link to="/modules/budgeting/ex2" className='flex bg-moneyDarkGreen pr-5 pl-5 rounded-xl mt-5 ml-auto mr-auto p-3'>Next</Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default B_1;
