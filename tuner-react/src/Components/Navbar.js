import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/songs">See Songs</Link>
      <br />
      <Link to="/">Go Home</Link>
      <br />
      <Link to="/songs/new">New Song</Link>
    </div>
  );
}

export default Navbar;
