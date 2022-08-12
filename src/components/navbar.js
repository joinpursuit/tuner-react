import { Link } from 'react-router-dom';
import './navbar.css';
function NavBar() {
  return (
    <nav className='Navbar'>
      <h1>
        <Link to='/' className='link'>
          TUNER
        </Link>
      </h1>
    </nav>
  );
}
export default NavBar;
