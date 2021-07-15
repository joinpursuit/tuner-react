import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Song API</h1>
      <NavLink to="/songs">Songs</NavLink>
      <NavLink to="/songs/new">Add New Song</NavLink>
    </nav>
  );
}

export default NavBar;