import react from "react";
// components imported

// css module
import classes from "./Header.module.css";


const Header = props => {
    return <react.Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
      </header>
    </react.Fragment>
}

export default Header