import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import SongListItem from "./SongListItem";

const API = apiURL();

const SongsList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        setSongs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSongs();
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See more details</th>
              <th>Edit this song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <SongListItem key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SongsList;
