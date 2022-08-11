import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SongNewForm.css";

//API url
const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const addNewSong = (newSong) => {
    axios
      .post(`${API}/songs/new`, newSong)
      .then(() => {
        navigate("/songs");
      })
      .catch((e) => console.error("catch", e));
  };

  const handleTextChange = (event) => {
    setNewSong({ ...newSong, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    const value = event.target.checked ? true : false;
    setNewSong({ ...newSong, [event.target.id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSong(newSong);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={newSong.name}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            value={newSong.artist}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            value={newSong.album}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            value={newSong.time}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="is_favorite">Is_Favorite: </label>
          <input
            id="is_favorite"
            value={newSong.is_favorite}
            type="checkbox"
            onChange={handleCheckBox}
          ></input>
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-outline-dark"
          value="Create New Song"
        />
      </form>

      <button type="button" className="btn btn-outline-dark">
        <Link to="/songs">Back</Link>
      </button>
    </section>
  );
}

export default SongNewForm;
