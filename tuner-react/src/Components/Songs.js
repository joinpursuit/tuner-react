import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Songs() {
  const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
        // console.log(songs);
      })
      .catch((error) => console.warn('catch', error));
  }, [API, songs]);

  const songList = songs.map((song, index) => {
    return (
      <li key={index}>
        <Link to={`/songs/${index}`}>{song.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>This is our songs Index</h1>
      <ul>{songList}</ul>
    </div>
  );
}

export default Songs;
