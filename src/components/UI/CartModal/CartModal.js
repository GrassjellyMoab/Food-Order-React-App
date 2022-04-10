import React, { useContext, useState } from "react";
import CartToggleContext from "../../Header+Cart/CartToggleContext/CartToggleContext";
import classes from "./CartModal.module.css";
import Card from "../Card/Card";
import FoodContext from "../../FoodPortion/FoodContext/FoodContext";
import CartItem from "../../Header+Cart/CartItem/CartItem";

const CartModal = (props) => {
  const foodctx = useContext(FoodContext);
  const cartctx = useContext(CartToggleContext);
  const CartList = foodctx.FoodList;

  const [finalCost, setFinalCost] = useState(() => {
    // total cost
    var startCost = 0;
    // loop thru list and multiply price by quantity
    for (let i in CartList) {
      startCost += +(CartList[i].Price * CartList[i].Quantity);
    }
    return startCost;
  });

  // when there is a quantity change event, then we set a new Final Cost
  const TotalCostChangeHandler = (CartList) => {
    var cost = 0;
    // loop thru list and multiply pricw by quantity
    for (let i in CartList) {
      cost += +(CartList[i].Price * CartList[i].Quantity);
    }
    setFinalCost(cost);
  };

  // Order Button Handler, does nothing so far
  const OrderClicked = () => {
    cartctx.toggleCartClose();
    alert("Order has been received! \n (Does nothing so far)");
  };

  return (
    <React.Fragment>
      <div
        className={classes["backdrop"]}
        onClick={cartctx.toggleCartClose}
      ></div>
      <Card className={classes["modal"]}>
        {CartList.map((item) => {
          if (item.Quantity > 0) {
            return (
              <CartItem
                key={"Other" + item.id}
                id={item.id}
                Quantity={item.Quantity}
                Price={item.Price}
                Food={item.food}
                NewTotalCost={TotalCostChangeHandler}
              ></CartItem>
            );
          } else {
            return null;
          }
        })}
        <div className={classes["cartModalBottom"]}>
          <h2>Total Amount</h2>
          <div className={classes.right}>
            <h2 className={classes["totalMoney"]}>${finalCost}</h2>
            <div>
              <button
                className={classes.close}
                onClick={cartctx.toggleCartClose}
              >
                Close
              </button>
              <button className={classes.order} onClick={OrderClicked}>
                Order
              </button>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default CartModal;
