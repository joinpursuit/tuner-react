import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Error from './pages/error';
import Gallery from './pages/gallery';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/songs' element={<Gallery />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
