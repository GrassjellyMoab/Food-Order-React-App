import React, { useState , useEffect } from "react";

// to retrieve food & quantity to be added from FoodItem component to Cart component
const FoodContext = React.createContext({
  updateFoodList: (FoodId, QuantityToAdd) => {},
  FoodList: { id: 0 },
});

export const FoodContextProvider = (props) => {
  const [FoodList, setFoodList] = useState([
    {
      food: "Sushi",
      details: "Finest fish and veggies",
      id: "A1",
      Quantity: 0,
      Price: 22.99,
    },
    {
      food: "Schnitzel",
      details: "A german speciality!",
      id: "A2",
      Quantity: 0,
      Price: 16.5,
    },
    {
      food: "Barbecue Burger",
      details: "American, raw, meaty",
      id: "A3",
      Quantity: 0,
      Price: 12.99,
    },
    {
      food: "Green Bowl",
      details: "Healthy...and green...",
      id: "A4",
      Quantity: 0,
      Price: 18.99,
    },
  ]);

  // function to update FoodListstate
  const updateFoodList = (FoodId, QuantityToAdd) => {
    setFoodList((prev) => {
      // add quantity to be added to cart
      // iterate through object to check whether key match id and then update the value
      for (var i in prev) {
        if (prev[i].id === FoodId && prev[i].Quantity >= 0) {
          // if quantity = 0, cannot decrease to -1
          if (QuantityToAdd === -1 && prev[i].Quantity === 0) {
            break;
          } 
          // update quantity of a certain Food in the Cart base on Id
          prev[i].Quantity += +QuantityToAdd;
        }
      }
      return prev;
    });
  };


  return (
    <FoodContext.Provider
      value={{
        updateFoodList: updateFoodList,
        FoodList: FoodList,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContext;
