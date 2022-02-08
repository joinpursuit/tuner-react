import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

const DisplaySong = () => {
  const [song, setSong] = useState({});
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const getSong = async () => {
      const targetSong = await axios.get(`${URL}/songs/${id}`);
      setSong(targetSong.data);
    };
    getSong();
  }, []);

  const { name, artist, album, time, is_favorite } = song;

  const handleDelete = async () => {
    await axios.delete(`${URL}/songs/${id}`);
    navigate('/songs');
  };

  return (
    <div className="DisplaySong">
      <h1>Name: {name}</h1>
      <h2>Artist: {artist}</h2>
      <h2>Album: {album}</h2>
      <h2>Time: {time}</h2>
      <h2>Favorite: {is_favorite ? 'Yes' : 'No'}</h2>
      <div className="buttons">
        <Link to="/songs">
          <button>Back</button>
        </Link>
        <Link to={`/songs/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DisplaySong;
