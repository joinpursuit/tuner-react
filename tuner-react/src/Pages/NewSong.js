import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const NewSong = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState({
    name: "",
    album: "",
    artist: "",
    time: "",
    is_favorite: false,
  });

  function handleTextChange(event) {
    if (event.target.id === "is_favorite") {
      setSong({ ...song, [event.target.id]: !song.is_favorite });
    } else {
      setSong({ ...song, [event.target.id]: event.target.value });
    }
  }

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs/new`, newSong)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.warn(error));
  };

  function handleSubmit(event) {
    event.preventDefault();
    addSong(song);
  }

  return (
    <div className="NewPage">
      <h1>New Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleTextChange}
          id="name"
          value={song.name}
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="album"
          value={song.album}
          placeholder="Album"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="artist"
          value={song.artist}
          placeholder="Artist"
        />
        <input
          type="text"
          onChange={handleTextChange}
          id="time"
          value={song.time}
          placeholder="Time"
        />
        <input type="checkbox" onChange={handleTextChange} id="is_favorite" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSong;
