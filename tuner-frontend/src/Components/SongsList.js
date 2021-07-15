import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();

export default function SongsList() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const allSongs = await axios.get(`${API}/songs`);
      setSongs(allSongs.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      fetchSongs();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {songs.map((song) => {
          return (
              // is_favorite should show as star icon
            <li key={song.id}>
              {" "}
              {song.name} {song.artist} {song.time}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
