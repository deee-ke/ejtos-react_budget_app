import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item)=>{
        return (total += item.cost);
    },0);
  return (
    <div className="alert alert-primary">
        <span>Spent so far: $<span className='fw-bold ms-1'>{totalExpenses}</span></span>
    </div>
  )
}

export default ExpenseTotal;
