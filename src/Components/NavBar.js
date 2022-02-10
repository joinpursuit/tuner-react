import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h2>
                <Link to='/songs'>Tunez🎶</Link>
            </h2>
            <button>
                <Link to='/'>Take Me Home</Link>
            </button>
        </nav>
    )
}