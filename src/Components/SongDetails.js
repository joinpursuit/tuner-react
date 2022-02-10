import axios from "axios";
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function SongDetails() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();
    const [ song, setSong ] = useState([]);

    const { title, artist, album, length, is_favorite } = song;

    useEffect(() => {
        axios
            .get(`${API}/songs/${id}`) 
            .then((response) => setSong(response.data))
            .catch((error) => console.warn(error));
    }, [id]);

    const handleDelete = () => {
        axios
            .delete(`${API}/songs/${id}`)
            .then(() => navigate(`/songs`))
            .catch((error) => console.warn(error));
    };

    return (
        <div>
            <div className="card">
                <h3 className="card-header">{title} - {artist}</h3>
                <p>Album: {album}</p>
                <p>Time: {length}</p>    
                <p>Loved: {is_favorite ? '♥️' : '💔'}</p>
            </div>
            <br />
            <hr />
            <br />
            <div className="buttons">
                <Link to='/songs'>
                    <button>Go Back to Songs</button>
                </Link>
                <Link to={`/songs/${id}/edit`}>
                    <button>Edit Song</button>
                </Link>
                <button onClick={handleDelete}>Delete Song</button>
            </div>
        </div>
    );
};