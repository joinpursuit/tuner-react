import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {apiURL} from '../util/apiURL'

const API = apiURL()

export default function NewSongForm() {
    
    const [song, setSong] = useState({
        name: '',
        artist: '',
        album: '',
        time: '',
        is_favorite: false
    })
    
    const history = useHistory()

    const addSong = () => {
        axios.post(`${API}/songs`, {song})
        .then(() => {history.push('/songs')},
            (error) => {console.log(`Error in addSong: `, error)}
        )
        .catch((c) => {console.log(`Catch in addSong: `, c)})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong()
    }

    const handleChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value })
    }
    const handleCheckbox = (e) => {
        setSong({ ...song })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="name">Title: </label>
                <input onChange={handleChange} type="text" id="name" />
                <label htmlFor="artist">Artist: </label>
                <input onChange={handleChange} type="text" id="artist" />
                <label htmlFor="album">Album: </label>
                <input onChange={handleChange} type="text" id="album" />
                <label htmlFor="time">Time: </label>
                <input onChange={handleChange} type="text" id="time" />
                <label htmlFor="is_favorite">Favorite: </label>
                <input onChange={handleCheckbox} type="checkbox" id="is_favorite" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
