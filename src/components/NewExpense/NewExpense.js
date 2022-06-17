import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';




const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterdExpensedata) =>{
        const expenseData= {
            ...enterdExpensedata,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate= {saveExpenseDataHandler}/>  {/*the pointer added saveExpenseDataHandler is passed to ExpenseFrom component */}
    </div>
};


export default NewExpense;