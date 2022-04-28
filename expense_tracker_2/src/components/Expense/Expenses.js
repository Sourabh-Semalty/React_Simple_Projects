import React, { Fragment, useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseBalance from './ExpenseBalance'
import AddExpense from './AddExpense'

const Expenses = () => {
    const [expenses, setIsExpenses] = useState([]);
    const setExpense = (item) => setIsExpenses(prev => [...prev, item])
    return (
        <Fragment>
            <ExpenseBalance />
            <ExpenseList list={expenses} />
            <AddExpense onAddExpense={setExpense} />
        </Fragment>
    )
}

export default Expenses