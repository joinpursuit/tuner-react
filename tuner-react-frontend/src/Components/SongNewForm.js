import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL()


function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  })
  const history = useHistory()

  const postSong = async (song) => {
    try {
      await axios.post(`${API}/songs`, song) 
      history.push(`/songs`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postSong(song);
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className="margin-around-edit" >
      <h1>New Song</h1>
      <div className="form-control">
        <form onSubmit={handleSubmit} >
          <div className="input-group mb-3">
            <span className="input-group-text margin-label" htmlFor="name" id="inputGroup-sizing-default">Title </span>
            <input className="form-control"
              id="name"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={song.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name"
              required />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text margin-label" htmlFor="album" id="inputGroup-sizing-default">album</span>
            <input className="form-control"
              id="album"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={song.album}
              type="text"
              onChange={handleTextChange}
              placeholder="Description"
              required />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text margin-label" htmlFor="artist" id="inputGroup-sizing-default">artist</span>
            <input className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="artist"
              value={song.artist}
              type="text"
              onChange={handleTextChange}
              placeholder="Description"
              required />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text margin-label" htmlFor="time" id="inputGroup-sizing-default">time</span>
            <input className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="time"
              value={song.time}
              type="text"
              onChange={handleTextChange}
              required />
          </div>
          <div>
            <label htmlFor="is_favorite">Favorite: </label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={song.is_favorite}
            />
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>

    </div>
  )
}

export default SongNewForm
