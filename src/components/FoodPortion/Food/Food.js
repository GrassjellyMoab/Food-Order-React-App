import React, {  useContext } from "react";
import Card from "../../UI/Card/Card";
import FoodItem from "../FoodItem/FoodItem";
import FoodContext from "../FoodContext/FoodContext";

import classes from "./Food.module.css";

const Food = (props) => {
  // context to get function to retrieve food id and value
  const ctx = useContext(FoodContext);

  // arr of foods to be mapped out into item components
  const foodList = ctx.FoodList;
  // function to retrieve food name and compare against food then add the input
  const retrieveDetails = (quantityToAdd, foodId) => {
    ctx.updateFoodList(foodId, quantityToAdd);
    // pass change to most parent component to then pass to other components in other branch.
  };
  
  return (
    <Card className={classes.CardAddOn}>
      <ul>
        {foodList.map((item) => {
          return (
            <FoodItem
              food={item.food}
              details={item.details}
              price={item.Price}
              quantity={item.quantity}
              key={item.id}
              retrieve={retrieveDetails}
              id={item.id}
            ></FoodItem>
          );
        })}
      </ul>
    </Card>
  );
};

export default Food;
