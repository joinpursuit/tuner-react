import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEdit() {
  const { id } = useParams();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const updateSong = (song) => {
    axios
      .put(`${API}/songs/${id}`, song)
      .then(() => {
        navigate("/songs");
      })
      .catch((e) => console.error("catch", e));
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckBox = (event) => {
    const value = event.target.checked ? true : false;
    setSong({ ...song, [event.target.id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="is_favorite">Favorite this song? </label>
          <input
            id="is_favorite"
            checked={song.is_favorite}
            type="checkbox"
            onChange={handleCheckBox}
          />
        </div>
        <br />
        <input type="submit" value="Save" />
      </form>

      <button type="button">
        <Link to="/songs">Back</Link>
      </button>
    </section>
  );
}

export default SongEdit;
