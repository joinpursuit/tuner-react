import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

const SongNewForm = () => {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  const history = useHistory();

  const addNewSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      history.push(`/songs`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSong(song);
  };

  return (
    <div className="NewSong">
      <form className="NewSongForm" onSubmit={handleSubmit}>
        <h1 className="NewSongHeader">Add a New Song</h1>
        <label htmlFor="name">Song Name</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Artist"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Time"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input className="SubmitButton" type="submit" />
      </form>
    </div>
  );
};

export default SongNewForm;
