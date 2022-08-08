import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <header className="tunerHeader navbar-dark bg-dark">
      <nav>
        <Link to={`/`} className="tunerHomepage">
          <h3>Tuner App</h3>
        </Link>
        <Link to="/songs">
          <Button variant="outline-light">Songs</Button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
