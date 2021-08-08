import axios from 'axios';
import { useHistory, withRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import { apiURL } from '../utils/apiURL';

const API = apiURL()

const NewSongForm = () => {
  let history = useHistory();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const handleChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewSong(song)
  };

  const handleFavorite = (e) => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  }

  const addNewSong = (addSong) => {
    axios.post(`${API}/songs`, addSong)
    .then(() => {
      history.push('/songs');
    }, (error) => console.log(error.message))
    .catch((c) => console.log((c)));
  }

  return (
    <div className="addSong">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        id="name"
        type="text"
        value={song.name}
        onChange={handleChange} 
        />
        <label htmlFor="artist">Artist:</label>
        <input 
        id="artist"
        type="text"
        value={song.artist}
        onChange={handleChange} 
        />
        <label htmlFor="album">Album:</label>
        <input 
        id="album"
        type="text"
        value={song.album}
        onChange={handleChange} 
        />
        <label htmlFor="time">Time</label>
        <input 
        id="time"
        type="text"
        value={song.time}
        onChange={handleChange} 
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input 
        id="is_favorite"
        type="checkbox"
        checked={song.isFavorite}
        onChange={handleFavorite}
        />
        <input type="submit" />
      </form>
      <Link to={`/songs/${song.id}`}>
      <button>Back</button>
      </Link>
    </div>
  );
};

export default withRouter(NewSongForm);