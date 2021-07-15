import { Route, Switch } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
          <Switch>
            <Route exact path="/">
              <h1>Let's find you some music</h1>
            </Route>
            <Route path="/songs">
              <Index/>
            </Route>
            <Route path="/songs/new">
              <New addSong={addSong} />
            </Route>
            <Route exact path="/songs/:id">
              <Show deleteSong={deleteSong} />
            </Route>
            <Route exact path="/songs/:id/edit">
              <Show editSong={editSong} />
            </Route>  
            <Route exact path="*">
              <h1></h1>
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
