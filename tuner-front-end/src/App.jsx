import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";

import Edit from "./Pages/Edit";
import FoF from "./Pages/FoF";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

const App = () => {
  return (
    <div className="App">
      <NavBar />
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
          <FoF />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
