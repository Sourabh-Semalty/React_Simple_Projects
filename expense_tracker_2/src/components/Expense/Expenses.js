import React, { Fragment, useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpenseBalance from './ExpenseBalance'
import AddExpense from './AddExpense'

const Expenses = () => {
    const [expenses, setIsExpenses] = useState({
        'transactions': [],
        'totalAmount': 0
    });
    const setExpense = (item) => {
        setIsExpenses(prev => {
            const cur_amt = item.type === '+' ? +item.amount : -item.amount;
            return {
                transactions: [...prev.transactions, item],
                totalAmount: prev.totalAmount + (cur_amt)
            }
        })
    }

    const onRemoveItemHandler = (id) => {
        setIsExpenses(prev => {
            const findedItem = prev.transactions.find(el => el.id === Number(id))
            if (findedItem) {
                return {
                    transactions: prev.transactions.filter(el => el.id !== Number(id)),
                    totalAmount: findedItem.type === '+' ? prev.totalAmount - findedItem.amount : prev.totalAmount + findedItem.amount
                }
            }
            return prev;
        })
    }
    return (
        <Fragment>
            <ExpenseBalance list={expenses} />
            <ExpenseList onRemoveItem={onRemoveItemHandler} list={expenses.transactions} />
            <AddExpense totalAmount={expenses.totalAmount} onAddExpense={setExpense} />
        </Fragment>
    )
}

export default Expenses