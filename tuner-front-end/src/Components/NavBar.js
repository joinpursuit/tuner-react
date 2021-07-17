import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
      <NavLink to="/songs">Songs</NavLink></h1>
      <button>
      <NavLink to="/songs/new">New Song</NavLink></button>
    </nav>
  );
};

export default NavBar;
