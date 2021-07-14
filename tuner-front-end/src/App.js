// DEPENDENCIES
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { songs } from './Components/SongsList'


// COMPONENTS
import NavBar from "./Components/NavBar";
import SongDetails from "./Components/SongDetails";
// import SongListItem from "./Components/SongListItem";
import SongNew from "./Components/SongNew";
import SongsList from "./Components/SongsList";

function App() {
  // const [songs, setSongs] = useState([]);
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
            {/* <Route path="*">
              <FourOFour />
            </Route> */}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
