import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/songs">Playlist</Link>
            <Link to="/songs/new">Add Song to Playlist</Link>
        </nav>
    )
}

export default NavBar
