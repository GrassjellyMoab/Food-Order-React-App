// css
import classes from "./Cart.module.css";
import { useContext } from "react";
// components
import Modal from "../../components/UI/Modal";
import CartContext from "../Context/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // adding item in cart
  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  // removing an item in cart
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          key={item.id}
          add={addItemHandler.bind(null, item)}
          remove={removeItemHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.closeCart}>
      {cartItems}
      <div className={classes["total"]}>
        <span>Total Amount</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.closeCart}>
          Close
        </button>
        <button className={classes.button} onClick={() => {
          // if cart not empty
          if (cartCtx.totalAmount === 0){
            alert("Order cannot be empty!");
          }
          else {
            alert("Food has been Ordered!");
            props.closeCart();
          }
        }}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
