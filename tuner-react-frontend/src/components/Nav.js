import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <Link to="/songs">
        <h1 className="indexPage">Index Page</h1>
      </Link>
    </nav>
  );
}

export default Nav;
