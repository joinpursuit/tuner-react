import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/songs'>Songs</Link>{' '}
            <Link to='/songs/new'>Add New Song</Link>
        </nav>
    )
}

export default NavBar;