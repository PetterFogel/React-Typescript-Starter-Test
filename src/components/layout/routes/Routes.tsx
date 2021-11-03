import { FC } from "react";
import { Route } from "react-router-dom";
import DishScreen from "../../../screens/dish-screen/DishScreen";
import HomeScreen from "../../../screens/home-screen/HomeScreen";
import SportsScreen from "../../../screens/sports-screen/SportsScreen";

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/sports" component={SportsScreen} />
      <Route path="/dishes" component={DishScreen} />
    </>
  );
};

export default Routes;
