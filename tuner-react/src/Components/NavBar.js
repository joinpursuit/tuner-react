import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='nav-bar'>
			<Link to='/songs'>Songs</Link>
			&nbsp;
			<Link to='/'>Home</Link>
			&nbsp;
			<Link to='/songs/new'>New Song</Link>
			&nbsp;
			<Link to='/songs/edit'>Edit A Song</Link>
		</div>
	);
};

export default NavBar;
