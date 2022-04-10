import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';


const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Data found</h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((el, index) => (
                <ExpenseItem key={index} data={el} />
            ))}
        </ul>)
}

export default ExpenseList
