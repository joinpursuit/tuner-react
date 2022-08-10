import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

export default function SongEditForm() {
  let { index } = useParams();
  const navigate = useNavigate()

  const [song, setSong] = useState({
    name: "",
    id: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${index}`)
    .then((res) => {
      setSong(res.data)
    })
    .catch((err) => {
      console.warn(err)
    })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${API}/songs/${song.id}`, song)
    .then((res) => {
      setSong(res.data)
      navigate(`/songs/${index}`)
    })
    .catch((err) => {
      console.warn(err)
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          name="artist"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="text"
          value={song.time}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite?</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/songs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}