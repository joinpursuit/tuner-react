import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import SongEditForm from './Components/SongEditForm';
import SongNewForm from './Components/SongNewForm';
import SongShow from './Components/SongShow';
import SongsList from './Components/SongsList';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/songs/new" >
            <SongNewForm />
          </Route>
          <Route path="/songs/show/:index">
            <SongShow />
          </Route>
          <Route path="/songs/edit/:index">
            <SongEditForm />
          </Route>
          <Route path="/songs">
            <SongsList />
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default App
