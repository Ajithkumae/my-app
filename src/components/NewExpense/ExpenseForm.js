import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdtitle, setEnterdtitle] = useState("");
  const [enterdAmount, settEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  let navigate = useNavigate();
  const titleChangedHandler = (event) => {
    setEnterdtitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    settEnterdAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdtitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    if (enterdtitle && enterdDate && enterdAmount) {
      props.onSaveExpenseDate(expenseData);
      setEnterdtitle("");
      settEnterdAmount("");
      setEnterdDate("");
    } else {
      alert("Add Field");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls ">
          <div className="new-expense__control">
            <label>Tilte</label>
            <input
              type="text"
              value={enterdtitle}
              onChange={titleChangedHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterdAmount}
              onChange={amountChangedHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              value={enterdDate}
              onChange={dateChangedHandler}
            />
          </div>
        </div>

        <button type="submit" className="new-expnese__actions">
          Add Expense
        </button>
      </form>
      <button onClick={() => navigate("/about")}>go to about </button>
    </div>
  );
};

export default ExpenseForm;
