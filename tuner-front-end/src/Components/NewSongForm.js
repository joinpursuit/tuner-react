import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function PlaylistNewForm() {
  const [playlist, setPlaylist] = useState({
    name: "",
  });

  const history = useHistory();

  const addPlaylist = async (newPlaylist) => {
    try {
      await axios.post(`${API}/playlists`, newPlaylist);
      history.push(`/playlists`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlaylist(playlist);
  };

  return (
    <section className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={playlist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Playlist"
          required
        />
        <button type="submit">Submt</button>
      </form>
    </section>
  );
}

export default withRouter(PlaylistNewForm);
