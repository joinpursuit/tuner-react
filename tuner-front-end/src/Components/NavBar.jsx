import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/songs">Songs</NavLink>
      <button>
        <NavLink to="/songs/new">New Song</NavLink>
      </button>
    </nav>
  );
};

export default NavBar;
