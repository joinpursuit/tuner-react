import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
       
    <div className="nav-bar">
      <Link to="/songs">Songs</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/songs/new">New Song</Link>
      <Link to="/songs/edit">Edit A Song</Link>
    </div>
  );
}
       
 

export default NavBar;