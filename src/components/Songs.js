import "./Songs.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/songs/`).then((res) => {
      setSongs(res.data);
    });
  }, []);

  return (
    <div className="all-songs">
      <section>
        <hr />
        <table className="songs-table">
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
              return <Song key={song.id} song={song} index={id} />;
            })}
          </tbody>
        </table>
      </section>
      <br />
      <button>
        <Link to={"/"}>Back</Link>
      </button>
    </div>
  );
}

export default Songs;
