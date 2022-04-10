import React, { useContext } from "react";
import CartToggleContext from "../CartToggleContext/CartToggleContext";
import CartModal from "../../UI/CartModal/CartModal";
import FoodContext from "../../FoodPortion/FoodContext/FoodContext";

const Cart = (props) => {
  // context storing cart modal open / close
  const ctx = useContext(CartToggleContext);
  const foodctx = useContext(FoodContext);

  //use this then we can map out the cart Items using FoodinCart.id
  return (
    <React.Fragment>
      {/* map out Cart Items when Cart opens*/}
      {ctx.cartModalOpen && <CartModal></CartModal>}
    </React.Fragment>
  );
};

export default Cart;
