import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewEditForm.css"

const API = process.env.REACT_APP_API_URL;
const NewEditForm = () => {
  let { id } = useParams();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const songData = await axios(API + "/songs/" + id);
      setSong(songData.data);
    };
    fetchData();
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (song.id) {
      axios
        .put(`${API}/songs/${id}`, song)

        .then(() => navigate(`/songs/${id}`));
    } else {
      axios
        .post(`${API}/songs`, song)

        .then(() => navigate(`/songs`));
    }
  };

  const handleTextChange = (event) => {
    const { value, id } = event.target;
    setSong({ ...song, [id]: value });
  };

  const handleNevermind = () => navigate(`/songs/`);

  return (
    <div className="newSong">
      <form className="newSong-control" onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          value={song.name}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="artist">Artist :</label>
        <input
          type="text"
          id="artist"
          value={song.artist}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />

        <label htmlFor="album">Album :</label>
        <input
          id="album"
          type="text"
          value={song.album}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="time">Time :</label>
        <input
          id="time"
          type="number"
          value={song.time}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <label htmlFor="is_favorite">Favorite :</label>
        <input
          id="is_favorite"
          type="boolean"
          value={song.is_favorite}
          onChange={handleTextChange}
          autoComplete="off"
          required
        />
        <br />

        <input type="submit" className="form-submit" />
      </form>
      <button onClick={handleNevermind} className="form-nevermind">
        Nevermind
      </button>
    </div>
  );
};

export default NewEditForm;