import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewSong() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: 0,
    is_favorite: true,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleOptionChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs/new`, newSong)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song, id);
  };

  return (
    <div className="NewSongForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />

        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Artist"
          required
        />

        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Album"
          required
        />

        <label htmlFor="time">Year of Release:</label>
        <input
          id="time"
          value={song.time}
          type="number"
          onChange={handleTextChange}
          placeholder="Year of Release"
          required
        />

        <label htmlFor="is_favorite">Favorite</label>
        <select
          value={song.is_favorite}
          onChange={handleOptionChange}
          id="is_favorite"
        >
          <option value="true">True</option>
          <option value="false">False</option>
          required
        </select>

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default NewSong;
