import React from 'react';

import classes from './Header.module.css';

import Meal from './meals.jpeg';

import HeaderCart from '../HeaderCart/HeaderCart';





const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes['header']}>
                <h1>CoolMeals</h1>
                <HeaderCart></HeaderCart>
            </header>
            <div className={classes['main-image']}>
                <img src={Meal} alt={''}></img>
            </div>
        </React.Fragment>
    )
};

export default Header;