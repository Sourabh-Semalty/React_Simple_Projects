import React from 'react'
import './ExpenseBalance.css';
const ExpenseBalance = props => {
    return (
        <section>
            <span className='app_heading'>Expense Tracker</span>
            <span className='bal_head'>YOUR BALANCE</span>
            <span className='total_balance'>$400</span>
            <div className='income_expense'>
                <div className='income'>
                    <label>INCOME</label>
                    <span>$500</span>
                </div>
                <div className='expense'>
                    <label>EXPENSE</label>
                    <span>$500</span>
                </div>
            </div>
        </section>
    )
}

export default ExpenseBalance