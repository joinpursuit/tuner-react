import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function SongEditForm() {
    const API = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const navigate = useNavigate();
    const [ song, setSong ] = useState({
        title: '',
        artist: '',
        album: '',
        length: '',
        is_favorite: false
    });

    useEffect(() => {
        axios
            .get(`${API}/songs/${id}`)
            .then((response) => {
                const { title, artist, album, length, is_favorite } = response.data;
                setSong({
                    title,
                    artist,
                    album,
                    length,
                    is_favorite
                }); 
            })
            .catch((error) => navigate(`/page-not-found`))
    }, [API, id, navigate]);

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxToggle = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song, id);
    };

    const updateSong = (updatedSong, id) => {
        axios
            .put(`${API}/songs/${id}`)
            .then(() => navigate(`/songs/${id}`), (error) => console.error(error))
            .catch((error) => console.warn("warn", error));
    }

    const { title, artist, album, length, is_favorite } = song;

    return (
        <div className="Edit">
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
                        // pattern="http[s]*://.+"
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

            <Link to={`/songs/${id}`}>
                <button>Never mind!</button>
            </Link>
        </div>
    );
};