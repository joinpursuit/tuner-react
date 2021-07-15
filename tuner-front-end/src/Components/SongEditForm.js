import { useState, useEffect } from "react";
import { withRouter } from "react-router";
import apiURL from "../util/apiURL";
import axios from "axios";

const API = apiURL();

const SongEditForm = (props) => {
  let { id } = props.match.params;
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
      props.history.push(`/songs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleIsFavorite = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song, id);
    props.history.push(`/songs/${id}/edit`);
  };

  useEffect(() => {
    const fetchSong = async () => {
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload)
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetchSong();
  }, [id]);

  return (
    <div className="Edit">
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

export default withRouter(SongEditForm);
