import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    } 
  return (
    <div className='alert alert-secondary'>
        <span>Budget: ${/* <span className='fw-bold ms-1'>{budget}</span> */}</span>
        <input className='rounded ps-2 w-50 ms-1 border-0 fw-bold' type="number" step={10} value={newBudget} onChange={handleBudgetChange} />
    </div>
  );
};

export default Budget;
