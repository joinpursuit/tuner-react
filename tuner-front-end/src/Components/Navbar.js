import { Link } from 'react-router-dom';
import recordImg from '../assets/recordImg.jpeg'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <h1>
        <Link to='/songs'>Songs</Link>
      </h1>
      <main>
        <img src={recordImg} alt="old record" />
      </main>
      <button>
        <Link to='/songs/new'>Add New Song</Link>
      </button>
    </nav>
  );
};

export default Navbar;