import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

function SongNewForm() {
  let history = useHistory();
  const [song, setSong] = useState({
    name: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      history.push(`/songs`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
  };

  return (
    <div>
      <h1>ADD NEW SONG</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleChange}
          placeholder="Enter song name"
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleChange}
          placeholder="Enter album"
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleChange}
          placeholder="Enter time"
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          value={song.is_favorite}
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

export default SongNewForm;
