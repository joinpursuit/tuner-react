import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongEdit() {
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

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
      (response) => setSong(response.data),
      () => navigate("/not-found")
    );
  }, [API, id]);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleOptionChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div>
      {" "}
      <div className="Edit">
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

        <Link to={`/songs/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </div>
      ;
    </div>
  );
}
export default SongEdit;
