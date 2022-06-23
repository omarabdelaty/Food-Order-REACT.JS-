import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [ButtonPressed, setButtonPressed] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${ButtonPressed ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonPressed(true);
    const timer =setTimeout(()=>{
        setButtonPressed(false)
    },300)

    return ()=>{
        clearTimeout(timer)
    }
  } ,[cartCtx]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
