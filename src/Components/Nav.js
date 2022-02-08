import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/songs">
        <h1>Tuner</h1>
      </Link>
      <Link to="/songs/new">
        <button>New song</button>
      </Link>
    </div>
  );
};

export default Nav;
