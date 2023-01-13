import classes from "./Header.module.scss";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h2>Brunchy</h2>
      <Nav />
    </header>
  );
};
