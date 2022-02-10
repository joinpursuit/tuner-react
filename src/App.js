import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import New from "./Pages/New"
import Reload from "./Pages/Reload"

import { useState } from "react";


const App = () => {
  //useState at the parent level to capture updates on the total
  const [update, setUpdate] = useState()

  return (
    <div className="App">
      <NavBar update={update}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/songs" element={<Index parentCallBack={setUpdate} />}/>
        <Route exact path="/songs/:id" element={<Show />} />
        <Route path="/songs/new" element={<New />} />
        <Route path="*" element={<Reload />} />
      </Routes>
    </div>
  );
}

export default App;
