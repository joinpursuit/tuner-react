import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom"

function SongDetails({deleteSong}) {
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3003/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      {song.is_favorite ? "🌟" : null}
      {song.name}
      {song.artist}
      {song.album}
      {song.time}
      <button> <Link to="/songs"> Back </Link> </button>
      <button onClick={() => deleteSong(id)}>Delete</button>
    </div>
  );
}

export default SongDetails;
