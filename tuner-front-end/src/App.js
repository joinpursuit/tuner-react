import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Songs from "./components/Songs"
import "./App.css";
import Show from "./pages/Show";
import Edit from "./pages/Edit";

function App() {
 
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/songs">
            <Songs />
          </Route>
          <Route exact path="/songs/:id">
            <Show />
          </Route>
          <Route exact path="/songs/:id/edit">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
