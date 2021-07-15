import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h4>
        <NavLink to="/songs">Songs</NavLink>
      </h4>
      <h4>
        <NavLink to="/songs/new">New Song</NavLink>
      </h4>
    </div>
  );
}
