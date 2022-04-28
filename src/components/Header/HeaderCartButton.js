import react from "react";

// components to import
import CartIcon from "../Cart/CartIcon";
// css
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    return <react.Fragment>
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.ctQuantity}>5</span>
        </button>
    </react.Fragment>
};

export default HeaderCartButton;