import React, { useContext, useState } from "react";
import FoodContext from "../../FoodPortion/FoodContext/FoodContext";
import classes from "./CartItem.module.css";

// Component
const CartItem = (props) => {
  const ctx = useContext(FoodContext);
  // Increase Quantity Button Handler -
  const increaseButtonHandler = () => {
    ctx.updateFoodList(props.id, 1);
    quantityChangeHandler();
    props.NewTotalCost(ctx.FoodList);
  };
  // Decrease Quantity Button Handler +
  const decreaseButtonHandler = () => {
    ctx.updateFoodList(props.id, -1);
    quantityChangeHandler();
    props.NewTotalCost(ctx.FoodList);
  };

  // state to store quantity value so that component can be instantly re-rendered
  const [quantity, setQuantity] = useState(props.Quantity);

  // quantity change handler
  const quantityChangeHandler = () => {
      // find the new quantity value from list and update the state.
      var x = 0;
      for (let i in ctx.FoodList) {
          if (ctx.FoodList[i].id === props.id) {
              x = ctx.FoodList[i].Quantity;
              break;
          }
      }
      setQuantity(x);
  }

  return (
    <React.Fragment>
      <div className={classes["items"]}>
        <div className={classes["leftside"]}>
          <div className={classes["item-details"]}>
            <h3>{props.Food}</h3>
            <h4>${props.Price}</h4>
          </div>
          <div className={classes.quantity}>x{quantity}</div>
        </div>
        <div className={classes["rightside"]}>
          <button onClick={decreaseButtonHandler}>‒</button>
          <button onClick={increaseButtonHandler}>+</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
