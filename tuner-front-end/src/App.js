// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Routes
import NavBar from './NavBar'
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'
import New from './Pages/New'


function App() {

  return (
    <div className='App'>
      <NavBar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/songs' component={Index} />
          <Route path='/songs/new' component={New} />
          <Route exact path='/songs/:id' component={Show} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
