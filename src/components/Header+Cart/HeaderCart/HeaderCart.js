import React, { useContext , useState , useEffect } from "react";
import classes from "./HeaderCart.module.css";

import CartIcon from "../../UI/CartIcon/CartIcon";
import CartToggleContext from "../CartToggleContext/CartToggleContext";
import FoodContext from "../../FoodPortion/FoodContext/FoodContext";


const HeaderCart = (props) => {
  // ctx to manage whether cart is open or closed
  const ctx = useContext(CartToggleContext);
  const foodctx = useContext(FoodContext);

  const [headerCartQty, setHeaderCartQty] = useState(0);


  var quantityTotal = 0;
  for (let i in foodctx.FoodList) {
    quantityTotal += +foodctx.FoodList[i].Quantity;
  }

  return (
    <div
      role={"button"}
      className={classes["HeaderCart"]}
      onClick={ctx.toggleCartOpen}
    >
      <CartIcon></CartIcon>
      <h4>Your Cart</h4>
      <div className={classes["cartQuantity"]}>{quantityTotal}</div>
    </div>
  );
};

export default HeaderCart;
