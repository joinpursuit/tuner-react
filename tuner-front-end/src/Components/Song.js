import React from 'react'
import cassette from '../Images/cassette.png'


const msg = "hello "

export default function Song({song}) {

    console.log("songs component: ", song)

    
    return (
        <tbody>
        <tr>
            <td>{song.is_favorite ? (<span>⭐️</span>) : null}</td>
            <td>{song.name}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.time}</td>
        </tr>
        </tbody>
    )
} 
