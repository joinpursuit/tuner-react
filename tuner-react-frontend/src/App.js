import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import SongEditForm from './Components/SongEditForm';
import SongNewForm from './Components/SongNewForm';
import SongShow from './Components/SongShow';
import SongsList from './Components/SongsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="fullBoarder">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/songs/new" >
            <SongNewForm />
          </Route>
          <Route path="/songs/show/:id">
            <SongShow />
          </Route>
          <Route path="/songs/edit/:id">
            <SongEditForm />
          </Route>
          <Route path="/songs">
            <SongsList />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App
