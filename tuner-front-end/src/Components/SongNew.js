import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

function SongNew() {
  let history = useHistory();

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      console.log('SUCCESS, SENDING YOU TO INDEX PAGE')
      history.push(`/songs`);
    } catch (err) {
      console.log(err);
    }
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
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
          placeholder="artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="album"
          onChange={handleTextChange}
        />
           <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="time"
          onChange={handleNumberChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(SongNew);
