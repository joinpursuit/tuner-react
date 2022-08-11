import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLinks">
        <Link to="/">
          <Button variant="outline-dark" className="tunerLink">
            Home
          </Button>
        </Link>
        <Link to="/songs">
          <Button variant="outline-dark" className="tunerLink">
            Songs
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
