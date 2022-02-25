import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";

const MealItem = (props) => {
  const crtctx = useContext(CartContext);
  // console.log(props);
  const price = `${props.price.toFixed(2)}`;

  const addCartHandler = (amt) => {
    crtctx.addItem({
      id: props.id,
      name: props.name,
      amount: amt,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {/* <div className={classes.info}> */}
        <span className={classes.description}>{props.desc}</span>
        <div className={classes.price}>{price}</div>
      </div>

      <MealItemForm id={props.id} onAddToCart={addCartHandler} />

      {/* </div> */}
    </li>
  );
};

export default MealItem;
