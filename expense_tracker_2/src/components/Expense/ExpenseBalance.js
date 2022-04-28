import React, { useContext } from 'react'
import { ExpenseGlobal } from '../../context/Expense_context';
import './ExpenseBalance.css';
const ExpenseBalance = props => {
    const ctx = useContext(ExpenseGlobal);
    return (
        <section>
            <span className='app_heading'>Expense Tracker</span>
            <span className='bal_head'>YOUR BALANCE</span>
            <span className='total_balance'>$ {ctx.totalBalance}</span>
            <div className='income_expense'>
                <div className='income'>
                    <label>INCOME</label>
                    <span>$ {ctx.income}</span>
                </div>
                <div className='expense'>
                    <label>EXPENSE</label>
                    <span>$ {ctx.expense}</span>
                </div>
            </div>
        </section>
    )
}

export default ExpenseBalance