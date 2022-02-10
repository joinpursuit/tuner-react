import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const EditSong = () => {
    const URL = process.env.REACT_APP_API_URL
    const { id } = useParams()
    const navigate = useNavigate()
    
    const [ song, setSong ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    })
    console.log(id)
    console.log(song)

    useEffect(() => {
        axios
        .get(`${URL}/songs/${id}`)
        .then((response) => setSong({
            name: response.data.name,
            artist: response.data.artist,
            album: response.data.album,
            time: response.data.time,
            is_favorite: response.data.is_favorite,
        }))
        .catch((error) => console.log(error))
    }, [URL, id])
    console.log(song)

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
        .put(`${URL}/songs/${id}`, song)
        .then(() => navigate(`/songs/${id}`))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <p>Look at all the text box fields that pop up to edit the song</p>
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
            <Link to={`/songs/${id}`}>
                <button>back</button>
            </Link>
        </div>
    )
}

export default EditSong