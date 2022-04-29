import React from 'react'
import './ExpenseList.css'
const ExpenseList = props => {
    const onClickRemoveHandler = (e) => {
        props.onRemoveItem(e.target.getAttribute('id'));
    }
    return (
        <section>
            <span className='expense_list_head'>History</span>
            {props.list.length === 0 && <span className='no_data'>No transaction History</span>}
            <ul className='transaction_history'>
                {props.list.length > 0 && props.list.map(item =>
                    <li key={item.id} className={`expense_income_item ${item.type === '+' ? 'expense_gain' : 'expense_spend'}`} >
                        <span id={item.id} onClick={onClickRemoveHandler} className='close'>X</span>
                        <span>{item.text}</span>
                        <span className={item.type === '+' ? 'positive' : 'negative'}>{`${item.type} $ ${item.amount}`}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default ExpenseList