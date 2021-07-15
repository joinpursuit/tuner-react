import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import apiURL from "../util/apiURL";

const API = apiURL();

export default function NewSong() {
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  
  const history = useHistory();

  const postSong = async (song) => {
    try {
      let res = await axios.post(`${API}/songs`, song);
      setNewSong((prevNewSong) => [...prevNewSong, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log(newSong);
    postSong();
    setNewSong(newSong);
    history.push("/songs");
  };

  const handleChange = (event) => {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={newSong.name}
        ></input>
        <label htmlFor="artist">Artist: </label>
        <input
          id="artist"
          type="text"
          onChange={handleChange}
          value={newSong.artist}
        ></input>
        <label htmlFor="album">Album: </label>
        <input
          id="album"
          type="text"
          onChange={handleChange}
          value={newSong.album}
        ></input>
        <label htmlFor="time">Time: </label>
        <input
          id="time"
          type="text"
          onChange={handleChange}
          value={newSong.time}
        ></input>
        <label htmlFor="is_favorite">Favorite: </label>
        <input id="is_favorite" type="checkbox"></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
