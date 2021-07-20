import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Index from "./Components/Index";
import New from "./Components/New";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import FourOFour from "./Components/FourOFour";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-div">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/songs">
            <Index />
          </Route>
          <Route path="/songs/new">
            <New />
          </Route>
          <Route exact path="/songs/:id">
            <Show />
          </Route>
          <Route path="/songs/:id/edit">
            <Edit />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
