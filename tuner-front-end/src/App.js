import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer></ToastContainer>
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
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
