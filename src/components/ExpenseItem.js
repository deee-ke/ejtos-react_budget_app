import React, { useContext } from 'react';
// import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>${props.cost}</td>
            <td><button onClick={event=> increaseAllocation(props.name)} className='border-1 rounded bg-success text-light'><i class="fa-solid fa-plus fs-4 "></i></button></td>
            <td><button onClick={event=> decreaseAllocation(props.name)} className='border-1 rounded bg-warning text-light'><i class="fa-solid fa-minus fs-4 "></i></button></td>
            <td><button size='1.5em' onClick={handleDeleteExpense} className='border-1 rounded bg-danger text-light'><i class="fa-solid fa-trash fs-4"></i></button></td>
        </tr>
    );
};

export default ExpenseItem;