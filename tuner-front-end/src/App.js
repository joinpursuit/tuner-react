// DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";
import SongDetails from "./Components/SongDetails";
import SongNew from "./Components/SongNew";
import SongsList from "./Components/SongsList";
import FourOFour from './Components/4Oh4'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/songs">
              <SongsList />
            </Route>
            <Route path="/songs/new">
              <SongNew />
            </Route>
            <Route exact path="/songs/:id">
              <SongDetails />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch> 
        </main>
      </Router>
    </div>
  );
}

export default App;
