import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import SongListItem from "./SongListItem";

const API = apiURL();
function SongsList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchsongs = async () => {
      try {
        const res = await axios.get(`${API}/songs`);

        setSongs(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchsongs()
  }, []);

  return (
    <div>
      <h1>SONGS LIST</h1>
      <table className="table">
        <thead>
          <tr className="table-primary">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Album</th>
            <th scope="col">Artist</th>
            <th scope="col">Time</th>
            <th scope="col">Is Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs.sort((a, b) => (a.id > b.id) ? 1 : -1).map((song) => {
            return <SongListItem key={song.id} song={song} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SongsList;
