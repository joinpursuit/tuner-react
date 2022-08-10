// DEPENDENCIES
import './App.css';
import { Routes, Route } from "react-router-dom"; 

// PAGES
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Index from './Pages/Index';
import Show from './Pages/Show';
import New from './Pages/New';
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:index" element={<Show />} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
