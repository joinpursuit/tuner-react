import axios from "axios";

import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function SongEditForm() {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });
    
    let { id } = useParams();
    let history = useHistory();

    const updateSong = async (updatedSong) => {
      try {
        await axios.put(`${API}/songs/${id}`, updatedSong);
        history.push(`/songs/${id}`);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleTextChange = (event) => {
      setSong({ ...song, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setSong({ ...song, is_favorite: !song.is_favorite });
    };
  
    useEffect(() => {
      axios.get(`${API}/songs/${id}`).then(
        (response) => setSong(response.data),
        (error) => history.push(`/not-found`)
      );
    }, [id, history, API]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateSong(song, id);
    };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Name of Artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Name of Album"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="How long is the song?"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Is favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}
