import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Util/apiUrl";
import "../App.css";

const API = apiUrl();

export default function New() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    duration: "",
    is_favorite: false,
  });

  let history = useHistory();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs/add`, newSong)
      .then((response) => {
        history.push("/songs");
      })
      .catch((error) => {
        history.push("/not-found");
      });
  };

  const handleTextChange = (e) => {
    setSong((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setSong((state) => ({
      ...state,
      is_favorite: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    history.push("/songs");
  };

  return (
    <div className="new-page">
      <h2>New</h2>
      <form className="new-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={song.name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          placeholder="artist"
          id="artist"
          value={song.artist}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="album">Album</label>
        <input
          type="text"
          placeholder="album"
          id="album"
          value={song.album}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          placeholder="duration"
          id="duration"
          value={song.duration}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          type="checkbox"
          id="is_favorite"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
