import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (obj) => {},
    removeItem: (id) => {}
})

export default CartContext;