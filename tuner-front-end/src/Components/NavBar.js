import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/songs">Tuner Songs</Link>
      </h1>
      <button>
        <Link to="/songs/new">Add New Song</Link>
      </button>
    </nav>
  );
};

export default NavBar;
