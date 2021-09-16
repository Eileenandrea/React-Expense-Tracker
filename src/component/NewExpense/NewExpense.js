import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpense(props) {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
	};
	const [formStatus, setFormStatus] = useState(false);
	const opencloseForm = (enteredFormStatus) => {
		setFormStatus(enteredFormStatus);
	};
	return (
		<div className="new-expense">
			<ExpenseForm
				formStatus={formStatus}
				onOpenCloseForm={opencloseForm}
				onSaveExpenseData={saveExpenseDataHandler}
			/>
		</div>
	);
}
export default NewExpense;
