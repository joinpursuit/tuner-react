import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewForm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState({
    text: "Add to Favorites?",
    classList:
      "col list-group-item form-check-label border border-primary bg-light text-danger fs-2 rounded",
  });
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

  const handleCheckboxChange = (event) => {
    if (event.target.checked === false) {
      setCheckbox({
        text: "Add to Favorites?",
        classList:
          "col list-group-item form-check-label border border-light bg-light text-danger fs-2 rounded",
      });
      setSong({ ...song, is_favorite: false });
    } else {
      setCheckbox({
        text: "✓ Added",
        classList:
          "col list-group-item form-check-label border border-danger bg-danger text-white fs-2 rounded",
      });
      setSong({ ...song, is_favorite: true });
    }
  };

  const addSong = (newSong) => {
    axios
      .post(`${URL}/songs`, newSong)
      .then(() => navigate("/songs"))
      .catch((c) => console.error("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };

  return (
    <div
      className="New container p-5 my-5 bg-warning text-dark rounded"
      style={{ overflowX: "scroll" }}
    >
      <h2 className="text-white mb-5">New Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-2 mt-2">
          <input
            className="form-control"
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Song Title"
            required
          />
          <label htmlFor="title">Song Title</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            value={song.artist}
            onChange={handleTextChange}
            placeholder="Artist"
            required
          />
          <label htmlFor="date">By</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            className="form-control"
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Song Album"
            required
          />
          <label htmlFor="from">Album</label>
        </div>
        <div className="form-floating mb-3 mt-3">
          <input
            className="form-control"
            id="time"
            type="text"
            name="time"
            value={song.length}
            placeholder="Song Length"
            onChange={handleTextChange}
            required
          />
          <label htmlFor="amount">Song Length</label>
        </div>
        <div className="list-group list-group-horizontal form-check form-switch rounded justify-content-center">
          <label className={checkbox.classList} id="is_favorite">
            {checkbox.text}
            <input
              className="col-md-auto list-group-item form-check-input border-white m-2"
              id="type"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      <Link to={`/songs`}>
        <button className="btn btn-danger mt-3">Delete</button>
      </Link>
    </div>
  );
};

export default NewForm;
