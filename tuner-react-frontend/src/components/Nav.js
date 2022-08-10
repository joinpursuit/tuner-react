import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/songs">
        <h1>Index Page</h1>
      </Link>
    </nav>
  );
}

export default Nav;
