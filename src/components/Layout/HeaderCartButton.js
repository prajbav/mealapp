import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) => {
  // console.log("hb", props);
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  let numberOfCartItems = 0;
  if (cartCtx.items.length > 0) {
    numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return +curNumber + item.amount;
    }, []);
  }
  const btnClass = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
