import { Link } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav>
      <h3>
        <Link to="/">Let the Music Play</Link>
      </h3>
      <h3>
        <Link to="/songs">SONGS</Link>
      </h3>
      <button>
        <Link to="/songs/new">Add a Song</Link>
      </button>
    </nav>
  );
}

export default NavBar;
