import "./App.css";
import { Switch } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import Routes from "./components/layout/routes/Routes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Routes />
        </Switch>
      </main>
    </>
  );
}

export default App;
