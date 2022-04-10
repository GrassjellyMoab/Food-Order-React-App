import React, { createContext, useState } from "react";

const CartToggleContext = createContext({
  cartModalOpen: false,
  toggleCartOpen: () => {},
  toggleCartClose: () => {},
});

export const CartToggleContextProvider = (props) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  // opens Cart
  const toggleCartOpen = () => {
    setCartModalOpen(true);
  };

  // closes Cart
  const toggleCartClose = () => {
    setCartModalOpen(false);
  };

  return (
    <CartToggleContext.Provider
      value={{
        cartModalOpen: cartModalOpen,
        toggleCartOpen: toggleCartOpen,
        toggleCartClose: toggleCartClose,
      }}
    >
      {props.children}
    </CartToggleContext.Provider>
  );
};

export default CartToggleContext;
