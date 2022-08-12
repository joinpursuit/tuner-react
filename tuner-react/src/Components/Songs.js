import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Song from './Song';
const API = process.env.REACT_APP_API_URL;

function Songs() {
  // const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
        // console.log(songs);
      })
      .catch((error) => console.warn('catch', error));
  }, [songs]);

  // const songList = songs.map((song, idx) => {
  //   return (
  //     <li key={idx}>
  //       <Link to={`/songs/${song.id}`}>{song.name}</Link>
  //     </li>
  //   );
  // });

  return (
    <div className="Songs">
      <section>
        <h1>Songs List</h1>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
}

export default Songs;
