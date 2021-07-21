import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";
const API = apiURL();

function PlaylistNewForm() {
  let history = useHistory();

  const addPlaylist = async (newPlaylist) => {
    console.log('ABOUT TO SEND THE REQUEST');
    try {
      await axios.post(`${API}/playlists`, newPlaylist);
      console.log('SUCCESS, SENDING YOU TO INDEX PAGE')
      history.push(`/playlists`);
    } catch (err) {
      console.log(err);
    }
  };

  const [playlist, setPlaylist] = useState({
    name: ""
  });

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlaylist({ ...playlist, is_favorite: !playlist.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlaylist(playlist);
  };
  
  return (
    <div className="New">
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
        <Button type="submit">Submt</Button>
      </form>
    </div>
  );
}

export default withRouter(PlaylistNewForm);