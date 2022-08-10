import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Index from './Pages/Index';
import Show from './Pages/Show';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Index />} />
        {/* <Route path="/songs/new" element={<New />} /> */}
        <Route path="/songs/:index" element={<Show />} />
        {/* <Route path="/songs/:index/edit" element={<Edit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
