import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/songs">Songs</Link>
      <Link to="/songs/new">Add a Song</Link>
    </nav>
  );
}

export default NavBar;
