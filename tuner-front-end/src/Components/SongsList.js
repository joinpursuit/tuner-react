import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

import SongListItem from "./SongListItem";

const API = apiURL();
const SongsList = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        // console.log(res);
        setSongs(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);
  return (
    <div>
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
      </table>
      {songs.map((song) => {
        // console.log(songs);
        return <SongListItem key={song.id} song={song} />;
      })}
    </div>
  );
};
export default SongsList;

/* <p>
<Link key={song.id} to={`/songs/${id}`}>
  {song.name} {song.artist} {song.album} {song.time}{" "}
  {song.is_favorite}
</Link>
</p> */
