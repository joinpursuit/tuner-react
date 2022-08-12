import "./SongDetails.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSongs] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSongs(res.data);
        navigate(`/songs/${id}`);
      })

      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const songDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate("/songs");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <article className="details">
      <p>
        <strong>Name:</strong> {song.name}
      </p>
      <p>
        <strong>Artist:</strong> {song.artist}
      </p>
      <p>
        <strong>Album:</strong> {song.album}
      </p>
      <p>
        <strong>Time:</strong> {song.time}
      </p>
      <p>
        <strong>Favorite:</strong> {song.is_favorite ? "Yes" : "No"}
      </p>

      <div>
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={songDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
