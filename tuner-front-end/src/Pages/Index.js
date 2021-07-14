import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react";

import apiURL from "../util/apiURL";

const API = apiURL();
console.log(API);

export default function Index() {
  let [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      let res = await axios.get(`${API}/songs`);
      console.log(res.data.payload);
      setSongs(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  };

  const getArray = () => {
    songs.map((song, id) => {
      return (
        <li key={song.name}>
          <Link to={`/songs/${id}`}>Title: {song.name}</Link>
          <br />
          Favorite: {`${song.is_favorite}`}
          <br />
          Artist: {song.artist}
          <br />
          Time: {song.time}
          <br />
        </li>
      );
    });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <ol>{getArray}</ol>
    </div>
  );
}
