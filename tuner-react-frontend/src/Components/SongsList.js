import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import SongListItem from "./SongListItem";

const API = apiURL();
function SongsList() {
  const [songs, setSongs] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`${API}/songs`);
      setSongs(res.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1>SONGS LIST</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Album</th>
            <th>Time</th>
            <th>Is Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return <SongListItem key={song.id} song={song} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SongsList;
