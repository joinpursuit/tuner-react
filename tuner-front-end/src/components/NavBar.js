import { NavLink } from "react-router-dom";
import "../navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/songs">Songs</NavLink>
    </nav>
  );
};

export default NavBar;
