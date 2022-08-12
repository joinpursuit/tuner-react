import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
        navigate('/not found');
      });
  }, [id, navigate]);

  const songDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate('/songs');
      })
      .catch(() => {
        console.warn('error');
      });
  };

  return (
    <article>
      <h3>Name: {song.name}</h3>
      <h3>Artist: {song.artist}</h3>
      <h3>Album: {song.album}</h3>
      <h3>Time in seconds: {song.time}</h3>
      <h3>Favorite: {song.is_favorite ? '⭐' : '❌'}</h3>

      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back to Songs</button>
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
