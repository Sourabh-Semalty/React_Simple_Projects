import React from 'react'
import './AddExpense.css'
const AddExpense = props => {
    return (
        <from className='add_new_transc_form'>
            <span className='add_new_trasnc_head'>Add new transaction</span>
            <div className='form-group'>
                <label htmlFor='text'>Text</label>
                <input type='text' id='text' value="" name="text" placeholder="Enter the Text" />
            </div>
            <div className='form-group'>
                <label htmlFor='amount'>Amount</label>
                <input type='number' id='amount' value="" name="amount" placeholder="Enter the Amount" />
            </div>
            <button type='submit'>Add transaction</button>
        </from>
    )
}

export default AddExpense