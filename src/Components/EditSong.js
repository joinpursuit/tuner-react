import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditForm() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      () => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default EditForm;
