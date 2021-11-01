import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import DishScreen from "./screens/dish-screen/DishScreen";
import HomeScreen from "./screens/home-screen/HomeScreen";
import SportsScreen from "./screens/sports-screen/SportsScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/sports" component={SportsScreen} />
          <Route path="/dishes" component={DishScreen} />
        </Switch>
      </main>
    </>
  );
}

export default App;
