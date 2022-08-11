import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Index from '../Pages/Index';

function Navbar() {
  return (
    <div>
      <Link to="/" element={<Home />}>
        Go Home
      </Link>
      <br />
      <Link to="/songs" element={<Index />}>
        See Songs
      </Link>
      <br />
      <Link to="/songs/new">New Song</Link>
    </div>
  );
}

export default Navbar;
