import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import ListItem from "./ListItem";

const API = apiURL();

function ListSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        setSongs(res.data);
      } catch (error) {
        return error;
      }
    };
    getSongs();
  }, []);

  return (
    <table className="songs">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Time</th>
          <th>Favorite</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => {
          return <ListItem key={song.id} song={song} />;
        })}
      </tbody>
    </table>
  );
}

export default ListSongs;
