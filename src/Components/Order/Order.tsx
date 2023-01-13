import { useState } from "react";
import classes from "./Order.module.scss";

export const Order = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className={classes.orderWrapper}>
      <div className={classes.order}>
        <div className={classes.totalPrice}>
          <img src="Images/basket.png" alt="" />
          <h3>{price.toFixed(2)}$</h3>
        </div>
        <h4 className="btn">Order Now</h4>
      </div>
    </div>
  );
};
