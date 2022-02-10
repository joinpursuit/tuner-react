import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [song, setSong] = useState({});

  useEffect(() => {
    console.log(API);
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
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
      <div className="songDetail">
        <h4>
          '{song.name}' &nbsp;
          {song.is_favorite ? "is a favorite! ❤️" : null}
        </h4>
        <p>Artist : {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Time: {song.time}</p>
      </div>
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
          <button className="submit" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
