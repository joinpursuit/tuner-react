// pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

// components
import NavBar from "./Components/NavBar";
// dependencies
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/songs">
            <Index />
          </Route>
          <Route exact path="/songs/new">
            <New />
          </Route>
          <Route exact path="/songs/:id">
            <Show />
          </Route>
          <Route exact path="/songs/:id/edit">
            <Edit />
          </Route>
          <Route exact path="/*">
            <FourOFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
