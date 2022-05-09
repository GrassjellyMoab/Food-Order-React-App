import react, { useContext , useEffect , useState } from "react";

// components to import
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Context/CartContext";
// css
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // number of items in cart (reduce() , curNumber takes initial value which is value on right and goes thru arr)
  const totalQuantityOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // state  to manage button animation
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // destructure item property from context
  const { items } = cartCtx;

  // btnClasses animation appears when btn is highlighted
  const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump : ""}`;
  useEffect(() => {
    // if no items, no bump, ie page first load wont have animation 
    if (items.length === 0) {
        return;
    }
    setBtnIsHighlighted(true)
    // after a while, reset state
    const timer =setTimeout(() => {
        setBtnIsHighlighted(false)
    },150)

    // cleanup function 
    return () => {
        clearTimeout(timer);
    }
  }, [items])

  return (
    <react.Fragment>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.ctQuantity}>{totalQuantityOfCartItems}</span>
      </button>
    </react.Fragment>
  );
};

export default HeaderCartButton;
