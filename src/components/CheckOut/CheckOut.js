import "./Checkout.css";
import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";
import { useDispatch, useSelector } from "react-redux";

const CheckOut = (props) => {
  // const dispatch = useDispatch();
  const { expenseData } = useSelector((state) => state.expenseReducer);

  console.log("Data check ", expenseData);
  const dumi_data = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpnses] = useState(dumi_data);
  const addExpenseHandler = (expense) => {
    setExpnses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default CheckOut;
