import react from "react";
import CartContextProvider from "./components/Context/CartContextProvider";

// components imported
import Header from "./components/Header/Header";
import Food from "./components/Food/Food";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartContextProvider>
      <Cart></Cart>
      <Header />
      <Food />
    </CartContextProvider>
  );
}

export default App;
