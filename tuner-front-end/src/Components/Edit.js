import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Util/apiUrl";
import "../App.css";

const API = apiUrl();

export default function Edit() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    duration: "",
    is_favorite: false,
  });

  let { id } = useParams();
  let history = useHistory();

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then((response) => {
        history.push(`/songs/${id}`);
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

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((error) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song);
    history.push("/songs");
  };

  return (
    <div className="edit-page">
      <h2>Edit</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
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
