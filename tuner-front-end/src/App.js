import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Index from './Pages/Index';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <Index exact path='/songs' />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
