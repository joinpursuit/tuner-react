import axios from "axios";
import { useState} from "react";
import { withRouter } from "react-router-dom";
import apiURL from "../util/apiURL.js";

const API = apiURL();

const SongNewForm = (props) => {

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      props.history.push(newSong);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value});
  };

  const handleIsFavorite = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    props.history.push("/songs")
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist"
          onChange={handleChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album name"
          onChange={handleChange}
        />
         <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Time"
          onChange={handleChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleIsFavorite}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default withRouter(SongNewForm);