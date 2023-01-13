import classes from "./Nav.module.scss";

export const Nav = () => {
  return (
    <ul className={classes.nav}>
      <li>
        <a href="https://www.dreamshot.bg" target="#">
          About us
        </a>
      </li>
      <li>
        <a href="https://www.dreamshot.bg" target="#">
          Call us
        </a>
      </li>
      <li className={classes.delivery}>
        Free Delivery
        <div className={classes.deliveryCircle}>
          <img src="Images/delivery.png" alt="" />
        </div>
      </li>
    </ul>
  );
};
