import { Route, Switch } from "react-router-dom";
// import axios from "axios";

import NavBar from "./Components/NavBar";

import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

import "./App.css";

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
          <Route path="/songs/new">
            <New />
          </Route>
          <Route exact path="/songs/:id">
            <Show />
          </Route>
          <Route exact path="/songs/:id/edit">
            <Edit />
          </Route>
          <Route exact path="*">
            <FourOFour />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
