import apiURL from "../util/apiURL";
import { useState, useEffect } from "react";
import axios from "axios";
import SongListItem from "../Components/SongListItem";

const API = apiURL();

const SongsList = () => {
  const [ songs, setSongs ] = useState([]);


  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        setSongs(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <SongListItem key={song.id} song={song}/>;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SongsList;