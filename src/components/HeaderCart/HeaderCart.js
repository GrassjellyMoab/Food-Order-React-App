import React from "react";
import classes from "./HeaderCart.module.css";

import CartIcon from "../UI/CartIcon/CartIcon";

const HeaderCart = (props) => {
  return (
    <div className={classes['HeaderCart']}>
      <CartIcon></CartIcon>
      <h5>Your Cart</h5>
      <div>5</div>
    </div>
  );
};

export default HeaderCart;