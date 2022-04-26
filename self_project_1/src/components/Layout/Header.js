import React from 'react'
import Button from '../UI/Button';
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <span>GRO</span>
                <span>HOUSE</span>
            </div>
            <nav className={classes.navbar}>
                <ul className={classes.navbar_list}>
                    <li><a className={classes.active} href='##'>Home</a></li>
                    <li><a href='##'>About</a></li>
                    <li><a href='##'>Categories</a></li>
                    <li><a href='##'>Service</a></li>
                    <li><a href='##'>Contact</a></li>
                </ul>
            </nav>
            <Button type='button' btnClass='yellow' name="Sign In" />
        </header>
    )
}

export default Header