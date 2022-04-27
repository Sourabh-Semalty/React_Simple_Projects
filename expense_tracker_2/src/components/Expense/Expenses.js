import React, { Fragment } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseBalance from './ExpenseBalance'
import AddExpense from './AddExpense'

const Expenses = () => {
    return (
        <Fragment>
            <ExpenseBalance />
            <ExpenseList />
            <AddExpense />
        </Fragment>
    )
}

export default Expenses