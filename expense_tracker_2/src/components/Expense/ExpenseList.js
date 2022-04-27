import React from 'react'
import './ExpenseList.css'
const ExpenseList = props => {
    return (
        <section>
            <span className='expense_list_head'>History</span>
            <ul className='transaction_history'>
                <li className='expense_income_item expense_gain'>
                    <span className='close'>X</span>
                    <span>{props.name}Salary</span>
                    <span>{props.amount}100</span>
                </li>
                <li className='expense_income_item expense_gain'>
                    <span className='close'>X</span>
                    <span>{props.name}Salary</span>
                    <span>{props.amount}100</span>
                </li>
                <li className='expense_income_item expense_spend'>
                    <span className='close'>X</span>
                    <span>{props.name}Salary</span>
                    <span>{props.amount}100</span>
                </li>
            </ul>
        </section>
    )
}

export default ExpenseList