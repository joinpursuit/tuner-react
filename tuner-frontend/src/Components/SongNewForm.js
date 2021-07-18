import axios from "axios";

import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let history = useHistory();

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      history.push(`/songs`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
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
        <Link to={`/songs`}>
          <button>Nevermind!</button>
        </Link>
      </form>
    </div>
  );
}
