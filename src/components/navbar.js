import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='Navbar'>
      <h1>
        <Link to='/songs/'>TUNER</Link>
      </h1>
    </nav>
  );
}
export default NavBar;
