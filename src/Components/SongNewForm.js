import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const SongNewForm = () => {
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });
  const navigate = useNavigate();

  const addNewSong = async (newSong) => {
    await axios
      .post(`${API}/api/songs/new`, newSong)
      .then(() => {
        setSong({
          name: '',
          artist: '',
          album: '',
          time: '',
          is_favorite: false,
        });
        navigate(`/songs`);
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const favorite=event.target.checked ?true:false
    setSong({ ...song, is_favorite: favorite });
    // setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    console.log('in new', song);
    event.preventDefault();
    addNewSong(song);
  };

  return (
    <div className='NewSong'>
      <form className='NewSongForm' onSubmit={handleSubmit}>
        <h1 className='NewSongHeader'>Add a New Song</h1>
        <div>
          <label htmlFor='name'>Song Name</label>
          <input
            id='name'
            value={song.name}
            type='text'
            onChange={handleTextChange}
            placeholder='Name'
            required
          />
        </div>
        <div>
          <label htmlFor='artist'>Artist</label>
          <input
            id='artist'
            type='text'
            value={song.artist}
            placeholder='Artist'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='album'>Album</label>
          <input
            id='album'
            type='text'
            name='album'
            value={song.album}
            placeholder='Album'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='time'>Time</label>
          <input
            id='time'
            type='text'
            name='time'
            value={song.time}
            placeholder='Time'
            onChange={handleTextChange}
            required
          />
        </div>
        <div>
          <label htmlFor='is_favorite'>Favorite</label>
          <input
            id='is_favorite'
            type='checkbox'
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
            value={song.is_favorite}
          />
        </div>
        <br />
        <input type='submit' />
      </form>
    </div>
  );
};

export default SongNewForm;
