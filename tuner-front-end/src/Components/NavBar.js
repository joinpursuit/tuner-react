import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/songs/new">New Song</NavLink>
    </nav>
  );
}