import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiURL from "../util/apiURL";

const API = apiURL();
console.log(API);

export default function Songs() {
  let [songsArr, setSongsArr] = useState([]);

  const fetchSongs = async () => {
    try {
      let res = await axios.get(`${API}/songs`);
      console.log(res.data.payload);
      setSongsArr(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      {songsArr.map((song) => {
        console.log(song);
        return (
          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>Title: {song.name}</Link>
            <br />
            Favorite: {`${song.is_favorite}`}
            <br />
            Artist: {song.artist}
            <br />
            Time: {song.time}
            <br />
          </li>
        );
      })}
    </div>
  );
}
