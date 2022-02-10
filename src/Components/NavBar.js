import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h3>
                <Link to='/songs'>Tunez🎶</Link>
            </h3>
            <h1>
                <Link to='/songs/new'>Add a Tune</Link>
            </h1>
            <h3>
                <Link to='/'>Take Me Home</Link>
            </h3>
        </nav>
    )
}