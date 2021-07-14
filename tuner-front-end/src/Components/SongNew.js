import React, {useState} from "react"

function NewSong({addSong}) {
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
            <label htmlFor=""></label>
            <label htmlFor=""></label>
            <label htmlFor=""></label>
            <label htmlFor=""></label>

        </form>
    )
}

export default NewSong;