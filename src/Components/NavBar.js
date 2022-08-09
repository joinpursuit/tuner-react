import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <p>TunerApp</p>
      <button style={{background:'#20B2AA'}}>
        <Link style={{color:'black',textDecoration:'none'}} to='/'>Home</Link>
      </button>
      <button style={{background:'#20B2AA'}}>
        <Link style={{color:'black',textDecoration:'none'}} to='/songs'>Index</Link>
      </button>
      <button style={{background:'#20B2AA'}}>
        <Link style={{color:'black',textDecoration:'none'}} to='/songs/new'>New Songs</Link>
      </button>
    </nav>
  );
};
export default NavBar;
