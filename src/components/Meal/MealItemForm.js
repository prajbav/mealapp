import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmt = amountInputRef.current.value;
    const enteredAmtNo = +enteredAmt;
    if (enteredAmt.trim.lenth === 0 || enteredAmtNo < 1 || enteredAmtNo > 10) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmtNo);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountValid && <p> Please enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
