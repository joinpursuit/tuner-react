import React from 'react'
import { Link } from 'react-router-dom'
import cassette from '../Images/cassette.png'


export default function Song({song}) {


    return (
        <tbody>
        <tr>
            <td>{song.is_favorite ? <img src={cassette} alt="cassette" /> : <span>&nbsp; &nbsp; &nbsp;</span>}</td>
            <td>{song.name}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.time}</td>
            <td><Link to={`/songs/${song.id}`}><button>!</button></Link></td>
        </tr>
        </tbody>
    )
} 
