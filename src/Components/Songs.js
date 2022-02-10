import axios from "axios";
import { useState, useEffect } from "react";
import Song from './Song';

export default function Songs() {
    const API = process.env.REACT_APP_API_URL;
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/songs`)
            .then((response) => setSongs(response.data))
            .catch((error) => console.warn(error));
    }, [API]);

    return (
        <div className="Songs">
            {songs.map((song) => {
                return <Song key={song.id} song={song} />
            })}
        </div>    
    );
};