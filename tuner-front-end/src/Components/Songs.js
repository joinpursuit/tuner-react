import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        setSongs(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <section>
      <h1>PlayList</h1>
      <table>
        <thead>
          <tr>
            <th>Favorite</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, id) => {
            return (
                <tr key={id}>
                  <td>
                    {song.is_favorite ? (
                      <span>⭐️</span>
                    ) : (
                      <span>&nbsp; &nbsp; &nbsp;</span>
                    )}
                  </td>
                  <td>
                    <Link to={`/songs/${id}`}>{song.name}</Link>
                  </td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.time}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Songs;
