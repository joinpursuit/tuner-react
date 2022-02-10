import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Songs = () => {
  const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((error) => console.warn(error));
  }, []);

  return (
    <article>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Fav</th>
          <th>Song</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Time</th>
        </tr>
        {songs.map((song) => {
          return (
            <tr>
              <td>{song.is_favorite ? "⭐️" : ""}</td>
              <td>
                <Link to={`/${song.id}`}>{song.name}</Link>
              </td>
              <td>{song.album}</td>
              <td>{song.artist}</td>
              <td>{song.time}</td>
            </tr>
          );
        })}
      </table>
    </article>
  );
};
export default Songs;
