import react from "react";
// components imported
import FoodItem from "./FoodItem";
import Card from "../UI/Card";

// css
import classes from "./FoodList.module.css";

// Dummy Meals
const DUMMY_MEALS = [
  {
    id: "f1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "f2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "f3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "f4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const FoodList = (props) => {
  const FoodMap = DUMMY_MEALS.map((food) => 
      <FoodItem
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        price={food.price}
      />
  );

  return (
    <section className={classes.foodlist}>
      <Card>
        <ul>{FoodMap}</ul>
      </Card>
    </section>
  );
};

export default FoodList;
