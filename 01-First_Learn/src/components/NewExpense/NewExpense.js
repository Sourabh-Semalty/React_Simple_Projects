import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const stopEditing = () => setIsEditing(false);
    return <div className="new-expense">
        {!isEditing && <button onClick={() => setIsEditing(true)}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditing} onsaveExpenseData={saveExpenseDataHandler} />}
    </div>
}

export default NewExpense;

