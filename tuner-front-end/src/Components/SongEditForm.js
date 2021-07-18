import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const SongEditForm = () => {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  let { id } = useParams();
  let history = useHistory();
  const API = apiURL();

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);
      history.push(`/songs/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      (error) => history.push(`/not-found`)
    );
  }, [id, history, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div className="EditSong">
      <form className="EditSongForm" onSubmit={handleSubmit}>
        <h1>Edit a Song</h1>
        <label htmlFor="name">Song Name</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="Artist"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="Time"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
          required
        />

        <br />
        <input className="SubmitButton" type="submit" />
      <Link to={`/songs/${id}`}><button className="NeverMindButton">Never Mind!</button></Link>
      </form>

    </div>
  );
};



export default SongEditForm;
