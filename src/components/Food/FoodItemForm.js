import react, { useRef } from "react";
// components inputed
import Input from "../UI/Input";
// css
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        inputDetails={{
          id: "id_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button onClick={submitHandler}>+ Add</button>
    </form>
  );
};

export default FoodItemForm;
