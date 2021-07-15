import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/songs">
            <Index />
          </Route>
          <Route exact path="/songs/:id">
            <Show />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
