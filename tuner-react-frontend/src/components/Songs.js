import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";
import { Link } from "react-router-dom";
import "./Songs.css";

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
      <button className="newSongButton">
        <Link to="/songs/new">New Song</Link>
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Time</th>
            <th scope="col">Fav</th>
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
