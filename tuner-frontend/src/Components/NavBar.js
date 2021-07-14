import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navbar navbar-light bg-light">
            <NavLink path to="/">Home</NavLink>
            <NavLink path to="/songs">Songs</NavLink>
        </div>
    )
}

