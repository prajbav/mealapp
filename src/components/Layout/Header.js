import { Fragment } from "react";
import mealsImage from "../../assets/mealprep.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Meal App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meal prep" />
      </div>
    </Fragment>
  );
};

export default Header;
