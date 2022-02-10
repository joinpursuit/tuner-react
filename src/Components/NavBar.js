import { Link } from "react-router-dom";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://img.favpng.com/22/0/21/house-computer-icons-home-page-png-favpng-qFvEtkK5wHe1Vp785d8CRVNhy.jpg"
              height="60px"
              alt="home-page-icon"
            ></img>
          </Link>
        </li>
        <li>
          <h3>
            <Link to="/songs">SONGS</Link>
          </h3>
        </li>
        <li>
          {" "}
          <button>
            <Link to="/songs/new">Add a Song</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
