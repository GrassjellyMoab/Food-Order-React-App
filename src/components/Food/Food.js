import react from "react"
// components imported
import FoodDescription from "./FoodDescription"
import FoodList from "./FoodList";

const Food = props => {
    return <react.Fragment>
        <FoodDescription />
        <FoodList />
    </react.Fragment>
}

export default Food;