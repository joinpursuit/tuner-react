import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

function SongEditForm() {
  let { id } = useParams();
  console.log(id)
  // debugger;
  let history = useHistory();
  const API = apiURL();
 
  const [song, setSong] = useState({
    name: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);
      history.push(`/songs/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect( async () => {
    try {
      const res = await axios.get(`${API}/songs/${id}`);
      setSong(res.data);
    } catch (error) {
      console.log(error);
    }
  },[id, history, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div>
      <h1>EDIT FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          required
          value={song.album}
          onChange={handleChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          onChange={handleChange}
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
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
