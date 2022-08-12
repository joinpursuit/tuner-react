import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SongEdit() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const handleSongEdit = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/songs/${id}`, song)
      .then(() => {
        navigate(`songs/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='SongEdit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          value={song.name}
          type='text'
          onChange={handleSongEdit}
          placeholder='Song Name'
          required
        />
        <label htmlFor='artist'>Artist:</label>
        <input
          id='artist'
          value={song.artist}
          type='text'
          onChange={handleSongEdit}
          placeholder='Song Artist'
          required
        />
        <label htmlFor='album'>Album:</label>
        <input
          id='album'
          value={song.album}
          type='text'
          onChange={handleSongEdit}
          placeholder='Song Album'
          required
        />
        <label htmlFor='time'>Time:</label>
        <input
          id='time'
          value={song.time}
          type='text'
          onChange={handleSongEdit}
          placeholder='Song Time'
          required
        />
        <label htmlFor='is_favorite'>Your Favorite?:</label>
        <input
          id='is_favorite'
          name='is_favorite'
          type='checkbox'
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <br />
        <input type='submit' />

        <br />
      </form>
    </div>
  );
}
export default SongEdit;
