import { FC } from "react";
import classes from "./HomeScreen.module.css";

const HomeScreen: FC = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>PABLOS SPORTS BAR & RESTATURANT</h1>
      <h3>
        Welcome to Pablos! We have made it possible for our customers to choose
        what sports they'd like to to see on the tv and also what dishes they
        want on the menu.
      </h3>
    </section>
  );
};

export default HomeScreen;
