import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './DisplaySong';
import axios from 'axios';
import { Card } from 'react-bootstrap';

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
      <table className="table table-striped table-bordered table-dark">
        <thead>
          <tr>
            <td>Name: {name}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Artist: {artist}</td>
          </tr>
          <tr>
            <td>Album: {album}</td>
          </tr>
          <tr>
            <td>Time: {time}</td>
          </tr>
          <tr>
            <td>Favorite: {is_favorite ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
      <div className="buttons mt-5">
        <Link to="/songs">
          <button className="btn btn-dark mx-3">Back</button>
        </Link>
        <Link to={`/songs/${id}/edit`}>
          <button className="btn btn-dark mx-3">Edit</button>
        </Link>
        <button className="btn btn-dark mx-3" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplaySong;
