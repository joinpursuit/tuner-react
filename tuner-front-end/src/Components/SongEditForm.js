import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const SongEditForm = () => {
  let { id } = useParams();
  let history = useHistory();
  const API = apiURL();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  console.log(song)

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);
      history.push(`/songs/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextChange = (event) => {
    // debugger
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    // debugger
    const editSong = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    editSong();
  }, [id, API]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(song)
    updateSong(song, id);
    // console.log(song)
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
        <br />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="Artist"
          required
        />
        <br />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          onChange={handleTextChange}
          placeholder="Album"
          required
        />
        <br />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="text"
          name="time"
          value={song.time}
          onChange={handleTextChange}
          placeholder="Time"
          required
        />
        <br />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite || false}
        />

        <br />
        <button className="SubmitButton" type="submit">Submit</button>
      </form>
      <Link to={`/songs/${id}`}>
        <button className="NeverMindButton">Never Mind!</button>
      </Link>
    </div>
  );
};

export default SongEditForm;
