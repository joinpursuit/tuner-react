import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function EditPlaylist() {
  const { id } = useParams();
  const history = useHistory();

  const [playlist, setPlaylist] = useState({
    name: ""
  });

  const updatePlaylist = async (updatedPlaylist) => {
    try {
      await axios.put(`${API}/playlists/${id}`, updatedPlaylist);
      history.push(`/playlists/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setPlaylist({ ...playlist, is_favorite: !playlist.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/playlists/${id}`).then(
      (response) => setPlaylist(response.data),
      (error) => history.push(`/not-found`)
    );
  }, [id, history, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlaylist(playlist, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={playlist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={playlist.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={playlist.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={playlist.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/playlists/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditPlaylist;