import react, { useReducer } from "react";
import CartContext from "./CartContext";

// empty cart state to use as default value for state
const defaultCartState = {
    items: [],
    totalAmount: 0
}

// reducer dispatch function to handle state
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        console.log(action.item.amount)
    }

    if (action.type === "REMOVE") {

    }
}

// main component in file
const CartContextProvider = props => {
    // store items state in a reducer function
    const [cartState, dispatchFunction] = useReducer(cartReducer, defaultCartState)
    

    // update cart state (addition) with arg of item to be added including quantity
    const addItemToCartHandler = (obj) => {
        dispatchFunction({type: "ADD", item: obj})
    }

    // remove 1 item from cart at a time base on id
    const removeItemFromCartHandler = (id) => {
        dispatchFunction({type: "REMOVE", id: id})
    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider