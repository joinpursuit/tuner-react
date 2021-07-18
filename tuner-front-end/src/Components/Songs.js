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
      <h1 className="SongsListHeader">Playlist Index</h1>
      <table className="SongsListTable">
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
                    <span>❌</span>
                  )}
                </td>
                <td className="SongIdLink">
                  <Link to={`/songs/${song.id}`}>{song.name}</Link>
                </td>
                <td className="SongIdLink">
                  <Link to={`/songs/${song.id}`}>{song.artist}</Link>
                </td>
                <td className="SongIdLink">
                  <Link to={`/songs/${song.id}`}>{song.album}</Link>
                </td>
                <td className="SongIdLink">
                  <Link to={`/songs/${song.id}`}>{song.time}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Songs;
