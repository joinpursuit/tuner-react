import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/NavBar.js';
import Home from './Pages/Home.js';
import Index from './Pages/Index.js';
import Show from './Pages/Show.js';
import New from './Pages/New.js';


function App() {
  return (
    <div className="App">
     <Router>
       <NavBar />
       <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/songs">
              <Index />
            </Route>
            <Route exact path="/songs/new">
              <New/>
            </Route>
            <Route exact path="/songs/:id">
              <Show />
            </Route>
          </Switch>
        </main>
     </Router>
    </div>
  );
}

export default App;
