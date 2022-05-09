import react from "react";
// components imported
import HeaderCartButton from "./HeaderCartButton";
// css module
import classes from "./Header.module.css";
// assets imported
import mealImage from "../../assets/meals.jpeg";


const Header = props => {
    return <react.Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.openCart}></HeaderCartButton>
      </header>
      <div className={classes.image}>
          <img src={mealImage} alt="A table full of delicious food"></img>
      </div>
    </react.Fragment>
}

export default Header