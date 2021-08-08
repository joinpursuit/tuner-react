import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function EditSong() {
  const { id } = useParams();
  const history = useHistory();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);
      history.push(`/songs/${id}`);
    } catch (error) {
      return error;
    }
  };

  const handleText = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    const showSong = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`);
        setSong(res.data);
      } catch (error) {
        return error;
      }
    };
    showSong();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
    history.push(`/songs/${id}`);
  };

  return (
    <form className="Edit" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="album">
        Album:
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="artist">
        Artist:
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="time">
        Time:
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleText}
          required
        />
      </label>
      <label htmlFor="is_favorite">
        Favorite:
        <input
          id="is_favorite"
          type="checkbox"
          value={song.is_favorite}
          onChange={handleCheckbox}
          checked={song.is_favorite}
        />
      </label>
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditSong;
