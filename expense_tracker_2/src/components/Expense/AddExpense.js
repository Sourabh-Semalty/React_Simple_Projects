import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import './AddExpense.css'

const AddExpense = props => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const onChangeTextHandler = (e) => {
        if (e.target.value !== '') {
            setText(e.target.value);
            setIsValid(true);
            setIsError(null);
        } else {
            setText('');
            setIsValid(false);
            setIsError('Text cannot be empty');
        }
    }
    const onChangeAmountHandler = (e) => {
        const value = e.target.value.trim();
        try {
            if (value === '') throw new Error("Amount cannot be empty");
            if (isNaN(value)) throw new Error("Amount can only be number");

            setAmount(value);
            setIsValid(true);
            setIsError(null);
        } catch (error) {
            setAmount(0);
            setIsValid(false);
            setIsError(error.message)
        }
    }
    const onSubmitExpense = (e) => {
        e.preventDefault();
        try {
            if (!isValid) throw new Error("Kindly Fill all the inputs");
            const newTransaction = {
                id: Math.floor(Math.random() * 100000),
                text,
                amount: Math.abs(amount),
                type: amount > 0 ? '+' : '-'
            }
            if (amount < 0 && props.totalAmount + Number(amount) < 0) throw new Error("Spend Amount cannot be greater than total balance")
            props.onAddExpense(newTransaction);
            setText('');
            setAmount(0);
            setIsSuccess("Successfully Added Transaction")
            setTimeout(() => {
                setIsSuccess(null);
            }, 2000);
        } catch (error) {
            setIsError(error.message)
        }
    }
    return (
        <form onSubmit={onSubmitExpense} className='add_new_transc_form'>
            <span className='add_new_trasnc_head'>Add new transaction</span>
            {isSuccess && <Alert variant='success'>{isSuccess}</Alert>}
            {isError && <Alert variant='danger'>{isError}</Alert>}
            <InputGroup className="mb-3">
                <Form.Label htmlFor="Text">Text</Form.Label>
                <FormControl onChange={onChangeTextHandler} type='text' id='text' value={text} name="text" placeholder="Enter the Text" />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Label htmlFor="amount">Amount</Form.Label>
                <FormControl onChange={onChangeAmountHandler} type='number' id='amount' value={amount} name="amount" placeholder="Enter the Amount" />
            </InputGroup>
            <Button type='submit' variant="primary">Primary</Button>{' '}
        </form>
    )
}

export default AddExpense