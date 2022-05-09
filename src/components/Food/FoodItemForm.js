import react, { useRef, useState } from "react";
// components inputed
import Input from "../UI/Input";
// css
import classes from "./FoodItemForm.module.css";

const FoodItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amountInputed = +inputRef.current.value;
    if (
      inputRef.current.value.trim().length === 0 ||
      amountInputed < 1 ||
      amountInputed > 5
    ) {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    props.AddToCart(amountInputed);
  };

  return (
    <div>
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
      {!inputIsValid && (
        <span className={classes.invalid}>
          Please enter a valid amount(1-5)
        </span>
      )}
    </div>
  );
};

export default FoodItemForm;
