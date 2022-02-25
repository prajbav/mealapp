import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DummyMeals = [
  {
    id: "m1",
    name: "chicken curry",
    desc: "chicken with tomato gravy",
    price: 20.99,
  },
  {
    id: "m2",
    name: "shrimp curry",
    desc: "shrinp with coconut and onion tomato gravy",
    price: 20.99,
  },
  {
    id: "m3",
    name: "veg biryani",
    desc: "spices rice with veggies",
    price: 20.99,
  },
  {
    id: "m4",
    name: "lamb curry",
    desc: "lamb with tomato gravy",
    price: 20.99,
  },
];
const AvailableMeals = () => {
  const mealslist = DummyMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.desc}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul> {mealslist} </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
