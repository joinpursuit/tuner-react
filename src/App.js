import './App.css';

import {Routes, Route } from 'react-router-dom'

//Pages
import Edit from './Pages/Edit'
import Home from './Pages/Home'
import New from './Pages/New'
import Index from './Pages/Index'
import Show from './Pages/Show'
import Error from './Pages/Error'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact to="/" element={<Home />} />
        <Route to="/songs" element={<Index />} />
        <Route to="/songs/:id" element={<Show />} />
        <Route to="/songs/new" element={<New />} />
        <Route to="/songs/:id/Edit" element={<Edit />} />
        <Route to="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
