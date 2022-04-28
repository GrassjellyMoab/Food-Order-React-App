import react, { useState } from "react";
// css
import classes from "./Input.module.css";

const Input = react.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input
        {...props.inputDetails}
        ref={ref}
      ></input>
    </div>
  );
});

export default Input;
