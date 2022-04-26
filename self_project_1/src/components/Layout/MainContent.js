import React from 'react'
import Button from '../UI/Button'

import classes from './MainContent.module.css'
const MainContent = () => {
    return (
        <section className={classes.mainContent}>
            <div className={classes.first_image_container}>
                <img src="assets/images/man_with_food.png" alt='man with bucket of food' />
            </div>
            <div className={classes.first_middle_content}>
                <h2>Bring the <span>Store</span><br></br> to your <span>Door</span></h2>
                <p>Best Groceries app ever. Pick your desired groceries form the menu</p>
                <div className={classes.order_info_btn}>
                    <Button type='button' btnClass='yellow' name='How to Order' />
                    <Button type='button' btnClass='white' name='See Categories' />
                </div>
                <div className={classes.customer_review}>
                    <div className={classes.image_crisp}>
                        <img src="assets/images/customer_1.jpg" alt='customer' />
                        <img src="assets/images/customer_2.jpg" alt='customer' />
                        <img src="assets/images/customer_3.jpg" alt='customer' />
                    </div>
                    <div className={classes.customer_review_info}>
                        <span>Our Happy Customer</span><br />
                        <span className={classes.customer_start_continer}><img src="assets/images/ratings.png" alt="Rating from Customer" />4.6 (10.1k Reviews) </span>
                    </div>
                </div>
            </div>
            <div className={classes.first_right_content}>
                <div className={classes.shortcut_cart}>
                    <img className={classes.product_image} src='assets/images/fruit_icons/cherries.png' alt='cherries' />
                    <img className={classes.product_cart} src='assets/images/fruit_icons/bag.png' alt='cart' />
                </div>
                <div className={classes.shortcut_cart}>
                    <img className={classes.product_image} src='assets/images/fruit_icons/chili-pepper.png' alt='pepper' />
                    <img className={classes.product_cart} src='assets/images/fruit_icons/bag.png' alt='cart' />
                </div>
                <div className={classes.shortcut_cart}>
                    <img className={classes.product_image} src='assets/images/fruit_icons/corn.png' alt='corn' />
                    <img className={classes.product_cart} src='assets/images/fruit_icons/bag.png' alt='cart' />
                </div>
                <div className={classes.shortcut_cart}>
                    <img className={classes.product_image} src='assets/images/fruit_icons/grape.png' alt='grape' />
                    <img className={classes.product_cart} src='assets/images/fruit_icons/bag.png' alt='cart' />
                </div>

            </div>
        </section>
    )
}

export default MainContent