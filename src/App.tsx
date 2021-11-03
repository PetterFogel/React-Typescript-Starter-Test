import "./App.css";
import { Header } from "./components/layout/header/Header";
import Routes from "./components/layout/routes/Routes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
