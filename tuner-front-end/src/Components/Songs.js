import axios from 'axios';
import { useState, useEffect } from 'react';
import apiURL from '../util/apiURL';
import Song from '../Components/Song';

const API = apiURL();

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        try {
            axios.get(`${API}/songs`).then((response) => {
                setSongs(response.data)
            });
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div>
            {songs.map(song => {
                return (
                    <Song key={song.id} song={song} />

                )
            })}

        </div>
    )
}

export default Songs;