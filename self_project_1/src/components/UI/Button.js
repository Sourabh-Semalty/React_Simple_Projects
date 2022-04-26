import React from 'react'
import classes from './Button.module.css';
const Button = (props) => {
    return (
        <button type={props.type} className={`${classes.button} ${classes[props.btnClass]}`}>
            {props.name}
        </button>
    )
}

export default Button