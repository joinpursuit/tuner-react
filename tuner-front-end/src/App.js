import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

//COMPONENTS
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <Router>
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
        <Route exact path="*">
            <FourOFour/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
