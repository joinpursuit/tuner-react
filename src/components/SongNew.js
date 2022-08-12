import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNew() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const addSong = (song) => {
    axios
      .post(`${API}/songs/new`, song)
      .then(() => {
        navigate("/songs");
      })
      .catch((e) => console.error("catch", e));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    const value = event.target.checked ? true : false;
    setSong({ ...song, [event.target.id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="is_favorite">Favorite this song? </label>
          <input
            id="is_favorite"
            value={song.is_favorite}
            type="checkbox"
            onChange={handleCheckBox}
          />
        </div>
        <br />
        <input type="submit" value="Add" />
      </form>

      <button type="button">
        <Link to="/songs">Back</Link>
      </button>
    </section>
  );
}

export default SongNew;
