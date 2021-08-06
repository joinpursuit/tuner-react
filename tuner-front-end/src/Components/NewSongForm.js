import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function NewSongForm() {
  const [song, setSong] = useState({
    name: "",
  });

  const history = useHistory();

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
    history.push(`/songs`);
  };

  return (
    <form className="New" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={song.name}
        type="text"
        onChange={handleTextChange}
        placeholder="Name of Song"
        required
      />
      <button type="submit">Submt</button>
    </form>
  );
}

export default withRouter(NewSongForm);
