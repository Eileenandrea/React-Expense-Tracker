import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
	const [selectedYear, setSeletedYear] = useState("2020");

	const filterExpenseHandler = (filterYear) => {
		setSeletedYear(filterYear);
	};
	const filterByYear = (expense) => {
		return expense.date.getFullYear() == selectedYear;
	};
	const filteredExpenses = [...props.expenses].filter(filterByYear);

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={selectedYear}
				onFilterYear={filterExpenseHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}
export default Expenses;
