import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import NewForm from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Reload from './Pages/Reload'

// Components
import UI from './Components/UI';
import Song from './Components/Song';

function App() {
  return (
    <div className='wrapper'>
          <UI />

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/songs' element={ <Song />} />
            <Route path='/songs/new' element={ <NewForm />} />
            <Route exact path='/songs/:id' element={ <Show />} />
            <Route path='/songs/:id/edit' element={ <Edit />} />
            <Route path='*' element={<Reload />} />
          </Routes>

    </div>
  );
};

export default App;
