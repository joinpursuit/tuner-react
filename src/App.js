import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<Details />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="/songs/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
