import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function SongDetail() {
  const { id } = useParams(); //get the id of the song from browser url
  const [song, setSong] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        setSong(response.data.payload);
      })
      .catch((error) => console.error("catch", error));
  }, [id]);

  return (
    <section className="Song-Details">
      <h3>Name: {song.name}</h3>
      <div>Artist: {song.artist}</div>
      <div>Album: {song.album}</div>
      <div>Time: {song.time}</div>
      <div>Favorite: {song.is_favorite ? "⭐️" : "❌"}</div>
    </section>
  );
}

export default SongDetail;
