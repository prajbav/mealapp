import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DummyMeals = [
  {
    id: "m1",
    name: "chicken over rice",
    desc: "grilled chicken with spiced rice",
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
    name: "Falafal",
    desc: " deep-fried chickpea ball/fritters with rice and veggies",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Veggie Rolls ",
    desc: "pick veggies of your choice with multigrain bread",
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
