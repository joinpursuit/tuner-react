import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SongNewForm() {
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    const [ song, setSong ] = useState({
        title: '',
        artist: '',
        album: '',
        length: '',
        is_favorite: false
    });

    const { title, artist, album, length, is_favorite } = song;

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxToggle = () => {
        setSong({ ...song, is_favorite: !is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postSong(song);
    };

    const postSong = (newSong) => {
        axios
            .post(`${API}/songs`, newSong)
            .then(() => navigate(`/songs`), (error) => console.error(error) )
            .catch((error) => console.warn("catch", error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title:</label>
                    <input
                        id="title"
                        value={title}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="title of the song"
                        required
                    />
                <label htmlFor="artist">artist:</label>
                    <input
                        id="artist"
                        type="text"
                        required
                        value={artist}
                        placeholder="songs's artist"
                        onChange={handleTextChange}
                    />
                <label htmlFor="album">album:</label>
                    <input
                        id="album"
                        type="text"
                        name="album"
                        value={album}
                        placeholder="song's album title"
                        onChange={handleTextChange}
                    />
                <label htmlFor="length">length:</label>
                    <input
                        id="length"
                        type="text"
                        name="length"
                        value={length}
                        placeholder="song's time length"
                        onChange={handleTextChange}
                    />
                <label htmlFor="is_favorite">Favorite:</label>
                    <input
                        id="is_favorite"
                        type="checkbox"
                        onChange={handleCheckboxToggle}
                        checked={is_favorite} 
                    />
                <br />
                <button type="submit">Submit</button>
            </form>

            <br />
            <hr />
            <br />
            
            <Link to={`/songs`}>
                <button>Never mind!</button>
            </Link>
        </div>
    );
};