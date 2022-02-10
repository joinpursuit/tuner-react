import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SongEdit from "./SongEdit";

const SongIndex = () => {
  const API = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.warn(error));
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate("/");
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <h1>{song.name}</h1>
      <h3>{song.album}</h3>
      <h4>{song.artist}</h4>
      <h6>{song.time}</h6>
      <h3>{song.is_favorite ? "⭐️" : ""}</h3>
      <Link to="/">
        <button>Back</button>
      </Link>
      <Link to={`/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};
export default SongIndex;
