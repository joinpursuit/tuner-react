import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

function Songs() {
  const API = process.env.REACT_APP_API_URL;
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Album</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
