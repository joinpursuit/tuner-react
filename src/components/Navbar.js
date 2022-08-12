import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/songs">All Songs</Link>
      <Link to="/songs/new">Add Song</Link>
    </div>
  );
}

export default Navbar;
