import './UI.css';
import { Link } from 'react-router-dom';

export default function UI() {
    return (
        <nav 
        className='UI'>
            
            <button >
                <Link
                style={{ color: "white" }}
                to='/transactions'>INDEX PAGE</Link>
            </button>

            <button >
                <Link
                style={{ color: "white" }}
                to='/'>HOME</Link>
            </button>

            <button >
                <a
                style={{ color: "white" }}
                href='/transactions/new'>NEW</a>
            </button>
            
        </nav>
    );
};

