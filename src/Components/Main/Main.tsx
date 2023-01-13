import classes from "./Main.module.scss";
import { Products } from "../Products/Products";

export const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.headingBox}>
        <h1>
          The fasted brunch delivery in <span>Your city</span>
        </h1>

        <p>
          This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
          about you ?
        </p>
      </div>
      <Products />
    </main>
  );
};
