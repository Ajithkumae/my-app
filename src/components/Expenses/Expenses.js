import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  debugger;
  const [filter, setFilter] = useState("2020");

  const Dateselector = (seclectedDate) => {
    setFilter(seclectedDate);
  };
  debugger;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} passingDate={Dateselector} />

        {props.items.map((expense) => (
          <ExpenseItems
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
