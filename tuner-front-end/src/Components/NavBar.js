import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <h1>
        <NavLink to="/">AnJu's Tuner App</NavLink>
      </h1>
      <h1>
        <NavLink to="/songs">Songs</NavLink>
      </h1>
      <button className="NewSongButton">
        <NavLink to="/songs/new">New Song</NavLink>
      </button>
    </nav>
  );
};

export default NavBar;
