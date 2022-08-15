// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/songs' element={<Index />} />
          <Route path='/songs/new' element={<New />} />
          <Route path='/songs/:id' element={<Show />} />
          <Route path='/songs/:id/edit' element={<Edit />} />
          <Route path='*' element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  )
}

export default App