import React, { useState}from "react";
import Card from '../UI/Card';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from "./ExpenseChart";
import './Expenses.css';
 
function Expenses(props){
    
  const [filteredYear, setfilteredYear]= useState('2020');
    
  const filteredChangeHandler= selectedYear=>{
    setfilteredYear(selectedYear);
  }

  const filteredExpenses=props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  

  return (
    <div>
      <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
      </li>
    </div>
  );
};       
export default Expenses;