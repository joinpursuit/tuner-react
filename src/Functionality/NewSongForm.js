import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const NewSongForm = () => {
    const URL = process.env.REACT_APP_API_URL
    const navigate = useNavigate()

    const [ song, setSong ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    })

    const handleTextChange = (event) => {
        event.preventDefault()
        setSong({...song, [event.target.id]: event.target.value})
    }

    const handleCheckboxChange = (song) => {
        const { is_favorite } = song
        if (is_favorite) {
            is_favorite.checked = true
        } else {
            return false
        }
    }

    const handleClearAll = (event) => {
        event.preventDefault()
        setSong({
            name: "",
            artist: "",
            album: "",
            time: "",
            is_favorite: false
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post(`${URL}/songs`, song)
        .then(() => navigate(`/songs`))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            {/* <p>Look at the text fields that pop up in this New Page!</p> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="artist">Artist</label>
                <input 
                id="artist"
                value={song.artist}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="album">Album</label>
                <input 
                id="album"
                value={song.album}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="time">Time</label>
                <input 
                id="time"
                value={song.time}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label htmlFor="is_favorite">Add to favorites</label>
                <input 
                id="is_favorite"
                type="checkbox"
                onChange={handleCheckboxChange}
                />
            </form>
            <button onClick={handleSubmit}>submit</button>
            <button onClick={handleClearAll}>clear all</button>
            <Link to={`/songs`}>
                <button>back</button>
            </Link>
        </div>
    )
}

export default NewSongForm