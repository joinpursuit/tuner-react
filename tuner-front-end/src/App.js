import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Index from './Pages/Index'
import Show from './Pages/Show';
import FourOFour from './Pages/FourOFour';
import New from './Pages/New';
import Edit from './Pages/Edit';

 function App() {
  return (
    <div className="App">
        <Navbar />
      <main>
      <Switch>
        <Route exact path='/songs'>
          <Index />
        </Route>
        <Route path='/songs/new'>
          <New />
        </Route>
        <Route exact path='/songs/:id'>
          <Show />
        </Route>
        <Route path='/songs/:id/edit'>
          <Edit />
        </Route>
        <Route path='*'/>
        <FourOFour />
      </Switch>
      </main>
    </div>
  )
}

export default App
