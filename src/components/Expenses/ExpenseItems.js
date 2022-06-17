import './ExpenseItems.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React from 'react';

const ExpenseItems = (props) => {

    return(
        <Card className = "expense-item">  
             <ExpenseDate date = {props.date} /> {/* date is passed to a component using props */}
            <div className= "expense-item__description">
                <h2>{props.title}</h2>
                <div className= "expense-item__price">${props.amount}</div>
            </div>
        </Card>  // this card will work for custom html but not for other custom components (<ExpenseDate/>)
    );
}

export default ExpenseItems; 