import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/" className={classes.logo}>
          Pablos
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/sports" className={classes.linkStyle}>
            Sports
          </Link>
        </li>
        <li>
          <Link to="dishes" className={classes.linkStyle}>
            Dishes
          </Link>
        </li>
      </ul>
    </header>
  );
};
