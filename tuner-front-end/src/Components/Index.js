import React from "react";
import { apiUrl } from "../Util/apiUrl";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const API = apiUrl();

export default function Index() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="songs">
      <div className="index-header">
        <h1>Index</h1>
        <Link to="songs/new">
          <button>NEW SONG</button>
        </Link>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Fav </th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return (
                <tr key={song.id}>
                  <td>
                    {song.is_favorite ? <span>⭐️</span> : <span>&nbsp;</span>}
                  </td>
                  <td>
                    <Link to={`songs/${song.id}`}>{song.name}</Link>
                  </td>
                  <td>
                    <Link to={`songs/${song.id}`}>{song.artist}</Link>
                  </td>
                  <td>
                    <Link to={`songs/${song.id}`}>{song.album}</Link>
                  </td>
                  <td>
                    <Link to={`songs/${song.id}`}>{song.duration}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
