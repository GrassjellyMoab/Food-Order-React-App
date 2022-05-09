import { useState } from "react";
import CartContextProvider from "./components/Context/CartContextProvider";

// components imported
import Header from "./components/Header/Header";
import Food from "./components/Food/Food";
import Cart from "./components/Cart/Cart";

function App() {
  // toggle open or close cart
  const [cartToggle, setCartToggle] = useState(false);

  // open cart
  const openCartHandler = () => {
    setCartToggle(true);
  };
  // close cart
  const closeCartHandler = () => {
    setCartToggle(false);
  };

  return (
    <CartContextProvider>
      {cartToggle && <Cart closeCart={closeCartHandler}></Cart>}
      <Header openCart={openCartHandler}/>
      <Food />
    </CartContextProvider>
  );
}

export default App;
