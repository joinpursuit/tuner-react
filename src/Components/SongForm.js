import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SongForm = () => {
  const [song, setSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const isEdit = id + 1 ? true : false;

  useEffect(() => {
    const getSong = async () => {
      const targetSong = await axios.get(`${URL}/songs/${id}`);
      setSong(targetSong.data);
    };
    isEdit && getSong();
  }, [URL, id]);

  const handleInputChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckChange = (event) => {
    setSong({ ...song, [event.target.id]: !song.is_favorite });
  };

  const handleEdit = () => {
    console.log('Edit');
  };

  const handleNew = () => {
    console.log('New');
  };

  return (
    <div className="SongForm">
      <h1>{isEdit ? 'Edit Song' : 'New Song'}</h1>
      <form onSubmit={isEdit ? handleEdit : handleNew}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={song.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          name="artist"
          type="text"
          placeholder="Artist"
          onChange={handleInputChange}
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          value={song.album}
          name="album"
          type="text"
          placeholder="Album"
          onChange={handleInputChange}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          value={song.time}
          name="time"
          type="text"
          placeholder="Time"
          onChange={handleInputChange}
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          checked={song.is_favorite}
          name="is_favorite"
          type="checkbox"
          onChange={handleCheckChange}
        />
        <div className="buttons">
          <Link to={isEdit ? `/songs/${id}` : '/songs'}>
            <button>Back</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
