import React from 'react'
import './ExpenseBalance.css';
const ExpenseBalance = props => {
    const transactions = props.list.transactions;
    let income = 0;
    let spend = 0;
    transactions.forEach(item => {
        if (item.type === '+') income += item.amount;
        else spend += item.amount;
    });
    return (
        <section>
            <span className='app_heading'>Expense Tracker</span>
            <span className='bal_head'>YOUR BALANCE</span>
            <span className='total_balance'>$ {Math.abs(props.list.totalAmount)}</span>
            <div className='income_expense'>
                <div className='income'>
                    <label>INCOME</label>
                    <span>$ {income} </span>
                </div>
                <div className='expense'>
                    <label>EXPENSE</label>
                    <span>$ {spend} </span>
                </div>
            </div>
        </section>
    )
}

export default ExpenseBalance