import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Router>
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
            <Route path="/songs/:id/edit">
              <Edit />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
