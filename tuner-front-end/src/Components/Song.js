import React from 'react';
import { Link } from 'react-router-dom';

function Song({ song}) {
    return (
        <li>
            {song.is_favorite ? "🌟" : null}
            <Link to= {`songs/${song.id}`}> {song.name}</Link>
            {song.artist}
            {song.time}
        </li>
    )
}

export default Song;