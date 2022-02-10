import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Pages
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        <Route path="/songs/:id" element={<Show />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="/songs/:id/Edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
