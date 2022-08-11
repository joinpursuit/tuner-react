import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();

  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: 0,
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/api/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const updateSong = (song) => {
    console.log('in update', song);
    axios
      .put(`${API}/api/songs/${id}`, song)
      .then(() => {
        // setSong(response.data);
        navigate(`/songs/${id}`);
      })
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    console.log(song.is_favorite);
    const favorite = event.target.checked ? true : false;
    setSong({ ...song, is_favorite: favorite });
  };

  const handleSubmit = (event) => {
    console.log('in edit', song);
    event.preventDefault();
    updateSong(song);
    setSong('');
  };

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Song Name</label>
        <input
          id='name'
          value={song.name}
          type='text'
          onChange={handleTextChange}
          required
        />

        <label htmlFor='artist'>Artist:</label>
        <input
          id='artist'
          type='text'
          value={song.artist}
          onChange={handleTextChange}
          required
        />

        <label htmlFor='album'>Album Name:</label>
        <input
          id='album'
          type='text'
          // name='album'
          value={song.album}
          onChange={handleTextChange}
          required
        />

        <label htmlFor='time'>Total Song Time:</label>
        <input
          id='time'
          type='number'
          value={song.time}
          onChange={handleTextChange}
          required
        />

        <label htmlFor='is_favorite'>Is it a favorite?:</label>
        <input
          id='is_favorite'
          type='checkbox'
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />

        <br />
        <input type='submit' />
      </form>

      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
