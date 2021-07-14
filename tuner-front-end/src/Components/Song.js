import React from 'react'
import cassette from '../Images/cassette.png'


export default function Song({song}) {

    // (<span>⭐️</span>)

    return (
        <tbody>
        <tr>
            <td>{song.is_favorite ? <img src={cassette} alt="cassette" /> : <span>&nbsp; &nbsp; &nbsp;</span>}</td>
            <td>{song.name}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.time}</td>
        </tr>
        </tbody>
    )
} 
