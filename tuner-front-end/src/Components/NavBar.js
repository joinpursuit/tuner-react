import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/songs">Songs</Link>
                </h1>
                <button>
                    <Link to="/songs/new">New Songs</Link>
                </button>
            </nav>
        </div>
    )
}
