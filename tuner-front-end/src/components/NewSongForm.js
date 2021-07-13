import React, { useState } from 'react'

function NewSongForm({addSong}) {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    })

    const handleTextInput = (e) => {
        setSong({...song, [e.target.id]: e.target.value})
    }

    const handleCheckBox = (e) => {
        setSong({...song, [e.target.id]: !song.is_favorite})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(song)
    }
 
    return (
       <form onSubmit={handleSubmit}>
           <label htmlFor="name">Song Name: </label>
           <input type="text" id="name" value={song.name} onChange={handleTextInput} required />
           <label htmlFor="artist">Artist: </label>
           <input type="text" id="artist" value={song.artist} onChange={handleTextInput} required />
           <label htmlFor="album">Album: </label>
           <input type="text" id="album" value={song.album} onChange={handleTextInput} required />
           <label htmlFor="time">Time: </label>
           <input type="text" id="time" value={song.time} onChange={handleTextInput} required />
           <label htmlFor="is_favorite">Favorite? </label>
           <input type="checkbox" id="is_favorite" value={song.is_favorite} onChange={handleCheckBox} />
           <input type="submit"/>
       </form>
    )
}

export default NewSongForm
