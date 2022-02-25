import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartContext.items.map((el) => (
    <CartItem
      key={el.id}
      name={el.name}
      amount={el.amount}
      price={el.price}
      onRemove={cartItemRemoveHandler.bind(null, el.id)}
      onAdd={cartItemAddHandler.bind(null, el)}
    />
  ));
  const totAmt = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <div>Total</div>
        <div>{totAmt}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.order}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
