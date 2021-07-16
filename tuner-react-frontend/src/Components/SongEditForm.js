import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

function SongEditForm() {
  let { id } = useParams();
  let history = useHistory();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);

      history.push(`/songs`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);

      } catch (error) {
        console.log(error);
      }
    }
    fetchSong()

  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div>
      <h1>EDIT FORM</h1>
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
            <label htmlFor="is_favorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={song.is_favorite}
            />
          </div>
          <button className="btn btn-primary">submit changes</button>
        </form>
      </div>


    </div>
  );
}

export default SongEditForm;
