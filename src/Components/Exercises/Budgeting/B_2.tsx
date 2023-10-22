import React, { useState } from 'react';

interface Category {
    name: string;
    allocated: number;
}

const B_2: React.FC = () => {
    const [openQuiz1, setOpenQuiz1] = useState(false);
    const initialCategories: Category[] = [
        { name: 'Housing', allocated: 0 },
        { name: 'Entertainment', allocated: 0 },
        { name: 'Groceries', allocated: 0 }
    ];
    const [balance, setBalance] = useState(3000);
    const [categories, setCategories] = useState(initialCategories);

    const handleAllocate = (index: number, amount: number) => {
        if (amount <= balance) {
            const updatedCategories = [...categories];
            updatedCategories[index].allocated += amount;
            setBalance(balance - amount);
            setCategories(updatedCategories);
        }
    };

    return (
        <div className="bg-slate-100 p-4">
            <p className='mb-3 font-bold text-xl border-b border-black overflow-y-scroll'>How to Budget</p>
            
            
            <div className='bg-slate-200 p-4 rounded-xl mt-4'>
                <p className='pl-3 font-bold text-xl border-b border-black'>Different Budgeting Methods</p>
                <ul className='list-disc list-inside pl-7 p-3'>
                    <li>50/30/20 Rule: Allocate 50% of income to necessities, 30% to wants, and 20% to savings.</li>
                    <li>Envelope System: Cash is divided into envelopes for each expense category, and when the envelope is empty, no more spending in that category.</li>
                    <li>Zero-Based Budgeting: Every dollar of income is assigned a specific expense until there's zero left.</li>
                </ul>
            </div>

            
            <div className='bg-slate-200 p-4 rounded-xl mt-4'>
                <p className='pl-3 font-bold text-xl border-b border-black'>Setting Financial Goals</p>
                <p className='p-3'>
                    Financial goals should be specific, measurable, achievable, relevant, and time-bound (SMART).
                    For instance, instead of saying, "I want to save money," a SMART goal would be, 
                    "I want to save $5000 for a down payment on a car in two years."
                </p>
            </div>

            
            <div className='bg-slate-200 p-4 rounded-xl mt-4'>
                <p className='pl-3 font-bold text-xl border-b border-black'>Tracking Expenses</p>
                <p className='p-3'>
                    Keeping a daily or weekly log of all purchases, big or small, 
                    helps you understand where your money goes. This can be done manually,
                    or by using apps and software designed for expense tracking.
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
                <div className="bg-red-500 mt-4 p-4 rounded-xl" style={{marginTop:"-0px"}}>
                    <h3 className="text-center text-2xl border-b border-black mb-4">Activity</h3>
                    <span className="text-xl">Balance: ${balance}</span>
                    <div className="mt-4">
                        {categories.map((category, index) => (
                            <div key={index} className="mb-3">
                                <p>{category.name}: ${category.allocated}</p>
                                <button 
                                    onClick={() => handleAllocate(index, 50)}
                                    className="bg-slate-300 px-4 py-2 rounded-md"
                                >
                                    Allocate $50
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}


        </div>
    );
}

export default B_2;
