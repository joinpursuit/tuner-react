import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="heading-link" to="/songs">
          <h1>Tuner</h1>
        </Link>
      </nav>
    </div>
  );
}
