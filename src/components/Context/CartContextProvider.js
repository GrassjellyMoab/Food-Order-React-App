import { useReducer } from "react";
import CartContext from "./CartContext";

// empty cart state to use as default value for state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// reducer dispatch function to handle state
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // get the updated total amount in the cart
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // check if item already in cart by checking for the index
    const existingCartItemIndex = state.items.findIndex((item) => {
      // check for when id of objects are same, then return index of this item if in cart
      return item.id === action.item.id;
    });

    // if item does not exist in cart then the existing cart index is null since index = -1
    const existingCartItem = state.items[existingCartItemIndex];

    // var to update item
    let updatedItem;
    // var to update state arr items
    let updatedItems;

    // if cart already has item
    if (existingCartItem) {
      // update item's amount property using a spread operator
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [
        ...state.items,
      ];
      // updated the state snapshot
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // if cart does not have the item
    else {
        updatedItem = { ...action.item };
        // add new item to cart
        updatedItems = state.items.concat(updatedItem)
    }

    // return the new updated state snapshot
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
  }

  if (action.type === "REMOVE") {
    // find index of item by comparing the id
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    })
  ;
    const existingItem = state.items[existingCartItemIndex];
    // get new total updated price
    const newTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    // if last item in cart and to be removed,
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      })
    }
    
    // remove 1 quantity of the item from cart
    else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    }
  }
};

// main component in file
const CartContextProvider = (props) => {
  // store items state in a reducer function
  const [cartState, dispatchFunction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // update cart state (addition) with arg of item to be added including quantity
  const addItemToCartHandler = (obj) => {
    dispatchFunction({ type: "ADD", item: obj });
  };

  // remove 1 item from cart at a time base on id
  const removeItemFromCartHandler = (id) => {
    dispatchFunction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
