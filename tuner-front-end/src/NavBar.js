// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import retrowave from './Images/retrowave.png'

export default function NavBar() {

    return (

        <nav className='NavBar'>
            <img className='retrowave' src={retrowave} alt="New Retro Wave Logo" />
            <span>
                <Link to='/'>Home</Link>
            </span>
            <span>
                <Link to='/songs'>Index</Link>
            </span>
            <span>
                <Link to='/songs/new'>New</Link>
            </span>
        </nav>
    )
}
