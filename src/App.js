import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_exp = [
  { id: "e1", title: "Toilet Paper", amount: 55, date: new Date(2021, 7, 15) },
  { id: "e2", title: "Paper", amount: 5, date: new Date(2021, 8, 15) },
  { id: "e3", title: "Paper cutter", amount: 50, date: new Date(2020, 9, 15) },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_exp);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
