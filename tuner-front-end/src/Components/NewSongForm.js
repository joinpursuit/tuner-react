import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function NewSongForm() {
  const history = useHistory();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const addSong = async (newSong) => {
    try {
      const res = await axios.post(`${API}/songs`, newSong);
      return res;
    } catch (error) {
      return error;
    }
  };

  const handleText = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addSong(song);
    history.push(`/songs`);
  };

  return (
    <form className="New" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="album">
        Album:
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="artist">
        Artist:
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="time">
        Time:
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="is_favorite">
        Favorite:
        <input
          id="is_favorite"
          type="checkbox"
          value={song.is_favorite}
          onChange={handleCheckbox}
          checked={song.is_favorite}
        />
      </label>
      <Link to={`/songs`}>
        <button>Back</button>
      </Link>
      <button type="submit">Submt</button>
    </form>
  );
}

export default withRouter(NewSongForm);
