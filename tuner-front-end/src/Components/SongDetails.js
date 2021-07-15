import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../util/apiURL";
import { Link } from "react-router-dom";

const API = apiURL();

export default function SongDetails() {
  let [song, setSong] = useState({});
  let { id } = useParams();
  let history = useHistory();

  const fetchSong = async () => {
    try {
      console.log(id);
      let res = await axios.get(`${API}/songs/${id}`);
      setSong(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSong = async (id) => {
    try {
      let res = await axios.delete(`${API}/songs/${id}`);
      setSong(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = () => {
    deleteSong(id);
    history.push("/songs");
  };

  useEffect(() => {
    fetchSong();
  }, [id]);

  const { name, artist, album, time, is_favorite } = song;

  return (
    <div>
      <Link to={"/songs"}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <br></br>
      Name: {name}
      Artist: {artist}
      Album: {album}
      Time: {time}
      Favorite: {`${is_favorite}`}
    </div>
  );
}
