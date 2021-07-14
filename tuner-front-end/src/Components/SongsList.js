import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import SongListItem from "./SongListItem";

const API = apiURL();

function SongsList() {
  const [songs, setSongs] = useState([]);

  const getSongs = async ()=>{
    try {
        const res = await axios.get(`${API}/songs`);
        setSongs(res.data.payload);
      } catch (err) {
        console.log(err);
      }
  }
  
  useEffect(() => {
    getSongs();
  }, []);
  
  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Song</th>
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
}

export default SongsList;
