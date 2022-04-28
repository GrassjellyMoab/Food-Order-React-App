import react, { useContext } from "react";
// components imported
import FoodItemForm from "./FoodItemForm";
import CartContext from "../Context/CartContext";
// css
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);

  const AddToCart = (amountToAdd) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amountToAdd,
      price: props.price,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <FoodItemForm id={props.id} AddToCart={AddToCart} />
      </div>
    </li>
  );
};

export default FoodItem;
