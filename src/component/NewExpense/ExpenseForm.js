import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });
	const titleChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredTitle: event.target.value });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.taget.value };
		// });
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredAmount: event.target.value });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.taget.value };
		// });
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event) => {
		// setUserInput({ ...userInput, enteredDate: event.target.value });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.taget.value };
		// });
		setEnteredDate(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredDate("");
		setEnteredAmount("");
		closeForm();
	};
	const closeForm = () => {
		props.onOpenCloseForm(false);
	};
	const openForm = () => {
		props.onOpenCloseForm(true);
	};
	if (!props.formStatus) {
		return (
			<button onClick={openForm} type="submit">
				Add Expense
			</button>
		);
	}
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="Number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button onClick={closeForm}>Cancel</button>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
}
export default ExpenseForm;
