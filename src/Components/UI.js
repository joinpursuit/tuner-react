import './UI.css';
import { Link } from 'react-router-dom';

export default function UI() {
    return (
        <nav 
        className='UI'>
            
            <button >
                <Link
                style={{ color: "#ff00ff" }}
                to='/songs'>INDEX PAGE</Link>
            </button>

            <button >
                <Link
                style={{ color: "#ff00ff" }}
                to='/'>HOME</Link>
            </button>

            <button >
                <Link
                style={{ color: "#ff00ff" }}
                href='/songs/new'>NEW</Link>
            </button>
            
        </nav>
    );
};

