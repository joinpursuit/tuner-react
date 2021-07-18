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
            <label htmlFor="">Artist: </label>
            <input type="text" />
            <label htmlFor="">Album: </label>
            <input type="text" />
            <label htmlFor="">Time: </label>
            <input type="text" />
            <label htmlFor="">Favorite? </label>
            <input type="checkbox" id="favorite" value={song.favorite} onChange={handleCheckBox} />
            <input type="submit" />

        </form>
    )
}

export default NewSong;