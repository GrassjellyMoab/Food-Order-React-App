import React, { useState } from "react";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  // when form is submitted
  const submitHandler = (event) => {
    event.preventDefault();
    props.retrieve(quantity, props.id);
    setQuantity(1);
  };

  // when input is changed
  const inputHandler = (event) => {
      setQuantity(event.target.value);
  };

  // food item with form inside and set values to form
  return (
    <React.Fragment>
      <div className={classes["item"]}>
        <div className={classes["description"]}>
          <h3>{props.food}</h3>
          <span>
            <i>{props.details}</i>
          </span>
          <h4>${props.price}</h4>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes["input"]}>
            <span>Amount</span>
            <input type={"number"} step={"1"} min={"1"} value={quantity} onChange={inputHandler}></input>
          </div>
          <button type={"submit"} className={classes["button"]}>
            + Add
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FoodItem;
