import React from 'react'
import NewSongForm from '../components/NewSongForm'

function New({addSong}) {
    return (
        <div>
            New 
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default New
