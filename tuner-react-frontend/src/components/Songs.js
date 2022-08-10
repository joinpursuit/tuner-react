import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";
import { Link } from "react-router-dom";

//get the API url
const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <button>
        <a href="/songs/new">New Song</a>
      </button>
      <table>
        <thead>
          <tr>
            <th>Fav</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return <Song data={song} key={song.id} />;
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Songs;
