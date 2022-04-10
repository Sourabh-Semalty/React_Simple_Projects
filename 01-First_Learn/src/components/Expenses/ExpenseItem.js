import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const { amount, date } = props.data;
    const [title, setTitle] = useState(props.data.title);
    const changeTitleHandler = () => {
        setTitle('Big Boss');
    }

    return <li><Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{amount}</div>
            <button onClick={changeTitleHandler}>Change title</button>
        </div>
    </Card></li>
}

export default ExpenseItem;   