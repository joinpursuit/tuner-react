import { Link } from 'react-router-dom';
import Home from '../Pages/Home';

function Navbar() {
  return (
    <div>
     <Link to='/' element={<Home/>} >Go Home</Link>
    </div>
  );
}

export default Navbar;
