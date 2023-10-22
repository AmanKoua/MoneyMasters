import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from "../../../assets/nextArrow.svg";

interface Expense {
    description: string;
    cost: number;
    paid?: boolean; // Add a 'paid' property to track if the expense has been handled.
}

const B_3: React.FC = () => {
    const [openQuiz1, setOpenQuiz1] = useState(false);

    const initialExpenses: Expense[] = [
        { description: 'Weekly Groceries', cost: 100, paid: false },
        { description: 'Entertainment', cost: 100, paid: false },
        { description: 'Weekly Transportation', cost: 100, paid: false },
        { description: 'Utility Bills', cost: 100, paid: false }
    ];
    
    const randomEvents: Expense[] = [
        { description: 'Medical Emergency', cost: 200 },
        { description: 'Automotive repair', cost: 200 },
        { description: 'Birthday Party', cost: 200 },
        { description: 'Accidents', cost: 200 }
    ];

    const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
    const [salary, setSalary] = useState(500);
    const [week, setWeek] = useState(1);
    const [event, setEvent] = useState<Expense | null>(null);

    const handlePayExpense = (index: number) => {
        if (salary >= expenses[index].cost) {
            const updatedExpenses = [...expenses];
            updatedExpenses[index].paid = true;
            setSalary(salary - expenses[index].cost);
            setExpenses(updatedExpenses);
        }
    };

    const nextWeek = () => {
        if (week <= 4) {
            setWeek(week + 1);
            setSalary(salary + 500);
            setExpenses(initialExpenses);

            if (Math.random() < 0.5) {
                const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
                setEvent(randomEvent);
            } else {
                setEvent(null);
            }
        }
    };

    const totalExpenses = expenses.reduce((acc, expense) => expense.paid ? acc + expense.cost : acc, 0);

    return (
        <div className="bg-slate-100 p-4">
            <p className='mb-3 font-bold text-xl border-b border-black'>Interactive Budget Exercise</p>
            

            
            <div className='bg-slate-200 p-4 rounded-xl mt-4'>
                <p className='pl-3 font-bold text-xl border-b border-black'>Exercise</p>
                <p className='p-3'>
                You are assigned a virtual job with a weekly "salary" of $500. Over the next month, 
                your aim is to save at least $2000 for a car purchase. During this period, you'll 
                encounter various expenses, some expected and some unexpected.
                </p>

                <p className='p-3'>
                Every week, you'll receive your $500. A virtual town interface will be presented where 
                you'll pay your weekly rent, buy groceries, and maybe even go to a movie. Occasionally, 
                unexpected events pop up—a medical emergency, a birthday party, or sudden car repairs. 
                Decide how to budget each week, and see if you can reach your car savings goal by the end 
                of the month.
                </p>
            </div>

            
            
            {!openQuiz1 && (
                <button 
                    onClick={() => setOpenQuiz1(true)} 
                    className='flex bg-moneyDarkGreen pr-7 pl-7 rounded-xl mt-5 ml-auto mr-auto p-3'
                >
                    Next
                </button>
            )}

            {openQuiz1 && (
                week<=4 ? <div className='bg-slate-200 p-4    rounded-xl mt-4'>
                    <div className="bg-slate-300 mr-5 inline-block pr-10 pl-10 p-4">
                        Week {week}: ${salary}
                    </div>
                    <div>
                        {expenses.map((expense, index) => (
                            <button 
                                className={`bg-moneyDarkGreen rounded-xl p-2 pl-5 pr-5 mr-5 mt-5 shadow-md ${expense.paid ? 'opacity-50 line-through' : ''}`} 
                                key={index} 
                                onClick={() => handlePayExpense(index)}
                                disabled={expense.paid}
                            >
                                {expense.description}: ${expense.cost}
                            </button>
                        ))}
                    </div>
                    {event && (
                        <div className=" bg-red-500 rounded-xl inline-block shadow-md p-3 pl-5 pr-5 mr-5 mt-8">
                            <p>{event.description}: ${event.cost}</p>
                            <button className="p-1 mr-10 rounded-xl bg-white " onClick={() => { handlePayExpense(expenses.length); setEvent(null); }}>Pay</button>
                            <button className="p-1 rounded-xl bg-white "onClick={() => setEvent(null)}>Skip</button>
                        </div>
                    )}
                    <button 
                        className="bg-moneyDarkGreen rounded-xl block shadow-md p-3 pl-5 pr-5 mr-5 mt-5" 
                        onClick={nextWeek }
                    
                    >
                        {week < 4 ? 'Next Week' : 'Finish'} 
                        <img src={logo} alt="Next Arrow" />
                    </button>
                </div>: <div className='bg-slate-200 p-4  text-center  rounded-xl mt-4'>GAME OVER <br/> Total spent: ${totalExpenses}, Amount left: ${salary - totalExpenses}</div>
            )}
        </div>
    );
}

export default B_3;
