import React from 'react'
import Song from "./Song"

function Songs({songs}) {
    return (
        <ul>
            {songs.map((song) => <Song song={song} key={song.id}/>)}
        </ul>
    )
}

export default Songs;