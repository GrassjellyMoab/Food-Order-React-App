import React from 'react';

import classes from './Header.module.css';

import Meal from './meals.jpeg';

import HeaderCart from '../HeaderCart/HeaderCart';
import Cart from '../Cart/Cart';

import { CartToggleContextProvider } from '../CartToggleContext/CartToggleContext'



const Header = (props) => {
    return (
        <CartToggleContextProvider>
            {/* cart component to store modal and cart info */}
            <Cart></Cart>
            <header className={classes['header']}>
                <h1 onClick={() => {window.location.reload();}}>CoolMeals</h1>
                {/* press to open Cart */}
                <HeaderCart></HeaderCart>
            </header>
            <div className={classes['main-image']}>
                <img src={Meal} alt={''}></img>
            </div>
        </CartToggleContextProvider>
    )
};

export default Header;