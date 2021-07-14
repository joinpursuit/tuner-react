import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Index from './Pages';

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
          </Switch>
        </main>
     </Router>
    </div>
  );
}

export default App;
