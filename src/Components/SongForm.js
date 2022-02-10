import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import './SongForm.css';

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

  const handleEdit = async (event) => {
    event.preventDefault();
    await axios.put(`${URL}/songs/${id}`, song);
    navigate(`/songs/${id}`);
  };

  const handleNew = async (event) => {
    event.preventDefault();
    await axios.post(`${URL}/songs`, song);
    await navigate('/songs');
  };

  return (
    <div className="SongForm">
      <Form
        // style={{ width: '500px',  }}
        onSubmit={isEdit ? handleEdit : handleNew}
      >
        <Form.Group className="form form-dark mx-5 border border-dark p-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            value={song.name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <Form.Label htmlFor="artist">Artist</Form.Label>
          <Form.Control
            id="artist"
            value={song.artist}
            name="artist"
            type="text"
            placeholder="Artist"
            onChange={handleInputChange}
          />
          <Form.Label htmlFor="album">Album</Form.Label>
          <Form.Control
            id="album"
            value={song.album}
            name="album"
            type="text"
            placeholder="Album"
            onChange={handleInputChange}
          />
          <Form.Label htmlFor="time">Time</Form.Label>
          <Form.Control
            id="time"
            value={song.time}
            name="time"
            type="text"
            placeholder="Time"
            onChange={handleInputChange}
          />
          <Form.Label htmlFor="is_favorite">Favorite</Form.Label>
          <Form.Check
            id="is_favorite"
            checked={song.is_favorite}
            name="is_favorite"
            type="checkbox"
            onChange={handleCheckChange}
          />
        </Form.Group>
        <div className="buttons mt-4 justify-content-end">
          <Link to={isEdit ? `/songs/${id}` : '/songs'}>
            <button className="btn btn-dark">Back</button>
          </Link>
          <button className="btn btn-dark mx-3" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SongForm;
