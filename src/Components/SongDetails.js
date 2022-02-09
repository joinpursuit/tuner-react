import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      // console.log(`${API}/songs/${id}`)
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate("/songs");
      })
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <h2>
        {" "}
        {song.is_favorite ? "💕" : null} {song.name}
      </h2>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <div className="navigation">
        <div>
          <Link to={"/songs"}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
