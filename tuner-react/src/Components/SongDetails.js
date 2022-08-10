import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

export default function SongDetails(){
  const [song, setSong] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/songs/${index}`)
    .then((res) => {
        setSong(res.data)
    })
    .catch((err) => {
      console.warn(err)
    })
// eslint-disable-next-line  
  }, []);

  const handleDelete = () => {
    axios.delete(`${API}/songs/${song.id}`)
    .then(() => {
      alert("BYE BYE SONG")
      navigate("/songs")
    })
    .catch((err) => {
      console.warn(err)
    })
  };

  return (
    <article align="center" style={{padding:"15px"}} width="50%" height="50%">
        <section>
            <h1> {song.is_favorite ? "⭐️" : ""} {song.name} - By {song.artist}</h1>
            <h3>{song.album}</h3>
            <p>{song.time}</p>
        </section>
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
    </article>
  );
}