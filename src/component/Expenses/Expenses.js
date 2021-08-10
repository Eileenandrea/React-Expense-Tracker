import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
function Expenses(props) {
	const [selectedYear, setSeletedYear] = useState("2020");

	const filterExpenseHandler = (filterYear) => {
		setSeletedYear(filterYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={selectedYear}
				onFilterYear={filterExpenseHandler}
			/>
			;
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			/>
		</Card>
	);
}
export default Expenses;
