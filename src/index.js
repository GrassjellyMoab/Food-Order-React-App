import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { FoodContextProvider } from "./components/FoodPortion/FoodContext/FoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>
);
