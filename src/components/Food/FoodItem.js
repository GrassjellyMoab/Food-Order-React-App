import react from "react";
// components imported
import FoodItemForm from "./FoodItemForm";
// css
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <FoodItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default FoodItem;
