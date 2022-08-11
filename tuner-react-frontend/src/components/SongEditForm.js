import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//API url
const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
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
        setSong(response.data.payload);
      })
      .catch((e) => console.error(e));
  }, []);

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
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="is_favorite">Is_Favorite: </label>
          <input
            id="is_favorite"
            checked={song.is_favorite}
            type="checkbox"
            onChange={handleCheckBox}
          ></input>
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-outline-dark"
          value="EditSong"
        />
      </form>

      <button type="button" className="btn btn-outline-dark">
        <Link to="/songs">Back</Link>
      </button>
    </section>
  );
}

export default SongEditForm;
