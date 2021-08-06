import SongListItem from "./SongListItem";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
const API = apiURL();

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/songs`);
      setSongs(res.data.payload);
      console.log(res.data.payload)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
  },[]);

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>List of Songs</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, id) => {
              return <SongListItem key={id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Songs;
