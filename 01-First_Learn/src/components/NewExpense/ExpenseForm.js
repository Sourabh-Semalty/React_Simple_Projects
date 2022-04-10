import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, SetUserInput] = useState({
        title: '',
        amount: +'',
        date: ''
    });
    const titleChangeHandler = (event) => {
        SetUserInput(prev => ({ ...prev, title: event.target.value }));
    };
    const amountChangeHandler = (event) => {
        SetUserInput(prev => ({ ...prev, amount: event.target.value }));
    };
    const dateChangeHandler = (event) => {
        SetUserInput(prev => ({ ...prev, date: new Date(event.target.value) }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // if (userInput.title.trim() === '') {
        //     console.log('Kindly Enter the title')
        //     return;
        // }
        // if (userInput.amount.trim() === '') {
        //     console.log('Kindly Enter the Amount')
        //     return;
        // }
        // if (userInput.date === '') {
        //     console.log('Kindly Enter the date')
        //     return;
        // }
        props.onsaveExpenseData(userInput)
        SetUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={userInput.date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
