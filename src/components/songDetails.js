import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data.payload);
        setSong(response.data.payload);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate('/songs');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <article>
      <table>
        <tbody>
          <tr>
            <td>
              <h2>Song Name: {song.name} </h2>
            </td>
            <td>
              <h2>Artist: {song.artist}</h2>
            </td>
            <td>
              <h2>Album: {song.album}</h2>
            </td>
            <td>
              <h2>Time: {song.time}</h2>
            </td>
            <td>
              <h2>Your Favorite?: {song.is_favorite ? `🌟` : null}</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/songs/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={'/songs'}>
        <button className='back'>Back</button>
      </Link>
    </article>
  );
}
export default SongDetails;
