import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="to-songs">
        <Link to="/songs">Tuner</Link>
      </div>
      <div className="new-song">
        <Link to="/songs/new">Add Song</Link>
      </div>
    </div>
  );
};

export default NavBar;
