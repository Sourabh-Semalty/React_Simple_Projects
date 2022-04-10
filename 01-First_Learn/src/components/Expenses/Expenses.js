import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const onfilterChangeHandler = (selectedYear) => setFilteredYear(selectedYear)

    const filteredExpenses = props.items.filter(el => el.date.getFullYear() === Number(filteredYear))


    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={onfilterChangeHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;