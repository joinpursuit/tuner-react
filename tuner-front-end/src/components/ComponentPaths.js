import React from "react";
import { Routes, Route } from "react-router-dom";
import Edit from "../Pages/Edit/Edit";
import Index from "../Pages/Index/Index";
import New from "../Pages/New/New";
import Show from "../Pages/Show/Show";
import Welcome from "../Pages/Welcome/Welcome";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";


const ComponentPaths = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route path="/songs" element={<Index />}></Route>
        <Route path="/songs/new" element={<New />}></Route>
        <Route path="/songs/:id" element={<Show />}></Route>
        <Route path="/songs/:id/edit" element={<Edit />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default ComponentPaths;
