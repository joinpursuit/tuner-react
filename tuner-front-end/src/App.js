// Dependencies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';

// Routes
import NavBar from './NavBar.js'
import Home from './Pages/Home.js'
import Index from './Pages/Index.js'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/songs' component={Index} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
