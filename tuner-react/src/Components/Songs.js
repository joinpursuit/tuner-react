import { useState, useEffect } from 'react';
import axios from 'axios';

function Songs() {
  const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
        console.log(songs);
      })
      .catch((error) => console.warn('catch', error));
  }, [API, songs]);

  return (
    <div>
      <h1>This is our songs Index</h1>
    </div>
  );
}

export default Songs;
