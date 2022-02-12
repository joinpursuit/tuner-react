import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Form from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';

// Components
import NavBar from './Components/NavBar';
import Songs from './Components/Songs';

function App() {
  return (
    <div className='wrapper'>

        <main>

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/songs' element={ <Song />} />
            <Route path='/songs/new' element={ <Form />} />
            <Route exact path='/songs/:index' element={ <Show />} />
            <Route path='/songs/:index/edit' element={ <Edit />} />
          </Routes>

        </main>
    </div>
  );
};

export default App;
